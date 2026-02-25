<script setup>
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <img src="/images/logo.png" alt="Логотип" class="logo" />
      <div class="header-line" />
      <h1 class="header-title">Центр оценки качества ресторанов Суши Мастер</h1>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
}
.header-inner {
  max-width: 390px;
  margin: 0 auto;
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.logo {
  width: 86.9px;
  height: 27px;
  object-fit: contain;
}
.header-line {
  width: 100%;
  height: 0;
  border-bottom: 1px solid #6d6d6d;
  opacity: 0.5;
}
.header-title {
  font-family: 'Evolventa', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;
  color: #6d6d6d;
  margin: 0;
}
@media (min-width: 768px) {
  .header-inner {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .header-inner {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .header-inner {
    max-width: 494px;
  }
}
</style>
