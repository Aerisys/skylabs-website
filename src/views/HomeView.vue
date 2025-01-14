<script setup>
import Card from '@/components/main/card.vue';
import Media from '@/components/main/media.vue';
import DisplayTitle from '@/components/main/displayTitle.vue';
import InfoCard from '@/components/main/infoCard.vue';

const teamMembers = [
    {
        image: 'https://occ-0-1783-1009.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaUgUR39S276ExdMITZ4IvMeU-XzAyz3U4nZdVvK_JashVEouFEBgVzKBSgRIWShAjP8QWqCobBzwdwGfJYb86vIxs5Z3lZh8w.png',
        name: 'Jean Dupont',
        role: 'Développeur Frontend',
        quote: 'Le futur appartient à ceux qui innovent.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hmU34UVAfpzZKQMM29jQGyObC_TRSrd-d0os_bqlvOtQe1K2hkX2Mt1ahjzH4z6wHU0&usqp=CAU',
        name: 'Marie Curie',
        role: 'Designer UX/UI',
        quote: 'Créer, c\'est donner une forme à son avenir.'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'Paul Martin',
        role: 'Chef de Projet',
        quote: 'La gestion de projet est l\'art de diriger.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Sophie Durand',
        role: 'Développeuse Backend',
        quote: 'Le code est la poésie de la logique.'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Lucas Bernard',
        role: 'Ingénieur DevOps',
        quote: 'L\'automatisation est la clé de l\'efficacité.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        name: 'Emma Leroy',
        role: 'Analyste de Données',
        quote: 'Les données racontent des histoires.'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        name: 'Hugo Moreau',
        role: 'Architecte Logiciel',
        quote: 'La structure est la base de tout.'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        name: 'Chloé Petit',
        role: 'Spécialiste en Sécurité',
        quote: 'La sécurité est une priorité.'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        name: 'Maxime Lefevre',
        role: 'Consultant IT',
        quote: 'Le conseil est un art.'
    }
];
</script>

<template>
    <section>
        <div>
            <DisplayTitle
                backgroundImage="https://media.altchar.com/prod/images/gm_article_promo_image/8372bddb4e2b-arcane-savior-viktor.jpg"
                title="Titre de la Page"
                subtitle="Sous-titre pour présenter cette page"
            />
        </div>
    </section>
    <section>
        <div class="container mx-auto text-center mb-6">
            <h2 class="text-3xl font-bold">L'Équipe</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-center">
            <InfoCard
                v-for="(member, index) in teamMembers"
                :key="index"
                :image="member.image"
                :name="member.name"
                :role="member.role"
                :quote="member.quote"
            />
        </div>
    </section>
    <section>
        <div class="flex justify-center items-center min-h-screen">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card title="Drone" link="#" image-url="https://lepauledorion.com/wp-content/uploads/2022/01/arcane.jpeg?w=1024" />
            </div>
        </div>
    </section>


    <div class="flex gap-4 margin-1">
        <Media src="https://via.placeholder.com/300" type="image" />
        <Media src="https://via.placeholder.com/200x150" type="image" />
        <Media src="/videos/sample-video.mp4" type="video" />
    </div>
</template>

<style scoped>

</style>
