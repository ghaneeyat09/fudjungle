<template>
     <div id="menu">
         <Header header1= "menu" header2= "the"/>
         <div id="grid">
         <div class="div2 div">
             <h2>appetizer</h2>
             <ul class="inline">
                  <li class="menu-list">
                    <p> Fish chip cheese </p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>cheese chip </p>
                    <p>$22</p>
                 </li>
                   <li class="menu-list">
                    <p>potato wedge </p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>hamburger </p>
                    <p>$22</p>
                 </li>
             </ul>
         </div>
         <div class="div3 div">
             <h2>our favourite menu</h2>
             <ul>    
                  <li class="menu-list">
                    <p>hamburger </p>
                    <p>$22</p>
                 </li>
                 <li class="menu-list">
                    <p>french fries </p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>chicken burger</p>
                    <p>$22</p>
                 </li>
             </ul>
         </div>
         <div class="div4 div">
             <h2>pizza</h2>
             <ul>
                 <li class="menu-list">
                    <p>pepperoni pizza</p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>magherita pizza</p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>BBQ chiken pizza </p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>fruity pizza</p>
                    <p>$22</p>
                 </li>
             </ul>
         </div>
         <div class="div5 div">
             <h2>Drinks</h2>
             <ul>
                 <li class="menu-list">
                    <p>table water</p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>soda drink</p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>cocacola</p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                     <p>Chateau Fontaine Cherry Wine </p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                    <p>Carlson Vineyards Peach Wine</p>
                    <p>$22</p>

                </li>
                  <li class="menu-list">
                     <p>Maui Wine Maui Blanc</p>
                    <p>$22</p>
                 </li>
                  <li class="menu-list">
                     <p>Bishop's Orchards Apple Wines</p>
                     <p>$22</p>
                 </li>
             </ul>
         </div>
      </div>
     </div>
</template>

<script>
import Header from "./Header.vue"
export default {
    name: "Menu",
    components: {
        Header
    }
}
</script>

<style scoped>
     #grid{
         display: grid;
         height: auto;
         width: 80%;
         margin: auto;
         grid-template-columns: 1fr 1fr;
         grid-template-rows: 1fr 1fr 1fr;
         grid-gap: 10px;
         grid-template-areas: 
         "div2 div2"
         "div3 div5"
         "div4 div5";
         margin-top: 210px;
         color: white;
     }
     .div2{
         grid-area: div2;
         border: 5px solid rgb(23, 148, 1);
         padding: 10px 20px;
     }
     .div3{
         grid-area: div3;
         border: 5px solid rgb(23, 148, 1);
         padding: 10px 20px;


     }
     .div4{
         grid-area: div4;
         border: 5px solid rgb(23, 148, 1);
         padding: 10px 20px;
         
     }
     .div5{
         grid-area: div5;
         border: 5px solid rgb(23, 148, 1);
         padding: 10px 20px;

     } 
     #menu{
         width: 100%;
         margin: auto;
         background-color: rgb(16, 15, 15);
         padding-bottom: 100px;
     }
     .menu-list{
         display: flex;
         justify-content: space-between;
         align-items: center;
         height: 50px;
         font-family: Arial, Helvetica, sans-serif;
     }
     .inline li{
         display: flex;
     }
     .div h2{
         margin-bottom: 30px;
         text-transform: uppercase;
         font-size: 22px;
         font-family: Arial, Helvetica, sans-serif;
         color: rgb(6, 253, 6);
     }
     @media screen and (max-width: 600px){
          #grid{
              grid-template-columns: 1fr;
              grid-template-rows: .5fr .5fr .5fr 1fr;
              grid-template-areas: 
                "div2 div2"
                "div3 div3"
                "div4 div4"
                "div5 div5";

                }
            }
     @media screen and (max-width: 350px){
         #grid{
             width: 95%;
         }
     }
</style>