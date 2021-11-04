<template>
  <div class="el-result">
    <div class="el-result__icon">
      <slot name="icon">
        <component :is="resultIcon.component" :class="resultIcon.class" />
      </slot>
    </div>
    <div v-if="title || $slots.title" class="el-result__title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots.subTitle" class="el-result__subtitle">
      <slot name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" class="el-result__extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import {
  WarningFilled,
  CircleCheckFilled,
  CircleCloseFilled,
  InfoFilled,
} from '@element-plus/icons'

import type { Component } from 'vue'
import type { Indexable } from '@element-plus/utils/types'

const IconMap: Indexable<string> = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
}

const IconComponentMap: Indexable<Component> = {
  [IconMap.success]: CircleCheckFilled,
  [IconMap.warning]: WarningFilled,
  [IconMap.error]: CircleCloseFilled,
  [IconMap.info]: InfoFilled,
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
    icon: {
      type: String,
      default: 'info',
    },
  },
  setup(props) {
    const resultIcon = computed(() => {
      const icon = props.icon
      const iconClass = icon && IconMap[icon] ? IconMap[icon] : 'icon-info'
      const iconComponent =
        IconComponentMap[iconClass] || IconComponentMap['icon-info']

      return {
        class: iconClass,
        component: iconComponent,
      }
    })

    return {
      resultIcon,
    }
  },
})
</script>
