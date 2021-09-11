<template>
  <div
    ref="anchorLink$"
    role="link"
    tabindex="-1"
    :class="[ns.e('link'), ns.is('active', active)]"
    :title="title"
    @click.stop="handleClick"
  >
    <div
      v-if="title || $slots.title"
      :class="[ns.e('link-title')]"
      tabindex="0"
    >
      <slot name="title">{{ title }}</slot>
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  shallowRef,
  watch,
} from 'vue'
import { anchorContextKey } from '@element-plus/tokens'
import { throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { anchorLinkProps } from './anchor-link'

const COMPONENT_NAME = 'ElAnchorLink'
defineOptions({
  name: 'ElAnchorLink',
})

const props = defineProps(anchorLinkProps)

const vm = getCurrentInstance()!
const ns = useNamespace('anchor')

const anchorContext = inject(anchorContextKey)
if (!anchorContext)
  throwError(COMPONENT_NAME, '<el-anchor><el-anchor-link /></el-anchor>')

const anchorLink$ = shallowRef<HTMLDivElement>()
const active = computed(() => anchorContext.activeLink.value === vm.uid)

const handleClick = (evt: MouseEvent) => {
  const { href } = props
  anchorContext.onAnchorLinkClick(href, evt)
  anchorContext.scrollTo(href)
}

const register = () =>
  anchorContext.registerLink({
    uid: vm.uid,
    element: anchorLink$,
    props,
  })

watch(
  () => props.href,
  () => register()
)

onMounted(() => {
  register()
})

onUnmounted(() => {
  anchorContext.unregisterLink(vm.uid)
})
</script>
