<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()
const { hasRichText } = useUtils()

const tag = props.blok.link?.cached_url ? resolveComponent('NuxtLink') : 'article'
const justify = useFlex(props.blok.align, props.blok.justify)
</script>

<template>
  <Component
    v-editable="blok"
    :is="tag"
    :to="blok.link?.cached_url ? internalLink(blok.link) : null"
    :class="['link-to-underlined flex', justify]"
    :data-keyword="blok.filter_keyword">
      <div :class="['grid gap-4 w-full', { 'md:w-[50%]': blok.mini }]">
        <UtilsMedia
          :media="blok.media"
          :width="800"
          :class="['w-full h-50 object-cover', { 'md:h-100': blok.fixed_height && !blok.mini, 'md:h-auto': !blok.fixed_height }]"
        />
        <div
          :class="[
            'flex flex-col gap-4 edge-on-mobile-padding',
            { 'md:row-1': blok.invert }
          ]"
        >
          <h2 class="font-serif text-base md:text-md leading-[1.1] translate-y-[.25em]">
            <UtilsRichText :content="blok.heading" />
          </h2>
          <UtilsRichText v-if="hasRichText(blok.text)" :content="blok.text" class="text-xs md:text-base" />
          <span v-if="blok.cta" class="text-xs md:text-base link">
            {{ blok.cta }} →
          </span>
        </div>
      </div>
  </Component>
</template>