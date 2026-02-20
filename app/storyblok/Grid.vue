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
        class="flex md:justify-center gap-site pb-14 md:pb-24 text-base overflow-x-auto -mx-4 px-site"
      >
        <li>
          <button
            @click="currentFilter = null"
            :class="['to-underlined cursor-pointer whitespace-nowrap', { 'font-bold': !currentFilter }]"
            :aria-pressed="!currentFilter ? true : false"
          >
            VER TODOS
          </button>
        </li>
        <li v-for="filter in blok.filters" :key="filter._uid">
          <button
            @click="currentFilter = filter.keyword"
            :class="['to-underlined cursor-pointer whitespace-nowrap', { 'font-bold': currentFilter === filter.keyword }]"
            :aria-pressed="currentFilter === filter.keyword ? true : false"
          >
            {{ filter.label }}
          </button>
        </li>
      </ul>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-y-8 md:gap-site">
        <TransitionGroup name="filter">
          <template v-for="component in blok.items" :key="component._uid">
            <StoryblokComponent
              v-if="component.filter_keyword === currentFilter || !currentFilter"
              :blok="component"
              :text-edge="blok.text_edge"
            />
          </template>
        </TransitionGroup>
      </div>
  </section>
</template>