<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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

    <div class="hero-block">
      <img src="/images/hero-cat.png" alt="" class="hero-image" />
      <p class="hero-caption">куда открыть?</p>
    </div>
  </div>
</template>

<style scoped>
.screen {
  padding-top: 16px;
}
.greeting {
  font-family: 'Evolventa', system-ui, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
  color: #2e2d31;
  margin: 0 0 20px;
}
.establishment-name {
  font-family: 'Evolventa', system-ui, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #2e2d31;
  margin: 0 0 8px;
}
.choose-label {
  font-family: 'Evolventa', system-ui, sans-serif;
  font-size: 16px;
  color: #6d6d6d;
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
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #2979A6;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.map-link-card:hover:not(:disabled) {
  background: #e8f4fc;
  border-color: #2979A6;
}
.map-link-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.hero-block {
  margin-top: 24px;
  text-align: right;
}
.hero-image {
  width: 100%;
  max-width: 383px;
  height: auto;
  display: block;
  margin-left: auto;
  border-radius: 8px;
}
.hero-caption {
  font-family: 'Caveat', cursive;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.26;
  color: #2e2d31;
  margin: 8px 0 0;
}
</style>
