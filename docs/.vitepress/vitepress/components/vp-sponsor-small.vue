<script setup lang="ts">
import { isDark } from '../composables/dark'
import { goldSponsors } from '../../config/sponsors'
</script>

<template>
  <div class="container">
    <div
      v-for="item in goldSponsors"
      :key="item.name"
      :class="['sponsor-item', item.isDark && isDark ? 'filter invert' : '']"
    >
      <a
        :href="item.url"
        :title="`${item.name_cn || item.name} - ${
          item.slogan_cn || item.slogan
        }`"
        target="_blank"
      >
        <img :src="item.img" :alt="item.name" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  .sponsor-item {
    margin-right: 4px;
    height: 36px;
    width: 36px;

    a {
      display: inline-flex;
      align-items: center;
      height: inherit;
      width: inherit;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
