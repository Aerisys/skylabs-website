<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import {CDN_URL} from "../config.ts";

onMounted(() => {
  gsap.from('.hero-content', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power2.out'
  });
});

const imageUrl = `${CDN_URL}images/placeholder/drone-hero.avif`;
</script>

<template>
  <div class="relative h-screen">
    <div class="absolute inset-0">
      <img
        :src=imageUrl
        alt="Hero drone image"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-primary-600/60 to-primary-400/60"></div>
    </div>
    
    <div class="relative h-full flex items-center justify-center text-center">
      <div class="hero-content text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">L'accessibilité pour tous</h1>
        <p class="text-xl md:text-2xl mb-8">Découvrez notre projet innovant</p>
        <router-link to="/project" class="bg-primary-200 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-300 transition-colors">
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>
</template>