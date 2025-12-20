<script setup>
const props = defineProps({ blok: Object })
const spacing = useSpacing(props.blok)
const display = useDisplay(props.blok)

// Filters
const currentFilter = ref(null)
</script>

<template>
  <section
    v-editable="blok"
    :id="blok.id || blok._uid"
    :class="['contained spacing lg:px-24', display, { 'px-site edge-on-mobile': !blok.edge_on_mobile }]"
    :style="spacing">
      <ul
        v-if="blok.filters && blok.filters.length > 0"
        aria-label="Filtros"
        class="flex justify-center gap-site pb-site md:pb-24 text-base"
      >
        <li>
          <button
            @click="currentFilter = null"
            :class="['to-underlined cursor-pointer', { 'font-bold': !currentFilter }]"
            :aria-pressed="!currentFilter ? true : false"
          >
            VER TODOS
          </button>
        </li>
        <li v-for="filter in blok.filters" :key="filter._uid">
          <button
            @click="currentFilter = filter.keyword"
            :class="['to-underlined cursor-pointer', { 'font-bold': currentFilter === filter.keyword }]"
            :aria-pressed="currentFilter === filter.keyword ? true : false"
          >
            {{ filter.label }}
          </button>
        </li>
      </ul>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-site">
        <TransitionGroup name="filter">
          <template v-for="component in blok.items" :key="component._uid">
            <StoryblokComponent
              v-if="component.filter_keyword === currentFilter || !currentFilter"
              :blok="component"
            />
          </template>
        </TransitionGroup>
      </div>
  </section>
</template>