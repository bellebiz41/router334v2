<template>
    <div class="box_all">
      <div class="col" v-for="(destination, index) in travelList" :key="index">
        <div class="card">
          <img :src="destination.img" class="card-img-top" alt="Travel Destination">
          <div class="card-body">
            <h3 class="card-title">{{ destination.name }}</h3>
            <p class="card-text">Price : {{ destination.price }} Baht</p>
            <h6 class="card-subtitle">5 people per 1 table</h6>
            <br>
  
            <button class="btn btn-primary" @click="reserveTable(destination.name, destination.quantity)">reserve</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import { ref } from 'vue';
  
  const travelList = ref([
  {name:'Portobello & Désiré Cafe',    price:275, img:"https://i.pinimg.com/564x/37/6b/58/376b58caaa791fe2eeab996e8bbc12a2.jpg", quantity: 0 ,
      text_box:'  Portobello & Désiré เป็นคาเฟ่ในบ้านสีขาวสไตล์วินเทจ บรรยากาศแบบ English Country Home ภายในตกแต่งด้วยเฟอร์นิเจอร์สไตล์วินเทจดูอบอุ่น ล้อมรอบด้วยสวนสวย เหมาะกับการไปนั่งชิลล์ในวันสบายๆ พร้อมอร่อยกับอาหารฝรั่งโฮมเมดหลากเมนู รวมถึงขนมเค้กที่อบใหม่จากเตาทุกวัน'
      },
  ]);
  
  </script>
  
  
  <style scoped>
  .card {
    width: 18rem;
    margin: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(199, 20, 160, 0.1);
    background-color: #FADCDC;
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