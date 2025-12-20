<script setup>
import { Carousel, Slide } from 'vue3-carousel'

const props = defineProps({ blok: Object })
const currentSlide = ref(0)

function prevSlide () {
  if (currentSlide.value === 0) {
    console.log(props.blok.media.length)
    currentSlide.value = props.blok.media.length - 1
    return
  }
  currentSlide.value--
}

function nextSlide () {
  if (currentSlide.value === props.blok.media.length - 1) {
    currentSlide.value = 0
    return
  }
  currentSlide.value++
}
</script>

<template>
  <Carousel
    v-editable="blok"
    :gap="20"
    v-model="currentSlide"
    class="relative aspect-square"
    :wrap-around="true"
  >
    <Slide v-for="item in blok.media" :key="item._uid">
      <UtilsMedia
        v-if="item"
        :media="item"
        :width="1000"
        class="w-full h-full aspect-square object-cover"
      />
    </Slide>

    <template #addons>
      <button
        class="absolute left-0 top-[50%] -translate-y-[50%] p-4 rotate-180 text-beige text-md md:text-lg cursor-pointer"
        @click="prevSlide"
      >
        →
      </button>
      <button
        class="absolute right-0 top-[50%] -translate-y-[50%] p-4 text-beige text-md md:text-lg cursor-pointer"
        @click="nextSlide"
      >
        →
      </button>
    </template>
  </Carousel>
</template>
