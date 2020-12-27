<template>
  <div class="el-result">
    <div class="el-result__icon">
      <slot v-if="$slots.icon" name="icon"></slot>
      <!--      <i-->
      <!--        v-if="type || iconClass"-->
      <!--        class="el-notification__icon"-->
      <!--        :class="[typeClass, iconClass]"-->
      <!--      ></i>-->
    </div>
    <div v-if="title || $slots.title" class="el-result__title">
      <slot v-if="$slots.title" name="title"></slot>
      <p v-else>{{ title }}</p>
    </div>
    <div v-if="subTitle || $slots.subTitle" class="el-result__subtitle">
      <slot v-if="$slots.subTitle" name="subTitle"></slot>
      <p v-else>{{ subTitle }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
  '403': '403',
  '404': '404',
  '500': '500',
}

export default defineComponent({
  name: 'ElResult',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  setup(props) {
    // init here
  },
})
</script>
<style scoped>
</style>
