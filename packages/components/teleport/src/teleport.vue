<template>
  <teleport v-if="container" :to="container" :disabled="disabled">
    <div
      ref="containerRef"
      :class="teleportPrefixClass"
      :style="containerStyle"
    >
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import { elTeleportProps } from './teleport'

export default defineComponent({
  props: elTeleportProps,
  setup(props) {
    const teleportPrefixClass = usePrefixClass('teleport')
    const containerRef = ref<HTMLElement>()
    const containerStyle = computed(() => {
      return props.container === 'body'
        ? [
            props.style,
            {
              position: 'absolute',
              top: `0px`,
              left: `0px`,
              zIndex: props.zIndex,
            },
          ]
        : {}
    })
    return {
      teleportPrefixClass,
      containerRef,
      containerStyle,
    }
  },
})
</script>
