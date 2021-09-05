import { mount } from '@vue/test-utils'
import Progress from '../src/index.vue'

describe('Progress.vue', () => {
  test('percent', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 66,
      },
    })
    expect(wrapper.find('.el-progress__text').text()).toBe('66%')
    expect(wrapper.find('.el-progress-bar__inner').attributes('style')).toBe(
      'width: 66%; animation-duration: 3s;'
    )
  })

  test('status', () => {
    const wrapper = mount(Progress, {
      props: {
        status: 'exception',
      },
    })
    expect(wrapper.classes()).toContain('is-exception')
    expect(
      wrapper.find('.el-progress__text .el-icon-circle-close').exists()
    ).toBe(true)
  })

  test('text inside', () => {
    const wrapper = mount(Progress, {
      props: {
        textInside: true,
      },
    })
    expect(wrapper.classes()).toContain('el-progress--text-inside')
  })

  test('stroke width', () => {
    const wrapper = mount(Progress, {
      props: {
        strokeWidth: 7,
      },
    })
    expect(wrapper.find('.el-progress-bar__outer').attributes('style')).toBe(
      'height: 7px;'
    )
  })

  test('show text', () => {
    const wrapper = mount(Progress, {
      props: {
        showText: false,
      },
    })
    expect(wrapper.find('.el-progress__text').exists()).toBe(false)
  })

  test('circle', () => {
    const wrapper = mount(Progress, {
      props: {
        type: 'circle',
      },
    })
    expect(wrapper.classes()).toContain('el-progress--circle')
  })

  test('dashboard', () => {
    const wrapper = mount(Progress, {
      props: {
        type: 'dashboard',
      },
    })
    expect(wrapper.classes()).toContain('el-progress--dashboard')
  })

  test('width', () => {
    const wrapper = mount(Progress, {
      props: {
        type: 'circle',
        width: 120,
      },
    })
    expect(wrapper.find('.el-progress-circle').attributes('style')).toBe(
      'height: 120px; width: 120px;'
    )
  })

  test('color', () => {
    const wrapper = mount(Progress, {
      props: {
        color: 'rgb(255, 255, 255)',
      },
    })
    expect(
      wrapper.find('.el-progress-bar__inner').attributes('style')
    ).toContain('background-color: rgb(255, 255, 255);')
  })

  test('color is function', async () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 0,
        color: (percentage) => {
          if (percentage > 50) {
            return 'rgb(4, 5, 6)'
          } else {
            return 'rgb(1, 2, 3)'
          }
        },
      },
    })
    expect(
      wrapper.find('.el-progress-bar__inner').attributes('style')
    ).toContain('background-color: rgb(1, 2, 3);')
    await wrapper.setProps({ percentage: 60 })
    expect(
      wrapper.find('.el-progress-bar__inner').attributes('style')
    ).toContain('background-color: rgb(4, 5, 6);')
  })

  test('color is array', async () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 0,
        color: [
          { color: 'rgb(1, 1, 1)', percentage: 10 },
          { color: 'rgb(9, 9, 9)', percentage: 90 },
        ],
      },
    })
    await wrapper.setProps({ percentage: 9 })
    expect(
      wrapper.find('.el-progress-bar__inner').attributes('style')
    ).toContain('background-color: rgb(1, 1, 1);')
    await wrapper.setProps({ percentage: 89 })
    expect(
      wrapper.find('.el-progress-bar__inner').attributes('style')
    ).toContain('background-color: rgb(9, 9, 9);')
  })

  test('format', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 100,
        format: (percent) => `占比${percent}%`,
      },
    })
    expect(wrapper.find('.el-progress__text').text()).toBe('占比100%')
  })

  test('slot', () => {
    const wrapper = mount(Progress, {
      slots: {
        default: '自定义内容',
      },
    })
    expect(wrapper.find('.el-progress__text').text()).toBe('自定义内容')
  })
})
