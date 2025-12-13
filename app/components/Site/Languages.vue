<template>
  <div>
    <div class="gtranslate_wrapper" />
  </div>
</template>

<script setup>
onMounted(() => {
  window.gtranslateSettings = {"default_language":"es","detect_browser_language":true,"url_structure":"sub_directory","languages":["es","ca","en","fr"],"wrapper_selector":".gtranslate_wrapper"}
  // Load the GTranslate widget
  const gtranslateScript = document.createElement('script')
  gtranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/lc.js'
  gtranslateScript.defer = true
  document.body.appendChild(gtranslateScript)
});
</script>

<style>

</style>