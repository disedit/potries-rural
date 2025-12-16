<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-html="blok.html" />
</template>