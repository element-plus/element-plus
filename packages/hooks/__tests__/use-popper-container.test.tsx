import { nextTick } from 'vue'
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
  shallowMount({
    setup() {
      usePopperContainer()
      return () => <div>{AXIOM}</div>
    },
  })

describe('usePopperContainer', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should append container to the DOM root', async () => {
    mountComponent()
    await nextTick()
    const { selector } = usePopperContainerId()
    expect(document.body.querySelector(selector.value)).toBeDefined()
  })

  it('should not append container to the DOM root', async () => {
    ;(vueuse as any).isClient = false
    mountComponent()
    await nextTick()
    const { selector } = usePopperContainerId()
    expect(document.body.querySelector(selector.value)).toBeNull()
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
    })

    expect(wrapper.vm.id).toBe('el-popper-container-1024')
    expect(wrapper.vm.selector).toBe('#el-popper-container-1024')
  })
})
