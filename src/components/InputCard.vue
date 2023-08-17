<template>
  <textarea
    class="input-card"
    style="caret-shape: block;"
    placeholder="请输入"
    v-model="inputValue"
    @input="queryES"
    />
</template>

<script setup lang="ts">
import {ref} from 'vue'
import useFetch from '../api'
import _ from 'lodash'
import mitter from '../utils/mitt'

const inputValue = ref('')
const queryES = _.debounce(() => {
  if(inputValue.value!='') {
    mitter.emit('loading', true)
    let resList: Array<{score: number, en: string, cn: string}> = []
    useFetch(inputValue.value).then((res: any) => {
      res.forEach((item: any) => {
        resList.push({
          score: item._score,
          en: item._source.enName,
          cn: item._source.chName
        })
      })
      mitter.emit('showRes', resList)
      mitter.emit('loading', false)
    }).catch(()=>{
      mitter.emit('loading', false)
      window.alert('Oops! 出错了, 请稍后再试')
    })
    }
  }, 500
)
</script>