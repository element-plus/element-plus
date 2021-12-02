<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, ref, provide, unref } from 'vue'
import { COLLECTION_INJECTION_KEY, COLLECTION_ITEM_SIGN } from './tokens'

import type { ElCollectionInjectionContext } from './tokens'

export default defineComponent({
  name: 'ElCollection',
  inheritAttrs: false,
  setup() {
    const collectionRef = ref<HTMLElement | null>(null)
    const itemMap: ElCollectionInjectionContext['itemMap'] = new Map()
    const getItems = () => {
      const collectionEl = unref(collectionRef)

      if (!collectionEl) return []
      const orderedNodes = Array.from(
        collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`)
      )

      const items = [...itemMap.values()]

      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref!) - orderedNodes.indexOf(b.ref!)
      )
      return orderedItems
    }

    provide(COLLECTION_INJECTION_KEY, {
      itemMap,
      getItems,
      collectionRef,
    })
  },
})
</script>
