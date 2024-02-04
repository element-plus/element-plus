import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import Tour from '../src/tour.vue'
import TourStep from '../src/step.vue'

describe('Tour.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('basic', () => {
    mount({
      setup() {
        const btnRef = ref<HTMLElement | null>(null)
        return () => (
          <>
            <button ref={btnRef}>cover</button>
            <Tour modelValue={true}>
              <TourStep
                title="cover title"
                description="cover description."
                target={btnRef.value}
              />
            </Tour>
          </>
        )
      },
    })

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'cover title'
    )
    expect(document.querySelector('.el-tour__body span')?.innerHTML).toEqual(
      'cover description.'
    )
  })

  test('controlled current', async () => {
    const wrapper = mount({
      setup() {
        const btnRef = ref<HTMLElement | null>(null)
        const current = ref(0)
        return () => (
          <>
            <button ref={btnRef} onClick={() => (current.value = 1)}>
              setCurrent
            </button>
            <Tour modelValue={true} v-model:current={current.value}>
              <TourStep
                title="first"
                description="cover description."
                target={btnRef.value}
              />
              <TourStep
                title="second"
                description="cover description."
                target={btnRef.value}
              />
            </Tour>
          </>
        )
      },
    })

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'first'
    )
    wrapper.find('button').trigger('click')
    await nextTick()
    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'second'
    )
  })

  test('no mask', () => {
    mount({
      setup() {
        const btnRef = ref<HTMLElement | null>(null)
        return () => (
          <>
            <button ref={btnRef}>cover</button>
            <Tour modelValue={true} mask={false}>
              <TourStep
                title="cover title"
                description="cover description."
                target={btnRef.value}
              />
            </Tour>
          </>
        )
      },
    })

    expect(document.querySelector('.el-tour-mask')?.innerHTML).toBeFalsy()
  })

  test('custom indicator', () => {
    mount({
      setup() {
        const btnRef = ref<HTMLElement | null>(null)
        const slots = {
          indicators: ({ current, total }: any) => `${current + 1} / ${total}`,
          default: () => (
            <TourStep
              title="cover title"
              description="cover description."
              target={btnRef.value}
            />
          ),
        }
        return () => (
          <>
            <button ref={btnRef}>cover</button>
            <Tour modelValue={true} v-slots={slots} />
          </>
        )
      },
    })

    expect(document.querySelector('.el-tour-indicators')?.innerHTML).toBe(
      '1 / 1'
    )
  })

  test('primary', () => {
    mount({
      setup() {
        const btnRef = ref<HTMLElement | null>(null)
        return () => (
          <>
            <button ref={btnRef}>cover</button>
            <Tour modelValue={true} type="primary">
              <TourStep
                title="cover title"
                description="cover description."
                target={btnRef.value}
              />
            </Tour>
          </>
        )
      },
    })

    expect(document.querySelector('.el-tour.el-tour--primary')).toBeTruthy()
  })

  test('no target', () => {
    mount({
      setup() {
        return () => (
          <Tour modelValue={true} type="primary">
            <TourStep title="cover title" description="cover description." />
          </Tour>
        )
      },
    })

    const style = getComputedStyle(document.querySelector('.el-tour__content')!)
    expect(style.position).toBe('fixed')
    expect(style.top).toBe('50%')
    expect(style.left).toBe('50%')
    expect(style.transform).toBe('translate3d(-50%, -50%, 0)')
    expect(style.maxWidth).toBe('100vw')
  })

  test('button props', () => {
    mount({
      setup() {
        return () => (
          <Tour modelValue={true} current={1}>
            <TourStep title="first" description="cover description." />
            <TourStep
              title="second"
              description="cover description."
              prevButtonProps={{
                children: '上一步',
                class: 'prev-btn',
              }}
              nextButtonProps={{
                children: '下一步',
                class: 'next-btn',
              }}
            />
          </Tour>
        )
      },
    })

    expect(document.querySelector('.prev-btn span')?.innerHTML).toBe('上一步')
    expect(document.querySelector('.next-btn span')?.innerHTML).toBe('下一步')
  })
})
