<script setup>
defineProps({ blok: Object })

const expanded = ref(false)
</script>

<template>
  <li v-editable="blok" class="border-y md:border-y-[1.5px] -mt-px md:-mt-[1.5px]">
    <h3>
      <button
        @click="expanded = !expanded"
        class="w-full flex items-center justify-between text-base md:text-md py-2 md:py-3 cursor-pointer tracking-site"
        :id="`accordion-button-${blok._uid}`"
        :aria-expanded="expanded ? 'true' : 'false'"
        :aria-controls="`accordion-content-${blok._uid}`"
      >
        {{ blok.title }}
        <IconsPlus :minus="expanded" class="h-[1.2em]" />
      </button>
    </h3>
    <Transition name="accordion">
      <div
        v-show="expanded"
        role="region"
        :id="`accordion-content-${blok._uid}`"
        :aria-labelledby="`accordion-button-${blok._uid}`"
      >
        <UtilsRichText
          :content="blok.text"
          class="text-smbase md:text-base pb-3 md:pb-4 tracking-site"
        />
      </div>
    </Transition>
  </li>
</template>