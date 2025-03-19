<script setup lang="ts">
import { ref } from 'vue';
import {CDN_URL} from "../config.ts";

const teamMembers = ref([
  {
    id: 1,
    name: 'Barbet Sacha',
    role: 'Développeur Logiciel, Mobile, Iot & Chef de projet',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/sacha.jpeg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1351857300159074304/1696676661920.jpeg?ex=67dbe6b8&is=67da9538&hm=692b56091767e70eadb067772652a39ed403caaf7449d73731ab64d9b4e1faba&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 2,
    name: 'Pidoux Gaël',
    role: 'Développeur Logiciel, Mobile, Iot & Chef de projet',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/gael.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1329002152202342450/PXL_20250115_0815407992.jpg?ex=67dbcfb4&is=67da7e34&hm=b7d5698d5222c589d5e2815c56c598b74603dc90051a5855f6a91d336059bd59&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 3,
    name: 'François Loan',
    role: 'Développeur Logiciel, Mobile & IOT',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/loan.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1351865447816888340/ynov-identite.jpg?ex=67dbee4f&is=67da9ccf&hm=d204566c2e2005563ee72d4d753221de5e67b5011f863416306192469df69645&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 1,
    name: 'Coeur Maxence',
    role: 'Développeur Logicel, Mobile & Iot',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/maxence.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1328118552724770888/Screenshot_20221222_211455.jpg?ex=67db3bca&is=67d9ea4a&hm=5c1437409248d2686a089837bf25d909d6237c4757ebc6bf394ed3ae1967adb9&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 2,
    name: 'Richard de Vesvrotte Amaury',
    role: 'Développeur Logiciel, Mobile & Iot',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/amaury.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1328109818736803840/IMG_20240928_212634.jpg?ex=67db33a7&is=67d9e227&hm=9604008d5684ca4027054ba7de1d4c780a57005a8a6b4ad96f1e627306003c44&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 3,
    name: 'Fathipoursasansara Adelia',
    role: 'Développeuse Logiciel, Mobile & Iot',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/adelia.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1328108737780650075/IMG_3282.jpg?ex=67db32a6&is=67d9e126&hm=bd2b2e8bf09fcfc49829d9d2f68cf68fda49a70314023a07c560a431e782d41d&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 1,
    name: 'Abo-Alrub Jamil',
    role: 'Data  Scientist',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/jamil.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1344299782851530802/1351900442199719936/438799072_7327703210659174_8210856045386759170_n.jpg?ex=67dc0ee6&is=67dabd66&hm=506b666894a399f6a4e9b5da0ce6c0ba37f38a2c026ecff159a05d05c830df8a&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 2,
    name: 'Ribes Thibault',
    role: 'Developpeur Web',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/thibault.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1328109049224499322/PXL_20240714_195216309.PORTRAIT.jpg?ex=67db32f0&is=67d9e170&hm=c8f2d160d614a2ef17b66b7e8c63bbbe270c52950156792d7eeb2c3ff37d7bac&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  },
  {
    id: 3,
    name: 'Chollet Gaëtan',
    role: 'Développeur Web',
<<<<<<< HEAD
    photo: CDN_URL + 'images/members/gaetan.jpg'
=======
    photo: 'https://cdn.discordapp.com/attachments/1296865465058201643/1328108963534733486/DSC_0114.jpg?ex=67db32db&is=67d9e15b&hm=3a952b0f6f424de43e1727a7b16a8d14a64db68236765768973075004a40b4aa&'
>>>>>>> afd82a4 (fill home & project & mobile + fix head)
  }
]);
</script>

<template>
  <section class="py-16 bg-primary-100">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-600">Notre Équipe</h2>
      
      <div class="grid grid-cols-3 md:grid-cols-3 gap-6">
        <div v-for="member in teamMembers" :key="member.id" 
             class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="member.photo" :alt="member.name" class="w-full h-80 object-cover" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-primary-500">{{ member.name }}</h3>
            <p class="text-sm text-primary-400">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
