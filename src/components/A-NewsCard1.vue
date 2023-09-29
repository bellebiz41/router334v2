<template>
    <div class="box_all">
      <div class="col" v-for="(n, i) in travelList" :key="n">
        <div class="card">
          <img :src="n.img" class="card-img-top" alt="Travel Destination">
          <div class="card-body">
            <h3 class="card-title">{{ n.name }}</h3>
            <p class="card-text">Price : {{ n.price }} Baht</p>
            <h6 class="card-subtitle">5 people per 1 table</h6>
            <br>
            <button class="btn btn-primary" @click="list_local_control(n.name, n.quantity)">reserve</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  
  import { ref } from 'vue';
  
  const travelList=ref([
  {name: 'Hookrajong Cafe',  price:200, img:"https://i.pinimg.com/564x/ed/02/7d/ed027d56a618a8a7463a075d1d0a8e85.jpg", quantity: 0 ,
      text_box:'สำหรับใครที่ชื่นชอบบรรยากาศแบบกลาสเฮ้าส์ดูโปร่งสบาย หูกระจง คาเฟ่ ถือเป็นอีกหนึ่งร้านที่ต้องแวะไปเยือน เพราะภายในเรือนกระจกขนาดใหญ่ตกแต่งอย่างน่ารักน่านั่ง นอกจากนี้ยังรายล้อมด้วยต้นไม้สีเขียว โดยเฉพาะอย่างยิ่งต้นหูกระจงที่แผ่กิ่งก้านสาขาให้ความร่มรื่นได้เป็นอย่างดี เหมาะกับการนั่งจิบกาแฟหอมกรุ่นพร้อมละเลียดขนมเค้กโฮมเมดแสนหวาน '
      }])
  
  
  </script>
  <style scoped>
  .card {
    width: 18rem;
    margin: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(199, 20, 160, 0.1);
    background-color: #FFF3D7;
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