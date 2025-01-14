<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';

let header = null;
const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const handleScroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('header-sticky');
        header.classList.remove('header-top');
    } else {
        header.classList.remove('header-sticky');
        header.classList.add('header-top');
    }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
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
    <header class="bg-dark bg-opacity-80 text-white margin-bottom-1 header-top margin-2">
        <div class="container mx-auto flex justify-between items-center p-4">
            <!-- Logo -->
            <router-link to="/" class="text-2xl font-bold hover:text-secondary">
                <img src="../icons/skylab_logo.png" alt="Logo" class="h-8">
            </router-link>

            <!-- Navigation (desktop) -->
            <nav class="hidden md:flex space-x-6">
                <router-link
                    to="/"
                    class="hover:text-secondary"
                    :class="{ active: route.path === '/' }"
                >
                    Accueil
                </router-link>
                <router-link
                    to="/drone"
                    class="hover:text-secondary"
                    :class="{ active: route.path === '/drone' }"
                >
                    Le Drone
                </router-link>
                <router-link
                    to="/mobile"
                    class="hover:text-secondary"
                    :class="{ active: route.path === '/mobile' }"
                >
                    App Mobile
                </router-link>
                <router-link
                    to="/documentation"
                    class="hover:text-secondary"
                    :class="{ active: route.path === '/documentation' }"
                >
                    Documentation
                </router-link>
                <router-link
                    to="/team"
                    class="hover:text-secondary"
                    :class="{ active: route.path === '/team' }"
                >
                    Gestion de Projet
                </router-link>
            </nav>

            <!-- Menu (mobile) -->
            <button id="menu-button" class="md:hidden flex items-center" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <!-- Dropdown (mobile) -->
        <div
            id="mobile-menu"
            :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
            class="md:hidden bg-primary text-white transition-all"
        >
            <router-link
                to="/"
                class="block px-4 py-2 hover:bg-secondary"
                :class="{ active: route.path === '/' }"
                @click="isMenuOpen = false"
            >
                Accueil
            </router-link>
            <router-link
                to="/drone"
                class="block px-4 py-2 hover:bg-secondary"
                :class="{ active: route.path === '/drone' }"
                @click="isMenuOpen = false"
            >
                Le Drone
            </router-link>
            <router-link
                to="/mobile"
                class="block px-4 py-2 hover:bg-secondary"
                :class="{ active: route.path === '/mobile' }"
                @click="isMenuOpen = false"
            >
                App Mobile
            </router-link>
            <router-link
                to="/documentation"
                class="block px-4 py-2 hover:bg-secondary"
                :class="{ active: route.path === '/documentation' }"
                @click="isMenuOpen = false"
            >
                Documentation
            </router-link>
            <router-link
                to="/team"
                class="block px-4 py-2 hover:bg-secondary"
                :class="{ active: route.path === '/team' }"
                @click="isMenuOpen = false"
            >
                Gestion de Projet
            </router-link>
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
    border-radius: 0;
    margin: 0 !important;
    z-index: 1000;
    transition: all 0.3s ease;
}

a.active{
    font-weight: bold;
    color: #05A3F7;
    border-bottom: 2px solid #05A3F7;
}

a.active.block{
    background-color: #ecf4ff;
}
</style>
