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
    <div>
        <img
            class=""
            :src="pfp"
            :alt="username"
            :title="username" >
        <span class="text-white text-center">{{  }}</span>
    </div>
</template>