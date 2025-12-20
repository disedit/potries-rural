<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const background = useBackgroundColor(props.blok.background)
const { internalLink } = useLinks()

const column = (col, items) => {
  if (!Array.isArray(items) || items.length === 0) return []
  const half = Math.ceil(items.length / 2)
  return col === 1 ? items.slice(0, half) : items.slice(half)
}
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['spacing px-site lg:px-24', background]"
    :style="spacing"
  >
    <div class="grid md:grid-cols-2 contained gap-4 md:gap-24">
      <NuxtLink v-if="blok.link?.chached_url" :to="internalLink(blok.link)" class="to-underlined">
        <h2 class="font-serif text-xl leading-[1.1]">
          {{ blok.heading }}
        </h2>
      </NuxtLink>
      <h2 v-else class="font-serif text-xl leading-[1.1]">
        {{ blok.heading }}
      </h2>
      <div class="font-serif md:text-right whitespace-pre-wrap text-base md:text-md leading-[1.1] text-balance">
        {{ blok.subheading }}
      </div>
      <div class="grid md:grid-cols-2 gap-x-24 md:col-span-2 mt-4 md:mt-0">
        <ul>
          <StoryblokComponent
            v-for="component in column(1, blok.items)"
            :key="component._uid"
            :blok="component"
          />
        </ul>
        <ul>
          <StoryblokComponent
            v-for="component in column(2, blok.items)"
            :key="component._uid"
            :blok="component"
          />
        </ul>
      </div>
    </div>
  </section>
</template>