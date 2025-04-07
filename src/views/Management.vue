<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import { ref } from 'vue';

const phases = ref([
  {
    id: "1",
    name: "Avant projet",
    date: "Juillet - Octobre 2024",
    description: [
      "Veille technique",
      "Organisation du projet Ydays",
      "Recheche de membres",
      "Cadrage macro du projet"
    ]
  },
  {
    id: "2",
    name: "Lancement",
    date: "Octobre - Décembre 2024",
    description: [
      "Définition précise des objectifs",
      "Mise en place du travail d'équipe",
      "Formation sur l'IoT"
    ]
  },
  {
    id: "3",
    name: "Développement",
    date: 'Janvier - Février - Mars 2025',
    description: [
      "Communication drone/radiocommande",
      "Maquettes web/mobile",
      "Début développement du site",
      "Premier prototype de drone"
    ]
  },
  {
    id: "4",
    name: "Tests & Finalisation",
    date: "Mars - Avril 2025",
    description: [
      "Premier vol test",
      "Equilibrage du drone",
      "Conception de la radiocommande",
      "Test et déploiement du site web"
    ]
  }
]);

const scrollToPhase = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">

      <h1 class="text-4xl font-bold text-primary-100 mb-12 text-center">Processus de réalisation</h1>

      <h1 class="text-3xl font-bold text-primary-100 mb-8 text-center">Nos outils</h1>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <a href="https://www.notion.so/14edc498c54c8020a624f8b4cf8dfa5f?v=14edc498c54c81ec861b000ce6379e41"
           target="_blank"
           class="flex items-center p-4 bg-primary-400 rounded-lg hover:bg-primary-300 transition-colors w-full sm:w-auto">
          <img src="/notion_icon.ico"
               alt="Notion"
               class="w-8 h-8 mr-4" />
          <div>
            <span class="text-primary-100 text-2xl font-semibold block">Notion</span>
            <p class="text-secondary-200">Documentation et suivi des tâches</p>
          </div>
        </a>

        <a href="https://www.figma.com/files/team/1448694641696383267/project/312557658/Skylab?fuid=1290947341397342811"
           target="_blank"
           class="flex items-center p-4 bg-primary-400 rounded-lg hover:bg-primary-300 transition-colors w-full sm:w-auto">
          <img src="/figma_icon.png"
               alt="Figma"
               class="w-8 h-8 mr-4" />
          <div>
            <span class="text-primary-100 text-2xl font-semibold block">Figma</span>
            <p class="text-secondary-200">Design et maquettage</p>
          </div>
        </a>

        <a href="https://drive.google.com/drive/folders/18OkLtMfItb_rkvuNjCPUt4aPyUgKu20N"
           target="_blank"
           class="flex items-center p-4 bg-primary-400 rounded-lg hover:bg-primary-300 transition-colors w-full sm:w-auto">
          <img src="/drive_icon.png"
               alt="Google Drive"
               class="w-8 h-8 mr-4" />
          <div>
            <span class="text-primary-100 text-2xl font-semibold block">Google drive</span>
            <p class="text-secondary-200">Stockage et partage des documents</p>
          </div>
        </a>
      </div>

      <h1 class="text-3xl font-bold text-primary-100 text-center">La timeline</h1>

      <ol class="flex flex-col sm:flex-row sm:justify-between items-center my-24">
        <li v-for="(phase, index) in phases"
            :key="index"
            class="relative w-full sm:flex-1 text-center mb-8 sm:mb-0">
          <div class="flex items-center justify-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-1 max-w-4xl"></div>
          </div>
          <div @click="scrollToPhase(phase.id)"
               class="cursor-pointer mt-3">
            <h3 class="text-lg sm:text-xl font-semibold text-primary-100">{{ phase.name }}</h3>
            <time class="block text-sm sm:text-base text-primary-200">{{ phase.date }}</time>
          </div>
        </li>
      </ol>

      <div v-for="(phase, index) in phases"
           :key="index"
           :id="phase.id"
           class="bg-primary-500/50 p-6 rounded-lg mb-12">
        <h2 class="text-2xl font-semibold text-primary-100">
          {{ phase.name }} - <span class="text-secondary-200 font-normal">{{ phase.date }}</span>
        </h2>
        <ul class="max-w-md space-y-1 list-disc list-inside">
          <li v-for="description in phase.description"
              :key="description"
              class="text-primary-200">{{ description }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
