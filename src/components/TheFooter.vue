<template>
  <footer class="bg-primary-500 py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold text-primary-100 mb-4">Contact</h3>
          <a href="mailto:contact@aerisys.fr"
             class="text-primary-100 hover:text-primary-200 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            contact@aerisys.fr
          </a>
          <a href="https://linkedin.com/company/aerisys" target="_blank" rel="noopener noreferrer"
             class="text-primary-100 hover:text-primary-200 transition-colors flex items-center gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 48 48">
              <path fill="currentColor" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
              <path fill="#18547c" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
            LinkedIn
          </a>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-primary-100 mb-4">Localisation</h3>
          <p class="text-primary-100">
            Ynov Campus<br>
            6 Cr de Verdun Rambaud<br>
            69002 Lyon
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-primary-100 mb-4">Liens Rapides</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/project" class="text-primary-100 hover:text-primary-200 transition-colors">Le Projet</router-link>
            </li>
            <li>
              <router-link to="/team" class="text-primary-100 hover:text-primary-200 transition-colors">L'Équipe</router-link>
            </li>
            <li>
              <router-link to="/docs" class="text-primary-100 hover:text-primary-200 transition-colors">Documentation</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-primary-400">
        <p class="text-center text-primary-100">&copy; 2024 Aerisys. Tous droits réservés. <router-link to="/cgu" class="cursor-pointer underline hover:text-blue-600">CGU</router-link></p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>