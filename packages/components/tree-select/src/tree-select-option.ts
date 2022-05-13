import { defineComponent, getCurrentInstance } from 'vue'
import { ElOption } from '@element-plus/components/select'

const component = defineComponent({
  extends: ElOption,
  setup(props, ctx) {
    const result = (ElOption.setup as NonNullable<any>)(props, ctx)
    const instance = getCurrentInstance()!

    result.selectOptionClick = () => {
      // optionRef.value.parentElement => el-tree-node__content
      instance.vnode.el!.parentElement.click()
    }

    return result
  },
})

export default component
