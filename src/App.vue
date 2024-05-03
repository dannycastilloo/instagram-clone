<script>
import NAVBAR from './components/Navbar.vue'
import TOPBAR from './components/Topbar.vue'

export default {
  name: 'App',
  components: {
    TOPBAR,
    NAVBAR
  }
}
</script>

<template>
  <TOPBAR />
  <NAVBAR />
  <router-view />
</template>

<style></style>
