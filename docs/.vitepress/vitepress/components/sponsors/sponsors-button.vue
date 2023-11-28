<template>
  <div class="join">
    <el-tooltip placement="top" :hide-after="1000" :offset="20">
      <template #content>
        {{ t('home.contact_us') }}
        <a href="mailto:element-plus@outlook.com" target="_blank">
          &nbsp;element-plus@outlook.com
        </a>
      </template>
      <a href="mailto:element-plus@outlook.com" target="_blank">
        <el-button style="overflow: hidden" :round="round">{{
          t('home.become_sponsor')
        }}</el-button>
      </a>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
defineProps<{ round?: boolean }>()
const { t } = useI18n()
</script>
