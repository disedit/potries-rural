<script setup>
const props = defineProps({
  media: { type: Object, required: true },
  width: { type: Number, default: 1000 }
})

const emit = defineEmits(['loaded'])

const isVideo = props.media.filename.endsWith('mp4')

const config = useRuntimeConfig()
const imageProvider = config.public.imageProvider
</script>

<template>
  <video
    v-if="isVideo"
    :src="media.filename"
    playsinline muted autoplay loop
    class="block"
    @loadeddata="emit('loaded')" />
  <NuxtImg
    v-else
    :src="imageProvider !== 'storyblok' ? `${media.filename}/m/${width*2}x0` : media.filename"
    :width="width"
    :alt="media.alt"
    preload
    class="block"
    @load="emit('loaded')"
  />
</template>
