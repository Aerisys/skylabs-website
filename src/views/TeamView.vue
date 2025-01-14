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

    <section
        v-for="category in categories"
        :key="category"
        class="w-full flex justify-center py-8"
    >
        <div class="w-full max-w-screen-lg text-center">
            <!-- Titre de la catégorie -->
            <h2 class="text-2xl font-bold text-primary mb-6">
                {{ category }}
            </h2>

            <!-- Cartes des membres -->
            <div
                class="flex flex-wrap justify-center gap-6"
            >
                <TeamCard
                    v-for="member in filteredTeam(category)"
                    :key="member.name"
                    :photo="member.photo"
                    :name="member.name"
                    :role="member.role"
                    :about="member.about"
                    :stack="member.stack"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import TeamCard from '@/components/main/teamCard.vue';
import DisplayTitle from '@/components/main/displayTitle.vue';

// Liste des membres de l'équipe
const team = [
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Alice Dupont',
        role: 'Développeur Web',
        category: 'Développeurs Web',
        about: 'Passionnée par les technologies modernes.',
        stack: {
            Langage: 'JavaScript',
            Frameworks: 'Vue.js, Tailwind CSS',
            'IDE/Tools': 'VS Code'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'John Doe',
        role: 'Développeur Web',
        category: 'Développeurs Web',
        about: 'Amoureux du code propre et efficace.',
        stack: {
            Langage: 'TypeScript',
            Frameworks: 'React, Tailwind CSS',
            'IDE/Tools': 'WebStorm'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Bob Martin',
        role: 'Designer',
        category: 'IOT',
        about: 'Création graphique et UI/UX.',
        stack: {
            Langage: 'HTML, CSS',
            Outils: 'Figma, Adobe XD'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Jane Smith',
        role: 'Designer',
        category: 'IOT',
        about: 'Innovatrice en design interactif.',
        stack: {
            Langage: 'HTML, CSS',
            Outils: 'Sketch, InVision'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Clara Smith',
        role: 'Chef de Projet',
        category: 'Chefs de Projet',
        about: 'Experte en gestion d’équipe et coordination.',
        stack: {
            Outils: 'Jira, Trello',
            Langage: 'Agile'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Michael Brown',
        role: 'Chef de Projet',
        category: 'Chefs de Projet',
        about: 'Leader en méthodologies agiles.',
        stack: {
            Outils: 'Asana, Monday.com',
            Langage: 'Scrum'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Emily White',
        role: 'Développeur Mobile',
        category: 'Mobile',
        about: 'Développeuse passionnée par les applications mobiles.',
        stack: {
            Langage: 'Kotlin',
            Frameworks: 'Android',
            'IDE/Tools': 'Android Studio'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'David Green',
        role: 'Développeur Mobile',
        category: 'Mobile',
        about: 'Expert en développement iOS.',
        stack: {
            Langage: 'Swift',
            Frameworks: 'iOS',
            'IDE/Tools': 'Xcode'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'Sophia Blue',
        role: 'Analyste de Données',
        category: 'Data',
        about: 'Passionnée par l’analyse des données.',
        stack: {
            Langage: 'Python',
            Outils: 'Pandas, NumPy',
            'IDE/Tools': 'Jupyter'
        }
    },
    {
        photo: 'https://via.placeholder.com/150',
        name: 'James Black',
        role: 'Analyste de Données',
        category: 'Data',
        about: 'Spécialiste en visualisation de données.',
        stack: {
            Langage: 'R',
            Outils: 'ggplot2, dplyr',
            'IDE/Tools': 'RStudio'
        }
    }
];

// Liste des catégories
const categories = [
    'Chefs de Projet',
    'IOT',
    'Mobile',
    'Data',
    'Développeurs Web'
];

// Filtrer les membres en fonction de la catégorie
const filteredTeam = (category) => {
    return team.filter((member) => member.category === category);
};
</script>
