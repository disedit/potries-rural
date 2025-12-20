<script setup>
defineProps({ blok: Object })
</script>

<template>
  <nav v-editable="blok">
    <ul aria-label="Navegación interna de la página" class="flex text-sm md:text-base md:text-md gap-site md:justify-center overflow-x-auto p-site md:p-24 pb-0 md:pb-0">
      <li v-for="item in blok.items" :key="item._uid">
        <a :href="`#${item.anchor}`" class="to-underlined whitespace-nowrap">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>