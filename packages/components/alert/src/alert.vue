<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="visible"
      :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(effect)]"
      role="alert"
    >
      <el-icon
        v-if="showIcon && ($slots.icon || iconComponent)"
        :class="[ns.e('icon'), { [ns.is('big')]: hasDesc }]"
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
          <el-icon v-else :class="ns.e('close-btn')" @click="onClose">
            <Close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, toRef, useSlots } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import {
  TypeComponents,
  TypeComponentsMap,
  isClient,
} from '@element-plus/utils'
import { useDelayedToggle, useNamespace } from '@element-plus/hooks'
import { alertEmits, alertProps } from './alert'

const { Close } = TypeComponents

defineOptions({
  name: 'ElAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = useSlots()

const ns = useNamespace('alert')

const visible = ref(false)

const iconComponent = computed(() => TypeComponentsMap[props.type])

const hasDesc = computed(() => !!(props.description || slots.default))

const open = () => {
  visible.value = true
  emit('open')
}

const close = (event?: Event) => {
  visible.value = false
  emit('close', event)
}

const { onOpen, onClose } = useDelayedToggle({
  showAfter: toRef(props, 'showAfter'),
  hideAfter: toRef(props, 'hideAfter'),
  autoClose: toRef(props, 'autoClose'),
  open,
  close,
})

if (isClient) {
  onOpen()
}
</script>
