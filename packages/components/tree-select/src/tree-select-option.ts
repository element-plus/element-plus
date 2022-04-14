import { defineComponent } from 'vue'
import { ElOption } from '@element-plus/components/select'

const component = defineComponent({
  extends: ElOption,
  setup(props, ctx) {
    const result = (ElOption.setup as NonNullable<any>)(props, ctx)

    // use methods.selectOptionClick
    delete result.selectOptionClick

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
