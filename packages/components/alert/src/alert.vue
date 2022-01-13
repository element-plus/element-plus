<template>
  <transition name="el-alert-fade">
    <div
      v-show="visible"
      :class="[
        prefixClass,
        typeClass,
        center ? 'is-center' : '',
        'is-' + effect,
      ]"
      role="alert"
    >
      <el-icon
        v-if="showIcon && iconComponent"
        :class="[`${prefixClass}__icon`, isBigIcon]"
      >
        <component :is="iconComponent" />
      </el-icon>
      <div :class="`${prefixClass}__content`">
        <span
          v-if="title || $slots.title"
          :class="[`${prefixClass}__title`, isBoldTitle]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p
          v-if="$slots.default || description"
          :class="`${prefixClass}__description`"
        >
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="`${prefixClass}__closebtn`"
            class="is-customed"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else :class="`${prefixClass}__closebtn`" @click="close">
            <close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { TypeComponents, TypeComponentsMap } from '@element-plus/utils/icon'
import { usePrefixClass } from '@element-plus/hooks'
import { alertProps, alertEmits } from './alert'

export default defineComponent({
  name: 'ElAlert',

  components: {
    ElIcon,
    ...TypeComponents,
  },

  props: alertProps,
  emits: alertEmits,

  setup(props, { emit, slots }) {
    // state
    const visible = ref(true)
    const prefixClass = usePrefixClass('alert')
    // computed
    const typeClass = computed(() => `${prefixClass}--${props.type}`)
    const iconComponent = computed(
      () => TypeComponentsMap[props.type] || TypeComponentsMap['info']
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
      iconComponent,
      isBigIcon,
      isBoldTitle,
      prefixClass,
      close,
    }
  },
})
</script>
