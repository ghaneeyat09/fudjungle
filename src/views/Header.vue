<template>
    <div id="header">
        <div class="heading">  
         <h2>{{header2}}</h2>
         <p>{{para}}</p>
         <h1>{{header1}}</h1>
      </div>
      <div class="img">
             <img :src="require('@/assets/images/foodplate.png')" />
      </div>

    </div>
</template>
<script>
export default {
    name: "Header",
    props: ['header1', 'header2', 'para']
}
</script>
<style scoped>
  #header .heading{
         width: 100%;
         margin: auto;
         height: 290px;
         text-align: center;
         text-transform: uppercase;
         background-image: linear-gradient(270deg,rgb(16, 15, 15), rgb(6, 253, 6), rgb(16,15,15));
         padding-top: 100px;
         font-family: 'IBM Plex Mono', monospace;
  }
  #header .heading h1{
         font-size: 60px;
         color: white;
     }
  #header .heading h2{
         font-size: 30px;
         color: rgb(16, 15,15)
     }
  #header .heading p{
        margin-top: 5px;
        text-align: center;  
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        text-transform: capitalize; 
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
       @media screen and (max-width: 600px){
         #header .heading h1{
         font-size: 40px;
         color: white;
       }
        #header .heading h2{
         font-size: 25px;
         color: rgb(16, 15,15)
          }
        }
     @media screen and (max-width: 350px){
         .img{
           width: 180px;
         }
         #header .heading h1{
         font-size: 35px;
         color: white;
       }
        #header .heading h2{
         font-size: 20px;
         color: rgb(16, 15,15)
          }
      }
       @media screen and (max-width: 350px){
           .img{
             width: 170px;
            }
            #header .heading h1{
             font-size: 30px;
             color: white;
          }
            #header .heading h2{
              font-size: 20px;
              color: rgb(16, 15,15)
              }
          
       }
</style>