<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cities = ref([])
const isListOpen = ref(false)

onMounted(async () => {
  const res = await fetch('/data/cities.json')
  const data = await res.json()
  cities.value = data.cities || []
})

function selectCity(city) {
  router.push({ name: 'city', params: { cityId: city.id } })
}
</script>

<template>
  <div class="screen screen-1">
    <p class="greeting">
      Здравствуйте!<br />
      Вы на странице оценки качества ресторанов Суши Мастер
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

    <div class="hero-block">
      <img src="/images/hero-cat.png" alt="" class="hero-image" />
      <p class="hero-caption">Ваш город?</p>
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
.select-block {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 24px;
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
  position: relative;
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
