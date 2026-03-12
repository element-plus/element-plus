import { defineComponent, getCurrentInstance, nextTick, watch } from 'vue'
import { GOption } from '@element-plus/components/select'

const component = defineComponent({
  extends: GOption,
  setup(props, ctx) {
    const result = (GOption.setup as NonNullable<any>)(props, ctx)

    // use methods.selectOptionClick
    delete result.selectOptionClick

    const vm = (getCurrentInstance() as NonNullable<any>).proxy

    // Fix: https://github.com/element-plus/element-plus/issues/7917
    // `g-option` will delete the cache before unmount,
    // This is normal for flat arrays `<g-select><g-option v-for="3"></g-select>`,
    // Because the same node key does not create a difference node,
    // But in tree data, the same key at different levels will create diff nodes,
    // So the destruction of `g-option` in `nextTick` will be slower than
    // the creation of new `g-option`, which will delete the new node,
    // here restore the deleted node.
    // @link https://github.com/element-plus/element-plus/blob/6df6e49db07b38d6cc3b5e9a960782bd30879c11/packages/components/select/src/option.vue#L78
    nextTick(() => {
      if (!result.select.states.cachedOptions.get(vm.value)) {
        result.select.onOptionCreate(vm)
      }
    })

    watch(
      () => ctx.attrs.visible,
      (val) => {
        nextTick(() => {
          result.states.visible = val
        })
      },
      {
        immediate: true,
      }
    )

    return result
  },
  methods: {
    selectOptionClick() {
      // $el.parentElement => g-tree-node__content
      this.$el.parentElement.click()
    },
  },
})

export default component
