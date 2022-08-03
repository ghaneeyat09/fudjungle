<template>
  <div id="about">
         <Header header1="fudjungle" header2="welcome" para="to"/>
         <div class="wrapper">

            <p>We are unapologetically obsessed with our customer's satisfaction.</p>

            <p class="text">FudJungle fusce ut velit vitae eros ultrices sagittis vel sed mi. Nam pharetra sollicitudin ligula malesuada fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ante non ullamcorper vehicula. Suspendisse potenti. Nullam gravida lorem ut accumsan semper. Cras tincidunt eros nec rhoncus vehicula. Mauris nulla diam, fermentum vitae magna id, tempus faucibus dolor. Cras eget bibendum turpis. Suspendisse potenti.</p>
            <div>
                  <video autoplay loop>
                        <source :src="require('@/assets/images/vid3.mp4')" >
                  </video>
            </div>
         </div>

         <!-- <div id="div">
            <img :src="require('@/assets/images/welcome.png')" class="welcImg"/>
            <img :src="require('@/assets/images/welcome.png')" class="welcImg2"/>
         </div> -->
  </div>
</template>
<script>
import Button from "./Button.vue"
import Header from "./Header.vue"
export default {
    name: "About",
    components: {
      Button,
      Header
    }
}
</script>

<style scoped>
  #about{
    background-color: rgb(16,15,15);
    padding-bottom: 100px; 
  }
  #about p{
        text-align: center;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        text-transform: capitalize; 
  }
  #about .heading{
         width: 100%;
         margin: auto;
         height: 290px;
         text-align: center;
         text-transform: uppercase;
         background-image: linear-gradient(270deg,rgb(16, 15, 15), rgb(6, 253, 6), rgb(16,15,15));
         padding-top: 100px;
         font-family: 'IBM Plex Mono', monospace;
  }
  #about .heading h1{
         font-size: 60px;
         color: white;
     }
  #about .heading h2{
         font-size: 30px;
         color: rgb(16, 15,15)
     }
  #about .heading p{
    color: rgb(16, 15, 15);
    margin-top: 5px;
    
  }
  /* .welcImg{
    position: absolute;
    top: 0px;
    right: 20px;
    width: 100px;
    transform: rotate(265deg);
  }
  .welcImg2{
    width: 100px;
    position: absolute;
    top: 0;
    left: 20px;
    transform: rotate(180deg);
  } */
  .wrapper{
    width: 80%;
    margin: auto;
    margin-top: 200px;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize;
    color: rgb(23, 148, 1);
    color: white;
  }
  .wrapper p{
    line-height: 30px;
    font-size: 28px;
    text-align: center;  
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize; 
  }
  .wrapper div{
    width: 80%;
    margin: auto;
  }
  .wrapper div video{
    width: 100%;
    object-fit: cover;
    margin: auto;
    margin-top: 30px;
  }
  #about .text{
    width: 500px;
    font-size: 14px;
    text-align: center;
    line-height: 25px;
    margin: auto;
    margin-top: 20px;
  }
  .img{
         width: 200px;
         margin: auto;
         margin-top: -40px;
         border-radius: 50%;
         animation: cycle 15s linear infinite normal both;
     }
  .img img{
         width:100%
     }
     @keyframes cycle {
       from{
         transform: rotate(0)
       }
       to{
         transform: rotate(360deg)
       }
     }
     @media screen and (max-width: 700px){
       #about .text{
         width: 90%;
       }
       .wrapper div{
         width: 90%;
     }
     }
     
</style>