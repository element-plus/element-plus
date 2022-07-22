import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterAll, afterEach, describe, expect, test, vi } from 'vitest'
import * as Aria from '@element-plus/utils/dom/aria'
import TrapFocus, { FOCUSABLE_CHILDREN } from '../trap-focus'

import type { ComponentPublicInstance, VNode } from 'vue'
import type { VueWrapper } from '@vue/test-utils'
import type { TrapFocusElement } from '../trap-focus'

const isVisibleMock = vi.spyOn(Aria, 'isVisible').mockImplementation(() => true)

let wrapper: VueWrapper<ComponentPublicInstance>

const _mount = (render: () => VNode) =>
  mount(render, {
    global: {
      directives: { TrapFocus },
    },
    attachTo: document.body,
  })

afterAll(() => {
  isVisibleMock.mockRestore()
})

afterEach(() => {
  wrapper.unmount()
})

describe('v-trap-focus', () => {
  test('should fetch all focusable element', () => {
    wrapper = _mount(() => (
      <div v-trap-focus>
        <button />
      </div>
    ))
    expect(
      (wrapper.element as TrapFocusElement)[FOCUSABLE_CHILDREN].length
    ).toBe(1)
  })

  test('should not fetch disabled element', () => {
    wrapper = _mount(() => (
      <div v-trap-focus>
        <button />
        <button disabled />
        <a href="test" />
        <a />
        <input />
        <input disabled />
        <input type="hidden" />
        <input type="file" />
        <div tabindex="-1" />
        <select />
        <select disabled />
        <textarea />
        <textarea disabled />
      </div>
    ))
    expect(
      (wrapper.element as TrapFocusElement)[FOCUSABLE_CHILDREN].length
    ).toBe(5)
  })

  test('should trap keyboard.tab event', async () => {
    wrapper = _mount(() => (
      <div v-trap-focus>
        <button class="button-1" />
        <button class="button-2" />
        <button class="button-3" />
      </div>
    ))

    expect(document.activeElement).toBe(document.body)
    await wrapper.find('.button-1').trigger('keydown', {
      code: 'Tab',
      shiftKey: true,
    })

    expect(document.activeElement).toBe(wrapper.find('.button-3').element)
    await wrapper.find('.button-3').trigger('keydown', {
      code: 'Tab',
    })

    expect(document.activeElement).toBe(wrapper.find('.button-1').element)
    // the current active element is .button-1
    await wrapper.find('.button-1').trigger('keydown', {
      code: 'Tab',
    })

    expect(document.activeElement).toBe(wrapper.find('.button-2').element)

    // now the active element became .button-2, this time we navigate back
    await wrapper.find('.button-2').trigger('keydown', {
      code: 'Tab',
      shiftKey: true,
    })
    expect(document.activeElement).toBe(wrapper.find('.button-1').element)
  })

  test('should focus on the only focusable element', async () => {
    wrapper = _mount(() => (
      <div v-trap-focus>
        <button />
      </div>
    ))
    expect(document.activeElement).toBe(document.body)
    await wrapper.find('button').trigger('keydown', {
      code: 'Tab',
    })
    expect(document.activeElement).toBe(wrapper.find('button').element)
  })

  test('should update focusable list when children changes', async () => {
    wrapper = mount(
      defineComponent({
        props: {
          show: Boolean,
        },
        setup(props) {
          return () => (
            <div v-trap-focus>
              <button />
              {props.show && <button />}
            </div>
          )
        },
      }),
      {
        global: {
          directives: {
            TrapFocus,
          },
        },
      }
    )

    const initialElements = (wrapper.element as TrapFocusElement)[
      FOCUSABLE_CHILDREN
    ]
    expect(initialElements.length).toBe(1)

    await wrapper.setProps({
      show: true,
    })

    await nextTick()

    expect(
      (wrapper.element as TrapFocusElement)[FOCUSABLE_CHILDREN].length
    ).toBe(2)
  })
})
