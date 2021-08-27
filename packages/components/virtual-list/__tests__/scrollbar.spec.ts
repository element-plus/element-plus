import { nextTick } from '@vue/runtime-core'
import { mount } from '@vue/test-utils'
import Scrollbar from '../src/components/scrollbar'
import { ScrollbarDirKey } from '../src/defaults'

describe('virtual scrollbar', () => {

  async function testInlineStyle(layout = 'vertical') {
    const wrapper = mount({
      template: `<scrollbar visible layout="${layout}"></scrollbar>`,
      components: {
        Scrollbar,
      },
    })
    await nextTick()
    const scrollbar = wrapper.findComponent(Scrollbar)
    const styles = getComputedStyle(scrollbar.vm.$el)

    Object.entries({
      display: 'block',
      position: 'absolute',
      width: 'vertical' !== layout ? '100%' : '6px',
      height: 'vertical' !== layout ? '6px' : 'auto',
      [ScrollbarDirKey[layout]]: '2px',
      right: '2px',
      bottom: '2px',
      'border-radius': '4px',
    }).forEach(([key, value]) => expect(`${key}: ${styles.getPropertyValue(key)}`).toBe(`${key}: ${value}`))
  }

  it('vertical inline style', async () => {
    testInlineStyle('vertical')
  })

  it('horizontal inline style', () => {
    testInlineStyle('horizontal')
  })

})
