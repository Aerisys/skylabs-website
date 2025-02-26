<script setup lang="ts">
import { ref } from 'vue';

interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

interface TeamMember {
  id: number;
  name: string;
  firstName: string;
  age: number;
  specialty: string;
  contributions: string[];
  photo: string;
  socials: SocialMedia[];
}

const teamMembers = ref<TeamMember[]>([
  {
    id: 1,
    name: "Doe",
    firstName: "John",
    age: 22,
    specialty: "Frontend Developer",
    contributions: [
      "Développement de l'interface utilisateur",
      "Intégration des animations",
      "Design système"
    ],
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socials: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
      },
      {
        platform: "GitHub",
        url: "https://github.com/johndoe",
        icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/johndoe",
        icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      }
    ]
  },
  {
    id: 2,
    name: "Smith",
    firstName: "Jane",
    age: 23,
    specialty: "Backend Developer",
    contributions: [
      "Architecture du système",
      "API REST",
      "Base de données"
    ],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socials: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/janesmith",
        icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
      },
      {
        platform: "GitHub",
        url: "https://github.com/janesmith",
        icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      }
    ]
  }
]);
</script>

<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-12 text-center">Notre Équipe</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" :key="member.id" 
             class="bg-primary-500/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="relative h-64">
            <img :src="member.photo" :alt="member.firstName" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-600 to-transparent opacity-60"></div>
          </div>
          
          <div class="p-6">
            <div class="mb-4">
              <h3 class="text-2xl font-bold text-primary-100">
                {{ member.firstName }} {{ member.name }}
              </h3>
              <p class="text-primary-200">{{ member.age }} ans</p>
            </div>
            
            <div class="mb-4">
              <h4 class="text-lg font-semibold text-primary-200 mb-2">Spécialité</h4>
              <p class="text-primary-100">{{ member.specialty }}</p>
            </div>
            
            <div class="mb-4">
              <h4 class="text-lg font-semibold text-primary-200 mb-2">Contributions au projet</h4>
              <ul class="list-disc list-inside text-primary-100 space-y-1">
                <li v-for="(contribution, index) in member.contributions" :key="index">
                  {{ contribution }}
                </li>
              </ul>
            </div>

            <div class="mt-6 flex justify-center space-x-4">
              <a v-for="social in member.socials" 
                 :key="social.platform"
                 :href="social.url"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="text-primary-100 hover:text-primary-200 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>