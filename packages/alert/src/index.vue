<template>
  <transition name="el-alert-fade">
    <div
      v-show="state.visible"
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
    >
      <i v-if="showIcon" class="el-alert__icon" :class="[ iconClass, isBigIcon ]"></i>
      <div class="el-alert__content">
        <span v-if="title || $slots.title" class="el-alert__title" :class="[ isBoldTitle ]">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default && !description" class="el-alert__description"><slot></slot></p>
        <p v-if="description && !$slots.default" class="el-alert__description">{{ description }}</p>
        <i
          v-show="closable"
          class="el-alert__closebtn"
          :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"
          @click="close"
        >
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>
<script lang='ts'>
import { defineComponent, computed, reactive } from 'vue'

interface AlertProps {
  title: string;
  description: string;
  type: string;
  closable: boolean;
  closeText: string;
  showIcon: boolean;
  center: boolean;
  effect: string;
}

const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error',
}

export default defineComponent({
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '',
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: (value: string): boolean => {
        return ['light', 'dark'].indexOf(value) > -1
      },
    },
  },
  emits: ['click'],
  setup(props: AlertProps, ctx) {
    // state
    const state = reactive({
      visible: true,
    })

    // computed
    const typeClass = computed(() => {
      return `el-alert--${ props.type }`
    })
    const iconClass = computed(() => {
      return TYPE_CLASSES_MAP[props.type] || 'el-icon-info'
    })
    const isBigIcon = computed(() => {
      return props.description || ctx.slots.default ? 'is-big' : ''
    })
    const isBoldTitle = computed(() => {
      return props.description || ctx.slots.default ? 'is-bold' : ''
    })

    // methods
    const close = (evt) => {
      ctx.emit('click', evt)
    }

    return {
      state,
      typeClass,
      iconClass,
      isBigIcon,
      isBoldTitle,
      close,
    }
  },
})
</script>
