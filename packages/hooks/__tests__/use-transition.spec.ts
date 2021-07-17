import { defineComponent, Fragment, h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { getCssVariable } from '@element-plus/test-utils/dom'
import { useTransition, useTransitionProps } from '../use-transition'

const transitionShow = 'show'
const transitionHide = 'hide'

describe('use-transition', () => {
  const TestComp = defineComponent({
    props: useTransitionProps,
    setup(props) {
      const indicator = ref(false)

      const { transitionStyle, transition } = useTransition(props, indicator)
      const toggle = () => (indicator.value = !indicator.value)
      return () => {
        return h(Fragment, { key: 0 }, [
          h(
            'div',
            {
              style: transitionStyle.value,
              class: 'content',
            },
            transition.value,
          ),
          h(
            'button',
            {
              onClick: toggle,
              class: 'toggle',
            },
            'toggle',
          ),
        ])
      }
    },
  })

  let wrapper
  beforeEach(() => {
    wrapper = mount(TestComp, {
      props: {
        transitionShow,
        transitionHide,
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', async () => {
    expect(wrapper.find('.content').text()).toBe(
      `el-transition--${transitionHide}`,
    )
    expect(
      getCssVariable(
        wrapper.find('.content').element,
        '--el-transition-duration',
      ),
    ).toBe('0.3s')
  })

  it('should be able to update transition class', async () => {
    expect(wrapper.find('.content').text()).toBe(
      `el-transition--${transitionHide}`,
    )

    await wrapper.find('.toggle').trigger('click') // this tick indicator gets changed
    await nextTick() // this tick the inner value transitionState gets changed
    await nextTick() // this tick the computed value gets updated
    expect(wrapper.find('.content').text()).toBe(
      `el-transition--${transitionShow}`,
    )
  })

  it('should be able to change the transition duration via props', async () => {
    expect(wrapper.find('.content').text()).toBe(
      `el-transition--${transitionHide}`,
    )
    expect(
      getCssVariable(
        wrapper.find('.content').element,
        '--el-transition-duration',
      ),
    ).toBe('0.3s')

    await wrapper.setProps({
      transitionDuration: 0.2,
    })

    expect(
      getCssVariable(
        wrapper.find('.content').element,
        '--el-transition-duration',
      ),
    ).toBe('0.2s')
  })
})
