<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-8">Gestion de Projet</h1>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Nos Outils</h2>
          <div class="space-y-6">
            <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer"
               class="flex items-center p-4 bg-primary-400 rounded-lg hover:bg-primary-300 transition-colors">
              <img src="https://www.notion.so/images/favicon.ico" alt="Notion" class="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-lg font-semibold text-primary-100">Notion</h3>
                <p class="text-primary-200">Documentation et suivi des tâches</p>
              </div>
            </a>
            
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer"
               class="flex items-center p-4 bg-primary-400 rounded-lg hover:bg-primary-300 transition-colors">
              <img src="https://www.figma.com/favicon.ico" alt="Figma" class="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-lg font-semibold text-primary-100">Figma</h3>
                <p class="text-primary-200">Design et maquettes</p>
              </div>
            </a>
            
            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer"
               class="flex items-center p-4 bg-primary-400 rounded-lg hover:bg-primary-300 transition-colors">
              <img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" alt="Google Drive" class="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-lg font-semibold text-primary-100">Google Drive</h3>
                <p class="text-primary-200">Stockage et partage de fichiers</p>
              </div>
            </a>
          </div>
        </div>

        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Planning</h2>
          <div class="space-y-4">
            <div class="bg-primary-400 p-4 rounded-lg">
              <h3 class="text-primary-100 font-semibold">Phase 1 - Conception</h3>
              <p class="text-primary-100/80">Description de la phase...</p>
            </div>
            <div class="bg-primary-400 p-4 rounded-lg">
              <h3 class="text-primary-100 font-semibold">Phase 2 - Développement</h3>
              <p class="text-primary-100/80">Description de la phase...</p>
            </div>
            <div class="bg-primary-400 p-4 rounded-lg">
              <h3 class="text-primary-100 font-semibold">Phase 3 - Tests</h3>
              <p class="text-primary-100/80">Description de la phase...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>