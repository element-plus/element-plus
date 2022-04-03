<script setup lang="ts">
import { platinumSponsors } from '../../config/sponsors'
</script>

<template>
  <div class="sponsor-container">
    <a
      v-for="item in platinumSponsors"
      :key="item.name"
      :href="item.url"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      class="sponsor-item inline-flex"
      target="_blank"
    >
      <img :src="item.banner_img" :alt="item.name" />
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/mixins.scss' as *;

.sponsor-item {
  margin-bottom: 8px;
  height: 60px;
  width: 196px;

  @include respond-to('xxl') {
    width: 236px;
    height: 72px;
  }

  img {
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
    width: 100%;
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
