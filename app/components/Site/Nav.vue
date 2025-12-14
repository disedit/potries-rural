<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 flex gap-site items-center px-site py-site md:py-8 z-1000',
      {
        'text-white selection-dark focus-dark': dark,
        'text-black': !dark
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
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()

const dark = ref(true)
const toggler = ref(null)

const { setMenuOpen, unsetMenuOpen } = useColorMode()
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
</script>
