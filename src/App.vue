<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import BlogHeader from '@/views/BlogHeader.vue'
import Jumbo from '@/views/Jumbo.vue'
</script>

<template>
  <div class="container">
    <BlogHeader></BlogHeader>
    <Jumbo
      class="jumbo"
      text_title="Welcome To Coffe Cafe "
      ex_box="รวมที่เที่ยวคาเฟ่ยอดนิยมทั่วกรุงเทพฯ ชวนปักหมุดแล้วไปเช็คอินคาเฟ่ในกรุงเทพวันหยุดสบายๆ คัดมาให้เน้นๆ สำหรับเพื่อนคนไหนกำลังหาร้านกาแฟใหม่ๆ นั่งจิบกาแฟ ทานขนมอร่อย และหามุมสบายนั่งทำงาน หรือจะนัดพบปะกับเพื่อนๆ ชาวแก๊ง แต่ละร้านมีเสน่ห์ที่แตกต่างกันออกไป มีมุมถ่ายรูปเก๋ๆ ไม่ซ้ำอีกต่อไปมาดูกันว่ามีร้านไหนมีเพื่อนๆ คนไหนไปมาแล้วบ้าง"
    ></Jumbo>
    <RouterView />
  </div>
</template>


