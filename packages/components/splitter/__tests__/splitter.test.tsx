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

  it('should keep a fixed pixel size pinned after container resize between collapse and expand', async () => {
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

    // Collapse the fixed-size panel while container is still 1000px
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expand - a fixed pixel size should stay pinned at 150px, not be
    // rescaled as if it were a 15% proportional share of the new width
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    mockSize.mockRestore()
  })

  it('should keep a numeric string pixel size pinned after container resize between collapse and expand', async () => {
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

    // Collapse the fixed-size panel (passed as a plain numeric string, as
    // Vue templates would pass `size="150"`) while container is still 1000px
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expand - a numeric string pixel size should stay pinned at 150px too
    await endCollapseButton.trigger('click')
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

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

  it('should keep a fixed pixel size pinned when collapsing the end panel', async () => {
    const containerWidth = ref(1000)
    const mockSize = useElementSize.mockReturnValue({
      width: containerWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: `${containerWidth.value}px`, height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel size={150} collapsible>
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

    // Collapse the fixed-size *end* panel while container is still 1000px
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    // Container shrinks while the panel is collapsed
    containerWidth.value = 800
    await nextTick()

    // Expand - the end panel's fixed size must stay pinned at 150px, not be
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
