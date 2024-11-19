import { defineComponent, nextTick } from 'vue'
import { config, mount, shallowMount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as vueuse from '@vueuse/core'
import {
  usePopperContainer,
  usePopperContainerId,
} from '../use-popper-container'
import { ID_INJECTION_KEY } from '../use-id'

const AXIOM = 'rem is the best girl'

vi.mock('@vueuse/core', () => {
  return {
    isClient: true,
  }
})

const mountComponent = () =>
  shallowMount(
    defineComponent({
      setup(_, { expose }) {
        const exposes = usePopperContainer()
        expose(exposes)
        return () => <div>{AXIOM}</div>
      },
    })
  )

describe('usePopperContainer', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should append container to the DOM root', async () => {
    const { vm } = mountComponent()
    await nextTick()
    const { selector } = vm
    expect(
      document.body.querySelector(selector)?.id === selector.slice(1)
    ).toBeTruthy()
  })

  it('should append container from the DOM root again when container is destroyed', async () => {
    mountComponent()
    await nextTick()
    document.body.innerHTML = ''
    process.env.NODE_ENV = ''
    const { vm } = mountComponent()
    await nextTick()
    process.env.NODE_ENV = 'test'
    const { selector } = vm
    expect(
      document.body.querySelector(selector)?.id === selector.slice(1)
    ).toBeTruthy()
  })

  it('should not append container to the DOM root', async () => {
    ;(vueuse as any).isClient = false
    const { vm } = mountComponent()
    await nextTick()
    const { selector } = vm
    expect(document.body.querySelector(selector)).toBeNull()
  })
})

describe('no injection value', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('usePopperContainerId', () => {
    const wrapper = mount({
      setup() {
        const data = usePopperContainerId()
        return data
      },
      render: () => undefined,
    })

    expect(wrapper.vm.id).toMatch(/^el-popper-container-\d{0,4}$/)
    expect(wrapper.vm.selector).toMatch(/^#el-popper-container-\d{0,4}$/)
    expect(wrapper.vm.selector).toBe(`#${wrapper.vm.id}`)
  })
})

describe('with injection value', () => {
  beforeEach(() => {
    config.global.provide = {
      [ID_INJECTION_KEY as symbol]: {
        prefix: 1024,
        current: 0,
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  it('usePopperContainerId', () => {
    const wrapper = mount({
      setup() {
        const data = usePopperContainerId()
        return data
      },
      render: () => undefined,
    })

    expect(wrapper.vm.id).toBe('el-popper-container-1024')
    expect(wrapper.vm.selector).toBe('#el-popper-container-1024')
  })
})
