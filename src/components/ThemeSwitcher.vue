<script setup>
import { applyTheme } from '@/config/theme'

const themes = [
  { id: 'default', label: 'Default' },
  { id: 'spoke', label: 'Spoke' },
  { id: 'sushi-gallery', label: 'Sushi Gallery' },
  { id: 'mir-sushi', label: 'Mir Sushi' },
]

function selectTheme(id) {
  applyTheme(id)
  const url = new URL(window.location.href)
  url.searchParams.set('theme', id)
  window.history.replaceState({}, '', url)
  // Перезагрузка для обновления header/layout/hero (читают тему в onMounted)
  window.location.reload()
}
</script>

<template>
  <div class="theme-switcher">
    <span class="theme-switcher__label">Тема:</span>
    <div class="theme-switcher__buttons">
      <button
        v-for="t in themes"
        :key="t.id"
        type="button"
        class="theme-switcher__btn"
        @click="selectTheme(t.id)"
      >
        {{ t.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  border-radius: 12px;
  font-size: 12px;
  font-family: system-ui, sans-serif;
}

.theme-switcher__label {
  font-weight: 600;
}

.theme-switcher__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.theme-switcher__btn {
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  color: inherit;
  cursor: pointer;
  font-size: 11px;
  transition: background 0.15s;
}

.theme-switcher__btn:hover {
  background: rgba(255, 255, 255, 0.35);
}
</style>
