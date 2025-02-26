<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div class="min-h-screen bg-primary-600">
    <TheNavbar />
    <RouterView />
  </div>
</template>