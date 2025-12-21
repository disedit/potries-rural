<script setup>
import { Carousel, Slide } from 'vue3-carousel'

const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const display = useDisplay(props.blok, 'flex')
const background = useBackgroundColor(props.blok.background)

// Carousel
const currentSlide = ref(0)

function prevSlide () {
  if (currentSlide.value === 0) {
    currentSlide.value = props.blok.items.length - 1
    return
  }
  currentSlide.value--
}

function nextSlide () {
  if (currentSlide.value === props.blok.items.length - 1) {
    currentSlide.value = 0
    return
  }
  currentSlide.value++
}
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['spacing flex-col gap-site', display, background]"
    :style="spacing"
  >
    <div v-if="blok.items && blok.items.length > 0" class="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-3 gap-site items-start lg:items-center px-site lg:px-0">
      <div class="flex gap-1 lg:justify-end font-serif italic text-basemd lg:text-md lg:pb-0 -mt-1 lg:mt-0">
        <span class="relative">
          <TransitionGroup name="scroll">
            <template v-for="i in blok.items.length" :key="i">
              <span v-if="i === currentSlide + 1" class="absolute right-0">{{ i }}</span>
            </template>
          </TransitionGroup>
        </span>
        <span>/</span>
        <span>{{ blok.items.length }}</span>
      </div>
      <div class="row-1 col-span-2 lg:row-auto lg:col-span-1 h-[60vh] lg:h-[50vh] relative">
        <Carousel v-if="blok.items && blok.items.length > 0" :gap="20" v-model="currentSlide" class="order-1 lg:order-2">
          <Slide v-for="(item, i) in blok.items" :key="item._uid" class="items-start!">
            <UtilsMedia :media="item.image" :width="1000" class="w-full h-[60vh] lg:h-[50vh] object-cover" />
          </Slide>

          <template #addons>
            <button
              class="lg:hidden absolute left-0 top-[50%] -translate-y-[50%] p-4 rotate-180 text-beige text-md md:text-lg cursor-pointer"
              @click="prevSlide"
            >
              →
            </button>
            <button
              class="lg:hidden absolute right-0 top-[50%] -translate-y-[50%] p-4 text-beige text-md md:text-lg cursor-pointer"
              @click="nextSlide"
            >
              →
            </button>
          </template>
        </Carousel>
      </div>
      <div class="font-serif lg:font-sans text-basemd lg:text-base relative text-right lg:text-left line-clamp-3 h-[3em] -mt-1 lg:mt-0">
        <TransitionGroup name="scroll">
          <template v-for="item in blok.items" :key="item._uid">
            <div
              v-editable="item"
              class="absolute inset-0"
              v-if="blok.items[currentSlide]._uid === item._uid"
            >
              {{ item.label }}
            </div>
          </template>
        </TransitionGroup>
      </div>
    </div>
    <Carousel v-if="blok.items && blok.items.length > 0" items-to-show="auto" :gap="20" v-model="currentSlide" class="hidden lg:block px-site lg:px-0 -mt-4 lg:mt-0">
      <Slide v-for="(item, i) in blok.items" :key="item._uid" class="items-start!">
        <button @click="currentSlide = i" class="cursor-pointer focus-visible:outline-4 outline-offset-4 w-full">
          <UtilsMedia :media="item.image" :width="100" class="w-full" />
        </button>
      </Slide>
    </Carousel>
  </section>
</template>