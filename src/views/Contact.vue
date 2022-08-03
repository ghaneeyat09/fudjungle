<template>
    <div id="contact">
        <Header header1="contact" header2="our"/>
         <div class="form">
             <h1>Drop a message</h1>
             <form>
                 <div class="inputs">
                     <input type="text" placeholder="Enter Name" />
                     <input type="text" placeholder="Enter Email" />
                 </div>
                 <textarea placeholder="Your Message"></textarea><br>
                 <div class="check">
                    <input type="checkbox" class="checkbox"/>
                    <label>I agree that I submitted the data that is being collected and stored</label>
                 </div>
             </form>
         </div>
         <div class="details">
             <div>
                 <h2>Customer care</h2>
                 <p> 001345678235 </p>
                 <p> 001378906823 </p>
                 <p> 001211900335 </p>
             </div>
             <div>
                 <h2>Address</h2>
                 <p>7300, Lorem Street, California, IL, 55030</p>
             </div>
         </div>
    </div>
</template>
<script>
import Header from "./Header.vue"
export default {
    name: "Contact",
    components: {
        Header
    }
}
</script>
<style scoped>
    #contact{
        background-color: rgb(16, 15, 15);
        height: auto;
        padding-bottom: 100px;
    }
    
   
    .form{
        width: 35%;
        background-color: rgb(23, 148, 1);
        margin: auto;
        margin-top: 35vh;
        height: auto;
        padding: 10px 20px;
        position: relative;
        z-index: 1;
        border: 2px dashed rgb(6, 253, 6);
        border-bottom: none;
    }
    .form form{
        width: 100%;
    }
    .form h1{
        margin-bottom: 50px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }
    .inputs{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    textarea{
        width: 100%;
        height: 150px;
        padding-left: 10px;
    }
    .form input{
        height: 30px;
        width: 45%;
        padding-left: 10px;
    }
    .form .checkbox{
        width: 20px;
    }
    .check{
        display: flex;
        align-items: center;
    }
    .check input{
        margin-right: 10px;
        padding: none;
    }
    .check label{
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .details{
        width: 80%;
        height: auto;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: -100px;
        border: 2px dashed rgb(23, 148, 1);
        border-bottom: none;
        padding: 5px;
    }
    .details div{
        width: 35%;
        height: 250px;
        background-color: rgb(6, 253, 6);
        padding: 0 20px;
    }
    .details div h2{
        margin-top: 50px;
        margin-bottom: 40px;
    }
    .details div:nth-child(2){
        text-align: right;
    }
    @media screen and (max-width: 900px){
        .form{
             width: 50%;
        }
        .details{
             display: block;
             width: 50%;
             margin: auto;
        }
        .details div{
             width: 100%;
        }
        .details div:nth-child(2){
             text-align: left;
        }
    }
    @media screen and (max-width: 600px){
        .details{
            width: 70%;
        }
        .form{
            width: 70%;
        }
    }
    @media screen and (max-width: 450px){
        .details{
            width: 80%;
        }
        .form{
            width: 80%;
        }
    }
</style>