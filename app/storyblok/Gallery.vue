<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="relative aspect-square w-full bg-gray-100">
    <ul
      class="bg-gray-100 aspect-square w-full flex overflow-x-scroll snap-x snap-mandatory"
      ref="slider"
    >
      <li v-for="media in blok.media" :key="media._uid" class="basis-full snap-center shrink-0 grow-0 pointer-events-none select-none">
        <UtilsMedia
          :media="media"
          :width="1000"
          class="w-full h-full object-cover"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    scroll-behavior: smooth;
  }

  ul::scroll-button(*) {
    border: 0;
    font-size: var(--text-xl);
    font-family: var(--font-sans);
    background: none;
    color: var(--color-white);
    cursor: pointer;
    position: absolute;
    translate: 0 50%;
    top: 50%;
  }

  ul::scroll-button(*):disabled {
    opacity: 0;
    cursor: unset;
  }

  ul::scroll-button(left) {
    content: "→";
    rotate: 180deg;
  }

  ul::scroll-button(right) {
    content: "→";
  }

  ul::scroll-button(left) {
    left: calc(var(--spacing) * 4);
  }

  ul::scroll-button(right) {
    right: calc(var(--spacing) * 4);
  }
</style>