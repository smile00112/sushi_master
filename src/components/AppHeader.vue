<script setup>
import { ref, onMounted } from 'vue'
import { getTheme } from '@/config/theme'

const header = ref({
  style: 'white_minimal',
  logoUrl: '/images/logo.png',
  brandTitle: 'Центр оценки качества ресторанов Суши Мастер',
})

onMounted(() => {
  const theme = getTheme()
  if (theme?.header) {
    header.value = theme.header
  }
})
</script>

<template>
  <header
    class="app-header"
    :class="{ 'header-colored': header.style === 'colored_bar' }"
  >
    <img :src="header.logoUrl" alt="Логотип" class="logo" />
    <div class="header-line" />
    <h1 class="header-title">{{ header.brandTitle }}</h1>
  </header>
</template>

<style scoped>
.app-header {
  padding: 12px 0 16px;

  display: flex;
  gap: 19px;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  padding: 21px 24px;
  background-color: var(--color-header-bg); /* Фон шапки */
  
}

@media (min-width: 500px) {
  .app-header {
    border-radius: var(--radius-card) var(--radius-card) 0 0; /* Скругление верхних углов карточки */
  }
}
/* .app-header.header-colored {
  margin: -16px -16px 0 -16px;
  padding: 12px 16px 16px;
  background: var(--color-brand-primary);
  color: var(--color-header-text);
  
}

.app-header.header-colored .header-line {
  border-color: rgba(255, 255, 255, 0.4);
} */

.app-header.header-colored .header-title {
  color: var(--color-header-text); /* Цвет текста заголовка в цветной шапке */
}

.logo {
  width: 86.9px;
  height: var(--color-header-height); /* Высота логотипа из темы */
  object-fit: contain;
}

.header-line {
    width: 100%;
    max-width: 1px;
    /* transform: rotate(90deg); */
    height: 26px;
    border-left: 1px solid var(--color-header-text); /* Цвет вертикального разделителя */
    opacity: 0.5;
    margin: 0;
    padding: 0;
}

.header-title {
  font-family: var(--font-family-base); /* Базовый шрифт темы */
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--color-header-text); /* Основной цвет текста в шапке */
  margin: 0;
  max-width: 200px;
  white-space: pre-line;
}
</style>
