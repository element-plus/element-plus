import { defineComponent } from 'vue'
import ElSelectOption from '@element-plus/components/select/src/option.vue'

const component = defineComponent({
  extends: ElSelectOption,
  setup(props, ctx) {
    const result = (ElSelectOption.setup as NonNullable<any>)(props, ctx)

    delete result.selectOptionClick

    return result
  },
  methods: {
    selectOptionClick() {
      this.$parent?.$parent?.$el?.click()
    },
  },
})

export default component
