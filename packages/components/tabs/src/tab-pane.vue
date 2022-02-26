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
<script lang="ts" setup>
import {
  ref,
  computed,
  inject,
  getCurrentInstance,
  watch,
  markRaw,
  reactive,
} from 'vue'
import { eagerComputed } from '@vueuse/core'
import { tabsRootContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils'
import { tabPaneProps } from './tab-pane'

defineOptions({
  name: 'ElTabPane',
})
const props = defineProps(tabPaneProps)

const instance = getCurrentInstance()!
const tabsRoot = inject(tabsRootContextKey)
if (!tabsRoot) throwError('ElTabPane', `must use with ElTabs`)

const index = ref<string>()
const loaded = ref(false)
const isClosable = computed(() => props.closable || tabsRoot.props.closable)
const active = eagerComputed(
  () => tabsRoot.currentName.value === (props.name || index.value)
)
const paneName = computed(() => props.name || index.value)
const shouldBeRender = eagerComputed(
  () => !props.lazy || loaded.value || active.value
)

watch(active, (val) => {
  if (val) loaded.value = true
})

tabsRoot.updatePaneState(
  reactive({
    uid: instance.uid,
    instance: markRaw(instance),
    props,
    paneName,
    active,
    index,
    isClosable,
  })
)
</script>
