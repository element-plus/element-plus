<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/store/theme'

const { t } = useI18n()
const primaryColors = [
  {
    name: '经典蓝',
    color: '#409EFF',
  },
  {
    name: '高对比度',
    color: '#0075EB',
  },
  {
    name: '金盏黄',
    color: '#F3B814',
  },
  {
    name: '绿松石',
    color: '#13C2C2',
  },
]
const tStore = useThemeStore()
const curPrimary = computed({
  get: () => tStore.theme.colors.primary,
  set: (val) => {
    tStore.updateColor('primary', val)
  },
})
</script>

<template>
  <div>
    <div class="mb-5">
      <h3 text="lg">{{ t('editor.primary-color') }}</h3>
      <div
        v-for="item in primaryColors"
        :key="item.name"
        class="inline-flex flex-col justify-center items-center cursor-pointer"
        :style="{
          '--ep-color': item.color,
        }"
        m="t-2 r-2"
        @click="curPrimary = item.color"
      >
        <div
          class="inline-flex rounded border transition hover:shadow"
          p="2"
          :class="
            item.color === curPrimary ? 'border-$ep-color' : 'border-gray-100'
          "
          m="b-1"
        >
          <div
            class="inline-flex w-12 h-12 rounded"
            :style="{ backgroundColor: 'var(--ep-color)' }"
          />
        </div>
        <span class="text-xs">{{ item.name }}</span>
      </div>
      <div
        class="inline-flex flex-col justify-center items-center cursor-pointer"
        m="t-2"
      >
        <div
          class="inline-flex rounded border transition hover:shadow border-gray-100"
          p="2"
          m="b-1"
        >
          <el-tooltip content="敬请期待">
            <a
              class="inline-flex w-12 h-12 rounded"
              :style="{ backgroundColor: 'var(--ep-color)' }"
            >
              <img src="/images/primary-color-placeholder.png" />
            </a>
          </el-tooltip>
        </div>
        <span class="text-xs">更多推荐</span>
      </div>
    </div>
  </div>
</template>
