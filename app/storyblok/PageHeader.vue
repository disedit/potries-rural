<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header class="relative min-h-dvh bg-black text-white p-site flex items-end selection-dark">
    <h1 class="font-serif text-2xl relative z-10">
      <UtilsRichText :content="blok.heading"  />
    </h1>
    <UtilsMedia
      v-if="blok.background.filename"
      :media="blok.background"
      :class="[
        'absolute inset-0 z-1 h-full w-full object-cover',
        { 'opacity-50': blok.overlay }
      ]"
    />
  </header>
</template>