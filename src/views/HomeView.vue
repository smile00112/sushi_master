<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeroBlock from '@/components/HeroBlock.vue'
import { getTheme } from '@/config/theme'

const router = useRouter()
const cities = ref([])
const isListOpen = ref(false)
const  greeting = ref('')

onMounted(async () => {
  const res = await fetch('/data/cities.json')
  const data = await res.json()
  cities.value = data.cities || []
  const theme = getTheme()
  greeting.value = theme.desktop.text

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

    <div class="select-block" :class="{ open: isListOpen }">
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

    <HeroBlock caption="Ваш город?" />
  </div>
</template>

<style scoped>
.screen {
  /* padding-top: 16px; */
}
.greeting {
  font-family: var(--font-family-caption);
  font-size: 20px;
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
}
.select-block .select-trigger{
  border: 1px solid var(--color-input-border);
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
.select-trigger:hover {
  /* background: #f9f9f9; */
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
  /* padding: 4px; */
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: var(--border-card);
  border-top-width: 0;
}
.city-item {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: var(--select-item-border-radius);
  /* background: var(--color-bg-card); */
  background-color: #ffffff;
  font-family: inherit;
  font-size: 16px;
  color: var(--color-text-secondary);
  text-align: left;
  cursor: pointer;
  /* margin-bottom: 2px; */
  transition: background 0.2s, color 0.2s;
}
.city-item:last-child {
  margin-bottom: 0;
  border-radius: 0 0 var(--radius-input) var(--radius-input);

}
.city-item:hover {
  background: var(--color-dropdown-hover);
  color: var(--color-dropdown-hover-text);
}
</style>
