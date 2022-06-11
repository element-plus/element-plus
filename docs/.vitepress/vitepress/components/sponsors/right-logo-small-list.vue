<script setup lang="ts">
import { rightLogoSmallSponsors } from '../../../config/sponsors'
import { sendEvent } from '../../../config/analytics'
import { isDark } from '../../composables/dark'
const onItemClick = (item: any) => {
  sendEvent('sp_click', item.name, 'right_logo_small')
}
</script>

<template>
  <div class="m-t-16px flex flex-wrap justify-between">
    <template
      v-for="item in rightLogoSmallSponsors.concat([{} as any])"
      :key="item.name"
    >
      <div
        v-if="!item.url"
        :class="[
          isDark && '!bg-#262729 color-$text-color-placeholder',
          'flex bg-#F9F9F9 rd-0px h-40px w-89px justify-center items-center',
        ]"
      >
        <div class="color-#ddd text-13px cursor-default">Your logo</div>
      </div>
      <a
        v-else
        :href="item.url"
        :title="`${item.name_cn || item.name} - ${
          item.slogan_cn || item.slogan
        }`"
        target="_blank"
        @click="onItemClick(item)"
      >
        <div
          :class="[
            isDark && '!bg-#262729',
            'flex bg-#F9F9F9 rd-0px h-40px w-89px justify-center items-center',
          ]"
        >
          <img :src="item.imgL" :alt="item.name" />
        </div>
      </a>
    </template>
  </div>
</template>
