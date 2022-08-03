<template>
    <div id="staff">
        <Header header1="staff" header2="our" />
    </div>
</template>
<script>
import Header from "./Header.vue"
export default {
    name: "Staff",
    components: {
        Header
    }
}
</script>

<style scoped>
  #staff{
      background-color: rgb(16,15,15);
      height: 100vh;
  }
  
</style>