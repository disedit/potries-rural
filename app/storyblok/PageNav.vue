<script setup>
defineProps({ blok: Object })
</script>

<template>
  <nav v-editable="blok" class="p-site md:p-24 pb-0 md:pb-0 overflow-x-auto">
    <ul aria-label="Navegación interna de la página" class="flex text-base md:text-md gap-site justify-center">
      <li v-for="item in blok.items" :key="item._uid">
        <a :href="`#${item.anchor}`" class="to-underlined">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>