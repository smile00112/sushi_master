<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeroBlock from '@/components/HeroBlock.vue'
import { getTheme } from '@/config/theme'
import { loadThemeData } from '@/data/themeData'

const router = useRouter()
const cities = ref([])
const isListOpen = ref(false)
const greeting = ref('')
const dataError = ref('')

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

function selectCity(city) {
  router.push({ name: 'city', params: { cityId: city.id } })
}
</script>

<template>
  <div class="screen screen-1">
    <p class="greeting">
      {{ greeting }}
    </p>

    <p v-if="dataError" class="data-error">{{ dataError }}</p>

    <div v-else class="select-block" :class="{ open: isListOpen }">
      <button
        type="button"
        class="select-trigger"
        :aria-expanded="isListOpen"
        @click="isListOpen = !isListOpen"
      >
        <span class="select-label">Выберите город</span>
        <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div v-show="isListOpen" class="select-dropdown">
        <div class="select-dropdown-container">
          <button
            v-for="city in cities"
            :key="city.id"
            type="button"
            class="city-item"
            @click="selectCity(city)"
          >
            {{ city.name }}
          </button>
        </div>
      </div>
    </div>

    <HeroBlock caption="Ваш город?"  v-if="!isListOpen"/>
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
  padding: 2px 0px 17px 5px;
  max-height: 300px;

}
.select-dropdown-container {
    max-height: 300px;
    overflow-y: scroll;
}
.select-dropdown-container::-webkit-scrollbar {
  width: 10px;
  max-height: 5px;
  background-color: var(--select-scrollbar-color);
}
.select-dropdown-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--color-dropdown-hover);
}
.select-dropdown-container::-webkit-scrollbar-track {
  border-radius: 10px;
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
.city-item:hover, .city-item:focus, .city-item:active {
  background: var(--color-dropdown-hover); 
  color: var(--color-dropdown-hover-text); 
  border: none;
}
.data-error {
  margin: 0 0 24px;
  color: #c62828;
  font-size: 14px;
}
</style>
