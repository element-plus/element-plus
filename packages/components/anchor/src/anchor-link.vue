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
import { anchorKey } from './helper'

defineOptions({
  name: 'ElAnchorLink',
})

const props = defineProps(anchorLinkProps)

const linkRef = ref<HTMLElement | null>(null)

const {
  ns,
  direction,
  current,
  addLink,
  removeLink,
  handleClick: contextHandleClick,
} = inject(anchorKey)!

const cls = computed(() => [
  ns.e('link'),
  ns.is('active', current.value === props.href),
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
  if (props.href) {
    addLink({
      href: props.href,
      el: linkRef.value!,
    })
  }
})

onBeforeUnmount(() => {
  if (props.href) {
    removeLink(props.href)
  }
})
</script>