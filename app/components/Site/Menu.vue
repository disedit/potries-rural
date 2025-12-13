<template>
  <Transition
    @before-enter="beforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    @enter-cancelled="onEnterCancelled"
    @leave-cancelled="onLeaveCancelled"
  >
    <aside
      v-if="open"
      class="fixed bg-white text-black top-0 left-0 bottom-0 w-[80vw] p-site z-1100"\
    >
      <div class="flex border-b border-gray-200 pb-6">
        <NuxtLink to="/" @click="$emit('close')">
          <SiteLogo class="h-12" />
        </NuxtLink>
        <button @click="$emit('close')" class="ms-auto cursor-pointer p-6 -m-6">
          <IconsClose />
        </button>
      </div>
      <pre>{{ global.menu }}</pre>
    </aside>
  </Transition>
</template>

<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink } = useLinks()

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

/* Transitions */
const { $gsap } = useNuxtApp()
let animate

function beforeEnter(el) {
  $gsap.set(el, {
    x: '-100%',
  })
}

const onEnter = (el) => {
  animate = $gsap.to(el, {
    duration: 0.5,
    x: '0%',
    ease: 'power2.inOut'
  })
}

const onLeave = (el, done) => {
  animate = $gsap.to(el, {
    duration: 0.5,
    x: '-100%',
    ease: 'power2.inOut',
    onComplete: done
  })
}

const onEnterCancelled = () => {
  animate && animate.kill()
}

const onLeaveCancelled = () => {
  animate && animate.kill()
}
</script>

<style>

</style>