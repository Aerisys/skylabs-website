<script setup>
import {onMounted, onUnmounted} from 'vue';

let header = null;

const handleScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('header-sticky');
        header.classList.remove('header-top');
    } else {
        header.classList.remove('header-sticky');
        header.classList.add('header-top');
    }
};

onMounted(() => {
    header = document.querySelector('header');
    header.classList.add('header-top');
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header class="bg-tertiary bg-opacity-80 text-primary margin-bottom-1 header-top">
        <div class="container mx-auto flex justify-between items-center p-4">
            <!-- Logo -->
            <a href="/" class="text-2xl font-bold hover:text-[#6A9FBE]">
                <img src="../icons/skylab_logo.png" alt="Logo" class="h-8">
            </a>

            <!-- Navigation (desktop) -->
            <nav class="hidden md:flex space-x-6">
                <a href="/" class="hover:text-[#6A9FBE]">Accueil</a>
                <a href="/about" class="hover:text-[#6A9FBE]">À propos</a>
                <a href="/features" class="hover:text-[#6A9FBE]">Fonctionnalités</a>
                <a href="/contact" class="hover:text-[#6A9FBE]">Contact</a>
            </nav>

            <!-- Menu (mobile) -->
            <button id="menu-button" class="md:hidden flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <!-- Dropdown (mobile) -->
        <div id="mobile-menu" class="hidden md:hidden bg-[#0369A1] text-white">
            <a href="/" class="block px-4 py-2 hover:bg-[#6A9FBE]">Accueil</a>
            <a href="/about" class="block px-4 py-2 hover:bg-[#6A9FBE]">À propos</a>
            <a href="/features" class="block px-4 py-2 hover:bg-[#6A9FBE]">Fonctionnalités</a>
            <a href="/contact" class="block px-4 py-2 hover:bg-[#6A9FBE]">Contact</a>
        </div>
    </header>

</template>

<style scoped>
.header-top{
    margin-top: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.header-sticky{
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 0;
    border-radius: 0;
    z-index: 1000;
    transition: all 0.8s ease;
}
</style>
