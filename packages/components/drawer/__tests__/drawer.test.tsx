// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import Drawer from '../src/drawer.vue'
import Button from '../../button/src/button.vue'

const title = 'Drawer Title'
const content = 'content'

describe('Drawer', () => {
  test('create', async () => {
    const wrapper = mount(() => <Drawer title={title} modelValue={true} />)

    await nextTick()
    const wrapperEl = wrapper.find('.el-overlay').element as HTMLDivElement
    const headerEl = wrapper.find('.el-drawer__header').element

    expect(wrapperEl.style.display).not.toEqual('none')
    expect(headerEl.textContent).toEqual(title)
  })

  test('render correct content', async () => {
    const wrapper = mount(() => (
      <Drawer title={title} modelValue={true}>
        <span>{content}</span>
        <Button>cancel</Button>
        <Button type="primary">confirm</Button>
      </Drawer>
    ))

    await nextTick()
    expect(wrapper.find('.el-drawer__body span').element.textContent).toEqual(
      content
    )
    const footerBtns = wrapper.findAll('.el-button')
    expect(footerBtns.length).toEqual(2)
    expect(footerBtns[0].find('span').element.textContent).toEqual('cancel')
    expect(footerBtns[1].find('span').element.textContent).toEqual('confirm')
  })

  test('should append to body, when append-to-body flag is true', async () => {
    const wrapper = mount({
      data: () => ({ visible: false }),
      render() {
        return (
          <Drawer
            title={title}
            modelValue={this.visible}
            append-to-body={true}
          />
        )
      },
    })

    const vm = wrapper.vm as any

    vm.visible = true
    await nextTick()
    await rAF()
    await nextTick()
    expect(document.querySelector('.el-overlay')?.parentNode).toEqual(
      document.body
    )
  })

  test('should open and close drawer properly', async () => {
    const onClose = vi.fn()
    const onClosed = vi.fn()
    const onOpened = vi.fn()

    const wrapper = mount({
      data: () => ({ visible: false }),
      render() {
        return (
          <Drawer
            title={title}
            modelValue={this.visible}
            onClose={onClose}
            onClosed={onClosed}
            onOpened={onOpened}
          />
        )
      },
    })

    const vm = wrapper.vm as any
    await nextTick()
    await rAF()
    await nextTick()
    expect(onOpened).not.toHaveBeenCalled()

    const drawerEl = wrapper.find('.el-overlay').element as HTMLDivElement
    expect(drawerEl.style.display).toEqual('none')

    vm.visible = true
    await nextTick()
    await rAF()
    expect(drawerEl.style.display).not.toEqual('none')
    expect(onOpened).toHaveBeenCalled()
  })

  test('should destroy every child after drawer was closed when destroy-on-close flag is true', async () => {
    const wrapper = mount(() => (
      <Drawer
        ref="drawer"
        title={title}
        modelValue={true}
        append-to-body={false}
        destroy-on-close={true}
      >
        <span>{content}</span>
      </Drawer>
    ))
    await nextTick()
    await rAF()
    await nextTick()
    expect(wrapper.find('.el-drawer__body span').element.textContent).toEqual(
      content
    )

    await wrapper.find('.el-drawer__close-btn').trigger('click')
    await nextTick()
    await rAF()
    await nextTick()
    expect(wrapper.find('.el-drawer__body').exists()).toBe(false)
  })

  test('should close dialog by clicking the close button', async () => {
    const wrapper = mount({
      data: () => ({ visible: false }),
      render() {
        return (
          <Drawer
            title={title}
            modelValue={this.visible}
            onUpdate:modelValue={(val) => (this.visible = val)}
          />
        )
      },
    })
    await nextTick()
    await rAF()
    await nextTick()
    const vm = wrapper.vm as any

    await wrapper.find('.el-drawer__close-btn').trigger('click')
    await nextTick()
    await rAF()
    await nextTick()
    expect(vm.visible).toEqual(false)
  })

  test('should invoke before-close', async () => {
    const beforeClose = vi.fn()

    const wrapper = mount({
      data: () => ({ visible: false }),
      render() {
        return (
          <Drawer
            title={title}
            modelValue={this.visible}
            beforeClose={beforeClose}
          />
        )
      },
    })

    await wrapper.find('.el-drawer__close-btn').trigger('click')
    expect(beforeClose).toHaveBeenCalled()
  })

  test('should not show close button when show-close flag is false', async () => {
    const wrapper = mount(() => (
      <Drawer title={title} modelValue={true} show-close={false} />
    ))

    expect(wrapper.find('.el-drawer__close-btn').exists()).toBe(false)
  })

  test('should have custom classes when custom classes were given', async () => {
    const classes = 'some-custom-class'
    const wrapper = mount(() => (
      <Drawer title={title} modelValue={true} custom-class={classes} />
    ))

    expect(wrapper.find(`.${classes}`).exists()).toBe(true)
  })

  test('drawer header should have slot props', async () => {
    const wrapper = mount(
      <Drawer
        modelValue={true}
        v-slots={{
          header: ({ titleId, titleClass, close }) => (
            <button
              data-title-id={titleId}
              data-title-class={titleClass}
              onClick={close}
            />
          ),
        }}
      />
    )

    await nextTick()
    const headerButton = wrapper.find('button')
    expect(headerButton.attributes()['data-title-id']).toBeTruthy()
    expect(headerButton.attributes()['data-title-class']).toBe(
      'el-drawer__title'
    )
    expect(wrapper.emitted().close).toBeFalsy()
    headerButton.trigger('click')
    await nextTick()
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  test('should not render header when withHeader attribute is false', async () => {
    const wrapper = mount(() => (
      <Drawer title={title} modelValue={true} with-header={false} />
    ))
    expect(wrapper.find('.el-drawer__header').exists()).toBe(false)
  })

  describe('directions', () => {
    const renderer = (direction: string) => {
      return mount(() => (
        <Drawer title={title} modelValue={true} direction={direction} />
      ))
    }
    test('should render from left to right', () => {
      expect(renderer('ltr').find('.ltr').exists()).toBe(true)
    })

    test('should render from right to left', () => {
      expect(renderer('rtl').find('.rtl').exists()).toBe(true)
    })

    test('should render from top to bottom', () => {
      expect(renderer('ttb').find('.ttb').exists()).toBe(true)
    })

    test('should render from bottom to top', () => {
      expect(renderer('btt').find('.btt').exists()).toBe(true)
    })
  })

  test('events', async () => {
    const onOpen = vi.fn()
    const onOpened = vi.fn()
    const onClose = vi.fn()
    const onClosed = vi.fn()

    const wrapper = mount({
      data: () => ({ visible: false }),
      render() {
        return (
          <Drawer
            title={title}
            modelValue={this.visible}
            onClose={onClose}
            onClosed={onClosed}
            onOpen={onOpen}
            onOpened={onOpened}
          />
        )
      },
    })

    const vm = wrapper.vm as any

    vm.visible = true
    await nextTick()
    await nextTick()
    expect(onOpen).toHaveBeenCalled()
    await nextTick()
    await rAF()
    await nextTick()
    expect(onOpened).toHaveBeenCalled()
    expect(onClose).not.toHaveBeenCalled()
    expect(onClosed).not.toHaveBeenCalled()

    vm.visible = false
    await nextTick()
    expect(onClose).toHaveBeenCalled()
    await nextTick()
    await rAF()
    await nextTick()
    expect(onOpened).toHaveBeenCalled()
  })

  describe('size', () => {
    const renderer = (size: string, isVertical: boolean) =>
      mount(() => (
        <Drawer
          title={title}
          size={size}
          modelValue={true}
          direction={isVertical ? 'ltr' : 'ttb'}
        />
      ))

    test('should effect height when drawer is vertical', async () => {
      const drawerEl = renderer('50%', true).find('.el-drawer')
        .element as HTMLDivElement
      expect(drawerEl.style.width).toEqual('50%')
    })

    test('should effect width when drawer is horizontal', async () => {
      const drawerEl = renderer('50%', false).find('.el-drawer')
        .element as HTMLDivElement
      expect(drawerEl.style.height).toEqual('50%')
    })
  })

  describe('accessibility', () => {
    test('title attribute should set aria-label', async () => {
      const wrapper = mount(() => <Drawer title={title} modelValue={true} />)

      const drawerDialog = wrapper.find('[role="dialog"]')
      expect(drawerDialog.attributes()['aria-label']).toBe(title)
      expect(drawerDialog.attributes()['aria-labelledby']).toBeFalsy()
    })

    test('missing title attribute should point to header slot content', async () => {
      const wrapper = mount(() => (
        <Drawer
          modelValue={true}
          v-slots={{
            header: ({ titleId, titleClass }) => (
              <h5 id={titleId} class={titleClass} />
            ),
          }}
        />
      ))
      const drawerDialog = wrapper.find('[role="dialog"]')
      const drawerTitle = wrapper.find('.el-drawer__title')
      expect(drawerDialog.attributes()['aria-label']).toBeFalsy()
      expect(drawerDialog.attributes()['aria-labelledby']).toBe(
        drawerTitle.attributes().id
      )
    })

    test('aria-describedby should point to modal body', async () => {
      const wrapper = mount(() => <Drawer modelValue={true} />)
      await nextTick()
      const drawerDialog = wrapper.find('[role="dialog"]')
      const drawerBody = wrapper.find('.el-drawer__body')
      expect(drawerDialog.attributes()['aria-describedby']).toBe(
        drawerBody.attributes().id
      )
    })
  })
})
