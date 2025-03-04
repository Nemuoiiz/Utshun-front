<template>
  <v-container>
    <h1 class="title mt-10 fade-in">Let's share together !</h1>
    <v-row class="d-flex justify-center align-center">
  <!-- 左側圖片 -->
  <v-col cols="4" class="fade-in d-flex justify-center">
    <img src="../assets/images/nature.png" alt="捐贈資訊">
  </v-col>

  <!-- 右側文字區塊 -->
  <v-col
    cols="8"
    class="fade-in d-flex flex-column justify-center align-center text-center"
    style="border-radius: 50px; padding: 20px; width: 100%;"
  >
    <p style="width: 100%;">
      你是否有閒置的彩妝品，還未用完卻擱置已久？ <br><br>
      現在，你可以讓它們擁有新的價值！ <br>
      透過 U-tshun，你的二手彩妝將被妥善分類， <br>
      未過期的美妝用品將贈與清寒家庭或弱勢女性， <br>
      過期或測試用彩妝則提供給彩妝學習者，或大體化妝師作為練習材料。 <br><br>
      每一次捐贈，都是對環境的友善選擇，更是對需要幫助者的溫暖支持。 <br>
      現在就加入我們，讓美麗不僅停留在外表，更能成為善意的循環！💖✨ <br>
    </p>
  </v-col>
</v-row>


    <h1 class="fade-in title mt-10 mb-10">Q & A</h1>
    <v-expansion-panels variant="accordion" class="fade-in">
      <v-expansion-panel>
        <v-expansion-panel-title>可以捐贈哪些彩妝品？</v-expansion-panel-title>
        <v-expansion-panel-text>
          我們接受未過期或剛過期不久的彩妝，包含：<br>
          - 全新未使用或已使用但狀況良好的產品<br>
          - 粉餅、眼影、腮紅、口紅、睫毛膏、眉筆等各類彩妝<br>
          - 保養品、化妝工具（如刷具、粉撲），但需乾淨可再利用
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>什麼情況的彩妝品不收？</v-expansion-panel-title>
        <v-expansion-panel-text>
          - 已完全用完（如見底的粉餅、擠不出的粉底）<br>
          - 包裝嚴重破損或外觀髒污，無法清理<br>
          - 產品發霉、變質、有異味（如結塊、分層、油耗味）<br>
          - 個人衛生用品（如假睫毛、已使用的睫毛夾、唇刷）
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>捐贈方式與寄送地址？</v-expansion-panel-title>
        <v-expansion-panel-text>
          您可將符合條件的彩妝品包裝妥善後，寄送至以下地址：<br>
          📍 台中市西屯區○○路○○號 ū-tshun（有賰）捐贈小組<br>
          📞 聯絡電話：09XX-XXX-XXX<br>
          ✉️ 電子信箱：support@u-tshun.com
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>捐贈的彩妝會如何處理？</v-expansion-panel-title>
        <v-expansion-panel-text>
          - 可再次販售的彩妝：清潔與整理後，放上平台，幫助資源再利用<br>
          - 適合公益用途的彩妝：轉贈至偏鄉機構、庇護中心、女性重建團體等，讓美麗延續<br>
          - 無法使用的彩妝：盡可能回收，減少對環境的負擔
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>我可以獲得回饋嗎？</v-expansion-panel-title>
        <v-expansion-panel-text>
          您的捐贈將幫助環保與公益，我們會不定期提供感謝禮（如購物折扣、品牌小禮等）<br>
          並寄送捐贈成果報告，讓您知道這些彩妝的去向！
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <h1 class="fade-in title mt-10 mb-10">Donation Form</h1>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="6">
        <v-form class="fade-in">
          <v-text-field label="寄件人姓名" required></v-text-field>
          <v-text-field label="聯絡電話" required></v-text-field>
          <v-text-field label="寄件地址" required></v-text-field>
          <v-textarea label="捐贈內容描述" rows="3"></v-textarea>
          <div class="text-center">
          <v-btn style="border-radius: 10px;" color="success" class="mt-4 ">Submit</v-btn>
        </div>
        </v-form>
      </v-col>
      <v-col cols="4">
        <img src="../assets/images/go018_1.png" alt="捐贈資訊">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // 修改 .fade-in 類別動畫配置
  gsap.utils.toArray('.fade-in').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%', // 可以根據需要調整
        end: 'top 30%',
        toggleActions: 'play none none none',
        once: true // 確保動畫只執行一次
      }
    });
  });

  // 同樣的配置可應用於其他類別 .fade-up 和 .fade-right
  gsap.utils.toArray('.fade-up').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  });

  gsap.utils.toArray('.fade-right').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  });
});
</script>


<style>
body {
  font-size: 20px;
  background-color: #eee8df;
}
</style>

<style scoped>
.v-container{
  font-family:Iansui ;
}

.title{
  font-family: "Croissant One", serif;
}

.v-expansion-panel-title{
  font-size: 20px;
  font-weight: bold;
  color: rgb(203, 192, 189);
}
</style>

<route lang="yaml">
  meta:
    login: false
    admin: false
    title: '捐贈資訊'
</route>
