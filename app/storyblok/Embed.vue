<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" v-html="blok.html" />
</template>