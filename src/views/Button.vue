<template>
     <button class="btn" :style="{left: left}">make a reservation</button>
</template>
<script>
export default {
    name: "Button",
    props: ["left"]
}
</script>
<style scoped>
   .btn{
    width: 150px;
    height: 35px;
    position: absolute;
    top: 10px;
    background-color: rgb(6, 253, 6);
    text-transform: capitalize;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s ease-in-out;
  }
  .btn:hover{
    background-color: rgb(23, 148, 1);
    color: rgb(6, 253, 6);
  }
</style>