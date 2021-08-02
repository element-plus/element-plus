<template>
  <div class="el-page-header">
    <div class="el-page-header__left" @click="handleClick">
      <div v-if="icon || $slots.icon" class="el-page-header__icon">
        <slot name="icon">
          <i :class="icon"></i>
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
import { useLocaleInject } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElPageHeader',
  props: {
    icon: {
      type: String,
      default: 'el-icon-back',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
      default: '',
    },
  },
  emits: ['back'],
  setup(props, { emit }) {

    const { t } = useLocaleInject()

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
