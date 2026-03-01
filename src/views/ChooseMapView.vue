<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeroBlock from '@/components/HeroBlock.vue'
import { getTheme } from '@/config/theme'

const route = useRoute()
const router = useRouter()
const cities = ref([])
const textFinish = ref('')

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
  const theme = getTheme()
  textFinish.value = theme.desktop.textFinish || ''

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
    <p class="greeting" v-if="textFinish">
      {{ textFinish }}
    </p>

    <p v-if="establishment" class="establishment-name">{{ establishment.name }}</p>
    <p class="choose-label">Обычно люди не находят времени оставить отзывы, если им все понравилось.<br>А вы нашли. Мы это ценим.<br>Оставьте, пожалуйста, отзыв на любом из сайтов:</p>

    <div class="map-links">
      <a
        type="button"
        class="map-a-card"
        :disabled="!establishment?.yandexMaps"
        @click="openYandex"
      >
        <img src="/images/yandex-btn.png" class="map-link-card" alt="яндекс карты">
      </a>

      <a
        class="map-a-card"
        :disabled="!establishment?.link2gis"
        @click="open2gis"
      >
        <img src="/images/2gis-btn.png" class="map-link-card" alt="карты 2GIS">
        
    </a>
    </div>

    <HeroBlock caption="куда открыть?" />
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
  margin: 49px 0 20px;
  padding: 0;
  white-space: pre-line;
}
.establishment-name {
  display:none;
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
  margin: 0 0 51px;
  /* max-width: 350px; */
}
.map-links {
    display: flex;
    gap: 24px;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.map-link-card {
  /* display: flex;
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
  transition: background 0.2s, border-color 0.2s; */
  border: unset;
  padding: 0;
  box-shadow: 0px 4px 20.2px 0px #BFCFFF33;
  box-shadow: 1px 4px 6.9px 0px #BFCFFF40;

}
 .map-link-card:hover:not(:disabled) {
  background: var(--color-dropdown-hover);
  border-color: var(--color-link);
  box-shadow: 1px 4px 6.9px 0px #fc1fa740;
} 
.map-link-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
