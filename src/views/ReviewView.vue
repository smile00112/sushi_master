<script setup>
import { ref, onMounted } from 'vue'

const reviewSites = ref([])

onMounted(async () => {
  const res = await fetch('/data/cities.json')
  const data = await res.json()
  reviewSites.value = data.reviewSites || [
    { name: '2GIS', url: 'https://2gis.ru' },
    { name: 'Google', url: 'https://www.google.com/maps' }
  ]
})
</script>

<template>
  <div class="screen screen-3">
    <h2 class="review-title">Оставьте отзыв о нашей работе</h2>
    <div class="review-text-block">
      <p class="review-text">
        Обычно люди не находят времени оставить отзывы, если им все понравилось.<br /><br />
        А вы нашли. Мы это ценим.<br /><br />
        Оставьте, пожалуйста, отзыв на любом из сайтов:
      </p>
    </div>
    <div class="review-links">
      <a
        v-for="site in reviewSites"
        :key="site.name"
        :href="site.url"
        target="_blank"
        rel="noopener noreferrer"
        class="review-link-card"
      >
        {{ site.name }}
      </a>
    </div>
    <div class="hero-block">
      <img src="/images/hero-cat.png" alt="" class="hero-image" />
      <p class="hero-caption">а отзыв?</p>
    </div>
  </div>
</template>

<style scoped>
.screen {
  padding-top: 16px;
}
.review-title {
  font-family: 'Evolventa', system-ui, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
  color: #2e2d31;
  margin: 0 0 16px;
}
.review-text-block {
  margin-bottom: 20px;
}
.review-text {
  font-family: 'Evolventa', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: #6d6d6d;
  margin: 0;
}
.review-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}
.review-link-card {
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
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}
.review-link-card:hover {
  background: #e8f4fc;
  border-color: #2979A6;
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
