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
  provide } from 'vue'

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
      disabled: props.disabled,
    })

    // TODO: queryChange还没实现

    return {
      visible,
    }
  },

  // methods: {
  //   queryChange() {
  //     this.visible = this.$children &&
  //       Array.isArray(this.$children) &&
  //       this.$children.some(option => option.visible === true);
  //   }
  // },

  // created() {
  //   this.$on('queryChange', this.queryChange);
  // },
})
</script>
