<template>
  <v-container fluid class="parallax-container" style="padding: 0px;">
    <div class="parallax-wrapper">
      <div ref="image1" class="parallax-image" :style="{ backgroundImage: `url(${image1Src})` }"></div>
      <div ref="image3" class="parallax-image" :style="{ backgroundImage: `url(${image3Src})` }"></div>
      <div ref="image4" class="parallax-image" :style="{ backgroundImage: `url(${image4Src})` }"></div>
      <div ref="image2" class="parallax-image" :style="{ backgroundImage: `url(${image2Src})` }"></div>
    </div>

    <h1 class="title text-center">
      U-tshun
      <p style="font-size: 2rem;font-family: Iansui; color: #4F6F49;font-weight: 200;text-shadow: none;">
        誕生於對美麗與永續的深思<v-icon>mdi-water-opacity</v-icon>
      </p>
    </h1>
    <div class="text-top">
      New Life for Beauty,<br> Renewed for Sustainability.
    </div>

    <div class="text-introduce">
      U-tshun．有賰，在台語中意指剩餘。<br>
        <br>
        身處快時尚時代，許多彩妝僅使用數次，<br>
        便因個人口味改變或新品推出而被閒置，最終成為浪費。<br>
        然而，這些彩妝仍有價值<br>
        只要妥善保存與流通，就能延續生命、減少資源浪費。<br>
        <br>
        U-tshun 致力於打造安心的二手彩妝交易平台，<br>
        讓閒置彩妝得以重獲新生，<br>
        使每支口紅、每盤眼影都能持續發揮它們應有的魅力和價值。<br>
        <br>
        在 U-tshun，交易再只是物品流動，更是對環境的友善選擇。<br>
        讓我們一起支持永續時尚，讓美麗與地球共存，<br>
        讓「有賰」成為負責任的生活態度。
    </div>

<!-- 三圖 -->
<div class="circles">
  <v-row>
    <v-col cols="4" sm="4" class="d-flex justify-center">
      <v-card class="pa-4" style="text-align: center;">
        <v-img class="circle" src="../assets/images/cosmetic.png"></v-img>
        <v-card-title class="mt-4">資源共享，共創價值</v-card-title>
        <v-card-subtitle>
          將剩餘的化妝品重新分配，透過捐贈與交換，讓每一份美麗都能被珍惜與善用。
        </v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="4" sm="4" class="d-flex justify-center">
      <v-card class="pa-4" style="text-align: center;">
        <v-img class="circle" src="../assets/images/no-plastic.png"></v-img>
        <v-card-title class="mt-4">永續循環，減少浪費</v-card-title>
        <v-card-subtitle>
          打造化妝品的二次生命，減少閒置與丟棄，推動環保與永續時尚，讓美麗更有意義。
        </v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="4" sm="4" class="d-flex justify-center">
      <v-card class="pa-4" style="text-align: center;">
        <v-img class="circle" src="../assets/images/love.png"></v-img>
        <v-card-title class="mt-4">友善社群，溫暖互助</v-card-title>
        <v-card-subtitle>
          串聯捐贈者與有需要的人，建立信任與關懷的平台，讓美妝不只是裝飾，更是一種分享的力量。
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</div>


  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// 正確引入圖片
import image1SrcFile from '@/assets/images/about-1.jpg';
import image2SrcFile from '@/assets/images/about-2.jpg';
import image3SrcFile from '@/assets/images/about-3.jpg';
import image4SrcFile from '@/assets/images/about-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const image4 = ref(null);

// 綁定圖片路徑
const image1Src = ref(image1SrcFile);
const image2Src = ref(image2SrcFile);
const image3Src = ref(image3SrcFile);
const image4Src = ref(image4SrcFile);

onMounted(() => {
  [image1, image2, image3, image4].forEach((imageRef) => {
    gsap.to(imageRef.value, {
      backgroundPosition: '50% -50%', // 背景圖片滾動視差
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.5,
        markers: true, // 開發時用，正式版可以刪
      },
    });
  });
});
</script>

<style scoped>
.parallax-container {
  position: relative;
  overflow: hidden;
}


.parallax-wrapper {
  height: 400vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* 均分間距 */
}

.parallax-image {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  will-change: transform;
}

.text-top {
  position: absolute;
  bottom: 5%;
  right: 5%;
  transform: translateX(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  z-index: 10;
  color: rgba(255, 247, 214, 0.9);
  text-shadow: rgb(23, 24, 23) 0.1em 0.1em 0.2em
}

.title{
  position: absolute;
  top: 10%;
  left: 70%;
  transform: translateX(-50%, -50%);
  z-index: 10;

  font-size: 6rem;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 0.1em rgb(70, 80, 50), 0 0 0.5em rgb(159, 199, 127)
}

.text-introduce {
  width: 800px;
  background: rgba(45, 56, 36, 0.8);
  border-radius: 20px ;
  border: 5px double;
  border-color: rgb(197, 197, 197);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;

  z-index: 10;
  color: white;
  font-size: 1.5rem;
  text-align: left;

  font-family: Iansui;

  position: absolute;
  top: 20%;
  right:5%;
  /* transform: translate(-50%, -50%); */
}

.circles {
  position: absolute;
  top: 2000px;
  width: 100%;
}

.circle {
  position: relative;
  top: 100px;
  height: 250px;  /* 調整為固定的高度 */
  width: 250px;   /* 設定寬度 */
  margin: 0 auto;
}
</style>

<route lang="yaml">
  meta:
    login: false
    admin: false
    title: '品牌故事'
</route>
