<template>
  <div>
    <div class="gtranslate_wrapper" />
  </div>
</template>

<script setup>
onMounted(() => {
  window.gtranslateSettings = {"default_language":"es","native_language_names":true,"detect_browser_language":true,"languages":["es","ca","fr","en","de"],"wrapper_selector":".gtranslate_wrapper"}
  // Load the GTranslate widget
  const gtranslateScript = document.createElement('script')
  gtranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/lc.js'
  gtranslateScript.defer = true
  gtranslateScript.crossorigin = "anonymous"
  document.body.appendChild(gtranslateScript)
});
</script>
