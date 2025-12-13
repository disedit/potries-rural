<template>
  <footer class="font-serif text-basemd">
    <div class="flex bg-gray-100 px-site pb-6 pt-12">
      <div class="flex flex-col gap-6">
        <div class="flex gap-2 items-center mb-4 text-lg">
          <SiteIcon class="h-[1em]" />
          <span>POTRIES RURAL</span>
        </div>
        <div class="grid grid-cols-3 gap-24">
          <div>
            <UtilsRichText :content="global.text_col1" />
          </div>
          <div>
            <UtilsRichText :content="global.text_col2" />
          </div>
          <div>
            <UtilsRichText :content="global.text_col3" />
          </div>
        </div>
      </div>
      <div class="ms-auto">
        Logos
      </div>
    </div>
    <div class="bg-gray-100 px-site pt-6 pb-14 flex">
      <ul aria-label="Redes sociales" class="flex gap-4">
        <li v-for="sm in global.social_media" :key="sm.id">
          <NuxtLink :to="internalLink(sm.link)" class="underlined">
            {{ sm.label }}
          </NuxtLink>
        </li>
      </ul>
      <ul aria-label="Enlaces legales" class="flex ms-auto gap-4">
        <li v-for="sm in global.legal_links" :key="sm.id">
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