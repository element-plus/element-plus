import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { Loading } from '../src/service'
import { vLoading } from '../src/directive'
import ElInput from '../../input'

import type { VNode } from 'vue'
import type { LoadingInstance } from '../src/loading'

function destroyLoadingInstance(loadingInstance: LoadingInstance) {
  if (!loadingInstance) return
  loadingInstance.close()
  loadingInstance.$el &&
    loadingInstance.$el.parentNode &&
    loadingInstance.$el.parentNode.removeChild(loadingInstance.$el)
}

const _mount = (render?: () => VNode | null) => {
  return mount(render, {
    global: {
      directives: { loading: vLoading },
    },
  })
}

describe('Loading', () => {
  let loadingInstance: LoadingInstance, loadingInstance2: LoadingInstance

  afterEach(() => {
    destroyLoadingInstance(loadingInstance)
    destroyLoadingInstance(loadingInstance2)
  })

  test('create directive', async () => {
    const loading = ref(true)
    const wrapper = _mount(() => <div v-loading={loading.value} />)

    await nextTick()

    const maskWrapper = wrapper.find('.el-loading-mask')
    expect(maskWrapper.exists()).toBeTruthy()

    vi.useFakeTimers()
    loading.value = false
    // Trigger update event for dispatching close event.
    await nextTick()

    vi.runAllTimers()
    vi.useRealTimers()
    await nextTick()
    expect(wrapper.find('.el-loading-mask').exists()).toBeFalsy()
  })

  test('unmounted directive', async () => {
    const loading1 = ref(true)
    const show1 = ref(true)
    const loading2 = ref(true)
    const show2 = ref(true)
    _mount(() => (show1.value ? <div v-loading={loading1.value} /> : null))
    _mount(() => (show2.value ? <div v-loading={loading2.value} /> : null))

    await nextTick()
    loading1.value = false
    loading2.value = false

    await nextTick()
    show1.value = false
    show2.value = false

    await nextTick()
    expect(document.querySelector('.el-loading-mask')).toBeFalsy()
  })

  test('body directive', async () => {
    const loading = ref(true)
    const wrapper = _mount(() => <div v-loading_body={loading.value} />)

    await nextTick()
    const mask = document.querySelector('.el-loading-mask')!
    expect(mask.parentNode === document.body).toBeTruthy()
    wrapper.vm.loading = false
    document.body.removeChild(mask)
  })

  test('fullscreen directive', async () => {
    const loading = ref(true)
    _mount(() => <div v-loading_fullscreen={loading.value} />)

    await nextTick()
    const mask = document.querySelector('.el-loading-mask')!
    expect(mask.parentNode === document.body).toBeTruthy()
    expect(mask.classList.contains('is-fullscreen')).toBeTruthy()
    loading.value = false
    document.body.removeChild(mask)
  })

  test('lock directive', async () => {
    const loading = ref(true)
    _mount(() => <div v-loading_fullscreen_lock={loading.value} />)

    await nextTick()
    expect(
      document.body.classList.contains('el-loading-parent--hidden')
    ).toBeTruthy()
    loading.value = false
    document.body.removeChild(document.querySelector('.el-loading-mask')!)
  })

  test('text directive', async () => {
    const loading = ref(true)
    const wrapper = _mount(() => (
      <div v-loading={loading.value} element-loading-text="loading..." />
    ))

    await nextTick()
    expect(wrapper.find('.el-loading-text').text()).toEqual('loading...')
  })

  test('customClass directive', async () => {
    const loading = ref(true)
    const wrapper = _mount(() => (
      <div
        v-loading={loading.value}
        element-loading-custom-class="loading-custom-class"
      />
    ))

    await nextTick()
    expect(wrapper.find('.loading-custom-class').exists()).toBeTruthy()
  })

  test('customSvg directive', async () => {
    const loading = ref(true)
    const svg = '<path class="custom-path" d="M 30 15"/>'
    const wrapper = _mount(() => (
      <div v-loading={loading.value} element-loading-svg={svg} />
    ))

    await nextTick()
    expect(wrapper.find('.custom-path').attributes().d).toEqual('M 30 15')
  })

  test('create service', async () => {
    loadingInstance = Loading()
    expect(document.querySelector('.el-loading-mask')).toBeTruthy()
  })

  test('close service', async () => {
    loadingInstance = Loading()
    loadingInstance.close()
    expect(loadingInstance.visible.value).toBeFalsy()
  })

  test('target service', async () => {
    const container = document.createElement('div')
    container.className = 'loading-container'
    document.body.appendChild(container)

    loadingInstance = Loading({ target: '.loading-container' })
    const mask = container.querySelector('.el-loading-mask')!
    expect(mask).toBeTruthy()
    expect(mask.parentNode).toEqual(container)

    expect(
      container.classList.contains('el-loading-parent--relative')
    ).toBeTruthy()

    vi.useFakeTimers()
    loadingInstance.close()
    vi.runAllTimers()
    vi.useRealTimers()
    await nextTick()

    expect(
      container.classList.contains('el-loading-parent--relative')
    ).toBeFalsy()
  })

  test('body service', async () => {
    const container = document.createElement('div')
    container.className = 'loading-container'
    document.body.appendChild(container)

    loadingInstance = Loading({ target: '.loading-container', body: true })
    const mask = document.querySelector('.el-loading-mask')!
    expect(mask).toBeTruthy()
    expect(mask.parentNode).toEqual(document.body)
  })

  test('fullscreen service', async () => {
    loadingInstance = Loading({ fullscreen: true })
    const mask = document.querySelector('.el-loading-mask')!
    expect(mask.parentNode).toEqual(document.body)
    expect(mask.classList.contains('is-fullscreen')).toBeTruthy()
  })

  test('fullscreen singleton service', async () => {
    vi.useFakeTimers()
    loadingInstance = Loading({ fullscreen: true })
    vi.runAllTimers()
    await nextTick()

    loadingInstance2 = Loading({ fullscreen: true })
    vi.runAllTimers()
    await nextTick()

    let masks = document.querySelectorAll('.el-loading-mask')
    expect(loadingInstance).toEqual(loadingInstance2)
    expect(masks.length).toEqual(1)
    loadingInstance2.close()
    vi.runAllTimers()
    vi.useRealTimers()
    await nextTick()

    masks = document.querySelectorAll('.el-loading-mask')
    expect(masks.length).toEqual(0)
  })

  test('lock service', async () => {
    loadingInstance = Loading({ lock: true })
    expect(
      document.body.classList.contains('el-loading-parent--hidden')
    ).toBeTruthy()
  })

  test('text service', async () => {
    loadingInstance = Loading({ text: 'Loading...' })
    const text = document.querySelector('.el-loading-text')!
    expect(text).toBeTruthy()
    expect(text.textContent).toEqual('Loading...')
  })

  test('customClass service', async () => {
    loadingInstance = Loading({ customClass: 'el-loading-custom-class' })
    const customClass = document.querySelector('.el-loading-custom-class')
    expect(customClass).toBeTruthy()
  })

  test("parent's display is not block", async () => {
    const loading = ref(true)
    const wrapper = _mount(() => (
      <ElInput
        v-loading={loading.value}
        v-slots={{
          append: () => 'Loading Text',
        }}
      />
    ))

    await nextTick()
    await nextTick()
    const maskDisplay = getComputedStyle(
      wrapper.find('.el-loading-mask').element
    ).display
    expect(maskDisplay).toBe('block')
  })
})
