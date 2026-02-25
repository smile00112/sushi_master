<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="main-layout">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e8e4e0;
}
.main-content {
  flex: 1;
  max-width: 390px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px 24px;
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
}
@media (min-width: 768px) {
  .main-content {
    max-width: 720px;
    border-radius: 20px;
  }
}
@media (min-width: 992px) {
  .main-content {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .main-layout {
    background: #e8e4e0 url(/images/hero-bg-desktop.png) no-repeat center center;
    background-size: cover;
  }
  .main-content {
    max-width: 494px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  }
}
</style>
