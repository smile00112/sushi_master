<script setup>
import { ref, onMounted } from 'vue'
import HeroBlock from '@/components/HeroBlock.vue'
import { loadThemeData } from '@/data/themeData'

const reviewSites = ref([])
const dataError = ref('')

onMounted(async () => {
  try {
    const data = await loadThemeData()
    reviewSites.value = data.reviewSites
  } catch (error) {
    reviewSites.value = []
    dataError.value = error instanceof Error ? error.message : 'Ошибка загрузки данных.'
  }
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
    <p v-if="dataError" class="data-error">{{ dataError }}</p>
    <div v-else class="review-links">
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
    <HeroBlock caption="а отзыв?" />
  </div>
</template>

<style scoped>
.screen {
  padding-top: 16px;
}
.review-title {
  font-family: var(--font-family-base);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--color-text-primary);
  margin: 0 0 16px;
}
.review-text-block {
  margin-bottom: 20px;
}
.review-text {
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--color-text-secondary);
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
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius-input);
  background: var(--color-bg-card);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-link);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}
.review-link-card:hover {
  background: var(--color-dropdown-hover);
  border-color: var(--color-link);
}
.data-error {
  margin: 0 0 24px;
  color: #c62828;
  font-size: 14px;
}
</style>
