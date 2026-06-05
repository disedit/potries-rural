<template>
  <ClientOnly>
    <div>
      <div class="gtranslate_wrapper" />
    </div>
  </ClientOnly>
</template>

<script setup>
onMounted(() => {
  window.gtranslateSettings = {"default_language":"es","native_language_names":true,"detect_browser_language":false,"languages":["es","ca","fr","en","de"],"wrapper_selector":".gtranslate_wrapper"}
  // Load the GTranslate widget
  if (document.querySelector('script[src="https://cdn.gtranslate.net/widgets/latest/lc.js"]')) {
    return
  }
  const gtranslateScript = document.createElement('script')
  gtranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/lc.js'
  gtranslateScript.defer = true
  gtranslateScript.crossorigin = "anonymous"
  document.body.appendChild(gtranslateScript)
});
</script>
