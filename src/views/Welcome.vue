<template>
  <div id="welcome">
    <div class="welcome1">
        <div>
            <h1>welcome to fudjungle</h1>
            <p>FudJungle fusce ut velit vitae eros ultrices sagittis vel sed mi. Nam pharetra sollicitudin ligula malesuada fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ante non ullamcorper vehicula. Suspendisse potenti. Nullam gravida lorem ut accumsan semper. Cras tincidunt eros nec rhoncus vehicula. Mauris nulla diam, fermentum vitae magna id, tempus faucibus dolor. Cras eget bibendum turpis. Suspendisse potenti.</p>
            <button>get familiar with food jungle</button>
        </div>
        <div>
          <img :src="require('@/assets/images/img5.jpg')" />
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Welcome"
}
</script>
<style scoped>
#welcome{
    background-color: rgb(16, 15, 15);
    padding: 150px 30px;
}
  .welcome1{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction:row-reverse;
      width: 100%;
      margin: 0;
      position: relative;
      z-index: 1;
  }
  .welcome1 div:nth-child(1){
      width: 30%;
      padding: 0 30px 0 0;
  }
  .welcome1 div:nth-child(2){
      width: 60%;
  }
  .welcome1 div img{
      width: 100%;
  }
  .welcome1 div h1{
      color: rgb(6, 253, 6);
      text-transform: capitalize;
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 200;
      margin-bottom: 50px;
  }
  .welcome1 div p{
      color: white;
      font-family: 'Barlow', sans-serif;
      line-height: 20px;
  }
  button{
      width: 200px;
      height: 50px;
      background-color: rgb(6, 253, 6);
      margin-top: 30px;
      text-transform: capitalize;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      border: none;
      outline: none;
  }
   @media screen and (max-width: 880px){
        #welcome{
            padding: 150px 15px;
        }
        .welcome1{
          display: block;
          width: 80%;
          margin: auto;
        }
        .welcome1 div:nth-child(1){
            width: 80%;
            text-align: center;
            margin: auto;
            padding: 0;
        }
        .welcome1 div:nth-child(2){
            width: 100%;
            margin-top: 50px;
        }
     }
      @media screen and (max-width: 500px){
        #welcome{
            padding: 150px 15px 80px 15px;
          }
        .welcome1{
            width: 90%;
          }
        .welcome1 div:nth-child(1){
            width: 90%;
        }
      }
      @media screen and (max-width: 300px){
          .welcome1 div h1{
              font-size: 25px;
          }
      }
      @media screen and (max-width: 290px){
          button{
              width: 170px;
          }
         .welcome1 div p{
            font-size: 15px;
        }
      }
</style>