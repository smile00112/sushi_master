<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="main-layout">
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
  background: #e8e4e0;
}
.main-content {
  flex: 1;
  max-width: 390px;
  margin: 0 auto;
  width: 100%;
  padding: 16px 16px 24px;
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
}
.main-body {
  padding: 0;
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
    margin-top: 48px;
    margin-bottom: 48px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  }
}
</style>
