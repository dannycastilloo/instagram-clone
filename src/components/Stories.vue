<script>
import usersData from '../data/users.js'
import User from './User.vue'

export default {
    name: 'STORIES',
    components: {
        User
    },
    data() {
        return {
            users: usersData
        }
    }
}
</script>

<template>
    <div class="flex justify-center items-center gap-4">
        <User 
            v-for="(user, index) in users" 
            :key="index" 
            :pfp="user.pfp" 
            :username="user.name" />
    </div>
</template>