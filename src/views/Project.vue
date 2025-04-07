<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-8">Le Projet</h1>

      <div class="space-y-12">
        <!-- Vision et Objectifs -->
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Notre Vision</h2>
          <p class="text-primary-100 mb-6">
            Skylab est un projet qui consiste à concevoir et développer un drone modulable, ce drone vise un usage éducatif, de prototypage rapide et de recherche. Nous souhaitons obtenir un drone léger et personnalisable permettant d'explorer des fonctionnalités avancées.
          </p>

          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Objectifs</h2>
          <ul class="list-disc list-inside text-primary-100 space-y-2 mb-6">
            <li>Corps du drone : Fabriquer une structure imprimée en 3D (support d'éléments et châssis) et une électronique gérée par des cartes ESP32.</li>
            <li>Radiocommande : Permet le pilotage manuel du drone, obtenir un retour de certaines informations télémétriques et servir de passerelle entre le drone et l’application mobile.</li>
            <li>Application Mobile : Développer une application mobile permettant la configuration, la surveillance en temps réel, et le contrôle des drones et des radiocommandes du projet Skylab.</li>
          </ul>
        </div>

        <!-- Bibliothèque d'images -->
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-6">Galerie du Projet</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(image, index) in galerie" :key="index" class="flex flex-col items-center">
              <img :src="image.url" :alt="image.alt" class="rounded-lg shadow-lg w-full h-64 object-cover" />
              <p class="text-primary-100 mt-2 text-center">{{ image.description }}</p>
            </div>
          </div>
        </div>

        <!-- Galerie Vidéo -->
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-6">Galerie Vidéo</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(video, index) in videos" :key="index" class="flex flex-col items-center">
              <video controls preload="metadata" class="rounded-lg shadow-lg w-full h-64 object-cover">
                <source :src="video.url" type="video/mp4">
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <p class="text-primary-100 mt-2 text-center">{{ video.description }}</p>
              <button @click="downloadVideo(video.url, `video-${index + 1}.mp4`)"
                      class="mt-2 bg-primary-400 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary-500 transition">
                Télécharger la vidéo
              </button>
            </div>
          </div>
        </div>
        <!-- Technologies -->
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Technologies</h2>
          <div class="space-y-8">
            <div v-for="(tech, index) in technologies" :key="index">
              <h3 class="text-xl font-semibold text-primary-200 mb-2">{{ tech.categorie }}</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(outil, i) in tech.outils" :key="i" class="bg-primary-400 p-4 rounded-lg text-center text-primary-100">
                  {{ outil }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CDN_URL } from "../config.ts";

const galerie = [
  {
    url: CDN_URL + "images/drone/joystick-test.jpg",
    alt: "Test du code des joysticks",
    description: "Test du code des joysticks de la radiocommande."
  },
  {
    url: CDN_URL + "images/drone/drone-montage.jpg",
    alt: "Premier prototype du drone",
    description: "Premier montage complet du drone avec les hélices, les moteurs, la batterie et les cartes."
  },
  {
    url: CDN_URL + "images/members/team.jpg",
    alt: "Notre équipe",
    description: "Notre merveilleuse équipe qui travaille sur le projet Skylab."
  },
  {
    url: CDN_URL + "images/drone/conception-3D-1.png",
    alt: "Conception 3D",
    description: "Conception 3D du drone."
  }
];

const videos = [
  {
    url: CDN_URL + "videos/test-sol.mp4",
    description: "Premier test de vol du drone dans le labo."
  },
  {
    url: CDN_URL + "videos/crash-1.mp4",
    description: "Test des moteurs et de la réactivité du drone."
  }
];

const technologies = [
  {
    categorie: "Drone",
    outils: ["C++", "ESPDIF"]
  },
  {
    categorie: "Radiocommande",
    outils: ["C++", "ESPDIF"]
  },
  {
    categorie: "App Mobile",
    outils: ["Flutter", "Firebase (soon)"]
  },
  {
    categorie: "Site Web",
    outils: ["Vue.js", "Tailwind CSS"]
  },
  {
    categorie: "Computer Vision",
    outils: ["Python"]
  }
];

const downloadVideo = (url: string, filename: string) => {
  fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error("Erreur lors du téléchargement :", error));
};
</script>
