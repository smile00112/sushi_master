<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const cities = ref([])
const city = computed(() => {
  const id = route.params.cityId
  return cities.value.find((c) => c.id === id) || null
})
const isCityOpen = ref(false)
const isRestaurantOpen = ref(false)

onMounted(async () => {
  const res = await fetch('/data/cities.json')
  const data = await res.json()
  cities.value = data.cities || []
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
      Здравствуйте!<br />
      Вы на странице оценки качества ресторанов Суши Мастер
    </p>

    <div class="cards-row">
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
        <div v-show="isRestaurantOpen" class="select-dropdown">
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

    <div class="hero-block">
      <img src="/images/hero-cat.png" alt="" class="hero-image" />
      <p class="hero-caption">а ресторан?</p>
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
.cards-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.select-block {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
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
  color: #6d6d6d;
  cursor: pointer;
  text-align: left;
}
.select-trigger:hover {
  background: #f9f9f9;
}
.select-label {
  flex: 1;
}
.chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
  color: #6d6d6d;
}
.select-block.open .chevron {
  transform: rotate(180deg);
}
.select-dropdown {
  border-top: 1px solid #e0e0e0;
  padding: 4px;
  background: #fafafa;
}
.city-item {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 3px;
  background: #fff;
  font-family: inherit;
  font-size: 16px;
  color: #6d6d6d;
  text-align: left;
  cursor: pointer;
  margin-bottom: 2px;
}
.city-item:last-child {
  margin-bottom: 0;
}
.city-item:hover {
  background: #e8f4fc;
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
