import Popover from '../src/index.vue'
import PopoverDirective, { VPopover } from '../src/directive'
import makeMount from '@element-plus/test-utils/make-mount'


const AXIOM = 'Rem is the best girl'

const Comp = {
  template: `
  <el-popover title="title" content="some content" ref="popover"/>
  <div v-popover:popover>
    ${AXIOM}
  </div>
  `,
  components: {
    [Popover.name]: Popover,
  }
}

const mount = makeMount(Comp, {
  props: {

  },
  global: {
    directives: {
      [VPopover]: PopoverDirective,
    }
  }
})

describe('v-popover', () => {

  test('should render correctly', () => {
    const wrapper = mount()

    expect(wrapper.text()).toBe(AXIOM)
  })
})