<template>
  <div class="w-full flex justify-center items-center z-20 absolute top-10 inset-x-0">
    <div class="w-36 shadow-gray shadow-xl flex justify-center items-center rounded-xl h-14 bg-leaf-green text-white-green">
        {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  subtitle?: string
}>()
</script>