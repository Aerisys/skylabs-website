<script setup lang="ts">
import {CDN_URL} from "../config.ts";

const downloadRemoteFile = () => {
  const link = document.createElement("a");
  link.href = CDN_URL + "pdf/Skylab_Cahier_des_charges_de_la_radiocommande.pdf";
  link.setAttribute("download", "Skylab_Cahier_des_charges_de_la_radiocommande.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadWebFile = () => {
  const link = document.createElement("a");
  link.href = CDN_URL + "pdf/Skylab_Cahier_des_charges_du_site_web.pdf";
  link.setAttribute("download", "Skylab_Cahier_des_charges_du_site_web.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadWebSpecsFile = () => {
  const link = document.createElement("a");
  link.href = CDN_URL + "pdf/Skylab_Spcification_technique_et_fonctionnelle_du_site_web.pdf";
  link.setAttribute("download", "Skylab_Spécification_technique_et_fonctionnelle_du_site_web.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadMobileFile = () => {
  const link = document.createElement("a");
  link.href = CDN_URL + "pdf/Skylab_Cahier_des_charges_de_lapplication_mobile.pdf";
  link.setAttribute("download", "Skylab_Cahier_des_charges_de_lapplication_mobile.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadMobileSpecsFile = () => {
  const link = document.createElement("a");
  link.href = CDN_URL + "pdf/Skylab_Spcification_technique_et_fonctionnelle_de_lapplication_mobile.pdf";
  link.setAttribute("download", "Skylab_Spécification_technique_et_fonctionnelle_de_lapplication_mobile.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadDroneFile = () => {
  const link = document.createElement("a");
  link.href = CDN_URL + "pdf/Skylab_Cahier_des_charges_du_drone.pdf";
  link.setAttribute("download", "Skylab_Cahier_des_charges_du_drone.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-8">Documentation</h1>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Site web</h2>
          <div class="text-primary-100 space-y-4"
               @click="downloadWebFile">
            <p class="cursor-pointer underline hover:text-blue-600">Cahier des charges</p>
          </div>
          <div class="text-primary-100 space-y-4"
               @click="downloadWebSpecsFile">
            <p class="cursor-pointer underline hover:text-blue-600">Spécifications fonctionnelles et techniques</p>
          </div>
        </div>
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Radiocommande</h2>
          <div class="text-primary-100 space-y-4"
               @click="downloadRemoteFile">
            <p class="cursor-pointer underline hover:text-blue-600">Cahier des charges</p>
          </div>
        </div>
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Application mobile</h2>
          <div class="text-primary-100 space-y-4"
               @click="downloadMobileFile">
            <p class="cursor-pointer underline hover:text-blue-600">Cahier des charges</p>
          </div>
          <div class="text-primary-100 space-y-4"
               @click="downloadMobileSpecsFile">
            <p class="cursor-pointer underline hover:text-blue-600">Spécifications fonctionnelles et techniques</p>
          </div>
        </div>
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Drone</h2>
          <div class="text-primary-100 space-y-4"
               @click="downloadDroneFile">
            <p class="cursor-pointer underline hover:text-blue-600">Cahier des charges</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>