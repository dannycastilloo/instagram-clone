<script>
import postsData from '../data/posts.js'
import STORIES from '../components/Stories.vue'
import POST from '../components/Post.vue'

export default {
    name: 'HOMEVIEW',
    components: {
        STORIES,
        POST,
    },
    data() {
        return {
            posts: postsData,
        }
    }
}

</script>

<template>
    <main class="md:ml-72 py-6">
        <STORIES></STORIES>
        <div class="flex flex-col justify-center items-center">
            <POST 
                v-for="(post, index) in posts" 
                :key="index" 
                :post="post" />
        </div>
    </main>
</template>