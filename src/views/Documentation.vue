<script setup lang="ts">
import {CDN_URL} from "../config.ts";
import GeneralCard from "../components/GeneralCard.vue";

const sections = [
  {
    id: 1,
    title: 'Site web',
    image: CDN_URL + 'images/placeholder/project.avif',
    download: [
      {
        name: 'le cahier des charges',
        url: CDN_URL + "pdf/Skylab_Cahier_des_charges_du_site_web.pdf"
      },
      {
        name: 'les spécifications fonctionnelles et techniques',
        url: CDN_URL + "pdf/Skylab_Spcification_technique_et_fonctionnelle_du_site_web.pdf"
      }
    ]
  },
  {
    id: 2,
    title: 'Radiocommande',
    image: CDN_URL + 'images/placeholder/controller.jpg',
    download: [
      {
        name: 'le cahier des charges',
        url: CDN_URL + 'pdf/Skylab_Cahier_des_charges_de_la_radiocommande.pdf'
      }
    ]
  },
  {
    id: 3,
    title: 'Application mobile',
    image: CDN_URL + 'images/placeholder/mobile.avif',
    download: [
      {
        name: 'le cahier des charges',
        url: CDN_URL + 'pdf/Skylab_Cahier_des_charges_de_lapplication_mobile.pdf'
      },
      {
        name: 'les spécifications fonctionnelles et techniques',
        url: CDN_URL + 'pdf/Skylab_Spécification_technique_et_fonctionnelle_de_lapplication_mobile.pdf'
      }
    ]
  },
  {
    id: 4,
    title: 'Drone',
    image: CDN_URL + 'images/placeholder/drone-hero.avif',
    download: [
      {
        name: 'le cahier des charges',
        url: CDN_URL + 'pdf/Skylab_Cahier_des_charges_du_drone.pdf'
      }
    ]
  }
]

</script>
<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-8">Documentation</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="section in sections" :key="section.id"
             class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300">
          <general-card :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>