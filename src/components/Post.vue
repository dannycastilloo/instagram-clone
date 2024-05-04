<script>
export default {
    name: 'POST',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="flex flex-col py-4 gap-4 w-72">
        <div class="flex justify-between items-center">
            <div class="flex justify-center items-center gap-2">
                <img class="w-8 rounded-full" :src="post.photo" :alt="user" :title="user" />
                <span class="text-gray-400">{{ post.user }}</span>
                <img src="/icons/verified.svg" alt="" title="" />
                <span class="text-gray-400">•</span>
                <span class="text-gray-400">{{ post.time }}</span>
            </div>
            <button class="text-gray-400">•••</button>
        </div>
        <img class="w-full" :src="post.photo" :alt="post.user" :title="post.user" />
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
                <img src="/icons/heart.svg" alt="" title="" />
                <img src="/icons/chat.svg" alt="" title="" />
                <img src="/icons/direct.svg" alt="" title="" />
            </div>
            <div>
                <img src="/icons/saved.svg" alt="" title="" />
            </div>
        </div>
        <span class="text-gray-300 font-medium">{{ post.likes }} likes</span>
        <div class="flex items-center">
            <p class="text-gray-400">
                <span>{{ post.user }}</span>
                <img src="/icons/verified.svg" alt="" title="" />
                {{ post.caption }}
            </p>
        </div>
    </div>
</template>