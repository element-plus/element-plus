<template>
  <div class="join">
    <el-tooltip placement="top" :hide-after="1000" :offset="20">
      <template #content>
        {{ homeLang['21'] }}
        <a href="mailto:element-plus@outlook.com" target="_blank">
          &nbsp;element-plus@outlook.com
        </a>
      </template>
      <a href="mailto:element-plus@outlook.com" target="_blank">
        <el-button style="overflow: hidden" :round="round">{{
          homeLang['20']
        }}</el-button>
      </a>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

defineProps<{ round?: boolean }>()
</script>
