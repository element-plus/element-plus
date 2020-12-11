<template>
  <div>
    <h2>{{ langConfig[1] }}</h2>
    <el-row :gutter="14" class="cards">
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/consistency.png" alt="Consistency">
          <h4>{{ langConfig[2] }}</h4>
          <span>{{ langConfig[3] }}</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/feedback.png" alt="Feedback">
          <h4>{{ langConfig[4] }}</h4>
          <span>{{ langConfig[5] }}</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/efficiency.png" alt="Efficiency">
          <h4>{{ langConfig[6] }}</h4>
          <span>{{ langConfig[7] }}</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/controllability.png" alt="Controllability">
          <h4>{{ langConfig[8] }}</h4>
          <span>{{ langConfig[9] }}</span>
        </div>
      </el-col>
    </el-row>
    <h3>{{ langConfig[10] }}</h3>
    <ul>
      <li><strong>{{ langConfig[11] }}</strong>{{ langConfig[12] }}</li>
      <li><strong>{{ langConfig[13] }}</strong>{{ langConfig[14] }}</li>
    </ul>
    <h3>{{ langConfig[15] }}</h3>
    <ul>
      <li><strong>{{ langConfig[16] }}</strong>{{ langConfig[17] }}</li>
      <li><strong>{{ langConfig[18] }}</strong>{{ langConfig[19] }}</li>
    </ul>
    <h3>{{ langConfig[20] }}</h3>
    <ul>
      <li><strong>{{ langConfig[21] }}</strong>{{ langConfig[22] }}</li>
      <li><strong>{{ langConfig[23] }}</strong>{{ langConfig[24] }}</li>
      <li><strong>{{ langConfig[25] }}</strong>{{ langConfig[26] }}</li>
    </ul>
    <h3>{{ langConfig[27] }}</h3>
    <ul>
      <li><strong>{{ langConfig[28] }}</strong>{{ langConfig[29] }}</li>
      <li><strong>{{ langConfig[30] }}</strong>{{ langConfig[31] }}</li>
    </ul>
  </div>
</template>
<script>
import pageLang from '../i18n/page.json'

export default {
  data() {
    return {
      lang: this.$route.meta.lang,
    }
  },
  computed: {
    langConfig() {
      return pageLang.filter(config => config.lang === this.lang)[0].pages.design
    },
  },
}
</script>
<style lang="scss" scoped>
  .cards {
    margin: 30px 0 70px;
  }
  .card {
    background: #fbfcfd;
    height: 204px;
    text-align: center;

    img {
      margin: 40px auto 25px;
      width: 80px;
      height: 80px;
    }
    h4 {
      font-size: 18px;
      color: #1f2d3d;
      font-weight: normal;
      margin: 0;
    }
    span {
      font-size: 14px;
      color: #99a9bf;
    }
  }
</style>
