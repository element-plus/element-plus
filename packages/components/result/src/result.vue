<template>
  <div :class="ns.b()">
    <div :class="ns.e('icon')">
      <slot name="icon">
        <component
          :is="resultIcon.component"
          v-if="resultIcon.component"
          :class="resultIcon.class"
        />
      </slot>
    </div>
    <div v-if="title || $slots.title" :class="ns.e('title')">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots.subTitle" :class="ns.e('subtitle')">
      <slot name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" :class="ns.e('extra')">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { resultProps, IconComponentMap, IconMap } from './result'

export default defineComponent({
  name: 'ElResult',
  props: resultProps,
  setup(props) {
    const ns = useNamespace('result')

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
      ns,
      resultIcon,
    }
  },
})
</script>
