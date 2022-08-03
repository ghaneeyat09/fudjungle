<template>
   <div id="reviews">
       <Header header1="reviews" header2="customer's" />
    </div>
         
</template>

<script>
import Header from "./Header.vue"
export default {
    name: "Reviews",
    components: {
        Header
    }

}
</script>

<style scoped>

  #reviews{
     background-color: rgb(16,15,15);
     height: 100vh;
  }
</style>