<script setup>
const props = defineProps({ blok: Object })
const fontSizes = useFontSizes(props.blok)
</script>

<template>
  <UtilsRichText
    v-editable="blok"
    :content="blok.text"
    :class="[
      'text-pretty max-w-(--max-chars) -tracking-[0.015em] spaced-paragraphs',
      {
        'indent-first-paragraph': blok.indent_first_paragraph,
        ...fontSizes
      }
    ]"
    :style="{
      '--max-chars': blok.max_width ? `${blok.max_width}ch` : null
    }"
  />
</template>