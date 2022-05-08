<script setup lang="ts">
import { computed } from 'vue'
import { rightRichTextSponsors } from '../../../config/sponsors'
import { useLang } from '../../composables/lang'
import { isDark } from '../../composables/dark'
const lang = useLang()
const langZhCN = 'zh-CN'
const isZhCn = computed(() => lang.value === langZhCN)
</script>

<template>
  <div class="sponsor-container m-t-16px">
    <a
      v-for="item in rightRichTextSponsors"
      :key="item.name"
      :href="item.url"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      target="_blank"
    >
      <div :class="[isDark && '!bg-#262729', 'flex bg-#F9F9F9 pa-12px rd-4px']">
        <div class="w-32px m-r-8px">
          <img class="rd-4px w-32px h-32px" :src="item.img" :alt="item.name" />
        </div>
        <div class="flex-1">
          <div
            :class="[
              'color-#303133 font-400 text-12px',
              isDark && '!color-#E5E9F3',
            ]"
          >
            {{ isZhCn ? item.name_cn || item.name : item.name }}
          </div>
          <div
            :class="[
              'm-t-2px font-400 text-12px color-#909399',
              isDark && '!color-#A3A6AD',
            ]"
          >
            {{ isZhCn ? item.slogan_cn || item.slogan : item.slogan }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
