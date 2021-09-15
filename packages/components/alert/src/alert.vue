<template>
  <transition name="el-alert-fade">
    <div
      v-show="visible"
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
    >
      <i
        v-if="showIcon"
        class="el-alert__icon"
        :class="[iconClass, isBigIcon]"
      ></i>
      <div class="el-alert__content">
        <span
          v-if="title || $slots.title"
          class="el-alert__title"
          :class="[isBoldTitle]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" class="el-alert__description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <i
          v-if="closable"
          class="el-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            'el-icon-close': closeText === '',
          }"
          @click="close"
        >
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { alertProps, alertEmits, ALERT_TYPE_CLASSES_MAP } from './alert'

export default defineComponent({
  name: 'ElAlert',

  props: alertProps,
  emits: alertEmits,

  setup(props, { emit, slots }) {
    // state
    const visible = ref(true)

    // computed
    const typeClass = computed(() => `el-alert--${props.type}`)
    const iconClass = computed(
      () => ALERT_TYPE_CLASSES_MAP[props.type] || ALERT_TYPE_CLASSES_MAP['info']
    )
    const isBigIcon = computed(() =>
      props.description || slots.default ? 'is-big' : ''
    )
    const isBoldTitle = computed(() =>
      props.description || slots.default ? 'is-bold' : ''
    )

    // methods
    const close = (evt: MouseEvent) => {
      visible.value = false
      emit('close', evt)
    }

    return {
      visible,
      typeClass,
      iconClass,
      isBigIcon,
      isBoldTitle,
      close,
    }
  },
})
</script>
