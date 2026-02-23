<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const display = useDisplay(props.blok)
const background = useBackgroundColor(props.blok.background)
const { internalLink } = useLinks()

const reviews = ref(null)
let script = null
const widgetId = props.blok.widgetId || '424a25c652da5300584637d3772'

onMounted(() => {
  script = document.createElement('script')
  script.src = 'https://cdn.trustindex.io/loader.js?' + widgetId
  script.defer = true
  script.async = true
  reviews.value.appendChild(script)
})

onBeforeUnmount(() => {
  if (script) {
    reviews.value.removeChild(script)
  }
})
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['px-site lg:px-24 spacing', background, display]"
    :style="spacing"
  >
    <div class="lg:hidden mb-site">
      <UtilsRichText
        :content="blok.title"
        tag="h2"
        class="font-serif text-xl"
      />
      <div class="font-serif text-xl -mt-2">
        {{ blok.rating }}
      </div>
    </div>
    <div class="max-w-[1750px] mx-auto">
      <div ref="reviews" />
    </div>
    <div class="grid lg:grid-cols-2 gap-site mt-site lg:mt-16 -mb-2 lg:-mb-10">
      <div class="hidden lg:flex gap-4 items-end">
        <UtilsRichText
          :content="blok.title"
          tag="h2"
          class="font-serif text-xl leading-none"
        />
        <span class="font-serif text-xl whitespace-nowrap">
          {{ blok.rating }}
        </span>
        <NuxtLink
          :to="internalLink(blok.link)"
          class="font-serif underlined -translate-y-[.25em] text-smbase whitespace-nowrap"
        >
          {{ blok.cta }}
        </NuxtLink>
      </div>
      <div class="lg:text-right text-balance max-w-[60ch] lg:justify-self-end text-base tracking-site">
        {{ blok.text }}
      </div>
      <NuxtLink
        :to="internalLink(blok.link)"
        class="block md:hidden font-serif underlined -translate-y-[1em] text-base mt-3 -mb-3"
      >
        {{ blok.cta }}
      </NuxtLink>
    </div>
  </section>
</template>