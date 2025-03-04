<template>
  <v-container>
    <v-container>
      <h1 class="title fade-in mt-10 mb-5">Join U-tshun</h1>
      <v-row>
        <v-col cols="6"  class="color fade-up">
        <p>我們不僅致力於推動彩妝的永續利用， <br>
          也希望將這份愛與關懷延續到更多地方。 <br>
          因此，將不定期舉辦公益活動， <br>
          部分收益或回收的彩妝捐贈給有需要的社群， <br>
          讓美麗成為一種助人的力量。 <br>
 <br>
          我們的公益計畫可能包含： <br>
          支持弱勢女性就業計畫、<br>
          捐贈未使用或輕度使用的彩妝給偏鄉或庇護機構、 <br>
          推動美妝教育工作坊等。 <br>
 <br>
          我們相信，每一份閒置的美麗，都有機會成為別人生命中的溫暖光芒。 <br>
          邀請您一同參與 U-tshun 的公益行動，讓彩妝不只是個人風格的展現， <br>
          更能成為傳遞愛與希望的橋樑。關注我們的最新活動，一起用美麗改變世界！</p>
        </v-col>
  <v-col cols="4">
  <img class="activity-pic fade-right" src="../assets/images/pl203.png" alt="">
      </v-col>
      </v-row>
  </v-container>

  <v-container>
    <v-row class="mt-10 mb-10 d-flex text-right">
      <v-col cols="12">
      <h2 class="title fade-in">Makeup Tutorial ｜ 賰彩妝藝術日．彩繪永續之美</h2>
    </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" class="fade-up">
        <div>
          活動時間： 2025年6月15日（星期日）下午 2:00 - 5:00 <br>
          活動地點： 台中市西區審計新村 創意廣場 <br>
          集合地點： 審計新村入口廣場 <br>
          主辦單位： U-tshun（有賰） <br>
          活動對象： 對彩妝藝術、環保永續有興趣的朋友（名額 50 人） <br>
          <br>
          活動簡介 <br>
          U-tshun（有賰）不僅推動彩妝永續，也希望讓彩妝藝術發揮更大價值。這次，我們邀請大家參加 「有賰彩妝藝術日」，透過 二手彩妝 進行 藝術彩繪，讓美妝不只是日常裝扮，更能成為創意的表現，展現永續之美。 <br>
          <br>
          活動內容 <br>
          • 彩妝藝術創作：使用二手或過期彩妝品進行畫布創作 <br>
          • 彩妝藝術工作坊：專業彩妝師分享色彩運用與創作技巧 <br>
          • 環保彩妝教育：認識彩妝品的成分、環境影響與永續使用方式 <br>
          • 作品展示與交流：讓參與者分享作品理念，一起探索彩妝的無限可能 <br>
          <br>
          報名方式 <br>
          請於社群上報名，我們將於活動前一週寄發確認信。 <br>
          活動名額有限，請儘早報名！ <br>
          讓我們一起讓「有賰」不只是物品的循環，更是美與創意的延續！ <br>
        </div>
      </v-col>

      <v-col cols="6">
        <img class="activity-pic fade-right" src="../assets/images/carousel-4.jpg">
      </v-col>
    </v-row>
  </v-container>

 <!-- 淨灘 -->
 <v-container>
    <v-row class="mt-10 mb-10">
      <v-col cols="12">
      <h2 class="title fade-in">Beach Cleanup ｜ 海洋重生．淨灘活動</h2>
    </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <img class="activity-pic fade-right" src="../assets/images/beach.jpg">
      </v-col>
      <v-col cols="6" class="fade-up">
        <div>
            活動時間： 2025年5月18日（星期日）上午 9:00 - 12:00<br>
            活動地點： 台中市梧棲區高美濕地海灘<br>
            集合地點： 高美濕地遊客中心前廣場<br>
            主辦單位： U-tshun（有賰）<br>
            活動對象： 歡迎所有關心環境的朋友參加（名額 50 人）<br>
            <br>
            活動簡介：U-tshun（有賰） 除了推動彩妝永續，也關心我們的地球環境。這次，我們邀請大家一起參與 「有賰有春，讓海洋重生」 淨灘活動，透過實際行動減少海洋垃圾，讓美麗不只停留在彩妝，更能延伸到自然環境。<br>
            <br>
            活動內容<br>
                • 海灘垃圾清理與分類<br>
                • 環保教育小講座：海洋垃圾對生態的影響<br>
                • 二手彩妝品贈送<br>
            <br>
            報名方式：<br>
            <br>
            請於社群上報名，我們將於活動前一週寄發確認信。<br>
            活動名額有限，請儘早報名！<br>
            <br>
            讓我們一起讓「有賰」不只是物品的循環，更是愛護環境的行動！<br>
        </div>
      </v-col>
    </v-row>
  </v-container>


</v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray('.fade-in').forEach((el) => {
    gsap.from(el, { opacity: 0, y: -50, duration: 1 });
  });

  gsap.utils.toArray('.fade-up').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
    });
  });

  gsap.utils.toArray('.fade-right').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
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
  font-family:Iansui;
}

.title{
  font-family: "Croissant One", serif;
}

.activity-pic{
  width: 500px;
  border-radius: 50px;
}

.color{
  background: #beb7b752;
  border-radius: 50px;
  padding:30px ;
  margin: 10px
}

</style>

<route lang="yaml">
  meta:
    login: false
    admin: false
    title: '活動專區'
  </route>
