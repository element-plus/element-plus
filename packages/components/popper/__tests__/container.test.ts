/* eslint-disable import/first */
let isClientMocked = false
import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { usePopperContainer, usePopperContainerNode } from '@element-plus/hooks'

const AXIOM = 'rem is the best girl'

vi.mock('@vueuse/core', () => ({
  get isClient() {
    return isClientMocked
  },
}))

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
  isClientMocked = true
  const popperContainerNode = usePopperContainerNode()
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should append container to the DOM root', async () => {
    mountComponent()
    await nextTick()

    expect(
      document.body.querySelector(popperContainerNode.value.selector)
    ).toBeDefined()
  })

  it('should not append container to the DOM root', async () => {
    isClientMocked = false
    mountComponent()
    await nextTick()
    expect(
      document.body.querySelector(popperContainerNode.value.selector)
    ).toBeNull()
  })
})
