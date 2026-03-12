import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { GSplitter, GSplitterPanel } from '../index'
import { useElementSize } from './__mocks__/vueuse'

// jsdom does not support useElementSize and useResizeObserver so mock
vi.mock('@vueuse/core', () => {
  return import('./__mocks__/vueuse')
})

describe('Splitter', () => {
  const mockResizeObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  beforeAll(() => {
    window.ResizeObserver = mockResizeObserver
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should render correctly', () => {
    const wrapper = mount(() => (
      <GSplitter>
        <GSplitterPanel>Left Panel</GSplitterPanel>
        <GSplitterPanel>Right Panel</GSplitterPanel>
      </GSplitter>
    ))

    expect(wrapper.find('.g-splitter').exists()).toBe(true)
    expect(wrapper.findAll('.g-splitter-panel')).toHaveLength(2)
  })

  it('should render with vertical layout', () => {
    const wrapper = mount(() => (
      <GSplitter layout="vertical">
        <GSplitterPanel>Top Panel</GSplitterPanel>
        <GSplitterPanel>Bottom Panel</GSplitterPanel>
      </GSplitter>
    ))

    expect(wrapper.find('.g-splitter__vertical').exists()).toBe(true)
  })

  it('should keep panels size consistent with props.size when containerSize is 0.', async () => {
    const splitterWidth = ref(100)
    const size = ref('30%')
    const mockSize = useElementSize.mockReturnValue({
      width: splitterWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: splitterWidth.value, height: '400px' }}>
        <GSplitter>
          <GSplitterPanel>
            <div class="demo-panel">1</div>
          </GSplitterPanel>
          <GSplitterPanel size={size.value}>
            <div class="demo-panel">2</div>
          </GSplitterPanel>
        </GSplitter>
      </div>
    ))

    await nextTick()
    const panels = wrapper.findAll('.g-splitter-panel')

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 70px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 30px;')

    splitterWidth.value = 0
    size.value = '80%'

    await nextTick()

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    const panelComps = wrapper.findComponent({ name: 'GSplitter' }).vm.panels

    expect(panelComps[0].size).toBeUndefined()
    expect(panelComps[1].size).toBe('80%')

    mockSize.mockRestore()
  })

  it('should respect min and max size constraints', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter>
          <GSplitterPanel size={150} min={100} max={200}>
            Left Panel
          </GSplitterPanel>
          <GSplitterPanel>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.g-splitter-panel')

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // mock mouse event
    const simulateDrag = async (startPos: number, endPos: number) => {
      const splitBar = wrapper.find('.g-splitter-bar__dragger')

      // Simulate mouse down
      const mousedown = new MouseEvent('mousedown', { bubbles: true })
      Object.defineProperty(mousedown, 'pageX', { value: startPos })
      splitBar.element.dispatchEvent(mousedown)

      // Simulate mouse move
      const mousemove = new MouseEvent('mousemove', { bubbles: true })
      Object.defineProperty(mousemove, 'pageX', { value: endPos })
      window.dispatchEvent(mousemove)

      // Simulate mouse up
      const mouseup = new MouseEvent('mouseup', { bubbles: true })
      Object.defineProperty(mouseup, 'pageX', { value: endPos })
      window.dispatchEvent(mouseup)

      await nextTick()
    }

    // Test min size constraint: drag left to minimum value 100px
    await simulateDrag(150, 50)
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    // Test max size constraint: drag right to maximum value 200px
    await simulateDrag(50, 150)
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')
  })

  it('should handle collapse', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter>
          <GSplitterPanel size={150} collapsible>
            Left Panel
          </GSplitterPanel>
          <GSplitterPanel collapsible>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.g-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.g-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.g-splitter-bar__horizontal-collapse-icon-end'
    )

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Click collapse button
    await startCollapseButton.trigger('click')
    await nextTick()

    // Panel should be collapsed (size = 0)
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Click collapse button  to expand
    await endCollapseButton.trigger('click')
    await nextTick()

    // Panel should be restored to original size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')
  })

  it('should emit resize events', async () => {
    const onResizeStart = vi.fn()
    const onResize = vi.fn()
    const onResizeEnd = vi.fn()

    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter
          onResizeStart={onResizeStart}
          onResize={onResize}
          onResizeEnd={onResizeEnd}
        >
          <GSplitterPanel>Left Panel</GSplitterPanel>
          <GSplitterPanel>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()

    // mock mouse event
    const simulateDrag = async (startPos: number, endPos: number) => {
      const splitBar = wrapper.find('.g-splitter-bar__dragger')

      // Simulate mouse down
      const mousedown = new MouseEvent('mousedown', { bubbles: true })
      Object.defineProperty(mousedown, 'pageX', { value: startPos })
      splitBar.element.dispatchEvent(mousedown)
      await nextTick()

      // Simulate mouse move
      const mousemove = new MouseEvent('mousemove', { bubbles: true })
      Object.defineProperty(mousemove, 'pageX', { value: endPos })
      window.dispatchEvent(mousemove)

      // Move again
      await nextTick()
      window.dispatchEvent(mousemove)

      // Simulate mouse up
      const mouseup = new MouseEvent('mouseup', { bubbles: true })
      Object.defineProperty(mouseup, 'pageX', { value: endPos })
      window.dispatchEvent(mouseup)

      await nextTick()
    }

    await simulateDrag(200, 100)

    expect(onResizeStart).toHaveBeenCalledWith(0, [200, 200])
    expect(onResize).toHaveBeenCalledTimes(2)
    expect(onResize.mock.calls[0]).toEqual([0, [200, 200]])
    expect(onResize.mock.calls[1]).toEqual([0, [100, 300]])
    expect(onResizeEnd).toHaveBeenCalledWith(0, [100, 300])
  })

  it('should emit collapse event', async () => {
    const onCollapse = vi.fn()
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter onCollapse={onCollapse}>
          <GSplitterPanel collapsible>Left Panel</GSplitterPanel>
          <GSplitterPanel collapsible>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()

    const startCollapseButton = wrapper.find(
      '.g-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.g-splitter-bar__horizontal-collapse-icon-end'
    )

    // Click collapse button
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(onCollapse).toHaveBeenCalledWith(0, 'start', [0, 400])

    // Click collapse button to expand
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(onCollapse).toHaveBeenCalledWith(0, 'end', [200, 200])
  })

  it('should collapse normally when size is two-way bound and min & max is set', async () => {
    const size = ref(150)
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter>
          <GSplitterPanel
            v-model:size={size.value}
            collapsible
            min={50}
            max={200}
          >
            Left Panel
          </GSplitterPanel>
          <GSplitterPanel collapsible>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.g-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.g-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.g-splitter-bar__horizontal-collapse-icon-end'
    )

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Click collapse button
    await startCollapseButton.trigger('click')
    await nextTick()

    // Panel should be collapsed (size = 0)
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Click collapse button to expand
    await endCollapseButton.trigger('click')
    await nextTick()

    // Panel should be restored to original size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Click collapse button  to expand
    await endCollapseButton.trigger('click')
    await nextTick()

    // Panel should be collapsed (size = 400)
    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
  })

  it('should not update panel size until drag ends when lazy is true', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter lazy>
          <GSplitterPanel>Left Panel</GSplitterPanel>
          <GSplitterPanel>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.g-splitter-panel')
    const splitBar = wrapper.find('.g-splitter-bar__dragger')

    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 200 })
    splitBar.element.dispatchEvent(mousedown)

    const mousemove = new MouseEvent('mousemove', { bubbles: true })
    Object.defineProperty(mousemove, 'pageX', { value: 100 })
    window.dispatchEvent(mousemove)
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    const mouseup = new MouseEvent('mouseup', { bubbles: true })
    Object.defineProperty(mouseup, 'pageX', { value: 100 })
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')
  })

  it('should update panel size immediately when lazy is false', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter>
          <GSplitterPanel>Left Panel</GSplitterPanel>
          <GSplitterPanel>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.g-splitter-panel')
    const splitBar = wrapper.find('.g-splitter-bar__dragger')

    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 200 })
    splitBar.element.dispatchEvent(mousedown)

    const mousemove = new MouseEvent('mousemove', { bubbles: true })
    Object.defineProperty(mousemove, 'pageX', { value: 100 })
    window.dispatchEvent(mousemove)
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    const mouseup = new MouseEvent('mouseup', { bubbles: true })
    Object.defineProperty(mouseup, 'pageX', { value: 100 })
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')
  })

  it('should emit resizeEnd with latest sizes data in lazy mode', async () => {
    const onResizeEnd = vi.fn()
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <GSplitter lazy onResizeEnd={onResizeEnd}>
          <GSplitterPanel>Left Panel</GSplitterPanel>
          <GSplitterPanel>Right Panel</GSplitterPanel>
        </GSplitter>
      </div>
    ))
    await nextTick()

    const splitBar = wrapper.find('.g-splitter-bar__dragger')

    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 200 })
    splitBar.element.dispatchEvent(mousedown)
    await nextTick()

    const mousemove = new MouseEvent('mousemove', { bubbles: true })
    Object.defineProperty(mousemove, 'pageX', { value: 150 })
    window.dispatchEvent(mousemove)
    await nextTick()

    const mouseup = new MouseEvent('mouseup', { bubbles: true })
    Object.defineProperty(mouseup, 'pageX', { value: 150 })
    window.dispatchEvent(mouseup)
    await nextTick()

    expect(onResizeEnd).toHaveBeenCalledWith(0, [150, 250])

    const panels = wrapper.findAll('.g-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 250px;')
  })

  it('should not still display the mask after the panel updates', async () => {
    const show = ref(true)
    const wrapper = mount(() => (
      <GSplitter onResizeStart={() => (show.value = false)}>
        {show.value ? (
          <GSplitterPanel v-if={show.value}>Left Panel</GSplitterPanel>
        ) : null}
        <GSplitterPanel>Right Panel</GSplitterPanel>
      </GSplitter>
    ))
    await nextTick()

    expect(wrapper.find('.g-splitter__mask').exists()).toBeFalsy()

    const splitBar = wrapper.find('.g-splitter-bar__dragger')
    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 200 })
    splitBar.element.dispatchEvent(mousedown)
    await nextTick()
    expect(wrapper.find('.g-splitter__mask').exists()).toBeFalsy()
  })
})
