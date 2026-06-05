<script setup>
/* Load site settings */
const settings = await useSettings()
const global = settings?.value?.data?.story?.content

/* Load page */
const route = useRoute()

// Canonicalize to non-trailing-slash URLs so direct loads don't create invalid slugs.
if (route.path.length > 1 && route.path.endsWith('/')) {
  const canonicalPath = route.path.replace(/\/+$/, '')
  await navigateTo(
    {
      path: canonicalPath,
      query: route.query,
      hash: route.hash,
    },
    {
      redirectCode: 301,
      replace: true,
    }
  )
}

const slugParam = route.params.slug
const slug = Array.isArray(slugParam)
  ? slugParam.filter(Boolean)
  : slugParam
    ? [slugParam]
    : []
const path = slug.length > 0 ? slug.join('/') : 'home'
const version = useEnvironment()
const { story } = await useAsyncStoryblok(path, { api: { version } })
const page = story?.value?.content

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

/* SEO Metatags */
const siteName = global.site_name
const title = slug && slug.length > 0 ? `${page.title || page.name} - ${siteName}` : siteName
const ogTitle = page.seo_title || title
const description = page.seo_description || page.description || global.seo_description
const ogImage = page.seo_picture?.filename || page.thumbnail?.filename || global.seo_picture?.filename
const keywords = page.seo_keywords || global.seo_keywords
const twitterSite = global.twitter_account
useServerSeoMeta({
  title,
  ogTitle,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: siteName,
  twitterSite,
  ogType: 'website'
})
useHead({ title })
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
