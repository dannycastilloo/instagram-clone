<template>
    <NAVBAR />
    <router-view />
</template>

<script>
import NAVBAR from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NAVBAR
  }
}
</script>

<style>
</style>
