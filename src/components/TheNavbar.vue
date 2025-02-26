<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-primary-600/90 backdrop-blur-sm' : 'bg-transparent'
  ]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3">
            <img src="/icon_skylab_light.png" alt="Logo" class="h-8 w-8" />
            <span class="text-2xl font-bold text-primary-100">SkyLab</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/project" class="text-primary-100 hover:text-primary-200 transition-colors">Le Projet</router-link>
          <router-link to="/mobile" class="text-primary-100 hover:text-primary-200 transition-colors">App Mobile</router-link>
          <router-link to="/docs" class="text-primary-100 hover:text-primary-200 transition-colors">Documentation</router-link>
          <router-link to="/management" class="text-primary-100 hover:text-primary-200 transition-colors">Gestion</router-link>
          <router-link to="/team" class="text-primary-100 hover:text-primary-200 transition-colors">Équipe</router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-primary-100">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-primary-600/95 backdrop-blur-sm">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/project" class="block px-3 py-2 text-primary-100 hover:text-primary-200">Le Projet</router-link>
        <router-link to="/mobile" class="block px-3 py-2 text-primary-100 hover:text-primary-200">App Mobile</router-link>
        <router-link to="/docs" class="block px-3 py-2 text-primary-100 hover:text-primary-200">Documentation</router-link>
        <router-link to="/management" class="block px-3 py-2 text-primary-100 hover:text-primary-200">Gestion</router-link>
        <router-link to="/team" class="block px-3 py-2 text-primary-100 hover:text-primary-200">Équipe</router-link>
      </div>
    </div>
  </nav>
</template>