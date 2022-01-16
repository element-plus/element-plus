<template>
  <div :class="resultPrefixClass">
    <div :class="`${resultPrefixClass}__icon`">
      <slot name="icon">
        <component
          :is="resultIcon.component"
          v-if="resultIcon.component"
          :class="resultIcon.class"
        />
      </slot>
    </div>
    <div v-if="title || $slots.title" :class="`${resultPrefixClass}__title`">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots.subTitle" :class="`${resultPrefixClass}__subtitle`">
      <slot name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" :class="`${resultPrefixClass}__extra`">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { resultProps, IconComponentMap, IconMap } from './result'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElResult',
  props: resultProps,
  setup(props) {
    const resultPrefixClass = usePrefixClass('result')
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
      resultPrefixClass,
      resultIcon,
    }
  },
})
</script>
