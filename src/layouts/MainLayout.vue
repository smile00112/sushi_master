<script setup>
import AppHeader from '@/components/AppHeader.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const isDev = import.meta.env.DEV
</script>

<template>
  <div class="main-layout">
    <ThemeSwitcher  />
    <main class="main-content">
      <AppHeader />
      <div class="main-body">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-page-mobile);
}
.main-content {
  flex: 1;
  max-width: 490px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  background: var(--color-bg-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  position: relative;
}
.main-body {
  padding: 0 24px;
}
@media (min-width: 500px) {
  .main-layout {
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), var(--desktop-bg);
    background-size: cover;
  }
}

@media (min-width: 768px) {
  .main-content {
    max-width: 490px;
  }
}
@media (min-width: 992px) {
  .main-content {
    max-width: 490px;
  }
}
@media (min-width: 1200px) {

  .main-content {
    max-width: 490px;
    margin-top: 48px;
    margin-bottom: 48px;
    box-shadow: var(--shadow-card-desktop);
  }
}
</style>
