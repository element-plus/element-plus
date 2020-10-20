import { mount } from '@vue/test-utils'
import InputNumber from '../src/index.vue'
import { ref } from  'vue'

const _mount = options => mount({
  components: {
    'el-input-number': InputNumber,
  },
  ...options,
})
describe('InputNumber.vue', () => {
  test('create', async () => {
    const wrapper = _mount({
      template: `
        <el-input-number
          label="描述文字"
          v-model="num">
        </el-input-number>
      `,
      setup() {
        const num = ref(1)

        return {
          num,
        }
      },
    })

    const InputNumberElm = wrapper.find('input')
    expect(InputNumberElm.exists()).toBe(true)
  })
})
