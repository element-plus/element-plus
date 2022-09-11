import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import * as vueuse from '@vueuse/core'
import {
  POPPER_CONTAINER_SELECTOR,
  usePopperContainer,
} from '../use-popper-container'

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

    expect(document.body.querySelector(POPPER_CONTAINER_SELECTOR)).toBeDefined()
  })

  it('should not append container to the DOM root', async () => {
    ;(vueuse as any).isClient = false
    mountComponent()
    await nextTick()
    expect(document.body.querySelector(POPPER_CONTAINER_SELECTOR)).toBeNull()
  })
})
