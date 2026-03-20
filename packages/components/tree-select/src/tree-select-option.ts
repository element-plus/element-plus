import { defineComponent, getCurrentInstance, nextTick, watch } from 'vue'
import { ElOption } from '@element-plus/components/select'

const component = defineComponent({
  extends: ElOption,
  setup(props, ctx) {
    const result = (ElOption.setup as NonNullable<any>)(props, ctx)

    // use methods.selectOptionClick
    delete result.selectOptionClick

    const vm = (getCurrentInstance() as NonNullable<any>).proxy

    // Fix: https://github.com/element-plus/element-plus/issues/7917
    // `el-option` will delete the cache before unmount,
    // This is normal for flat arrays `<el-select><el-option v-for="3"></el-select>`,
    // Because the same node key does not create a difference node,
    // But in tree data, the same key at different levels will create diff nodes,
    // So the destruction of `el-option` in `nextTick` will be slower than
    // the creation of new `el-option`, which will delete the new node,
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
      // $el.parentElement => el-tree-node__content
      this.$el.parentElement.click()
    },
  },
})

export default component
