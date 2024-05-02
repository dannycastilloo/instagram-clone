<script>
import { RouterLink } from 'vue-router'
import NAV from './Nav.vue'

export default {
    name: 'NAVBAR',
    components: {
        NAV,
    },
    directives: {
        RouterLink,
    }
}
</script>

<template>
    <header class="fixed justify-center items-center bottom-0 bg-black w-full md:left-0 md:w-20 md:h-full">
        <div class="w-10/12 md:h-full md:py-8 m-auto flex justify-center items-center md:flex-col md:w-full">
            <RouterLink to="/" class="hidden md:flex md:justify-center md:items-center">
                <NAV imgSrc="./icons/instagram.svg" navName="Home" />
            </RouterLink>
            <nav class="flex justify-between items-center md:justify-center md:flex-col md:gap-5 md:m-auto">
                <RouterLink to="/profile">
                    <NAV imgSrc="./icons/home.svg" navName="Home" />
                </RouterLink>
                <RouterLink to="/profile">
                    <NAV imgSrc="./icons/compass.svg" navName="Explore" />
                </RouterLink>
                <RouterLink to="/profile">
                    <NAV imgSrc="./icons/reel.svg" navName="Reels" />
                </RouterLink>
                <RouterLink to="/profile">
                    <NAV imgSrc="./icons/add.svg" navName="New Post" />
                </RouterLink>
                <RouterLink to="/profile">
                    <NAV imgSrc="./icons/messenger.svg" navName="Messenger" />
                </RouterLink>
                <RouterLink to="/profile">
                    <NAV imgSrc="./icons/user.svg" navName="Profile" />
                </RouterLink>
            </nav>
            <div class="hidden md:flex md:flex-col md:justify-center md:items-center">
                <RouterLink>
                    <NAV imgSrc="./icons/at.svg" />
                </RouterLink>
                <RouterLink>
                    <NAV imgSrc="./icons/menu.svg" />
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<style></style>