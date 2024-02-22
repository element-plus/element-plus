<template>
  <div :class="ns.e('item')">
    <a ref="linkRef" :class="cls" :href="href" @click="handleClick">
      <slot>{{ title }}</slot>
    </a>
    <div
      v-if="$slots['sub-link'] && direction === 'vertical'"
      :class="ns.e('list')"
    >
      <slot name="sub-link" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import { anchorLinkProps } from './anchor-link'
import { anchorKey } from './constants'

defineOptions({
  name: 'ElAnchorLink',
})

const props = defineProps(anchorLinkProps)

const linkRef = ref<HTMLElement | null>(null)

const {
  ns,
  direction,
  currentAnchor,
  addLink,
  removeLink,
  handleClick: contextHandleClick,
} = inject(anchorKey)!

const cls = computed(() => [
  ns.e('link'),
  ns.is('active', currentAnchor.value === props.href),
])

const handleClick = (e: MouseEvent) => {
  contextHandleClick(e, props.href)
}

watch(
  () => props.href,
  (val, oldVal) => {
    nextTick(() => {
      if (oldVal) removeLink(oldVal)
      if (val) {
        addLink({
          href: val,
          el: linkRef.value!,
        })
      }
    })
  }
)

onMounted(() => {
  const { href } = props
  if (href) {
    addLink({
      href,
      el: linkRef.value!,
    })
  }
})

onBeforeUnmount(() => {
  const { href } = props
  if (href) {
    removeLink(href)
  }
})
</script>
