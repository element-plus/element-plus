<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="visible"
      :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(effect)]"
      role="alert"
    >
      <el-icon
        v-if="showIcon && ($slots.icon || iconComponent)"
        :class="[ns.e('icon'), ns.is('big', hasDesc)]"
      >
        <slot name="icon">
          <component :is="iconComponent" />
        </slot>
      </el-icon>

      <div :class="ns.e('content')">
        <span
          v-if="title || $slots.title"
          :class="[ns.e('title'), { 'with-description': hasDesc }]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="hasDesc" :class="ns.e('description')">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="[ns.e('close-btn'), ns.is('customed')]"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else :class="ns.e('close-btn')" @click="close">
            <Close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import {
  TypeComponents,
  TypeComponentsMap,
  debugWarn,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { alertEmits, alertProps } from './alert'

const { Close } = TypeComponents

defineOptions({
  name: 'ElAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = useSlots()

const ns = useNamespace('alert')

const visible = ref(true)

const iconComponent = computed(() => TypeComponentsMap[props.type])

const hasDesc = computed(() => !!(props.description || slots.default))

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}

if (props.showAfter || props.hideAfter || props.autoClose) {
  debugWarn(
    'el-alert',
    'The `show-after`, `hide-after`, and `auto-close` attributes were removed after 2.11.8. Please use `v-if` and `v-show` to manually replace them, visit: https://github.com/element-plus/element-plus/pull/22560'
  )
}
</script>
