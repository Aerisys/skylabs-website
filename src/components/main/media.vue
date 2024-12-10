<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'image', // "image" ou "video"
        validator: (value) => [
            'image',
            'video'
        ].includes(value)
    }
});
</script>

<template>
    <div class="flex-1 w-full h-full overflow-hidden rounded-md bg-gray-200">
        <!-- Affichage de l'image -->
        <img
            v-if="type === 'image'"
            :src="src"
            alt="Media content"
            class="w-full h-full object-cover"
        />

        <!-- Affichage de la vidéo -->
        <video
            v-else
            :src="src"
            controls
            class="w-full h-full object-cover"
        ></video>
    </div>
</template>
