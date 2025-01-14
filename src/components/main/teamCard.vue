<script setup>
defineProps({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    stack: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <!-- Photo -->
        <div class="flex justify-center">
            <img
                :src="photo"
                alt="Profile photo"
                class="w-24 h-24 rounded-full object-cover bg-purple-200"
            />
        </div>

        <!-- Nom et Métier -->
        <div class="text-center mt-4">
            <h2 class="text-xl font-bold text-primary_dark">{{ name }}</h2>
            <p class="text-sm text-dark">{{ role }}</p>
        </div>

        <!-- Séparateur -->
        <hr class="my-6 border-t border-gray-300" />

        <!-- À propos -->
        <div>
            <h3 class="text-lg font-bold text-primary_dark">À propos</h3>
            <p class="text-sm text-dark mt-2">{{ about }}</p>
        </div>

        <!-- Séparateur -->
        <hr class="my-6 border-t border-gray-300" />

        <!-- Stack technique -->
        <div>
            <h3 class="text-lg font-bold text-primary_dark">Stack technique</h3>
            <div class="mt-4 space-y-2">
                <div v-for="(value, key) in stack" :key="key" class="flex justify-between text-sm">
                    <span class="font-bold text-gray-800">{{ key }}</span>
                    <span class="text-gray-600">{{ value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
