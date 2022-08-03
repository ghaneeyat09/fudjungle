<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from "./views/Navbar.vue"
import Footer from "./views/Footer.vue"
export default {
    name: "App",
    components: {
      Navbar,
      Footer
    }
}
</script>


<style>
</style>
