v-<template>
  <div class="row mb-2">
    <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">Shop at ⇾ {{ i+1 }}</strong>
          <h3 class="mb-0">{{n.name}}</h3>
          <div class="mb-1 text-body-secondary">♡ Price per table {{ n.price }} Baht 〄</div>
          <p class="card-text mb-auto">{{n.text_box}}</p>

          <div style="margin-bottom: 30px;">
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
                See more details ʕ ˵• ₒ •˵ ʔ
                <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
             </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
              </svg>
            </div>
          </div>
        </div>
    </div>
</template>
        
    <!-- <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-body-secondary">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg class="bi"><use xlink:href="#chevron-right"/></svg>
          </a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div> -->
 


<script setup>
 import { RouterLink } from 'vue-router'
 import { ref } from 'vue';

 const travelList=ref([
   {name: 'Hookrajong Cafe',  price:200, img:"https://i.pinimg.com/564x/ed/02/7d/ed027d56a618a8a7463a075d1d0a8e85.jpg", quantity: 0 ,
    text_box:'สำหรับใครที่ชื่นชอบบรรยากาศแบบกลาสเฮ้าส์ดูโปร่งสบาย หูกระจง คาเฟ่ ถือเป็นอีกหนึ่งร้านที่ต้องแวะไปเยือน เพราะภายในเรือนกระจกขนาดใหญ่ตกแต่งอย่างน่ารักน่านั่ง นอกจากนี้ยังรายล้อมด้วยต้นไม้สีเขียว โดยเฉพาะอย่างยิ่งต้นหูกระจงที่แผ่กิ่งก้านสาขาให้ความร่มรื่นได้เป็นอย่างดี เหมาะกับการนั่งจิบกาแฟหอมกรุ่นพร้อมละเลียดขนมเค้กโฮมเมดแสนหวาน  '
    }, 
  
    {name:'Portobello & Désiré Cafe',    price:275, img:"https://i.pinimg.com/564x/37/6b/58/376b58caaa791fe2eeab996e8bbc12a2.jpg", quantity: 0 ,
    text_box:'เป็นคาเฟ่ในบ้านสีขาวสไตล์วินเทจ บรรยากาศแบบ English Country Home ภายในตกแต่งด้วยเฟอร์นิเจอร์สไตล์วินเทจดูอบอุ่น ล้อมรอบด้วยสวนสวย เหมาะกับการไปนั่งชิลล์ในวันสบายๆ พร้อมอร่อยกับอาหารฝรั่งโฮมเมดหลากเมนู รวมถึงขนมเค้กที่อบใหม่จากเตาทุกวัน'
    },
    
    {name:'Wood Cafe',   price:120, img:"https://i.pinimg.com/564x/b4/2a/bc/b42abc799c712e0ca58c02695f7839a7.jpg", quantity: 0 ,
    text_box:' คาเฟ่สุดชิลล์ออกแบบตกแต่งด้วยเฟอร์นิเจอร์ไม้ และของตกแต่งเก๋ไก๋ ท่ามกลางต้นไม้สีเขียวที่ช่วยเพิ่มความสดชื่น เป็นพื้นที่เหมาะสำหรับการมานั่งพักผ่อน ชิลล์กับเครื่องดื่มแก้วโปรด ขนมแสนอร่อย และอาหารจานเด็ด เสมือนโอเอซิสกลางกรุงที่ช่วยเติมพลังงานให้ชีวิต'
    },
    
    {name:'The Blooming Gallery',     price:150, img:"https://i.pinimg.com/564x/01/df/a3/01dfa3c84a12b611a25481951e46300f.jpg", quantity: 0 ,
    text_box:'เอาใจผู้หญิงสายหวาน ที่ชื่นชอบดอกไม้ กันบ้าง สำหรับร้าน The Blooming Gallery ในโครงการ Eight Thonglor เพียงแค่เปิดประตูร้านเดินเข้ามาภายในร้าน ก็จะพบว่าที่นี่มีความโดดเด่น และสวยงามมากๆ จากการตกแต่งสไตล์เรือนดอกไม้ ฟีลยุโรปค่ะ เมนูเซ็ตชาที่นี่ก็มีให้เลือกมากมาย แถมยังเข้ากับบรรยากาศได้เป็นอย่างดีอีกด้วย ใครที่กำลังมองหาคาเฟ่ดีๆ สักร้าน ไปทานข้าว จิบชาชิลๆ ถ่ายรูปล่ะก็ เราแนะนำที่นี่เลยค่า'
    },
    
    {name:'The 66 Cottage',  price:190, img:"https://i.pinimg.com/564x/d3/b3/10/d3b31009bb52682c8e139f9936220bae.jpg", quantity: 0 ,
    text_box:'คาเฟ่สไตล์ English Cottage ที่ใครเห็นแล้วก็ต้องตกหลุมรัก เพราะภายในร้านร่มรื่นด้วยสวนสวย ประดับตกแต่งด้วยต้นไม้หลายสายพันธุ์ อีกทั้งยังมีดอกไม้สีสันสดใสและน้ำพุช่วยเพิ่มความสดชื่นสบายตา บรรยากาศเงียบสงบเหมาะสำหรับใครที่กำลังหามุมผ่อนคลาย พักกายพักใจ นั่งจิบชา กาแฟ และอร่อยกับขนมโฮมเมดแบบชิลล์ๆ '
    },
    
    {name:'Hey! Coffee',  price:130,  img:"https://i.pinimg.com/564x/44/71/85/447185df0abd2531c31dd9479d7e2f69.jpg", quantity: 0 ,
    text_box:'คาเฟ่ตกแต่งในสไตล์อินดัสเทรียล ดูดิบๆ เท่ๆ ท่ามกลางสวนสวยร่มรื่น เป็นพื้นที่สีเขียวที่เหมาะจะมานั่งพักผ่อนชิลล์ๆ นอกจากกาแฟแล้ว ที่นี่ยังมีอาหารอิตาเลียน อาหารฟิวชั่น รวมถึงขนมหวานให้เลือกรับประทานอีกด้วย'
    },
])
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@600&display=swap');
  .row {
    background-color: #a993be; 
    border-radius: 30px;
  }

  h3 {
    color: #DB7093; 
    font-family: 'Mali', cursive;
  }
  .row {
    background-color: #0a0909;
    padding: 20px;
    margin-bottom: 20px; 
    font-family: 'Mali', cursive;
  }

  

  .row {
    background-color: #F8F5FD;
    padding: 10px; 
    border-radius: 20px;
    
    
  }

  h3 {
    color: #333;
    font-size: 24px;
    font-family: 'Mali', cursive;
  }

  .icon-link {
    text-decoration: none; 
    color: #DB7093;
    transition: color 0.2s;
  }

  .icon-link:hover {
    color: #B03060; 
  }
  
  .shadow-box {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
  }


</style>



