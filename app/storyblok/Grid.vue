<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="[
      'contained grid px-site md:px-24 spacing grid-cols-2 md:grid-cols-3 gap-4 md:gap-site'
    ]"
    :style="spacing">
      <StoryblokComponent
        v-for="component in blok.items"
        :key="component._uid"
        :blok="component"
      />
  </section>
</template>