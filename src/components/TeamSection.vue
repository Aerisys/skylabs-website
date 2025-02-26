<script setup lang="ts">
import { ref } from 'vue';

const teamMembers = ref([
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Backend Developer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  // Add more team members here
]);
</script>

<template>
  <section class="py-16 bg-primary-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-600">Notre Équipe</h2>
      
      <div class="grid grid-cols-3 md:grid-cols-3 gap-6">
        <div v-for="member in teamMembers" :key="member.id" 
             class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="member.photo" :alt="member.name" class="w-full h-40 object-cover" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-primary-500">{{ member.name }}</h3>
            <p class="text-sm text-primary-400">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>