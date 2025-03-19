<template>
  <footer class="bg-primary-500 py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold text-primary-100 mb-4">Contact</h3>
          <a href="mailto:skylab.ydays@proton.me"
             class="text-primary-100 hover:text-primary-200 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            skylab.ydays@proton.me
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
        <p class="text-center text-primary-100">&copy; 2024 Skylab. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>