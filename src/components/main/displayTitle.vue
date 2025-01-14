<template>
    <section
        class="relative w-full bg-cover bg-center margin-bottom-2 text-white py-16 md:py-32 lg:py-64"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
        <div class="container mx-auto text-center px-4 relative z-10">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">
                {{ title }}
            </h1>
            <p class="text-lg md:text-2xl text-white">
                {{ subtitle }}
            </p>
        </div>
        <!-- Overlay pour améliorer la lisibilité du texte -->
        <div class="absolute inset-0 bg-black opacity-50"></div>
    </section>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
    backgroundImage: {
        type: String,
        required: true,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.relative{
    position: relative;
}

.container{
    position: relative;
    z-index: 10; /* Assure que le contenu est au-dessus de l'overlay */
}

.bg-cover{
    background-size: cover;
}

.bg-center{
    background-position: center;
}

.absolute{
    position: absolute;
}

.inset-0{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
