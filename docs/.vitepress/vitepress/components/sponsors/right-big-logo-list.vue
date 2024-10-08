<script setup lang="ts">
import { rightBigLogoSponsors } from '../../../config/sponsors'
import { sendEvent } from '../../../config/analytics'
import { isDark } from '../../composables/dark'

const onItemClick = (item: any) => {
  sendEvent('sp_click', item.name, 'right_richtext_list')
}
</script>

<template>
  <div class="right-big">
    <a
      v-for="item in rightBigLogoSponsors"
      :key="item.name"
      :href="item.url"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      target="_blank"
      @click="onItemClick(item)"
    >
      <div
        :class="[
          isDark && '!bg-#262729',
          'flex bg-#F9F9F9 h-64px rd-4px justify-center items-center',
        ]"
      >
        <div class="h-36px">
          <img class="rd-4px h-full" :src="item.imgL" :alt="item.name" />
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.right-big {
  margin-top: 16px;
}
</style>
