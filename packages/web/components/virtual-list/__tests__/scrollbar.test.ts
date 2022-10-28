// @ts-nocheck
import { nextTick } from '@vue/runtime-core'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Scrollbar from '../src/components/scrollbar'
import { ScrollbarDirKey } from '../src/defaults'

describe('virtual scrollbar', () => {
  async function testInlineStyle(
    layout: 'vertical' | 'horizontal' = 'vertical'
  ) {
    const wrapper = mount({
      template: `<scrollbar visible layout="${layout}" :total="100" :ratio="25" :client-size="100" :scroll-from="20"></scrollbar>`,
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
      // width: 'vertical' !== layout ? '100%' : '6px',
      // height: 'vertical' !== layout ? '6px' : 'auto',
      [ScrollbarDirKey[layout]]: '2px',
      right: '2px',
      bottom: '2px',
      'border-radius': '4px',
    }).forEach(([key, value]) =>
      expect(`${key}: ${styles.getPropertyValue(key)}`).toBe(`${key}: ${value}`)
    )
  }

  it('vertical inline style', async () => {
    testInlineStyle('vertical')
  })

  it('horizontal inline style', () => {
    testInlineStyle('horizontal')
  })

  it('click track', async () => {
    const wrapper = mount({
      template: `
        <div
          style="
            height: 100px;
            position: relative;
            border: 1px solid red;
          "
        >
          <scrollbar
            layout="vertical"
            :total="100"
            :ratio="25"
            :client-size="100"
            :scroll-from="0 / 300"
            :visible="true"
            ref="scrollbar"
          />
        </div>
      `,
      components: {
        Scrollbar,
      },
    })

    await nextTick()

    const scrollbar = wrapper.findComponent(Scrollbar)
    const el = scrollbar.vm.$el

    /**
     *  layout: vertical; width: auto; height: 100px; scrollHeight: 400px;
     *  thumb ratio: (100 / 400) * 100 -> 25   // (clientHeight / scrollHeight) * 100
     *  thumbSize: 33   // scrollbar.ts computed thumbSize
     *  thumb translateY: (0 / (400 - 100)) * (100 - 25) -> 0  // (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - thumbSize)
     */
    const initializeStyle =
      'height: 33px; transform: translateY(0px); webkit-transform: translateY(0px); width: 100%;'

    expect(wrapper.find('.el-scrollbar__thumb').attributes('style')).toContain(
      initializeStyle
    )

    const e = document.createEvent('MouseEvents')
    const clientY = 20
    e.initMouseEvent(
      'mousedown',
      false,
      false,
      null,
      0,
      0,
      0,
      0,
      clientY,
      false,
      false,
      false,
      false,
      0,
      null
    )
    el.dispatchEvent(e)

    await nextTick()

    expect(
      wrapper.find('.el-scrollbar__thumb').attributes('style')
    ).not.toContain(initializeStyle)
  })

  it('horizontal track height/width', async () => {
    const wrapper = mount({
      template: `
        <div
          style="
            width: 200px;
            height: 100px;
            position: relative;
            border: 1px solid red;
          "
        >
          <scrollbar
            layout="horizontal"
            :total="100"
            :ratio="25"
            :client-size="200"
            :scroll-from="0 / 300"
            :visible="true"
          />
        </div>
      `,
      components: {
        Scrollbar,
      },
    })

    await nextTick()

    expect(
      (wrapper.find('.el-virtual-scrollbar').element as HTMLElement).style.width
    ).toContain('198px') // clientSize - props.endGap = 200 - 2 = 198

    expect(
      (wrapper.find('.el-virtual-scrollbar').element as HTMLElement).style
        .height
    ).toContain('6px') // fixed 6
  })

  it('vertical track height/width', async () => {
    const wrapper = mount({
      template: `
      <div style="height: 100px; position: relative; border: 1px solid red">
        <scrollbar
          :total="100"
          :ratio="25"
          :client-size="100"
          :scroll-from="0 / 300"
          :visible="true"
        />
      </div>
    `,
      components: {
        Scrollbar,
      },
    })

    await nextTick()

    expect(
      (wrapper.find('.el-virtual-scrollbar').element as HTMLElement).style
        .height
    ).toContain('98px') // clientSize - props.endGap = 100 - 2 = 98

    expect(
      (wrapper.find('.el-virtual-scrollbar').element as HTMLElement).style.width
    ).toContain('6px') // fixed 6
  })

  it('should locate correctly when endGap is set', async () => {
    const wrapper = mount({
      template: `
      <div style="height: 100px; position: relative; border: 1px solid red">
        <scrollbar
          :total="100"
          :ratio="25"
          :client-size="100"
          :scroll-from="0 / 300"
          :end-gap="8"
          :visible="true"
        />
      </div>
    `,
      components: {
        Scrollbar,
      },
    })

    await nextTick()

    expect(
      (wrapper.find('.el-virtual-scrollbar').element as HTMLElement).style
        .height
    ).toContain('92px') // clientSize - props.endGap = 100 - 8 = 92
  })
})
