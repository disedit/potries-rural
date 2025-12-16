<script setup>
defineProps({ minus: Boolean })
</script>

<template>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="12.25" x2="25" y2="12.25" stroke="currentColor" stroke-width="1.5"/>
    <line v-if="!minus" y1="-0.75" x2="25" y2="-0.75" transform="matrix(0 -1 -1 0 12 25)" stroke="currentColor" stroke-width="1.5"/>
  </svg>
</template>
