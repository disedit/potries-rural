<script setup>
const props = defineProps({ blok: Object })
const { internalLink, target } = useLinks()
const fontSizes = useFontSizes(props.blok)
</script>

<template>
  <NuxtLink
    v-editable="blok"
    :to="internalLink(blok.link)"
    :target="target(blok.link)"
    :class="['to-underlined -tracking-[0.015em]', fontSizes]"
  >
    {{ blok.label }} →
  </NuxtLink>
</template>