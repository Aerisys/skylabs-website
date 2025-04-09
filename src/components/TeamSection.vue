<script setup lang="ts">
import { ref } from 'vue';
import {CDN_URL} from "../config.ts";

const teamMembers = ref([
  {
    id: 1,
    name: 'Barbet Sacha',
    role: 'Développeur Logiciel, Mobile, Iot & Chef de projet',
    photo: CDN_URL + 'images/members/sacha.jpeg'
  },
  {
    id: 2,
    name: 'Pidoux Gaël',
    role: 'Développeur Logiciel, Mobile, Iot & Chef de projet',
    photo: CDN_URL + 'images/members/gael.jpg'
  },
  {
    id: 3,
    name: 'François Loan',
    role: 'Développeur Logiciel, Mobile & IOT',
    photo: CDN_URL + 'images/members/loan.jpg'
  },
  {
    id: 1,
    name: 'Coeur Maxence',
    role: 'Développeur Logicel, Mobile & Iot',
    photo: CDN_URL + 'images/members/maxence.jpg'
  },
  {
    id: 2,
    name: 'Richard de Vesvrotte Amaury',
    role: 'Développeur Logiciel, Mobile & Iot',
    photo: CDN_URL + 'images/members/amaury.jpg'
  },
  {
    id: 3,
    name: 'Fathipoursasansara Adelia',
    role: 'Développeuse Logiciel, Mobile & Iot',
    photo: CDN_URL + 'images/members/adelia.jpg'
  },
  {
    id: 1,
    name: 'Abo-Alrub Jamil',
    role: 'Data  Scientist',
    photo: CDN_URL + 'images/members/jamil.jpg'
  },
  {
    id: 2,
    name: 'Ribes Thibault',
    role: 'Développeur Web',
    photo: CDN_URL + 'images/members/thibault.jpg'
  },
  {
    id: 3,
    name: 'Chollet Gaëtan',
    role: 'Développeur Web',
    photo: CDN_URL + 'images/members/gaetan.jpg'
  }
]);
</script>

<template>
  <section class="py-16 bg-primary-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-600">Notre Équipe</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="member in teamMembers" :key="member.id"
             class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="member.photo" :alt="member.name" class="w-full h-80 object-cover" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-primary-500">{{ member.name }}</h3>
            <p class="text-sm text-primary-400">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
