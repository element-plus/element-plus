import { defineComponent, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import Tour from '../src/tour.vue'
import TourStep from '../src/step.vue'
import { EVENT_CODE } from '@element-plus/constants'
import triggerEvent from '@element-plus/test-utils/trigger-event'

import type { TourPropsPublic } from '../src/tour'

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

  test('uncontrolled current emits update and change with the new step', async () => {
    const onChange = vi.fn()
    const onUpdateCurrent = vi.fn()
    const wrapper = mount(() => (
      <Tour
        modelValue={true}
        onChange={onChange}
        onUpdate:current={onUpdateCurrent}
      >
        <TourStep
          title="first"
          description="cover description."
          nextButtonProps={{ class: 'next-btn' }}
        />
        <TourStep title="second" description="cover description." />
      </Tour>
    ))

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'first'
    )

    const tourStepOneComponent = wrapper.getComponent(TourStep)
    await tourStepOneComponent.find('.next-btn').trigger('click')
    await nextTick()

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'second'
    )
    expect(onUpdateCurrent).toHaveBeenCalledTimes(1)
    expect(onUpdateCurrent).toHaveBeenCalledWith(1)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(1)
  })

  test('controlled current emits update before change after parent syncs', async () => {
    const current = ref(0)
    const events: string[] = []
    const onChange = vi.fn((value: number) => {
      events.push(`change:${value}`)
    })
    const onUpdateCurrent = vi.fn((value: number) => {
      events.push(`update:${value}`)
      current.value = value
    })
    const wrapper = mount(() => (
      <Tour
        modelValue={true}
        current={current.value}
        onChange={onChange}
        onUpdate:current={onUpdateCurrent}
      >
        <TourStep
          title="first"
          description="cover description."
          nextButtonProps={{ class: 'next-btn' }}
        />
        <TourStep title="second" description="cover description." />
      </Tour>
    ))

    const tourStepOneComponent = wrapper.getComponent(TourStep)
    await tourStepOneComponent.find('.next-btn').trigger('click')
    await nextTick()

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'second'
    )
    expect(events).toEqual(['update:1', 'change:1'])
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(1)
  })

  test('controlled current (fixed value)', async () => {
    const onChange = vi.fn()
    const wrapper = mount({
      setup() {
        const current = ref(0)
        const handleNext = () => {
          Promise.resolve().then(() => {
            current.value = 1
          })
        }
        return () => (
          <>
            <Tour modelValue={true} current={current.value} onChange={onChange}>
              <TourStep
                title="first"
                description="cover description."
                nextButtonProps={{ onClick: handleNext, class: 'next-btn' }}
              />
              <TourStep title="second" description="cover description." />
            </Tour>
          </>
        )
      },
    })

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'first'
    )
    const tourStepOneComponent = wrapper.getComponent(TourStep)
    const nextBtn = tourStepOneComponent.find('.next-btn')
    nextBtn.trigger('click')
    await nextTick()
    // 'current' is set asynchronously, so it should still be in the first step at this point.
    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'first'
    )
    expect(onChange).not.toHaveBeenCalled()
    await flushPromises()
    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'second'
    )
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(1)
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

  test('close-on-press-escape', async () => {
    const onClose = vi.fn()
    const modelValue = ref(true)
    const wrapper = mount(
      defineComponent<TourPropsPublic>({
        setup() {
          return () => (
            <Tour
              v-model={modelValue.value}
              closeOnPressEscape={false}
              onClose={onClose}
            >
              <TourStep title="first" description="cover description." />
              <TourStep title="second" description="cover description." />
            </Tour>
          )
        },
      })
    )

    await nextTick()

    triggerEvent(document.body, 'keydown', EVENT_CODE.esc)
    await nextTick()
    expect(modelValue.value).toBeTruthy()

    await wrapper.setProps({ closeOnPressEscape: true })
    triggerEvent(document.body, 'keydown', EVENT_CODE.esc)
    await nextTick()

    expect(modelValue.value).toBeFalsy()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('closing does not emit change when current resets', async () => {
    const modelValue = ref(true)
    const current = ref(1)
    const onChange = vi.fn()

    mount(() => (
      <Tour
        modelValue={modelValue.value}
        current={current.value}
        onChange={onChange}
        onUpdate:modelValue={(value) => {
          modelValue.value = value
        }}
        onUpdate:current={(value) => {
          current.value = value
        }}
      >
        <TourStep title="first" description="cover description." />
        <TourStep title="second" description="cover description." />
      </Tour>
    ))

    expect(document.querySelector('.el-tour__title')?.innerHTML).toEqual(
      'second'
    )

    modelValue.value = false
    await nextTick()

    expect(current.value).toBe(0)
    expect(onChange).not.toHaveBeenCalled()
  })
})
