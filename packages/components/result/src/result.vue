<template>
  <div class="el-result">
    <div class="el-result__icon">
      <slot name="icon">
        <component
          :is="resultIcon.component"
          v-if="resultIcon.component"
          :class="resultIcon.class"
        />
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
import { resultProps, IconComponentMap, IconMap } from './result'

export default defineComponent({
  name: 'ElResult',
  props: resultProps,
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
