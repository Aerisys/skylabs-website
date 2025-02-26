<template>
  <div class="pt-20 min-h-screen bg-primary-600">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary-100 mb-8">Le Projet</h1>
      
      <div class="space-y-12">
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Notre Vision</h2>
          <p class="text-primary-100 mb-6">
            Description détaillée de votre projet...
          </p>
          
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Objectifs</h2>
          <ul class="list-disc list-inside text-primary-100 space-y-2 mb-6">
            <li>Objectif 1</li>
            <li>Objectif 2</li>
            <li>Objectif 3</li>
          </ul>
        </div>

        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-6">Processus de réalisation</h2>
          
          <div class="space-y-12">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                     alt="Phase de conception" 
                     class="rounded-lg shadow-lg w-full h-64 object-cover" />
              </div>
              <div class="w-full md:w-1/2">
                <h3 class="text-xl font-semibold text-primary-200 mb-3">Phase de conception</h3>
                <p class="text-primary-100">Description détaillée de la phase de conception...</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row-reverse items-center gap-8">
              <div class="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                     alt="Phase de développement" 
                     class="rounded-lg shadow-lg w-full h-64 object-cover" />
              </div>
              <div class="w-full md:w-1/2">
                <h3 class="text-xl font-semibold text-primary-200 mb-3">Phase de développement</h3>
                <p class="text-primary-100">Description détaillée de la phase de développement...</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                     alt="Phase de tests" 
                     class="rounded-lg shadow-lg w-full h-64 object-cover" />
              </div>
              <div class="w-full md:w-1/2">
                <h3 class="text-xl font-semibold text-primary-200 mb-3">Phase de tests</h3>
                <p class="text-primary-100">Description détaillée de la phase de tests...</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-primary-500/50 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-primary-200 mb-4">Technologies</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-primary-400 p-4 rounded-lg text-center text-primary-100">
              Tech 1
            </div>
            <div class="bg-primary-400 p-4 rounded-lg text-center text-primary-100">
              Tech 2
            </div>
            <div class="bg-primary-400 p-4 rounded-lg text-center text-primary-100">
              Tech 3
            </div>
            <div class="bg-primary-400 p-4 rounded-lg text-center text-primary-100">
              Tech 4
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>