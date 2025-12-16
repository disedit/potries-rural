<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()

const tag = props.blok.link?.cached_url ? resolveComponent('NuxtLink') : 'article'
const justify = useFlex(props.blok.align, props.blok.justify)
</script>

<template>
  <Component
    v-editable="blok"
    :is="tag"
    :to="blok.link?.cached_url ? internalLink(blok.link) : null"
    :class="['link-to-underlined flex', justify]">
      <div :class="['grid gap-4', { 'md:w-[50%]': blok.mini }]">
        <UtilsMedia
          :media="blok.media"
          :class="['w-full h-50 object-cover', { 'md:h-100': blok.fixed_height && !blok.mini, 'md:h-auto': !blok.fixed_height }]"
        />
        <div
          :class="[
            'flex flex-col gap-4',
            { 'md:row-1': blok.invert }
          ]"
        >
          <h2 class="font-serif text-base md:text-md leading-[1.1] translate-y-[.25em]">
            <UtilsRichText :content="blok.heading" />
          </h2>
          <UtilsRichText :content="blok.text" class="text-sm md:text-base" />
          <span class="text-sm md:text-base link">
            {{ blok.cta }} →
          </span>
        </div>
      </div>
  </Component>
</template>