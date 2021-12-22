<template>
  <div class="el-page-header">
    <div class="el-page-header__left" @click="handleClick">
      <div v-if="icon || $slots.icon" class="el-page-header__icon">
        <slot name="icon">
          <el-icon v-if="icon"><component :is="icon" /></el-icon>
        </slot>
      </div>
      <div class="el-page-header__title">
        <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
      </div>
    </div>
    <div class="el-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElIcon } from '@element-plus/components/icon'

import { useLocale } from '@element-plus/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'

export default defineComponent({
  name: 'ElPageHeader',

  components: {
    ElIcon,
  },

  props: pageHeaderProps,
  emits: pageHeaderEmits,

  setup(_, { emit }) {
    const { t } = useLocale()

    function handleClick() {
      emit('back')
    }

    return {
      handleClick,
      t,
    }
  },
})
</script>
