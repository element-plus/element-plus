import makeMount from '../../test-utils/make-mount'
import Popover from '../src/index.vue'
import PopupManager from '@element-plus/utils/popup-manager'
import { ref, nextTick, h, createSlots } from 'vue'

const AXIOM = 'Rem is the best girl'

const mount = makeMount(Popover, {
  slots: {
    default: AXIOM,
  },
  props: {
    appendToBody: false,
  },
})
describe('Popover.vue', () => {
  test('render test', () => {
    const wrapper = mount()
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('should render with title', () => {
    const title = 'test title'
    const wrapper = mount({
      props: {
        title,
      },
    })

    expect(wrapper.text()).toContain(title)
  })

  test('should modify popover\'s style with width', async () => {
    const wrapper = mount({
      props: {
        width: 200,
      },
    })

    expect(wrapper.find('.el-popover').attributes('style')).toContain('width: 200px')

    await wrapper.setProps({
      width: '100vw',
    })


    expect(wrapper.find('.el-popover').attributes('style')).toContain('width: 100vw')
  })

  test('the content should be overrode by slots', () => {
    const content = 'test content'
    const wrapper = mount({
      props: {
        content,
      },
    })
    expect(wrapper.text()).toContain(AXIOM)
  })

  test('should render content when no slots were passed', () => {

    const content = 'test content'
    const wrapper = makeMount(Popover, {
      props: {
        content,
        appendToBody: false,
      },
    })()

    expect(wrapper.text()).toBe(content)
    wrapper.unmount()
  })

  test('popper z-index should be dynamical', () => {
    const wrapper = mount()

    expect(
      Number.parseInt(
        window.getComputedStyle(wrapper.find('.el-popper').element).zIndex,
      ),
    ).toBeLessThanOrEqual(PopupManager.zIndex)
  })

  test('should render correctly with tabindex', async () => {
    const tabindex = ref(1)

    const Comp = {
      render() {
        const slot = () => [ h('button', { ref: 'btn' }, 'click 激活') ]

        return h(Popover, {
          placement: 'bottom',
          title: '标题',
          width: 200,
          trigger: 'click',
          tabindex: tabindex.value,
          content: '这是一段内容,这是一段内容,这是一段内容,这是一段内容。',
        }, createSlots({}, [{ name: 'reference', fn: slot }]))
      },
    }

    const wrapper = makeMount(Comp, {})()
    const ele = wrapper.vm.$refs.btn
    expect((ele as HTMLElement).getAttribute('tabindex')).toEqual('1')

    tabindex.value = 2

    await nextTick()
    expect((ele as HTMLElement).getAttribute('tabindex')).toEqual('2')
  })
})
