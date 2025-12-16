<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="bg-gray-100 aspect-square w-full" />
</template>