<template>
  <Toast title="已复制到剪切板" class="transition-all duration-300" :class="showToast?'opacity-100':'opacity-0'"/>
  <div
    class="display-card"
    readonly
    v-show="!loading"
  >
    <div v-if="feedValue.length>0">
      <div v-for="item in feedValue" class="flex flex-col items-center">
        <div class="flex flex-row justify-around text-lg h-12 w-full">
          <div @click="handleCopy(item.cn)" class="text-card">{{item.cn}}</div>
          <div @click="handleCopy(item.en)" class="text-card">{{item.en}}</div>
        </div>
        <div class="h-1 border-b border-gray-500 w-3/5"/>
      </div>
    </div>
    <div v-else>
      {{ placeHolder }}
    </div>
  </div>
  <div
    v-show="loading"
    class="
      w-96
      h-96
      rounded-lg
      m-12
      mt-2
      bg-sescondary
      hover:cursor-pointer
      flex
      justify-center
      items-center
    "
  >
    <Icon :icon="loading3Fill" class="text-loading text-6xl animate-spin"/>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import * as clipboard from 'clipboard-polyfill'
import Toast from './Toast.vue'
import { Icon } from '@iconify/vue'
import loading3Fill from '@iconify-icons/mingcute/loading-3-fill';
import mitter from '../utils/mitt'

const feedValue = ref([])
const loading = ref(false)
const showToast = ref(false)
const placeHolder = ref('搜索结果')

mitter.on('loading', (param) => {
  loading.value = param as boolean
})
mitter.on('showRes', (param) => {
  feedValue.value = (param as Array<{score: number, en: string, cn: string}>).sort((a,b) => b.score - a.score).slice(0, 7)
  placeHolder.value = '无结果'
})

const handleCopy = (textValue: string) => {
  console.log(textValue)
  clipboard.writeText(textValue)
    .then(()=>{
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 2000)
    })
}
</script>