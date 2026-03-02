<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeroBlock from '@/components/HeroBlock.vue'
import { getTheme } from '@/config/theme'
import { loadThemeData } from '@/data/themeData'

const route = useRoute()
const router = useRouter()
const cities = ref([])
const greeting = ref('')
const dataError = ref('')
const city = computed(() => {
  const id = route.params.cityId
  return cities.value.find((c) => c.id === id) || null
})
const isCityOpen = ref(false)
const isRestaurantOpen = ref(false)
const isAnySelectOpen = computed(() => isCityOpen.value || isRestaurantOpen.value)

onMounted(async () => {
  try {
    const data = await loadThemeData()
    cities.value = data.cities
  } catch (error) {
    cities.value = []
    dataError.value = error instanceof Error ? error.message : 'Ошибка загрузки данных.'
  }

  const theme = getTheme()
  greeting.value = theme?.desktop?.text || ''
})

watch([city, cities], ([c]) => {
  if (cities.value.length > 0 && route.params.cityId && !c) {
    router.replace({ name: 'home' })
  }
})

function goToChooseMap(establishment) {
  router.push({
    name: 'choose-map',
    query: {
      cityId: route.params.cityId,
      establishment: establishment?.name || ''
    }
  })
  isRestaurantOpen.value = false
}
</script>

<template>
  <div class="screen screen-2">
    <p class="greeting">
      {{ greeting }}
    </p>

    <p v-if="dataError" class="data-error">{{ dataError }}</p>

    <div v-else class="cards-row">
      <div class="select-block" :class="{ open: isCityOpen }">
        <button
          type="button"
          class="select-trigger"
          :aria-expanded="isCityOpen"
          @click="isCityOpen = !isCityOpen"
        >
          <span class="select-label">{{ city?.name || 'Выберите город' }}</span>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-show="isCityOpen" class="select-dropdown">
          <button
            v-for="c in cities"
            :key="c.id"
            type="button"
            class="city-item"
            @click="router.push({ name: 'city', params: { cityId: c.id } }); isCityOpen = false"
          >
            {{ c.name }}
          </button>
        </div>
      </div>

      <div class="select-block" :class="{ open: isRestaurantOpen }">
        <button
          type="button"
          class="select-trigger"
          :aria-expanded="isRestaurantOpen"
          @click="isRestaurantOpen = !isRestaurantOpen"
        >
          <span class="select-label">Выберите ресторан</span>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-show="isRestaurantOpen" class="select-dropdown select-point">
          <button
            v-for="est in (city?.establishments || [])"
            :key="est.name"
            type="button"
            class="city-item"
            @click="goToChooseMap(est)"
          >
            {{ est.name }}
          </button>
        </div>
      </div>
    </div>

    <HeroBlock v-show="!isAnySelectOpen" caption="а ресторан?" />
  </div>
</template>

<style scoped>

.greeting {
  font-family: var(--font-family-caption); 
  font-size: var(--greeting-text-size);
  font-weight: 400;
  line-height: 1.33;
  color: var(--color-text-primary); 
  margin: 49px 0 32px 0;
  white-space: pre-line;

}
.select-block {
  position: relative;
  border-radius: var(--radius-input); 
  background: var(--color-bg-card); 
  margin-bottom: 24px;
  box-shadow: var(--select-city-box-shadow);
}
.select-block .select-trigger{
  border: var(--color-input-border); 
}
.select-block.open .select-trigger{
  border-radius: var(--radius-input) var(--radius-input) 0 0;
}
.select-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 16px;
  color: var(--color-text-secondary); 
  cursor: pointer;
  text-align: left;
  border-radius: inherit;
  transition: background 0.2s ease;
  background-color: #ffffff;
}
.select-block.open .select-trigger {
  border-radius: calc(var(--radius-input) - 1px) calc(var(--radius-input) - 1px) 0 0;
  border-bottom-width: 0;
}
.select-label {
  flex: 1;
}
.chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
  color: var(--color-dropdown-chewron);
}
.select-block.open .chevron {
  transform: rotate(180deg);
}
.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  margin-top: -1px;
  border: 1px solid var(--color-input-border);
  border-top: none;
  border-radius: 0 0 var(--radius-input) var(--radius-input); 
  background: #ffffff;
  box-shadow: var(--select-city-box-shadow);
  border: var(--border-card); 
  border-top-width: 0;
  padding: 6px 5px 14px;
  max-height: 350px;
  overflow-y: scroll;
  z-index: 2;
}
.select-point{
  z-index: 1;
}
.select-dropdown {
    max-height: 300px;
    overflow-y: scroll;
}
.select-dropdown::-webkit-scrollbar {
  width: 10px;
  max-height: 5px;
  background-color: var(--select-scrollbar-color);
}
.select-dropdown::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--color-dropdown-hover);
}
.select-dropdown::-webkit-scrollbar-track {
  border-radius: 10px;
}
.select-dropdown.select-point {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.select-dropdown.select-point::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.city-item {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: var(--select-item-border-radius); 
  background-color: #ffffff;
  font-family: inherit;
  font-size: 16px;
  color: var(--color-text-secondary); 
  text-align: left;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.city-item:last-child {
  margin-bottom: 0;
}
.city-item:hover {
  background: var(--color-dropdown-hover);
  color: var(--color-dropdown-hover-text); 
}
.data-error {
  margin: 0 0 24px;
  color: #c62828;
  font-size: 14px;
}
</style>
