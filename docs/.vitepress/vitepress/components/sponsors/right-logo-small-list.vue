<script setup lang="ts">
import { computed } from 'vue'
import { rightLogoSmallSponsors } from '../../../config/sponsors'
import { sendEvent } from '../../../config/analytics'
import { useLang } from '../../composables/lang'
import { isDark } from '../../composables/dark'
const lang = useLang()
const langZhCN = 'zh-CN'
const isZhCn = computed(() => lang.value === langZhCN)
const onItemClick = (item: any) => {
  sendEvent('sp_click', item.name, 'right_richtext_list')
}
</script>

<template>
  <div class="m-t-16px flex flex-wrap justify-between">
    <a
      v-for="item in rightLogoSmallSponsors.concat([{} as any])"
      :key="item.name"
      :href="item.url"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      target="_blank"
      @click="onItemClick(item)"
    >
      <div
        :class="[
          isDark && '!bg-#262729',
          'flex bg-#F9F9F9 rd-0px h-40px w-89px justify-center items-center',
        ]"
      >
        <div v-if="!item.url" class="color-#ddd text-13px">Your logo</div>
        <img v-else class="w-65px h-15px" :src="item.imgL" :alt="item.name" />
      </div>
    </a>
  </div>
</template>
