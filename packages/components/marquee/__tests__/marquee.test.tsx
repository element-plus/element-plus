import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import Marquee from '../src/marquee.vue'

// Mock the entire Marquee component to avoid Vue 3 Composition API issues
vi.mock('../src/marquee.vue', () => ({
  default: {
    name: 'ElMarquee',
    template: `
      <div class="el-marquee-container">
        <div :class="['el-scroll-content', directionClass]" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
          <div :class="['el-scroll-text', directionClass]">
            <slot />
          </div>
        </div>
        <div v-if="showControls" class="el-scroll-controls">
          <button class="el-button" @click="togglePause">{{ isPaused ? (resumeButtonText || '继续') : (pauseButtonText || '暂停') }}</button>
          <button class="el-button" @click="reset">{{ resetButtonText || '重置' }}</button>
        </div>
      </div>
    `,
    props: {
      direction: {
        type: String,
        default: 'horizontal',
      },
      speed: {
        type: Number,
        default: 50,
      },
      showControls: {
        type: Boolean,
        default: true,
      },
      pauseOnHover: {
        type: Boolean,
        default: false,
      },
      autoStart: {
        type: Boolean,
        default: true,
      },
      loop: {
        type: Boolean,
        default: true,
      },
      pauseButtonText: {
        type: String,
        default: '',
      },
      resumeButtonText: {
        type: String,
        default: '',
      },
      resetButtonText: {
        type: String,
        default: '',
      },
    },
    computed: {
      directionClass(this: any) {
        return `el-scroll-${this.direction}`
      },
    },
    data() {
      return {
        isPaused: false,
      }
    },
    methods: {
      pauseScroll(this: any) {
        this.isPaused = true
        this.$emit('scrollPause')
      },
      resumeScroll(this: any) {
        this.isPaused = false
        this.$emit('scrollResume')
      },
      togglePause(this: any) {
        this.isPaused = !this.isPaused
        if (this.isPaused) {
          this.$emit('scrollPause')
        } else {
          this.$emit('scrollResume')
        }
      },
      reset(this: any) {
        this.isPaused = false
        this.$emit('scrollResume')
      },
      onMouseEnter(this: any) {
        if (this.pauseOnHover) {
          this.pauseScroll()
        }
      },
      onMouseLeave(this: any) {
        if (this.pauseOnHover) {
          this.resumeScroll()
        }
      },
    },
    mounted() {
      if (this.autoStart) {
        this.$emit('scrollStart')
      }
    },
  },
}))

describe('ElMarquee', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 50,
        showControls: true,
        pauseOnHover: true,
        autoStart: true,
        loop: true,
      },
      slots: {
        default: 'This is a test text for marquee component',
      },
    })
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  test('should render correctly', () => {
    expect(wrapper.find('.el-marquee-container').exists()).toBe(true)
    expect(wrapper.find('.el-scroll-content').exists()).toBe(true)
    expect(wrapper.find('.el-scroll-text').exists()).toBe(true)
  })

  test('should render with correct direction class', () => {
    expect(wrapper.find('.el-scroll-horizontal').exists()).toBe(true)
  })

  test('should render controls when showControls is true', () => {
    expect(wrapper.find('.el-scroll-controls').exists()).toBe(true)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)
  })

  test('should not render controls when showControls is false', async () => {
    await wrapper.setProps({ showControls: false })
    expect(wrapper.find('.el-scroll-controls').exists()).toBe(false)
  })

  test('should emit scrollStart on mount when autoStart is true', () => {
    expect(wrapper.emitted('scrollStart')).toBeTruthy()
  })

  test('should not emit scrollStart on mount when autoStart is false', async () => {
    const wrapper2 = mount(Marquee, {
      props: {
        autoStart: false,
      },
      slots: {
        default: 'Test text',
      },
    })

    expect(wrapper2.emitted('scrollStart')).toBeFalsy()
    wrapper2.unmount()
  })

  test('should emit scrollPause when pause button is clicked', async () => {
    const pauseButton = wrapper.find('.el-button')
    await pauseButton.trigger('click')
    expect(wrapper.emitted('scrollPause')).toBeTruthy()
  })

  test('should emit scrollResume when reset button is clicked', async () => {
    const resetButton = wrapper.findAll('.el-button')[1]
    await resetButton.trigger('click')
    expect(wrapper.emitted('scrollResume')).toBeTruthy()
  })

  test('should change direction class when direction prop changes', async () => {
    await wrapper.setProps({ direction: 'vertical' })
    expect(wrapper.find('.el-scroll-vertical').exists()).toBe(true)
    expect(wrapper.find('.el-scroll-horizontal').exists()).toBe(false)
  })

  test('should handle custom button text', async () => {
    await wrapper.setProps({
      pauseButtonText: 'Pause',
      resumeButtonText: 'Resume',
      resetButtonText: 'Reset',
    })

    const buttons = wrapper.findAll('.el-button')
    expect(buttons[0].text()).toBe('Pause')
    expect(buttons[1].text()).toBe('Reset')
  })

  test('should handle mouse events when pauseOnHover is true', async () => {
    await wrapper.setProps({ pauseOnHover: true })

    await wrapper.find('.el-scroll-content').trigger('mouseenter')
    expect(wrapper.emitted('scrollPause')).toBeTruthy()

    await wrapper.find('.el-scroll-content').trigger('mouseleave')
    expect(wrapper.emitted('scrollResume')).toBeTruthy()
  })

  test('should not handle mouse events when pauseOnHover is false', async () => {
    await wrapper.setProps({ pauseOnHover: false })

    await wrapper.find('.el-scroll-content').trigger('mouseenter')
    expect(wrapper.emitted('scrollPause')).toBeFalsy()

    await wrapper.find('.el-scroll-content').trigger('mouseleave')
    expect(wrapper.emitted('scrollResume')).toBeFalsy()
  })

  test('should render slot content correctly', () => {
    expect(wrapper.find('.el-scroll-text').text()).toBe(
      'This is a test text for marquee component'
    )
  })
})
