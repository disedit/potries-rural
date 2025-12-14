<template>
  <div ref="menu">
    <Transition
      @before-enter="beforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      @enter-cancelled="onEnterCancelled"
      @leave-cancelled="onLeaveCancelled"
    >
      <aside
        v-show="open"
        class="fixed flex flex-col bg-white text-black top-0 left-0 bottom-0 w-full md:w-[80vw] md:px-site md:py-8 z-1100"
      >
        <div class="flex md:border-b border-gray-200 p-site md:p-0 md:pb-6 md:mb-6">
          <button
            @click="closeMenu"
            class="md:hidden cursor-pointer p-3 -m-3 me-0"
            title="Cerrar menú"
            ref="close"
          >
            <IconsClose class="h-4 w-4" />
          </button>
          <NuxtLink to="/" @click="closeMenu" ref="logo">
            <SiteLogo class="h-6 w-auto md:h-12 translate-y-[.1rem]" />
          </NuxtLink>
          <SiteNavCta
            :href="internalLink(global.cta[0].link)"
            :target="target(global.cta[0].link)"
            class="ms-auto md:hidden"
          >
            {{ global.cta[0].label }}
          </SiteNavCta>
          <button
            @click="closeMenu"
            class="hidden md:block ms-auto cursor-pointer p-6 -m-6 hover:opacity-50 transition-opacity"
            title="Cerrar menú"
            ref="close"
          >
            <IconsClose />
          </button>
        </div>
        <div class="relative md:border-r border-gray-200 md:max-w-110 h-full flex flex-col gap-4 overflow-auto md:overflow-visible p-site pt-10 md:p-0 md:pe-site">
          <nav aria-label="Navegación principal">
            <ul class="flex flex-col gap-3 md:gap-4 md:py-6">
              <li v-for="item in global.menu" :key="item._uid">
                <NuxtLink
                  v-if="item.component === 'MenuItem'"
                  :to="internalLink(item.link)"
                  @click="closeMenu"
                  class="font-serif text-mdlg md:text-lg to-underlined"
                >
                  {{ item.label }}
                </NuxtLink>
                <template v-else-if="item.component === 'Submenu'">
                  <a
                    :href="internalLink(item.link)"
                    @click.prevent="openSubmenu(item._uid)"
                    class="font-serif text-mdlg md:text-lg to-underlined flex items-center gap-2"
                    role="button"
                    aria-haspopup="true"
                    :aria-expanded="submenuOpen === item._uid ? 'true' : 'false'"
                    :aria-controls="`submenu-${item._uid}`"
                  >
                    {{ item.label }}
                    <IconsChev
                      :class="['transition ms-auto', { '-rotate-90': submenuOpen !== item._uid }]"
                    />
                </a>
                  <Transition name="fade">
                    <ul
                      :id="`submenu-${item._uid}`"
                      v-if="submenuOpen === item._uid"
                      class="md:absolute md:top-0 md:right-0 md:px-site md:translate-x-full flex flex-col md:gap-4 md:py-6"
                    >
                      <li v-for="subitem in item.items" :key="subitem._uid">
                        <NuxtLink
                          :to="internalLink(subitem.link)"
                          @click="closeMenu"
                          class="font-serif text-md md:text-lg to-underlined"
                        >
                          {{ subitem.label }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </Transition>
                </template>
              </li>
            </ul>
          </nav>
          <nav aria-label="Navegación secundaria">
            <ul>
              <li v-for="(item, i) in global.secondary_menu" :key="item._uid">
                <NuxtLink
                  :to="internalLink(item.link)"
                  @click="closeMenu"
                  :class="[
                    'font-sans text-base font-light hover:font-semibold transition-all',
                    { 'ps-4': i > 0 }
                  ]"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="mt-auto flex items-center">
            <div class="flex items-center gap-4">
              <a :href="`mailto:${global.email}`" :title="global.email">
                <IconsMail />
              </a>
              <a :href="`tel:${parsePhone(global.phone)}`" :title="global.phone">
                <IconsPhone />
              </a>
            </div>
            <div class="ms-auto gtranslate_wrapper" />
          </div>
        </div>
      </aside>
    </Transition>
    <button v-if="open" @click="closeMenu" tabindex="-1" class="fixed inset-0 z-1050" aria-label="Cerrar menú" />
  </div>
</template>

<script setup>
import * as focusTrap from 'focus-trap'

const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink, target } = useLinks()

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const menu = ref(null)
const close = ref(null)
let trap

const closeMenu = () => {
  trap && trap.deactivate()
  emit('close')
}

/* Submenus */
const submenuOpen = ref(null)
const openSubmenu = (id) => {
  submenuOpen.value = submenuOpen.value === id ? null : id
}

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
    ease: 'power2.inOut',
    onComplete: () => {
      close.value.focus()
      trap = focusTrap.createFocusTrap(menu.value)
      trap.activate()
    }
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

const parsePhone = (phone) => {
  return phone.replace(/\s+/g, '')
}
</script>
