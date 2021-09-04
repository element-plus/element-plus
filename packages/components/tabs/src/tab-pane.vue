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
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  inject,
  getCurrentInstance,
  watch,
} from 'vue'
import type { RootTabs, UpdatePaneStateCallback } from './token'

export default defineComponent({
  name: 'ElTabPane',
  props: {
    label: {
      type: String,
      default: '',
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
    const index = ref<string>(null)
    const loaded = ref(false)
    const rootTabs = inject<RootTabs>('rootTabs')
    const updatePaneState = inject<UpdatePaneStateCallback>('updatePaneState')

    if (!rootTabs || !updatePaneState) {
      throw new Error(`ElTabPane must use with ElTabs`)
    }

    const isClosable = computed(() => {
      return props.closable || rootTabs.props.closable
    })

    const active = computed(() => {
      return rootTabs.currentName.value === (props.name || index.value)
    })

    const paneName = computed((): string => {
      return props.name || index.value
    })

    const shouldBeRender = computed(() => {
      return !props.lazy || loaded.value || active.value
    })

    watch(active, (val) => {
      if (val) loaded.value = true
    })

    const instance = getCurrentInstance()
    updatePaneState({
      uid: instance.uid,
      instance,
      props,
      paneName,
      active,
      index,
      isClosable,
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
