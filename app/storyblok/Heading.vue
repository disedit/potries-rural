<script setup>
const props = defineProps({ blok: Object })
const fontSizes = useFontSizes(props.blok)
</script>

<template>
  <Component
    v-editable="blok"
    :is="blok.heading_level || 'h2'"
    :class="[
      'font-serif leading-[1.1] translate-y-[.1em]',
      { ...fontSizes }
    ]"
  >
    <UtilsRichText :content="blok.heading" />
  </Component>
</template>