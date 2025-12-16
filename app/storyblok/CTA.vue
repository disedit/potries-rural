<script setup>
const props = defineProps({ blok: Object })
const { internalLink, target } = useLinks()
const fontSizes = useFontSizes(props.blok)
</script>

<template>
  <NuxtLink
    :to="internalLink(blok.link)"
    :target="target(blok.link)"
    :class="['to-underlined', fontSizes]"
  >
    {{ blok.label }} →
  </NuxtLink>
</template>