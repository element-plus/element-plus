<template>
  <ul v-show="visible" class="el-select-group__wrap">
    <li class="el-select-group__title">{{ label }}</li>
    <li>
      <ul class="el-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  inject,
  ref,
} from 'vue'

export default defineComponent({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const visible = ref(true)

    provide('SelectGroup', {
      ...props,
    })

    const select = inject('Select', {}) as any

    const queryChange = () => {
      visible.value = select.options.value && select.options.value.some(option => option.visible === true )
    }
    select.selectEmitter.on('elOptionGroupQueryChange', queryChange)

    return {
      visible,
    }
  },
})
</script>
