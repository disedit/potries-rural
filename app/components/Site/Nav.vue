<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 flex gap-site items-center px-site py-site md:py-8 z-1000 transition-all duration-500 ease-out ',
      {
        'text-white bg-black/10 selection-dark focus-dark': !isScrolled,
        'text-black bg-white': isScrolled,
        '-translate-y-full': !showNavbar && !isMobile,
      }
    ]">
    <button @click="toggleMenu" class="cursor-pointer p-6 -m-6 hover:opacity-75 transition-opacity" title="Abrir menú" ref="toggler">
      <IconsBurger />
    </button>
    <NuxtLink to="/">
      <SiteLogo class="h-6 w-auto md:h-12 translate-y-[.1rem]" />
    </NuxtLink>
    <SiteNavCta :href="internalLink(global.cta[0].link)" :target="target(global.cta[0].link)" class="ms-auto">
      {{ global.cta[0].label }}
    </SiteNavCta>
    <SiteLanguages class="hidden md:block" />
  </nav>
  <SiteMenu :open="menuOpen" @close="hideMenu" />
</template>

<script setup>
import { breakpointsTailwind } from '@vueuse/core'

const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()

// Open/Close menu
const { setMenuOpen, unsetMenuOpen, setDark, unsetDark } = useColorMode()
const menuOpen = ref(false)

const showMenu = () => {
  menuOpen.value = true
  setMenuOpen()
}

const hideMenu = () => {
  menuOpen.value = false
  unsetMenuOpen()
}

function toggleMenu() {
  const action = menuOpen.value ? hideMenu : showMenu
  action()
}

// Show/Hide on scroll
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('lg')
const { y } = useWindowScroll()
const { height } = useWindowSize()
const showNavbar = ref(true)
const lastScrollPosition = ref(0)
const isScrolled = computed(() => y.value > (height.value - 100))

watch(y, (currentScrollPosition) => {
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition
})

watch(isScrolled, (scrolled) => {
  if (scrolled) {
    unsetDark()
  } else {
    setDark()
  }
})
</script>
