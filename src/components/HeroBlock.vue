<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTheme } from '@/config/theme'

defineProps({
  caption: { type: String, default: '' },
})

const route = useRoute()
const hero = ref({
  imageUrl: '',
  show: true,
})

const heroImageUrl = computed(() => {
  const h = hero.value
  const routeName = route.name
  if (routeName === 'city') {
    return h.imageUrlScreen2 || h.imageUrl
  }
  if (routeName === 'choose-map' || routeName === 'review') {
    return h.imageUrlScreen3 || h.imageUrl
  }
  return h.imageUrl
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
    <img :src="heroImageUrl" alt="" class="hero-image" />
    <p v-if="caption" class="hero-caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
.hero-block {
  margin-top: 24px;
  text-align: right;
  position: absolute;
  bottom: 0;
  left: var(--hero-image-left); /*50%*/
  transform: var(--hero-image-translateX);/*translateX(-50%);*/
  right: var(--hero-image-right);
}
.hero-image {
  width: 100%;
  max-width: 383px;
  height: auto;
  display: block;  
  border-radius: var(--radius-input);
  width: var(--hero-width);
  max-width: 100vw;
}
.hero-caption {
  display: none;
  font-family: var(--font-family-caption);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.26;
  color: var(--color-text-primary);
  margin: 8px 0 0;
}

@media (max-height: 650px) {
  .hero-image{
    max-width: 40vh;
  }
}
</style>
