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
    await nextTick
    const scrollbar = wrapper.findComponent(Scrollbar)
    const styles = getComputedStyle(scrollbar.vm.$el)
    expect(styles).toMatchObject({
      display: 'block',
      position: 'absolute',
      width: 'vertical' !== layout ? '100%' : '6px',
      height: 'vertical' !== layout ? '6px' : '100%',
      [ScrollbarDirKey[layout]]: '2px',
      right: '2px',
      bottom: '2px',
      'border-radius': '4px',
    })
  }

  it('vertical inline style', async () => {
    testInlineStyle('vertical')
  })

  it('horizontal inline style', () => {
    testInlineStyle('horizontal')
  })

})
