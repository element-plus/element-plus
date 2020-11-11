<template>
  <div class="el-page-header">
    <div class="el-page-header__left" @click="handleClick">
      <i class="el-icon-back"></i>
      <div class="el-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="el-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { t } from '@element-plus/locale'

export default defineComponent({
  name: 'ElPageHeader',
  props: {
    title: {
      type: String,
      default: () => t('el.pageHeader.title'),
    },
    content: {
      type: String,
      default: '',
    },
  },
  emits: ['back'],
  setup(props, { emit }) {

    function handleClick() {
      emit('back')
    }

    return {
      handleClick,
    }
  },
})
</script>
