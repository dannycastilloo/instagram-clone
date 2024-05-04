<script>
export default {
    name: 'USER',
    props: {
        pfp: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-2">
        <img
            class="w-16 rounded-full"
            :src="pfp"
            :alt="username"
            :title="username" >
        <span class="text-gray-300 text-sm text-center">{{ username }}</span>
    </div>
</template>