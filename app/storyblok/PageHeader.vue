<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header class="min-h-dvh bg-black text-white p-site flex items-end selection-dark">
    <h1 class="font-serif text-2xl">
      <UtilsRichText :content="blok.heading"  />
    </h1>
  </header>
</template>