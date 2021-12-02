<template>
  <div v-bind="dataset" ref="collectionItemRef">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  inject,
  onMounted,
  onBeforeUnmount,
  unref,
} from '@vue/runtime-core'
import { COLLECTION_ITEM_SIGN, COLLECTION_INJECTION_KEY } from './tokens'

export default defineComponent({
  name: 'ElCollectionItem',
  inheritAttrs: false,
  setup(_, { attrs }) {
    const collectionItemRef = ref()
    const collectionInjection = inject(COLLECTION_INJECTION_KEY, undefined)!

    const dataset = {
      [COLLECTION_ITEM_SIGN]: '',
    }

    onMounted(() => {
      const collectionItemEl = unref(collectionItemRef)!
      collectionInjection.itemMap.set(collectionItemEl, {
        ref: collectionItemEl,
        ...attrs,
      })
    })

    onBeforeUnmount(() => {
      const collectionItemEl = unref(collectionItemRef)!
      collectionInjection.itemMap.delete(collectionItemEl)
    })

    return {
      dataset,
      collectionItemRef,
    }
  },
})
</script>
