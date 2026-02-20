<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const background = useBackgroundColor(props.blok.background)
const { internalLink } = useLinks()
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['spacing px-site lg:px-24', background]"
    :style="spacing"
  >
    <div class="grid lg:grid-cols-2 contained gap-10 lg:gap-24">
      <div class="grid lg:grid-cols-2 font-serif gap-site">
        <NuxtLink v-if="blok.link?.chached_url" :to="internalLink(blok.link)" class="to-underlined">
          <h2 class="font-serif text-xl leading-[1.1]">
            {{ blok.heading }}
          </h2>
        </NuxtLink>
        <h2 v-else class="font-serif text-xl leading-[1.1]">
          {{ blok.heading }}
        </h2>
        <div class="lg:text-right whitespace-pre-wrap text-balance text-base md:text-md leading-[1.1] lg:translate-y-[.55em]">
          {{ blok.subheading }}
        </div>
      </div>
      <div class="hidden lg:block" />
      <div class="row-3 md:row-auto">
        <UtilsMedia
          v-if="blok.media?.filename"
          :media="blok.media"
          class="w-full"
        />
      </div>
      <div class="lg:row-auto flex flex-col gap-site">
        <ul class="border-t lg:border-t-[1.5px] mb-2 md:mb-0">
          <StoryblokComponent
            v-for="component in blok.items"
            :key="component._uid"
            :blok="component"
          />
        </ul>
        <UtilsRichText
          :content="blok.text"
          class="hidden lg:block mt-auto indent-first-paragraph text-base tracking-site text-pretty"
        />
      </div>
    </div>
  </section>
</template>