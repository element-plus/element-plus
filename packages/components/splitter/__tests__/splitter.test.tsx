import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { ElSplitter, ElSplitterPanel } from '../index'
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
      <ElSplitter>
        <ElSplitterPanel>Left Panel</ElSplitterPanel>
        <ElSplitterPanel>Right Panel</ElSplitterPanel>
      </ElSplitter>
    ))

    expect(wrapper.find('.el-splitter').exists()).toBe(true)
    expect(wrapper.findAll('.el-splitter-panel')).toHaveLength(2)
  })

  it('should render with vertical layout', () => {
    const wrapper = mount(() => (
      <ElSplitter layout="vertical">
        <ElSplitterPanel>Top Panel</ElSplitterPanel>
        <ElSplitterPanel>Bottom Panel</ElSplitterPanel>
      </ElSplitter>
    ))

    expect(wrapper.find('.el-splitter__vertical').exists()).toBe(true)
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
        <ElSplitter>
          <ElSplitterPanel>
            <div class="demo-panel">1</div>
          </ElSplitterPanel>
          <ElSplitterPanel size={size.value}>
            <div class="demo-panel">2</div>
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))

    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 70px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 30px;')

    splitterWidth.value = 0
    size.value = '80%'

    await nextTick()

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    const panelComps = wrapper.findComponent({ name: 'ElSplitter' }).vm.panels

    expect(panelComps[0].size).toBeUndefined()
    expect(panelComps[1].size).toBe('80%')

    mockSize.mockRestore()
  })

  it('should respect min and max size constraints', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size={150} min={100} max={200}>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // mock mouse event
    const simulateDrag = async (startPos: number, endPos: number) => {
      const splitBar = wrapper.find('.el-splitter-bar__dragger')

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
        <ElSplitter>
          <ElSplitterPanel size={150} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
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

  it('should restore proportional size after container resize between collapse and expand', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    // default 50/50 split
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')

    // Collapse the left panel while container is still 1000px
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expand the left panel back - it should restore to 50% of the *new*
    // container size (400px), not the stale 500px captured before collapse
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it('should keep an explicit px size pinned after container resize between collapse and expand', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="150px" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Collapse the px-sized panel while container is still 1000px
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expand - an explicit "150px" is the signal for a fixed width, so it
    // stays 150px rather than being rescaled as a 15% share of the new width
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    mockSize.mockRestore()
  })

  it('should hold px panels at their width when the container resizes after a collapse cycle', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="100px" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Middle Panel</ElSplitterPanel>
          <ElSplitterPanel size="150px" collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const basis = (i: number) => panels[i].attributes('style')

    expect(basis(0)).toContain('flex-basis: 100px;')
    expect(basis(2)).toContain('flex-basis: 150px;')

    // Collapse and expand the first panel, which writes live pixel numbers
    // into every panel's internal size
    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-start')
      .trigger('click')
    await nextTick()
    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-end')
      .trigger('click')
    await nextTick()
    expect(basis(0)).toContain('flex-basis: 100px;')

    // Now resize the container - only the auto-sized middle panel should move
    containerWidth.value = 800
    await nextTick()

    expect(basis(0)).toContain('flex-basis: 100px;')
    expect(basis(1)).toContain('flex-basis: 550px;')
    expect(basis(2)).toContain('flex-basis: 150px;')

    mockSize.mockRestore()
  })

  it('should scale px panels down together when they overflow the container', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="100px" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Middle Panel</ElSplitterPanel>
          <ElSplitterPanel size="150px" collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')

    // 250px of pinned width in a 200px container - they share it in
    // proportion rather than pushing the flexible panel below zero
    containerWidth.value = 200
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 80px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')
    expect(panels[2].attributes('style')).toContain('flex-basis: 120px;')

    mockSize.mockRestore()
  })

  it('should keep a satisfiable min when pinned panels overflow', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="200px" min="200px">
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel size="900px">Middle Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')

    // 1100px of pins in a 1000px container. The 100px has to come from the
    // panel with room above its min, not be shared out proportionally in a
    // way that pushes the first panel under a min it could have kept
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 800px;')
    expect(panels[2].attributes('style')).toContain('flex-basis: 0px;')

    mockSize.mockRestore()
  })

  it('should re-clamp a pinned px size against percentage limits', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="500px" max="50%">
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')

    // A percentage limit moves with the container, so the stored pixel pin
    // has to be re-checked against it rather than reused as-is
    containerWidth.value = 800
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it('should not pin a collapsed px panel shut when another bar is dragged', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="200px" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Middle Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-start')
      .trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Drag the *second* bar. The collapsed panel reads 0 there but took no
    // part in the drag, so its pinned width must survive
    const draggers = wrapper.findAll('.el-splitter-bar__dragger')
    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 500 })
    draggers[1]!.element.dispatchEvent(mousedown)
    const mousemove = new MouseEvent('mousemove', { bubbles: true })
    Object.defineProperty(mousemove, 'pageX', { value: 600 })
    window.dispatchEvent(mousemove)
    await nextTick()
    const mouseup = new MouseEvent('mouseup', { bubbles: true })
    Object.defineProperty(mouseup, 'pageX', { value: 600 })
    window.dispatchEvent(mouseup)
    await nextTick()

    // Expanding brings the panel back to its 200px, and it stays there
    await wrapper
      .findAll('.el-splitter-bar__horizontal-collapse-icon-end')[0]!
      .trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    containerWidth.value = 800
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    mockSize.mockRestore()
  })

  it('should clamp a pinned px size to the panel limits', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })
    const size = ref<string | number>('200px')

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size={size.value} max="300px" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    // A width beyond `max` must not be pinned as authored - the pin cannot
    // smuggle a value past the limits the size watcher enforces
    size.value = '500px'
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 300px;')

    containerWidth.value = 800
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 300px;')

    mockSize.mockRestore()
  })

  it('should let a px panel be dragged to zero and stay there', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="200px">Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    const splitBar = wrapper.find('.el-splitter-bar__dragger')
    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 200 })
    splitBar.element.dispatchEvent(mousedown)
    const mousemove = new MouseEvent('mousemove', { bubbles: true })
    Object.defineProperty(mousemove, 'pageX', { value: 0 })
    window.dispatchEvent(mousemove)
    await nextTick()
    const mouseup = new MouseEvent('mouseup', { bubbles: true })
    Object.defineProperty(mouseup, 'pageX', { value: 0 })
    window.dispatchEvent(mouseup)
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Dragging to zero is a deliberate resize, so it becomes the new pinned
    // width rather than being undone by the next recomputation
    containerWidth.value = 800
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    mockSize.mockRestore()
  })

  it('should honour a size prop written while a px panel is collapsed', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })
    const size = ref<string | number>('200px')

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size={size.value} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')

    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-start')
      .trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // The parent drives the panel back open through the prop rather than the
    // collapse control - the collapsed marker must not pin it shut
    size.value = '300px'
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 300px;')

    mockSize.mockRestore()
  })

  it('should expand a "0px" panel to its min rather than pinning it shut', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel size="0px" min={100} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // "0px" is where the panel starts, not a width to hold it at - expanding
    // must reach the 100px min instead of being re-pinned to 0
    await wrapper.find('.el-splitter-bar__collapse-icon').trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    mockSize.mockRestore()
  })

  it('should let a px panel squeezed to zero by a neighbour recover its width', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(250),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '250px' }}>
        <ElSplitter>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel size="200px" collapsible>
            Middle Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')

    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-start')
      .trigger('click')
    await nextTick()
    containerWidth.value = 800
    await nextTick()

    // Expanding the left panel takes space from the pinned middle one, which
    // only had 200px to give - it must not be left collapsed for good
    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-end')
      .trigger('click')
    await nextTick()
    expect(panels[1].attributes('style')).toContain('flex-basis: 200px;')

    containerWidth.value = 1000
    await nextTick()
    expect(panels[1].attributes('style')).toContain('flex-basis: 200px;')

    mockSize.mockRestore()
  })

  it('should restore a bare numeric size proportionally after container resize', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size={150} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    await startCollapseButton.trigger('click')
    await nextTick()

    containerWidth.value = 800
    await nextTick()

    // `:size="150"` means 150px initially and proportional afterwards, so it
    // restores its 15% share of the new width - use "150px" to pin it
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 120px;')

    mockSize.mockRestore()
  })

  it('should treat a numeric string size the same as a bare number', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="150" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Collapse the panel (sized with a plain numeric string, as a Vue
    // template passes `size="150"`) while container is still 1000px
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // `size="150"` carries no unit, so it follows the bare-number rule and
    // restores proportionally rather than pinning to 150px
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 120px;')

    mockSize.mockRestore()
  })

  it('should not mistake an internally-generated numeric size for an authored fixed size', async () => {
    const containerWidth = ref(800)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    // Round-trip a collapse/expand at 800px - this leaves the internal
    // `size` as the raw number 400, even though both panels were declared
    // proportionally (no `size` prop at all)
    await startCollapseButton.trigger('click')
    await nextTick()
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')

    // Container grows - since both panels are still proportional, this
    // scales evenly to 500/500
    containerWidth.value = 1000
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')

    // Collapse again, then shrink the container back down while collapsed
    await startCollapseButton.trigger('click')
    await nextTick()
    containerWidth.value = 800
    await nextTick()

    // Expanding should still land on an even 50/50 split (400/400), not
    // treat the leftover raw-number internal state as an authored fixed size
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it("should restore a collapsed-to-zero panel's px-string min after container resize", async () => {
    const containerWidth = ref(400)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="0%" min="100px" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Middle Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const endIcons = wrapper.findAll(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Seed the cache while the container is still 400px, as above
    await endIcons[1]!.trigger('click')
    await nextTick()

    // Container grows while the left panel is still at 0
    containerWidth.value = 800
    await nextTick()

    // `min="100px"` is a literal width just like `min={100}` - caching it as a
    // ratio would restore 200px against the wider container
    await wrapper
      .find('.el-splitter-bar__horizontal-collapse-icon-end')
      .trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    mockSize.mockRestore()
  })

  it("should restore a collapsed-to-zero panel's fixed min after container resize", async () => {
    const containerWidth = ref(400)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="0%" min={100} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Middle Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const endIcons = wrapper.findAll(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    // Left panel is inherently 0 (declared as "0%"), with a fixed 100px min
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Collapse Right onto Middle first - this is the first-ever onCollapse
    // call, so it populates the cache for every panel (including the
    // already-zero left one) while the container is still 400px. Middle
    // keeps a positive size so Left's own expand icon stays available.
    await endIcons[1]!.trigger('click')
    await nextTick()

    // Container shrinks while the left panel is still at 0
    containerWidth.value = 200
    await nextTick()

    // Expand the left panel - it should restore to its literal 100px min,
    // not a min/400 ratio rescaled against the new 200px container (50px)
    const leftEndIcon = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )
    await leftEndIcon.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    // Collapse it back to 0, resize again, and expand once more - the fixed
    // min classification must survive a *later* re-collapse too, not just
    // the very first expand-from-zero
    const leftStartIcon = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    await leftStartIcon.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    containerWidth.value = 400
    await nextTick()

    const leftEndIconAgain = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )
    await leftEndIconAgain.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    mockSize.mockRestore()
  })

  it("should expand an initially collapsed end panel to its own cached min, not the bar's other side", async () => {
    const containerWidth = ref(400)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel size="0%" min={100} collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')

    // Left fills the whole container since Right is declared as "0%"
    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    // The only bar here has just one collapse icon (Right is already 0), and
    // clicking it is the very first onCollapse call ever - it must populate
    // the cache from the *right* panel's fixed min, not the left panel
    const collapseIcon = wrapper.find('.el-splitter-bar__collapse-icon')
    await collapseIcon.trigger('click')
    await nextTick()

    expect(panels[1].attributes('style')).toContain('flex-basis: 100px;')

    mockSize.mockRestore()
  })

  it('should keep an explicit px size pinned when collapsing the end panel', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel size="150px" collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )

    expect(panels[1].attributes('style')).toContain('flex-basis: 150px;')

    // Collapse the px-sized *end* panel while container is still 1000px
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expand - the end panel's px size must stay pinned at 150px, not be
    // classified using the left (auto-fill) panel's size
    await startCollapseButton.trigger('click')
    await nextTick()

    expect(panels[1].attributes('style')).toContain('flex-basis: 150px;')

    mockSize.mockRestore()
  })

  it('should not restore a proportional panel below its fixed min after container resize', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="30%" min={300} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    // The panel sits exactly on its fixed 300px min
    expect(panels[0].attributes('style')).toContain('flex-basis: 300px;')

    await startCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expanding must not drop below the min that dragging enforces - the
    // cached 30% ratio alone would restore 240px against the new width
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 300px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 500px;')

    mockSize.mockRestore()
  })

  it("should not restore over a neighbour's fixed min after container resize", async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="70%" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel min={400} collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 700px;')

    await startCollapseButton.trigger('click')
    await nextTick()

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Restoring 70% of 800px would leave the neighbour at 240px, under the
    // 400px min that dragging enforces - the neighbour's limit wins, exactly
    // as it does in onMoving
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it('should keep a two-way bound proportional size proportional across collapse cycles', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })
    const size = ref<string | number>('50%')

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel v-model:size={size.value} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')

    // A collapse/expand round trip writes an internal pixel snapshot back
    // through `update:size`, so the bound value is now the raw number 500
    // even though the panel was declared as "50%"
    await startCollapseButton.trigger('click')
    await nextTick()
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(size.value).toBe(500)

    // Container shrinks - the panel is still proportional, so it tracks
    containerWidth.value = 800
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')

    // Collapse it, grow the container back while collapsed, then expand
    await startCollapseButton.trigger('click')
    await nextTick()
    containerWidth.value = 1000
    await nextTick()
    await endCollapseButton.trigger('click')
    await nextTick()

    // The echoed-back number must not be mistaken for an authored fixed
    // size: the panel restores to 50% of the current container (500px),
    // not the 400px it happened to occupy when it was collapsed
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 500px;')

    mockSize.mockRestore()
  })

  it('should treat a later size prop change as authored, not as an echo', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })
    // A one-way `:size` binding - the parent never mirrors `update:size`
    const size = ref<string | number>('50%')

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size={size.value} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    // Collapse/expand makes the panel emit internal pixel snapshots that this
    // parent throws away, so `props.size` is still "50%"
    await startCollapseButton.trigger('click')
    await nextTick()
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(size.value).toBe('50%')

    // The parent now genuinely authors an explicit px size whose number
    // matches a value the panel emitted earlier - it must not be written off
    // as an echo of that emit
    size.value = '500px'
    await nextTick()

    await startCollapseButton.trigger('click')
    await nextTick()
    containerWidth.value = 800
    await nextTick()
    await endCollapseButton.trigger('click')
    await nextTick()

    // Authored as an explicit "500px", so it stays 500px rather than
    // restoring as the 50% ratio it was originally declared with
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')

    mockSize.mockRestore()
  })

  it('should honour a bare numeric string min when restoring', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="30%" min="300" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    await startCollapseButton.trigger('click')
    await nextTick()

    containerWidth.value = 800
    await nextTick()

    // `min="300"` is neither a `%` nor a `px` string, so it stays a raw
    // string at runtime - it still has to clamp the restored size
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 300px;')

    mockSize.mockRestore()
  })

  it('should treat a null limit as unset', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="50%" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel max={null as unknown as number} collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    await startCollapseButton.trigger('click')
    await nextTick()

    containerWidth.value = 800
    await nextTick()

    // `max={null}` disables the limit - it must not be read as a 0px max,
    // which would force the whole pair onto the panel being expanded
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it('should treat a null size as auto-fill, not as a fixed pixel size', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel
            size={null as unknown as number}
            min={100}
            collapsible
          >
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    // `useSize` leaves a null size out of the ratio list, i.e. auto-fill
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')

    await startCollapseButton.trigger('click')
    await nextTick()

    containerWidth.value = 800
    await nextTick()

    // Restores proportionally like any auto-filled panel - reading null as a
    // fixed pixel size (via its `min` units) would pin it at a stale 500px
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it('should treat an empty string limit as unset', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="50%" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel max="" collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    await startCollapseButton.trigger('click')
    await nextTick()

    containerWidth.value = 800
    await nextTick()

    // `max=""` means no limit - reading it as a 0px max would pin the panel
    // shut and hand the whole pair to its neighbour
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 400px;')

    mockSize.mockRestore()
  })

  it('should treat a cleared size prop as a real change, not an echo', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })
    const size = ref<string | number | undefined>(150)

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size={size.value} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // The parent clears the fixed size, handing the panel back to auto-fill.
    // At rest the remembered emit value is `undefined` too, so this must not
    // be mistaken for an echo of an emit that never happened.
    size.value = undefined
    await nextTick()

    const splitBar = wrapper.find('.el-splitter-bar__dragger')
    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 0 })
    splitBar.element.dispatchEvent(mousedown)
    const mousemove = new MouseEvent('mousemove', { bubbles: true })
    Object.defineProperty(mousemove, 'pageX', { value: 400 })
    window.dispatchEvent(mousemove)
    await nextTick()
    const mouseup = new MouseEvent('mouseup', { bubbles: true })
    Object.defineProperty(mouseup, 'pageX', { value: 400 })
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')

    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    await startCollapseButton.trigger('click')
    await nextTick()

    containerWidth.value = 800
    await nextTick()

    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )
    await endCollapseButton.trigger('click')
    await nextTick()

    // The panel is auto-sized now, so it restores as 40% of the new width
    // (320px) rather than the stale fixed 400px
    expect(panels[0].attributes('style')).toContain('flex-basis: 320px;')

    mockSize.mockRestore()
  })

  it('should restore a middle panel collapsed from one bar when expanded from the other', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size="20%" collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel size="30%" collapsible>
            Middle Panel
          </ElSplitterPanel>
          <ElSplitterPanel size="50%" collapsible>
            Right Panel
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const endIcons = wrapper.findAll(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[1].attributes('style')).toContain('flex-basis: 300px;')

    // Collapse the middle panel onto the left one, using the *first* bar
    await endIcons[0]!.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 500px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    // Expand it again from the *second* bar - with the middle panel at 0 the
    // only remaining end icon is that bar's. The remembered size belongs to
    // the middle panel itself, so it comes back at 300px and eats into the
    // right panel, rather than restoring the right panel's cached 500px
    const secondBarEndIcon = wrapper.findAll(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )
    expect(secondBarEndIcon).toHaveLength(1)
    await secondBarEndIcon[0]!.trigger('click')
    await nextTick()

    expect(panels[1].attributes('style')).toContain('flex-basis: 300px;')
    expect(panels[2].attributes('style')).toContain('flex-basis: 200px;')

    mockSize.mockRestore()
  })

  it('should emit resize events', async () => {
    const onResizeStart = vi.fn()
    const onResize = vi.fn()
    const onResizeEnd = vi.fn()

    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter
          onResizeStart={onResizeStart}
          onResize={onResize}
          onResizeEnd={onResizeEnd}
        >
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    // mock mouse event
    const simulateDrag = async (startPos: number, endPos: number) => {
      const splitBar = wrapper.find('.el-splitter-bar__dragger')

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
        <ElSplitter onCollapse={onCollapse}>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
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
        <ElSplitter>
          <ElSplitterPanel
            v-model:size={size.value}
            collapsible
            min={50}
            max={200}
          >
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
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

  it('should expand a collapsible panel whose initial size is 0 to its min size', async () => {
    const size = ref(0)
    const wrapper = mount(() => (
      <ElSplitter>
        <ElSplitterPanel v-model:size={size.value} min={100} collapsible>
          Left Panel
        </ElSplitterPanel>
        <ElSplitterPanel min={200}>Right Panel</ElSplitterPanel>
      </ElSplitter>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__horizontal-collapse-icon-end'
    )

    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')
    expect(size.value).toBe(100)
  })

  it('should not update panel size until drag ends when lazy is true', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter lazy>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')
    const splitBar = wrapper.find('.el-splitter-bar__dragger')

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
        <ElSplitter>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')
    const splitBar = wrapper.find('.el-splitter-bar__dragger')

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
        <ElSplitter lazy onResizeEnd={onResizeEnd}>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const splitBar = wrapper.find('.el-splitter-bar__dragger')

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

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 250px;')
  })

  it('should not still display the mask after the panel updates', async () => {
    const show = ref(true)
    const wrapper = mount(() => (
      <ElSplitter onResizeStart={() => (show.value = false)}>
        {show.value ? (
          <ElSplitterPanel v-if={show.value}>Left Panel</ElSplitterPanel>
        ) : null}
        <ElSplitterPanel>Right Panel</ElSplitterPanel>
      </ElSplitter>
    ))
    await nextTick()

    expect(wrapper.find('.el-splitter__mask').exists()).toBeFalsy()

    const splitBar = wrapper.find('.el-splitter-bar__dragger')
    const mousedown = new MouseEvent('mousedown', { bubbles: true })
    Object.defineProperty(mousedown, 'pageX', { value: 200 })
    splitBar.element.dispatchEvent(mousedown)
    await nextTick()
    expect(wrapper.find('.el-splitter__mask').exists()).toBeFalsy()
  })
})
