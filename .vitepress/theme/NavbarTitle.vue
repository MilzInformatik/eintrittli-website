<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <a :href="withBase('/')" class="custom-nav-title" aria-label="Eintrittli – Startseite">
    <img src="/logo.png" alt="" class="nav-logo" width="32" height="32" />
    <span class="nav-text">
      <span class="nav-brand">Eintrittli</span>
      <span class="nav-subtitle">von WebOrb</span>
    </span>
  </a>
</template>

<style scoped>
.custom-nav-title {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.nav-logo {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.nav-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

.nav-brand {
  font-family: var(--et-font-display);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.nav-subtitle {
  margin-top: 3px;
  font-size: 10px;
  font-weight: 500;
  color: var(--vp-c-text-3);
}
</style>
