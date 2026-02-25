<script setup>
import { ref, onMounted } from 'vue'
import { getTheme } from '@/config/theme'

defineProps({
  caption: { type: String, default: '' },
})

const hero = ref({
  imageUrl: '/images/hero-cat.png',
  show: true,
})

onMounted(() => {
  const theme = getTheme()
  if (theme?.hero) {
    hero.value = theme.hero
  }
})
</script>

<template>
  <div v-if="hero.show" class="hero-block">
    <img :src="hero.imageUrl" alt="" class="hero-image" />
    <p v-if="caption" class="hero-caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
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
  border-radius: var(--radius-input);
}
.hero-caption {
  font-family: var(--font-family-caption);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.26;
  color: var(--color-text-primary);
  margin: 8px 0 0;
}
</style>
