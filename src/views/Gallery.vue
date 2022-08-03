<template>
    <div id="gallery">
        <Header header1="gallery" header2="food"/>
        <div class="gallery">
              <div class="img1">
                <img :src="require('@/assets/images/img6.jpg')"/>
              </div>
              <div class="img2">
                <img :src="require('@/assets/images/img7.jpg')" />
              </div>
              <div class="img12">
                <video autoplay loop>
                      <source :src="require('@/assets/images/vid2.mp4')" >
                </video>
              </div> 
              <div class="img3">
                <img :src="require('@/assets/images/img8.jpg')" />
              </div>
              <div class="img4">
                <img :src="require('@/assets/images/img9.jpg')"/>
              </div>
              <div class="img5">
                <img :src="require('@/assets/images/img10.jpg')"/>
              </div>
              <div class="img6">
                <img :src="require('@/assets/images/img11.jpg')"/>
              </div>
              <div class="img7">
                <img :src="require('@/assets/images/img19.jpg')"/>
              </div>
              <div class="img8">
                <img :src="require('@/assets/images/img13.jpg')"/>
              </div>
              <div class="img9">
                <img :src="require('@/assets/images/img14.jpg')"/>
              </div>
              <div class="img10">
                <img :src="require('@/assets/images/img15.jpg')"/>
              </div>
              <div class="img11">
                <video autoplay loop>
                      <source :src="require('@/assets/images/vid1.mp4')" >
                </video>
              </div>
              <div class="img13">
                <img :src="require('@/assets/images/img18.jpg')"/>
              </div>
              <div class="img14">
                <img :src="require('@/assets/images/img20.jpg')"/>
              </div>
    </div>
    </div>
</template>

<script>
import Header from "./Header.vue"
export default {
    name: "Gallery",
    components: {
      Header
    }
}
</script>

<style scoped>
    #gallery{
      width: 100%;
      background-color: rgb(16, 15, 15);
      padding-bottom: 100px;
    }
    #gallery .heading{
         width: 100%;
         margin: auto;
         height: 290px;
         text-align: center;
         text-transform: uppercase;
         background-image: linear-gradient(270deg,rgb(5,5,5), rgb(6, 253, 6), rgb(5,5,5));
         color: rgb(5, 5, 5);
         padding-top: 100px;
         font-family: 'IBM Plex Mono', monospace;
         font-weight: 500;
     }
     .heading h1{
         font-size: 70px;
         color: white;
     }
     .heading h2{
         font-size: 30px;
     }
   .gallery{
      display: grid;
      width: 90%;
      margin: auto;
      margin-top: 220px;
      height: auto;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: .4fr .7fr .4fr .5fr .4fr .4fr .4fr .5fr;
      grid-template-areas: 
        "img1 img1 img2 img2"
        "img12 img12 img12 img12"
        "img3 img3 img4 img4"
        "img6 img6 img6 img5"
        "img7 img7 img8 img8"
        "img7 img7 img9 img9"
        "img10 img11 img11 img11"
        "img13 img13 img14 img14"
        ;
        grid-gap: 20px;
  }
  .gallery div{
    overflow: hidden;
  }
  .gallery div img{
      position: relative;
      width: 100%;
      height: 100%;
  }
  .gallery div video{
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .img1{
      grid-area: img1;
  }
  .img2{
      grid-area: img2;
  }
  .img3{
      grid-area: img3;
  }
  .img4{
      grid-area: img4;
  }
  .img5{
      grid-area: img5;
  }
  .img6{
      grid-area: img6;
  }
  .img7{
      grid-area: img7;
  }
  .img8{
      grid-area: img8;
  }
  .img9{
      grid-area: img9;
  }
  .img10{
      grid-area: img10;
  }
  .img11{
      grid-area: img11;
  }
  .img12{
      grid-area: img12;
  }
  .img13{
      grid-area: img13;
  }
  .img14{
      grid-area: img14;
  }
  .vector{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 200px;
  }
  .vector2{
      position: absolute;
      top: 0;
      right: 0;  
      transform: rotate(180deg);
      width: 200px;
  }
  
</style>