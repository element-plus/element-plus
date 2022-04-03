<script setup lang="ts">
import { platinumSponsors } from '../../config/sponsors'
</script>

<template>
  <div class="container">
    <div v-for="item in platinumSponsors" :key="item.name" class="sponsor-item">
      <a
        :href="item.url"
        :title="`${item.name_cn || item.name} - ${
          item.slogan_cn || item.slogan
        }`"
        target="_blank"
      >
        <img :src="item.banner_img" :alt="item.name" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sponsor-item {
  margin-bottom: 8px;
  height: 60px;
  img {
    border-radius: 8px;
    overflow: hidden;
    min-height: 60px;
  }
}
@media (max-width: 768px) {
  .sponsor-item {
    max-width: 160px;
    img {
      border-radius: 4px;
      min-height: 45px;
    }
  }
}
</style>
