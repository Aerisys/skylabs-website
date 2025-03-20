<script setup lang="ts">
import { ref } from 'vue';

const sections = ref([
  {
    id: 1,
    title: 'Le Projet',
    description: 'Découvrez notre projet et nos objectifs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/project'
  },
  {
    id: 2,
    title: 'App Mobile',
    description: 'Découvrez notre application mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/mobile'
  },
  {
    id: 3,
    title: 'Documentation',
    description: 'Accéder à la documentation complète du projet',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/docs'
  },
  {
    id: 4,
    title: 'Gestion de Projet',
    description: 'Voir notre méthodologie de gestion',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/management'
  }
]);
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-600">Explorez Notre Projet</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="section in sections" :key="section.id"
             class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300">
          <img :src="section.image" :alt="section.title" class="w-full h-64 object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-600 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-2">{{ section.title }}</h3>
            <p class="text-primary-100 mb-4">{{ section.description }}</p>
            <router-link :to="section.link" class="bg-primary-200 text-white px-6 py-2 rounded-full hover:bg-primary-300 transition-colors">
              En savoir plus
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>