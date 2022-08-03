<template>
  <div class="home">
    <div id="sect-1">
       <p class="logo logo1">fud</p>
    </div>
    <div id="sect-2">
      <p class="logo logo2">jungle</p>
    </div>
    <button class="btn">make a reservation</button>
    <div class="imgPng">
        <div>  
             <img :src="require('@/assets/images/foodplate.png')" />
        </div>
         </div>
    <div id="slider">
      <div class="image-cont">
          <img :src="require('@/assets/images/img3.jpg')" />
          <div class="text">
             <p>fud jungle</p>
             <p>where your cravings get satisfied at a go!</p>
          </div>
      </div>
    </div>
  </div>
  <Welcome />
  <div class="feature">
    <h1>our specials</h1>
    <div class="images">
        <div><img :src="require('@/assets/images/img12.jpg')"/></div>
        <div><img :src="require('@/assets/images/img20.jpg')"/></div>
        <div><img :src="require('@/assets/images/img17.jpg')"/></div>
        <div><img :src="require('@/assets/images/img16.jpg')"/></div>
    </div>
  </div>

</template>

<script>
import Welcome from "./Welcome.vue"
export default {
  name: 'HomeView',
  components: {
    Welcome
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100vh;
    display: flex;
  }
  #sect-1{
    position: relative;
    width: 50%;
    height: 100%;
    background-color: rgb(16, 15, 15);
  }
  #sect-2{
    position: relative;
    width: 50%;
    height: 100%;
    background-color: rgb(6, 253, 6);
  }
  .logo{
    font-size: 30px;
    text-transform: capitalize;
    font-family: 'Cormorant SC', serif;
  }
  .logo1{
    position: absolute;
    top: 10px;
    right: 3px;
    color: rgb(6, 253, 6);
    border: 2px solid rgb(6, 253, 6);
    border-right: none;
    padding-left: 10px;
  }
  .logo2{
    position: absolute;
    top: 10px;
    left: 3px;
    color: rgb(16, 15, 15);
    border: 2px solid black;
    border-left: none;
    padding-right: 10px;
  }
  #slider{
    position: absolute;
    top: 20%;
    width: 100%;
    height: auto;
  }
  .image-cont{
    position: relative;
    margin: auto;
    height: auto;
    width: 700px;
    transition: all .5s ease-in-out;
  }
  .image-cont img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .text{
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 90%;
  }
  .text p:nth-child(1){
    margin-left: -900px;
    font-size: 60px;
    font-family: 'Cormorant SC', serif;
    text-transform: capitalize;
    animation-name: animate;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    color: rgb(6, 253, 6);
  }
  .text p:nth-child(2){
    margin-right: -900px;
    font-size: 14px;
    font-family: 'Barlow', sans-serif;
    animation-name: animate2;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-duration: 3s;
    animation-timing-function: linear;
  }
  .btn{
    width: 150px;
    height: 35px;
    position: absolute;
    top: 10px;
    left: 30px;
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
  .feature{
    width: 100%;
    margin: auto;
    padding: 50px 0;
    background-color: white;
    text-align: center;
  }
  .feature h1{
    color: rgb(5, 5,5);
    text-transform: capitalize;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 200;
  }
  .feature .images{
    width: 100%;
    /* height: 220px; */
    display: flex;
    justify-content: space-around;
    margin-top: 150px;
    
  }
  .feature .images div{
    width: 20%;
    height: 230px;
  }
  .feature .images div img{
    width: 100%;
    height: 100%;
  }
  .imgPng{
         width: 100%;
         position: absolute;
         margin: auto;
         top: 200px;
         /* left: -50%; */
         /* transform: translate(-50%, -50%); */
         /* border-radius: 50%; */
         /* animation: cycle 15s linear infinite normal both; */
         display: none;
   }
  .imgPng div{
     width: 200px;
     margin: auto;
     border-radius: 50%; 
     animation: cycle 15s linear infinite normal both;

  }
 .imgPng img{
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
  @keyframes animate {
    0%{
      transform: translateX(0);
      opacity: 1

    }
    50%{
      transform: translateX(450px);
      opacity: 0;
    }
    100%{
      transform: translateX(450px);
      opacity: 1;
    }
  }
  @keyframes animate2 {
    0%{
      transform: translateX(0);
      opacity: 1
    }
    50%{
      transform: translateX(-450px);
      opacity: 0;
    }
    100%{
      transform: translateX(-450px);
      opacity: 1;
    }
  }
  @media screen and (max-width: 900px){
      #slider{
        top: 25%;
      }
      .image-cont{
          width: 600px;
  }
  }
   @media screen and (max-width: 750px){
      #slider{
        top: 30%;
      }
      .image-cont{
        width: 500px;
  }
   }
   @media screen and (max-width: 900px){
       .feature .images div{
           height: 170px;
       }
    
   }
    @media screen and (max-width: 650px){
      #slider{
        top: 30%;
      }
      .image-cont{
        width: 500px;
        transform: rotate(90deg);
      }
      .text{
        transform: rotate(270deg);
        width: 60%;
        top: 40%;
        left: 20%;
      }
       .text p:nth-child(1){
         font-size: 35px;
       }
        .text p:nth-child(2){
          font-size: 12px;
        }
        .btn{
          top: 60px;
          right: -50px;
          left: auto;
          transform: rotate(270deg);
          background-color: rgb(16, 15, 15);
          color: rgb(6, 253, 6);
        }
        .feature .images{
          flex-wrap: wrap;
        }
        .feature .images div{
          width: 45%;
          height: 230px;
          padding: 20px 0;
        }
    }
   @media screen and (max-width: 500px){
         #slider{
           display: none;
         }
         .imgPng{
           display: block;
         }
   }
   @media screen and (max-width: 400px){
     .features .images{
       flex-wrap: wrap;
     }
       .feature .images div{
            width: 90%;
            height: 280px;
       }
   }
    @media screen and (max-width: 350px){
      .btn{
          bottom: 60px;
          right: -50px;
          left: auto;
          top: auto;
        }
     
    }
     @media screen and (max-width: 290px){

         .imgPng div{
          width: 180px;
          }
     }
</style>
