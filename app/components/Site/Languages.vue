<template>
  <div>
    <div class="gtranslate_wrapper" />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://cdn.gtranslate.net/widgets/latest/lc.js",
      defer: true
    }
  ]
})

onMounted(() => {
  window.gtranslateSettings = {"default_language":"es","detect_browser_language":true,"url_structure":"sub_directory","languages":["es","ca","en","fr"],"wrapper_selector":".gtranslate_wrapper"}
});
</script>

<style>

</style>