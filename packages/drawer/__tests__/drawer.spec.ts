import { mount } from '@vue/test-utils'
import Drawer from '../src/index.vue'
import Button from '../../button/src/button.vue'

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      [Drawer.name]: Drawer,
      [Button.name]: Button,
    },
    template,
    data,
    ...otherObj,
  })

const sleep = (time = 250) => new Promise(resolve => setTimeout(resolve, time))
export const timeout = async (fn, time = 250) => {
  await sleep(time)
  fn()
}

const title = 'Drawer Title'
const content = 'content'

describe('Drawer', () => {
  test('create', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title="title" :visible="visible"></el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm
    await sleep()
    expect(document.querySelector('.v-modal')).not.toBeNull()
    expect(vm.$el.querySelector('.el-drawer__header').textContent).toEqual(title)
    expect(vm.$el.style.display).not.toEqual('none')
  })

  test('render correct content', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible'>
        <span>this is a sentence</span>
        <el-button @click.native='dialogVisible = false'>cancel</el-button>
        <el-button type='primary' @click.native='dialogVisible = false'>confirm</el-button>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm
    await sleep()
    expect(vm.$el.querySelector('.el-drawer__body span').textContent).toEqual('this is a sentence')
    const footerBtns = vm.$el.querySelectorAll('.el-button')
    expect(footerBtns.length).toEqual(2)
    expect(footerBtns[0].querySelector('span').textContent).toEqual('cancel')
    expect(footerBtns[1].querySelector('span').textContent).toEqual('confirm')
  })

  test('should append to body, when append-to-body flag is true', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible' :append-to-body='true'>
        <span> content </span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: false,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()
    vm.visible = true
    await sleep()
    expect(vm.$el.parentNode).toEqual(document.body)
  })

  test('should open and close drawer properly', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: false,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()

    const drawer = wrapper.findComponent(Drawer).vm.$el
    expect(drawer.style.display).toEqual('none')
    vm.visible = true
    await sleep()
    expect(drawer.style.display).not.toEqual('none')
    vm.visible = false
    await sleep(400)
    expect(drawer.style.display).toEqual('none')
  })

  test('should destroy every child after drawer was closed when destroy-on-close flag is true', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible' :append-to-body='true' :destroy-on-close='true' ref='drawer'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()
    expect(vm.$el.querySelector('.el-drawer__body span').textContent).toEqual(content)
    vm.$refs.drawer.closeDrawer()
    await sleep(400)
    expect(vm.$el.querySelector('.el-drawer__body')).toBeNull()
  })

  test('should close dialog by clicking the close button', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' v-model:visible='visible' :append-to-body='true' :destroy-on-close='true' ref='drawer'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()
    wrapper.findComponent(Drawer).find('.el-drawer__close-btn').trigger('click')
    expect(vm.visible).toEqual(false)
  })

  test('should invoke before-close', async () => {
    const beforeClose = jest.fn()
    const wrapper = _mount(
      `
      <el-drawer
          :before-close='beforeClose'
          :title='title'
          v-model:visible='visible'
          :append-to-body='true'
          :destroy-on-close='true'
          ref='drawer'
          >
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
        beforeClose,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()

    vm.$refs.drawer.closeDrawer()
    await sleep()
    expect(beforeClose).toHaveBeenCalled()
  })

  test('should not show close button when show-close flag is false', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible' ref='drawer' :show-close='false'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()
    expect(vm.$el.querySelector('.el-drawer__close-btn')).toBeNull()
  })

  test('should have custom classes when custom classes were given', async () => {
    const classes = 'some-custom-class'
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible' ref='drawer' custom-class='${classes}'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()

    expect(vm.$el.querySelector(`.${classes}`)).not.toBeNull()
  })

  test('should not render header when withHeader attribute is false', async () => {
    const wrapper = _mount(
      `
      <el-drawer :title='title' :visible='visible' ref='drawer' :with-header='false'>
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: true,
      }),
    )
    const vm = wrapper.vm as any
    await sleep()

    expect(vm.$el.querySelector('.el-drawer__header')).toBeNull()
  })

  describe('directions', () => {
    const renderer = direction => {
      return _mount(
        `
        <el-drawer :title='title' :visible='visible' direction='${direction}'>
          <span>${content}</span>
        </el-drawer>
        `,
        () => ({
          title,
          visible: true,
        }),
      )
    }
    test('should render from left to right', async () => {
      const vm = renderer('ltr').vm as any
      await sleep()
      expect(vm.$el.querySelector('.ltr')).not.toBeNull()
    })

    test('should render from right to left', async () => {
      const vm = renderer('rtl').vm as any
      await sleep()
      expect(vm.$el.querySelector('.rtl')).not.toBeNull()
    })

    test('should render from top to bottom', async () => {
      const vm = renderer('ttb').vm as any
      await sleep()
      expect(vm.$el.querySelector('.ttb')).not.toBeNull()
    })

    test('should render from bottom to top', async () => {
      const vm = renderer('btt').vm as any
      await sleep()
      expect(vm.$el.querySelector('.btt')).not.toBeNull()
    })
  })

  test('events', async () => {
    const open = jest.fn()
    const opened = jest.fn()
    const close = jest.fn()
    const closed = jest.fn()
    const wrapper = _mount(
      `
      <el-drawer 
        :title='title'
        :visible='visible'
        ref="drawer"
        @open="open"
        @opened="opened"
        @close="close"
        @closed="closed">
        <span>${content}</span>
      </el-drawer>
      `,
      () => ({
        title,
        visible: false,
      }),
      {
        methods: {
          close,
          closed,
          open,
          opened,
        },
      },
    )
    const vm = wrapper.vm as any

    vm.visible = true
    await sleep(400)
    expect(open).toHaveBeenCalled()
    expect(opened).toHaveBeenCalled()
    expect(close).not.toHaveBeenCalled()
    expect(closed).not.toHaveBeenCalled()
    vm.visible = false
    await sleep(500)
    expect(close).toHaveBeenCalled()
    expect(closed).toHaveBeenCalled()
  })

  describe('size', () => {
    const renderer = (size, isVertical) =>
      _mount(
        `
        <el-drawer :title='title' :visible='visible' direction='${isVertical ? 'ltr' : 'ttb'}' size='${size}'>
          <span>${content}</span>
        </el-drawer>
        `,
        () => ({
          visible: true,
          title,
        }),
      )

    test('should effect height when drawer is vertical', async () => {
      const size = '50%'
      const vm = renderer(size, true).vm as any

      expect(vm.$el.querySelector('.el-drawer').style.width).toEqual('50%')
    })

    test('should effect width when drawer is horizontal', async () => {
      const size = '50%'
      const vm = renderer(size, false).vm as any
      expect(vm.$el.querySelector('.el-drawer').style.height).toEqual('50%')
    })
  })
})
