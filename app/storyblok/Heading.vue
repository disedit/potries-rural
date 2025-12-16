<script setup>
const props = defineProps({ blok: Object })
const fontSizes = useFontSizes(props.blok)
</script>

<template>
  <Component
    :is="blok.heading_level || 'h2'"
    :class="[
      'font-serif leading-[1.1]',
      { ...fontSizes }
    ]"
  >
    <UtilsRichText :content="blok.heading" />
  </Component>
</template>