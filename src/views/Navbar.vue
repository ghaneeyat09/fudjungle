<template>
    <div id="navbar">
        <div>
            <router-link to="/" class="nav-item">home</router-link>
            <router-link to="/about" class="nav-item">about</router-link>
            <router-link to="/menu" class="nav-item">menu</router-link>
            <router-link to="/staff" class="nav-item">staff</router-link>
            <router-link to="/gallery" class="nav-item">gallery</router-link>
            <router-link to="/contact" class="nav-item">contact</router-link>
            <router-link to="/reviews" class="nav-item">reviews</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    #navbar{
        position: relative;
        z-index: 1;
    }
    #navbar div{
        display: flex;
        flex-direction: column-reverse;
        height: 100vh;
        position: absolute;
        top: 0;
        bottom: 0;
    }
    #navbar .nav-item{
        transform: rotate(-90deg);
        list-style: none;
        color: rgb(23, 148, 1);
        padding: 20px 5px;
        width: 50px;
        margin-top: 15px;
        text-transform: capitalize;
        /* font-family: 'Barlow', sans-serif; */
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        transition: color .5s ease;
    }
    #navbar .nav-item:hover{
        color: rgb(6, 253, 6);
    }
</style>