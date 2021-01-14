import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import * as Aria from '@element-plus/utils/aria'

const isVisibleMock = jest
  .spyOn(Aria, 'isVisible')
  .mockImplementation(() => true)

import TrapFocus, {
  ITrapFocusElement,
  FOCUSABLE_CHILDREN,
} from '../trap-focus'

let wrapper
const _mount = (template: string) =>
  mount(
    {
      template,
      props: {},
    },
    {
      global: {
        directives: { TrapFocus },
      },
      attachTo: document.body,
    },
  )

afterAll(() => {
  isVisibleMock.mockRestore()
})

afterEach(() => {
  wrapper.unmount()
})

describe('v-trap-focus', () => {
  test('should fetch all focusable element', () => {
    wrapper = _mount(`
        <div v-trap-focus>
          <button />
        </div>
      `)
    expect(
      (wrapper.element as ITrapFocusElement)[FOCUSABLE_CHILDREN].length,
    ).toBe(1)
  })

  test('should not fetch disabled element', () => {
    wrapper = _mount(`
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
    `)
    expect(
      (wrapper.element as ITrapFocusElement)[FOCUSABLE_CHILDREN].length,
    ).toBe(5)
  })

  test('should trap keyboard.tab event', async () => {
    wrapper = _mount(`
    <div v-trap-focus>
      <button class="button-1" />
      <button class="button-2" />
      <button class="button-3" />
    </div>
  `)

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
    wrapper = _mount(`
      <div v-trap-focus>
        <button />
      </div>
    `)
    expect(document.activeElement).toBe(document.body)
    await wrapper.find('button').trigger('keydown', {
      code: 'Tab',
    })
    expect(document.activeElement).toBe(wrapper.find('button').element)
  })

  test('should update focusable list when children changes', async () => {
    wrapper = mount(
      {
        props: {
          show: {
            type: Boolean,
            default: false,
          },
        },
        template: `
      <div v-trap-focus>
        <button />
        <button v-if="show" />
      </div>
    `,
      },
      {
        global: {
          directives: {
            TrapFocus,
          },
        },
      },
    )
    const initialElements = wrapper.element[FOCUSABLE_CHILDREN]
    expect(initialElements.length).toBe(1)

    await wrapper.setProps({
      show: true,
    })

    await nextTick()

    expect(wrapper.element[FOCUSABLE_CHILDREN].length).toBe(2)
  })
})
