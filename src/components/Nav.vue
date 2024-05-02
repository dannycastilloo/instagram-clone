<script>
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
        }
    }
}
</script>

<template>
    <div class="flex justify-center items-center px-5 py-3 w-16 hover:w-16 transition-all duration-300">
        <img 
            :src="imgSrc" 
            :alt="navName" 
            :title="navName" 
            class="w-full"
             />
    </div>
</template>