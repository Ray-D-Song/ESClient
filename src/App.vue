<template>
  <div class="flex justify-center items-center w-full h-screen bg-leaf bg-center bg-cover">
    <div class="flex flex-col">
      <InputBox/>
      <DisplayCard :loading="searchLoading"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import DisplayCard from './components/DisplayCard.vue'
import {ref} from 'vue'
import InputBox from './components/InputBox.vue';

const searchLoading = ref(false)
</script>