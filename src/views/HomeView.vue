<script setup>
import Card from '@/components/main/card.vue';
import Media from '@/components/main/media.vue';
</script>

<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card title="Drone" link="#" image-url="src/components/icons/skylab_logo.png" />
            <Card title="Drone" link="#" image-url="src/components/icons/skylab_logo.png" />
            <Card title="Drone" link="#" image-url="src/components/icons/skylab_logo.png" />
            <Card title="Drone" link="#" image-url="https://lepauledorion.com/wp-content/uploads/2022/01/arcane.jpeg?w=1024" />
        </div>
    </div>
    <div class="flex gap-4 margin-1">
        <Media src="https://via.placeholder.com/300" type="image" />
        <Media src="https://via.placeholder.com/200x150" type="image" />
        <Media src="/videos/sample-video.mp4" type="video" />
    </div>
</template>
