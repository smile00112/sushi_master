<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeroBlock from '@/components/HeroBlock.vue'

const route = useRoute()
const router = useRouter()
const cities = ref([])

const cityId = computed(() => route.query.cityId || '')
const establishmentName = computed(() => route.query.establishment || '')

const establishment = computed(() => {
  const city = cities.value.find((c) => c.id === cityId.value)
  if (!city?.establishments) return null
  return city.establishments.find((e) => e.name === establishmentName.value) || null
})

onMounted(async () => {
  const res = await fetch('/data/cities.json')
  const data = await res.json()
  cities.value = data.cities || []
})

watch([establishment, cities], ([est]) => {
  if (cities.value.length > 0 && (cityId.value || establishmentName.value) && !est) {
    router.replace({ name: 'home' })
  }
})

function openYandex() {
  if (establishment.value?.yandexMaps) {
    window.open(establishment.value.yandexMaps, '_blank', 'noopener,noreferrer')
  }
}

function open2gis() {
  if (establishment.value?.link2gis) {
    window.open(establishment.value.link2gis, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <div class="screen choose-map-screen">
    <p class="greeting">
      Здравствуйте!<br />
      Вы на странице оценки качества ресторанов Суши Мастер
    </p>

    <p v-if="establishment" class="establishment-name">{{ establishment.name }}</p>
    <p class="choose-label">Выберите сервис карт:</p>

    <div class="map-links">
      <button
        type="button"
        class="map-link-card"
        :disabled="!establishment?.yandexMaps"
        @click="openYandex"
      >
        Яндекс Карты
      </button>
      <button
        type="button"
        class="map-link-card"
        :disabled="!establishment?.link2gis"
        @click="open2gis"
      >
        2GIS
      </button>
    </div>

    <HeroBlock caption="куда открыть?" />
  </div>
</template>

<style scoped>
.screen {
  padding-top: 16px;
}
.greeting {
  font-family: var(--font-family-base);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--color-text-primary);
  margin: 0 0 20px;
}
.establishment-name {
  font-family: var(--font-family-base);
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin: 0 0 8px;
}
.choose-label {
  font-family: var(--font-family-base);
  font-size: 16px;
  color: var(--color-text-secondary);
  margin: 0 0 16px;
}
.map-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}
.map-link-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 16px;
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius-input);
  background: var(--color-bg-card);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-link);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.map-link-card:hover:not(:disabled) {
  background: var(--color-dropdown-hover);
  border-color: var(--color-link);
}
.map-link-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
