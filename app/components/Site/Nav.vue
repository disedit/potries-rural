<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 flex gap-site items-center px-site py-8 z-1000',
      {
        'text-white selection-dark': dark,
        'text-black': !dark
      }
    ]">
    <button @click="toggleMenu" class="cursor-pointer p-6 -m-6">
      <IconsBurger />
    </button>
    <NuxtLink to="/">
      <SiteLogo class="h-12" />
    </NuxtLink>
    <NavCta class="ms-auto">
      CTA
    </NavCta>
    <SiteLanguages />
  </nav>
  <SiteMenu :open="menuOpen" @close="hideMenu" />
</template>

<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink } = useLinks()

const dark = ref(true)

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
function toggleMenu () {
  if (menuOpen.value) {
    hideMenu()
  } else {
    showMenu()
  }
}
</script>

<style>

</style>