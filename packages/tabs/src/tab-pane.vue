<template>
  <div
    v-if="shouldBeRender"
    v-show="active"
    :id="`pane-${paneName}`"
    class="el-tab-pane"
    role="tabpanel"
    :aria-hidden="!active"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, computed, inject } from 'vue'
export default defineComponent({
  name: 'ElTabPane',
  props: {
    label: {
      type: String,
      default: '',
    },
    labelContent: {
      type: Function,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean,
  },
  setup(props) {
    const index = ref(null)
    const loaded = ref(false)
    const rootTabs = inject('rootTabs')

    if (!rootTabs) {
      throw new Error(`ElTabPane must use with ElTabs`)
    }

    const isClosable = computed(() => {
      return props.closable || rootTabs.props.closable
    })

    const active = computed(() => {
      const active = rootTabs.setupState.currentName === (props.name || index.value)
      if (active) {
        loaded.value = true
      }
      return active
    })

    const paneName = computed(() => {
      return props.name || index.value
    })

    const shouldBeRender = computed(() => {
      return (!props.lazy || loaded.value) || active.value
    })

    return {
      index,
      loaded,
      isClosable,
      active,
      paneName,
      shouldBeRender,
    }
  },
})
</script>
