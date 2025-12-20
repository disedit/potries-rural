<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok, props.padding ? 'var(--spacing-site)' : '0', 0, props.padding ? '6rem' : '0', 0)
const display = useDisplay(props.blok)
const background = useBackgroundColor(props.blok.background)
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="[
      'spacing',
      {
        'px-site lg:px-24': blok.padding,
        ...display,
        ...background
      }
    ]"
    :style="spacing">
    <div :class="['flex flex-col', { 'contained': blok.contained, 'gap-site': blok.gap }]">
      <StoryblokComponent
        v-for="component in blok.blocks"
        :key="component._uid"
        :blok="component"
      />
    </div>
  </section>
</template>