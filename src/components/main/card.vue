<script setup>
defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-xl margin-2 hover:shadow-lg transition-transform transform hover:scale-105">
        <!-- Image -->
        <img :src="imageUrl" alt="Card image" class="w-full object-cover fit-size transition-transform transform hover:scale-110" />

        <!-- Texte superposé -->
        <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold">
            {{ title }}
        </div>

        <!-- Découvrir bouton -->
        <div class="absolute bottom-4 right-4 text-center bg-primary rounded-md px-3 opacity-80 hover:opacity-100 transition">
            <a
                :href="link"
                class="text-white font-semibold"
            >
                Découvrir
            </a>
        </div>
    </div>
</template>
