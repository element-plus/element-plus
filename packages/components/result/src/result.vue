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
    <div v-if="subTitle || $slots['sub-title']" :class="ns.e('subtitle')">
      <slot name="sub-title">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" :class="ns.e('extra')">
      <slot name="extra" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useDeprecated, useNamespace } from '@element-plus/hooks'
import { IconComponentMap, IconMap, resultProps } from './result'
const COMPONENT_NAME = 'ElResult'
export default defineComponent({
  name: COMPONENT_NAME,
  props: resultProps,
  setup(props, { slots }) {
    const ns = useNamespace('result')

    useDeprecated(
      {
        scope: COMPONENT_NAME,
        type: 'Slot',
        from: 'subTitle',
        replacement: 'sub-title',
        version: '2.1.3',
        ref: 'https://github.com/element-plus/element-plus/pull/6636/',
      },
      computed(() => !!slots.subTitle)
    )

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
