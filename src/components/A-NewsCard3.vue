<template>
    <div class="box_all">
    <div class="col" v-for="(n,i) in travelList" :key="n">
      <div class="card" style="width: 25rem;" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p class="card-text">Price : {{ n.price }} Baht</p>
          <h6 class="card-subtitle">5 people per 1 table</h6>
          <br>
  
          <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> reserve </a>
        </div>
      </div>
    </div>
  </div>
  
  </template>
  
  <script setup>
  
  import { ref } from 'vue';
  
  const travelList=ref([
    {name:'Wood Cafe',   price:120, img:"https://i.pinimg.com/564x/b4/2a/bc/b42abc799c712e0ca58c02695f7839a7.jpg", quantity: 0 ,
    text_box:'คาเฟ่สุดชิลล์ออกแบบตกแต่งด้วยเฟอร์นิเจอร์ไม้ และของตกแต่งเก๋ไก๋ ท่ามกลางต้นไม้สีเขียวที่ช่วยเพิ่มความสดชื่น เป็นพื้นที่เหมาะสำหรับการมานั่งพักผ่อน ชิลล์กับเครื่องดื่มแก้วโปรด ขนมแสนอร่อย และอาหารจานเด็ด เสมือนโอเอซิสกลางกรุงที่ช่วยเติมพลังงานให้ชีวิต'
    }])
  
  </script>
  
  <style scoped>
  .card {
    width: 18rem;
    margin: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(199, 20, 160, 0.1);
    background-color: #E0E0F3;
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
  
  .card-subtitle {
    font-size: 1rem;
    color: #c985c0;
    margin-top: 10px;
  }
  
  .btn-primary {
    background-color: #8470FF;
    border: none;
    border-radius: 5px;
    color: #E6E6FA;
  }
  
  .btn-primary:hover {
    background-color: #4169E1;
  }
  
  .box_all {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
  }
  h6 {
    font-family: 'Mali', cursive;
    
  }
  .card-text {
    font-family: 'Mali', cursive;
  }
  button {
    font-family: 'Mali', cursive;
  }
  </style>
  