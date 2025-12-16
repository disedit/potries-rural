<template>
  <footer class="font-serif text-basemd">
    <div class="flex flex-col md:flex-row bg-gray-100 px-site pb-6 pt-12">
      <div class="flex flex-col gap-6">
        <div class="flex gap-2 items-center mb-4 text-mdlg md:text-lg leading-none" translate="no">
          <SiteIcon class="h-[1em]" />
          <span>POTRIES RURAL</span>
        </div>
        <div class="grid md:grid-cols-3 gap-6 md:gap-24">
          <div>
            <UtilsRichText :content="global.text_col1" />
          </div>
          <div translate="no">
            <UtilsRichText :content="global.text_col2" />
          </div>
          <div translate="no">
            <UtilsRichText :content="global.text_col3" />
          </div>
        </div>
      </div>
      <div class="md:ms-auto flex gap-3 flex-col md:items-end md:justify-end mt-10">
        <a v-for="logo in global.logos" :key="logo._uid" :href="internalLink(logo.link)" target="_blank">
          <NuxtImg
            :src="logo.logo.filename"
            :alt="logo.logo.alt"
            class="h-10 mix-blend-multiply grayscale"
          />
        </a>
      </div>
    </div>
    <div class="bg-gray-100 px-site pt-6 pb-14 flex flex-col md:flex-row">
      <ul aria-label="Redes sociales" class="flex gap-4">
        <li v-for="sm in global.social_media" :key="sm._uid">
          <NuxtLink :to="internalLink(sm.link)" class="underlined">
            {{ sm.label }}
          </NuxtLink>
        </li>
      </ul>
      <ul aria-label="Enlaces legales" class="flex flex-col md:flex-row md:ms-auto gap-2 md:gap-4 mt-6 md:mt-0">
        <li v-for="sm in global.legal_links" :key="sm._uid">
          <NuxtLink :to="internalLink(sm.link)" class="underlined">
            {{ sm.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink } = useLinks()
</script>

<style>

</style>