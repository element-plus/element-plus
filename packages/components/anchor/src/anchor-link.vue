<template>
  <div>
    <a :href="href" :class="{'el-anchor__link': true, 'is-active': active}" @click.prevent="handleClick">
      <template v-if="title || $slots.title">
        <slot name="title">
          {{ title }}
        </slot>
      </template>
    </a>
  </div>
</template>
<script lang='ts'>
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useInjectAnchor } from './context'
export default defineComponent({
  name: 'ElAnchorLink',
  props: {
    href: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const active = ref(false)
    const {
      handleClick: contextHandleClick,
      scrollTo,
      unregisterLink,
      registerLink,
      activeLink,
    } = useInjectAnchor()
    const handleClick = (e: Event) => {
      const { href } = props
      contextHandleClick(e, { href })
      scrollTo(href)
    }
    watch(activeLink, val => {
      active.value = val === props.href
    })
    watch(
      () => props.href,
      (val, oldVal) => {
        nextTick(() => {
          unregisterLink(oldVal)
          registerLink(val)
        })
      },
    )
    onMounted(() => {
      registerLink(props.href)
    })
    onBeforeUnmount(() => {
      unregisterLink(props.href)
    })
    return {
      active,
      handleClick,
    }
  },
})
</script>
