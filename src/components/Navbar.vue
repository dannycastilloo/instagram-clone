<script>
import { RouterLink } from 'vue-router';
import NAV from './Nav.vue'

export default {
    name: 'NAVBAR',
    components: {
        NAV,
        RouterLink
    },
}
</script>

<template>
    <header class="fixed justify-center items-center bottom-0 bg-black w-full md:left-0 py-4 md:py-2 md:h-full md:w-auto md:px-8 lg:px-3 lg:border-r lg:border-gray-300 lg:py-4">
        <div class="w-10/12 md:h-full md:py-8 m-auto flex justify-between items-center md:flex-col lg:w-full lg:py-0">
            <NAV class="hidden md:flex lg:hidden" imgSrc="./icons/instagram.svg" navName="Home" to="/" />
            <RouterLink class="hidden lg:flex lg:justify-start lg:items-center w-full lg:pt-6 lg:px-2" to="/">
                <img src="/icons/logo.svg" >
            </RouterLink>
            <nav class="flex items-center justify-between w-full md:flex-col md:gap-4 md:m-auto lg:gap-2">
                <NAV imgSrc="./icons/home.svg" navName="Home" to="/" />
                <NAV class="hidden md:flex" imgSrc="./icons/search.svg" navName="Search" to="/search" />
                <NAV imgSrc="./icons/explore.svg" navName="Explore" to="/explore" />
                <NAV imgSrc="./icons/reel.svg" navName="Reels" to="/reels" />
                <NAV imgSrc="./icons/add.svg" navName="Create" to="/new-post" />
                <NAV imgSrc="./icons/messenger.svg" navName="Messages" to="/messenger" />
                <NAV class="hidden md:flex" imgSrc="./icons/heart.svg" navName="Notifications" to="/notifications" />
                <NAV imgSrc="./icons/user.svg" navName="Profile" to="/profile" />
            </nav>
            <div class="hidden md:flex md:flex-col lg:justify-center lg:items-center w-full lg:gap-2">
                <NAV imgSrc="./icons/at.svg" to="/notifications" navName="Threads" />
                <NAV imgSrc="./icons/menu.svg" to="/menu" navName="More" />
            </div>
        </div>
    </header>
</template>