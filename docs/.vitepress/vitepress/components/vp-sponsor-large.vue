<script setup lang="ts">
import { leftCustomImgSponsors } from '../../config/sponsors'
import { sendEvent } from '../../config/analytics'

defineProps({
  itemClass: String,
  itemStyle: [String, Object, Array],
})

const onItemClick = (item: any) => {
  sendEvent('sp_click', item.name, 'left_custom_img')
}
</script>

<template>
  <div>
    <a
      v-for="item in leftCustomImgSponsors"
      :key="item.name"
      :href="item.url"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      :class="['sponsor-large inline-flex', itemClass]"
      :style="itemStyle"
      target="_blank"
      @click="onItemClick(item)"
    >
      <img :src="item.banner_img" :alt="item.name" />
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/mixins.scss' as *;

.sponsor-large {
  margin-bottom: 8px;
  height: 60px;
  width: 196px;

  @include respond-to('max') {
    width: 236px;
    height: 72px;
  }

  @media (max-width: 767px) {
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
  .sponsor-large {
    img {
      border-radius: 4px;
      min-height: 45px;
    }
  }
}
</style>
