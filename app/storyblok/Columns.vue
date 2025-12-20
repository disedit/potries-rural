<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const display = useDisplay(props.blok)
const col1Align = useFlex(null, props.blok.column1_align)
const col2Align = useFlex(null, props.blok.column2_align)
const background = useBackgroundColor(props.blok.background)
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['px-site lg:px-24 spacing', background, display]"
    :style="spacing">
    <div
      :class="[
        'contained grid',
        {
          'md:grid-cols-2 gap-site md:gap-24': blok.template === '50-50',
          'md:grid-cols-[2fr_1fr] gap-site': blok.template === '66-33',
          'md:grid-cols-[1fr_2fr] gap-site': blok.template === '33-66',
        }
      ]"
    >
      <div
        :class="[
          'flex flex-col gap-6 md:gap-10',
          col1Align,
          { 'row-2 md:row-auto': blok.invert_on_mobile }
        ]"
      >
        <StoryblokComponent
          v-for="component in blok.column1"
          :key="component._uid"
          :blok="component"
        />
      </div>
      <div
        :class="[
          'flex flex-col gap-6 md:gap-10',
          col2Align,
          { 'row-1 md:row-auto': blok.invert_on_mobile }
        ]"
      >
        <StoryblokComponent
          v-for="component in blok.column2"
          :key="component._uid"
          :blok="component"
        />
      </div>
    </div>
  </section>
</template>