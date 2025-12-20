<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const display = useDisplay(props.blok)
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['spacing', display]"
    :style="spacing"
  >
    <h2 class="px-site lg:px-24 text-basemd md:text-md tracking-site -mb-[1.1em] leading-none">
      {{ blok.title }}
    </h2>
    <UtilsSlider>
      <div class="w-[50vw] md:w-[30vw] shrink-0" />
      <div
        v-for="image in blok.images"
        :key="image._uid"
        class="w-[40vw] md:w-[20vw] shrink-0 bg-white pointer-events-none select-none">
        <UtilsMedia
          :media="image"
          class="w-full max-h-[75vw] object-cover pe-site"
        />
      </div>
    </UtilsSlider>
    <div class="text-base md:text-md text-right px-site lg:px-24">
      {{ blok.hint }} →
    </div>
  </section>
</template>