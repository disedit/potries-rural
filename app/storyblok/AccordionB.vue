<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const background = useBackgroundColor(props.blok.background)
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['spacing px-site md:px-24', background]"
    :style="spacing"
  >
    <div class="grid md:grid-cols-2 contained gap-4 md:gap-24">
      <h2 class="font-serif text-xl leading-[1.1]">
        {{ blok.heading }}
      </h2>
      <div class="font-serif md:text-right whitespace-pre-wrap text-base md:text-md leading-[1.1] text-balance">
        {{ blok.subheading }}
      </div>
      <div class="md:col-span-2 mt-4 md:mt-0">
        <ul class="md:columns-2 gap-24">
          <StoryblokComponent
            v-for="component in blok.items"
            :key="component._uid"
            :blok="component"
          />
        </ul>
      </div>
    </div>
  </section>
</template>