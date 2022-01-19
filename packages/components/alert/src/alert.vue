<template>
  <transition name="el-alert-fade">
    <div
      v-show="visible"
      :class="[ns.b(), ns.m(type), center ? 'is-center' : '', `is-${effect}`]"
      role="alert"
    >
      <el-icon
        v-if="showIcon && iconComponent"
        :class="[ns.e('icon'), isBigIcon]"
      >
        <component :is="iconComponent" />
      </el-icon>
      <div :class="ns.e('content')">
        <span
          v-if="title || $slots.title"
          :class="[ns.e('title'), isBoldTitle]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" :class="ns.e('description')">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="[ns.e('closebtn'), 'is-customed']"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else :class="ns.e('closebtn')" @click="close">
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
import { useNamespace } from '@element-plus/hooks'
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
    const ns = useNamespace('alert')

    // state
    const visible = ref(true)

    // computed
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
      ns,
      visible,
      iconComponent,
      isBigIcon,
      isBoldTitle,
      close,
    }
  },
})
</script>
