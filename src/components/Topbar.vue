<script>
import { RouterLink } from 'vue-router'
import SEARCH from './Search.vue'

export default {
    name: 'TOPBAR',
    components: {
        SEARCH,
    },
    directives: {
        RouterLink,
    }
}
</script>
<template>
    <div class="bg-black py-4 flex justify-between items-center md:hidden md:border-b md:border-gray-300">
        <div class="w-10/12 flex justify-between items-center m-auto">
            <RouterLink to="/" class="flex justify-start items-center w-3/12">
                <img src="/icons/logo.svg" alt="Instagram" title="Instagram">
            </RouterLink>
            <SEARCH class="w-6/12"></SEARCH>
            <RouterLink class="w-3/12 flex justify-end items-center">
                <img src="/icons/heart.svg" alt="Notifications" title="Notifications">
            </RouterLink>
        </div>
    </div>
</template>