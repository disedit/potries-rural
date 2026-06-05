import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,

  runtimeConfig: {
    public: {
      baseUrl: 'https://agenciaby.com',
      environment: 'preview'
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  image: {
    provider: process.env.IMAGE_PROVIDER || 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    },
    cloudflare: {
      baseURL: 'https://potriesrural.com'
    },
    domains: ['a.storyblok.com', 'potriesrural.com']
  },
})