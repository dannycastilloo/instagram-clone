<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'NAV',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        navName: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
    directives: {
        RouterLink,
    },
    computed: {
        isMobileOrTablet() {
            const screenWidth = window.innerWidth
            return screenWidth < 1024
        }
    }
}
</script>

<template>
    <RouterLink :to="to" :title="navName">
        <div class="flex lg:gap-4 justify-center lg:justify-start items-center md:py-4 w-full transition-all duration-300 lg:w-52 rounded hover:bg-gray1 lg:px-3 lg:py-3"
            :class="{ 'hover:scale-110': isMobileOrTablet }">
            <img :src="imgSrc" :alt="navName" :title="navName" class="w-6 md:w-8 lg:w-6" />
            <span class="hidden text-white lg:flex">
                {{ navName }}
            </span>
        </div>
    </RouterLink>
</template>