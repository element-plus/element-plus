jest.mock('@vueuse/core')
import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { usePopperContainer, POPPER_CONTAINER_SELECTOR } from '../src/container'
import * as vueuse from '@vueuse/core'

const AXIOM = 'rem is the best girl'

const mountComponent = () =>
  shallowMount({
    template: `<div>
    ${AXIOM}
  </div>`,
    setup() {
      usePopperContainer()
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
    ;(vueuse as any).__setIsClient(false)
    mountComponent()
    await nextTick()
    expect(document.body.querySelector(POPPER_CONTAINER_SELECTOR)).toBeNull()
  })
})
