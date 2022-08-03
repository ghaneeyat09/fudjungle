<template>
    <div id="footer">
         
          <div class="container">
              <div>
                  <h1>fudjungle</h1>
                  <p>FudJungle fusce ut velit vitae eros ultrices sagittis vel sed mi. Nam pharetra sollicitudin ligula malesuada fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div>
                  <h1>we are on instagram</h1>
                  <div class="images">
                      <img :src="require('@/assets/images/img9.jpg')" />
                      <img :src="require('@/assets/images/img13.jpg')" />
                      <img :src="require('@/assets/images/img15.jpg')" />
                  </div>
                  <div class="images">
                      <img :src="require('@/assets/images/img16.jpg')" />   
                      <img :src="require('@/assets/images/img17.jpg')" />   
                      <img :src="require('@/assets/images/img20.jpg')" />   
                  </div>
              </div>
              <div>
                  <h1>contact us </h1>
                  <p class="stay">stay tuned with our updates! </p>
                  <input type="text" placeholder="Enter Email" class="input"/>
                  <h3 class="subscribe">subscribe</h3>
              </div>
          </div>
          <p class="devName">&copy; jamiu ganiyat {{year}}</p>
    </div>
</template>
<script>
export default {
    name: "Footer",
    setup(){
        const date = new Date();
        const year = date.getFullYear()

        return{
            year
        }
    }

}
</script>
<style scoped>
   #footer{
      width: 100%;
      margin: auto;
      text-align: center;
      padding-top: 100px;
      padding-bottom: 5px;
      background-color: rgb(5, 5, 5);
  }
  

  .container{
      width: 95%;
      display: flex;
      justify-content: space-between;
      margin: auto;
  }
  .container div{
      width: 30%;
  }
  .container div h1{
      margin-bottom: 30px;
      color: white;
      color: rgb(6, 253, 6);
      font-family: Arial, Helvetica, sans-serif;
      text-transform: capitalize;
      font-weight: 100;
      font-size: 20px;
  }
  .container div p{
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 25px;
  }
  .container .images{
      position: relative;
      width: 100%;
      display: flex;
      flex-wrap: no-wrap;
      justify-content: space-around;
      align-items: center;
  }
  .images img{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      /* width: 30%; */
      width: 7rem;
      height: 5rem;
      padding-bottom: 10px;
  }
  .input{
      margin-top: 20px;
      height: 30px;
      width: 200px;
  }
  .subscribe{
      text-transform: capitalize;
      color: rgb(6, 253, 6);
      font-size: 20px;
      text-decoration: underline;
      text-decoration-color: rgb(6, 253, 6);
      margin-top: 20px;
      font-family: Arial, Helvetica, sans-serif;
  }
  .stay{
      text-transform: capitalize;
  }
  .devName{
      text-transform: uppercase;
      text-align: center;
      color: white;
      color: rgb(23, 148, 1);
      font-family: Arial, Helvetica, sans-serif;
      padding-top: 30px;
      font-size: 14px;
  }
  @media screen and (min-width: 1200px){
        .images img{
              width: 7rem;
         }
  }
  @media screen and (max-width: 1200px){
      .images img{
          width: 6rem;
      }
  }
  @media screen and (max-width: 1000px){
      .images img{
          width: 5rem;
          height: 4rem;
      }
       .container div p{
      font-size: 14px;
    }
  }
  @media screen and (max-width: 910px){
       .container{
      width: 90%;
      display: block;
      margin: auto;
     }
       .container div{
      width: 100%;
      margin-bottom: 30px;

     }
      .container div p{
      font-size: 16px;
    }
    .container .images{
          height: 9rem;
          justify-content: space-between;
          margin-bottom: 10px;
      }
    .images img{
          width: 32%;
          height: 100%;
          padding-bottom: 0;

    }
  }
   @media screen and (max-width: 500px){
        .container .images{
          height: 7rem;
      }
       .images img{
          width: 31%;
          height: 100%;
       }
   }
    @media screen and (max-width: 400px){
         .container .images{
          height: 6rem;
      }
    }
    @media screen and (max-width: 300px){
         .container .images{
          height: 5rem;
      }
        }
</style>