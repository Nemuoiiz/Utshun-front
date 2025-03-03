<template>
  <v-container>
    <h2 class="mt-10">Donation info</h2>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="6">
        <img src="../assets/images/nature.png" alt="捐贈資訊">
      </v-col>
      <v-col cols="6">
        <p class="mb-4">
          您的捐贈將幫助許多有需要的人。無論是美妝產品、保養品，還是上妝工具，您的心意將帶來改變。
        </p>
      </v-col>
    </v-row>

    <h2 class="mt-10 mb-10">Q & A</h2>
    <v-expansion-panels variant="accordion">
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
          ✉ 電子信箱：support@u-tshun.com
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

    <h2 class="mt-10 mb-10">Donation Form</h2>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="6">
        <v-form>
          <v-text-field label="寄件人姓名" required></v-text-field>
          <v-text-field label="聯絡電話" required></v-text-field>
          <v-text-field label="寄件地址" required></v-text-field>
          <v-textarea label="捐贈內容描述" rows="3"></v-textarea>
          <v-btn color="primary" class="mt-4">提交</v-btn>
        </v-form>
      </v-col>
      <v-col cols="4">
        <img src="../assets/images/go018_1.png" alt="捐贈資訊">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style>
body {
  font-size: 24px;
  background-color: #eee8df;
}
</style>

<route lang="yaml">
  meta:
    login: false
    admin: false
    title: '捐贈資訊'
</route>
