<template>
    <div class="bg-white_light rounded-lg shadow-lg p-6 text-center space-y-4 hover:transform hover:scale-105 transition-transform duration-300">
        <!-- Image -->
        <img
            :src="image"
            alt="Portrait"
            class="w-16 h-16 mx-auto rounded-full object-cover"
        />

        <!-- Nom et prénom -->
        <div>
            <h3 class="text-lg font-semibold text-dark">{{ name }}</h3>
            <p>{{ role }}</p>
        </div>

        <!-- Citation -->
        <p class="italic">
            “{{ quote }}”
        </p>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: ''
    },
    quote: {
        type: String,
        required: true
    }
});
</script>

<style scoped>

</style>
