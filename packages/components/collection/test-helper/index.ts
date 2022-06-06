import { inject } from 'vue'
import {
  COLLECTION_ITEM_SIGN,
  createCollectionWithScope,
} from '../src/collection'

const TestCollection = createCollectionWithScope('Test')
export default TestCollection

export const CollectionChildComponent = {
  setup() {
    const { getItems, collectionRef, itemMap } = inject(
      TestCollection.COLLECTION_INJECTION_KEY,
      undefined
    )!
    return {
      itemMap,
      getItems,
      collectionRef,
    }
  },
  template: `<div ref="collectionRef"><slot/></div>`,
}

export const CollectionItemChildComponent = {
  setup() {
    const { collectionItemRef } = inject(
      TestCollection.COLLECTION_ITEM_INJECTION_KEY,
      undefined
    )!

    return {
      collectionItemRef,
    }
  },
  template: `<div ref="collectionItemRef" class="${COLLECTION_ITEM_SIGN}" ><slot /></div>`,
}
