<template>
  <transition name="el-alert-fade">
    <div
      v-show="visible"
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
    >
      <el-icon
        v-if="showIcon && iconComponent"
        class="el-alert__icon"
        :class="isBigIcon"
      >
        <component :is="iconComponent" />
      </el-icon>
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
        <template v-if="closable">
          <div
            v-if="closeText"
            class="el-alert__closebtn is-customed"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else class="el-alert__closebtn" @click="close">
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

    // computed
    const typeClass = computed(() => `el-alert--${props.type}`)
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
      close,
    }
  },
})
</script>
