<script setup>
useHead({
  htmlAttrs: { lang: 'es-ES', class: 'bg-black font-sans' },
  meta: [
    { name: 'theme-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'apple-mobile-web-app-title', content: 'Potries Rural' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' }
  ],
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMVGZ8BD');`
    }
  ],
})
</script>

<template>
  <div class="bg-white">
    <NuxtLoadingIndicator color="#000" />
    <NuxtRouteAnnouncer />
    <SiteNav />
    <slot />
    <SiteFooter />
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WMVGZ8BD"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </noscript>
  </div>
</template>
