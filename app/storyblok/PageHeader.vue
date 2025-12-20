<script setup>
defineProps({ blok: Object })
const { hasRichText } = useUtils()
</script>

<template>
  <header v-editable="blok" class="relative min-h-dvh bg-black text-white p-site flex items-center md:items-end selection-dark">
    <template v-if="hasRichText(blok.heading_mobile)">
      <h1 class="md:hidden font-serif text-md relative z-10 leading-[1.1] text-center text-balance w-full">
      <UtilsRichText :content="blok.heading_mobile"  />
      </h1>
      <h1 class="hidden md:flex font-serif text-2xl relative z-10 leading-[1.1] text-balance w-full">
        <UtilsRichText :content="blok.heading" />
        <span class="hidden md:inline ms-4">{{ blok.bottom_text }}</span>
      </h1>
    </template>
    <h1 v-else class="block md:flex font-serif text-md md:text-2xl relative z-10 leading-[1.1] text-center md:text-left text-balance w-full">
      <UtilsRichText :content="blok.heading" />
      <span class="hidden md:inline ms-4">{{ blok.bottom_text }}</span>
    </h1>
    <div v-if="blok.bottom_text" class="md:hidden z-10 text-md font-serif absolute bottom-site left-site right-site text-center">
      {{ blok.bottom_text }}
    </div>
    <UtilsMedia
      v-if="blok.background.filename"
      :media="blok.background"
      :class="[
        'absolute inset-0 z-1 h-full w-full object-cover select-none',
        { 'opacity-50': blok.overlay }
      ]"
    />
  </header>
</template>