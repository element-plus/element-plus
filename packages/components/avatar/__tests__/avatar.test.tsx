import { markRaw, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { User } from '@element-plus/icons-vue'
import {
  IMAGE_FAIL,
  IMAGE_SUCCESS,
  mockImageEvent,
} from '@element-plus/test-utils/mock'
import { stableLoad } from '@element-plus/test-utils/stable-load'
import Avatar from '../src/avatar.vue'
import AvatarGroup from '../src/avatar-group'

describe('Avatar.vue', () => {
  mockImageEvent()

  test('render test', () => {
    const wrapper = mount(() => <Avatar />)
    expect(wrapper.find('.g-avatar').exists()).toBe(true)
  })

  test('size is number', () => {
    const wrapper = mount(() => <Avatar size={50} />)
    expect(wrapper.attributes('style')).toContain('--g-avatar-size: 50px;')
  })

  test('size is string', () => {
    const wrapper = mount(() => <Avatar size="small" />)
    expect(wrapper.classes()).toContain('g-avatar--small')
  })

  test('shape', () => {
    const wrapper = mount(() => <Avatar size="small" shape="square" />)
    expect(wrapper.classes()).toContain('g-avatar--square')
  })

  test('icon avatar', () => {
    const wrapper = mount(() => <Avatar icon={markRaw(User)} />)
    expect(wrapper.classes()).toContain('g-avatar--icon')
    expect(wrapper.findComponent(User).exists()).toBe(true)
  })

  test('image avatar', () => {
    const wrapper = mount(() => <Avatar src={IMAGE_SUCCESS} />)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  test('image fallback', async () => {
    const wrapper = mount(
      <Avatar
        src={IMAGE_FAIL}
        v-slots={{
          default: () => 'fallback',
        }}
      />
    )

    await nextTick()
    const img = wrapper.find('img')
    if (img.exists()) {
      await img.trigger('error')
    }
    await flushPromises()
    expect(wrapper.emitted('error')).toBeDefined()
    await nextTick()
    expect(wrapper.text()).toBe('fallback')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  test('image fit', () => {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    for (const fit of fits) {
      const wrapper = mount(() => <Avatar fit={fit} src={IMAGE_SUCCESS} />)
      expect(wrapper.find('img').attributes('style')).toContain(
        `object-fit: ${fit};`
      )
    }
  })

  describe('image source changed', () => {
    test.each([
      { name: 'src', prop: 'src' },
      { name: 'srcSet', prop: 'srcSet' },
    ])('$name', async ({ prop }) => {
      const wrapper = mount(
        <Avatar
          v-slots={{
            default: () => 'fallback',
          }}
        />
      )

      expect(wrapper.vm.hasLoadError).toBe(false)
      await wrapper.setProps({ [prop]: IMAGE_FAIL })
      await stableLoad(() => !wrapper.vm.hasLoadError)
      expect(wrapper.vm.hasLoadError).toBe(true)
      await wrapper.setProps({ [prop]: IMAGE_SUCCESS })
      await flushPromises()
      expect(wrapper.vm.hasLoadError).toBe(false)
      expect(wrapper.find('img').exists()).toBe(true)
    })
  })
})

describe('Avatar Group', () => {
  test('render test', () => {
    const wrapper = mount(
      <AvatarGroup size="small" shape="square">
        <Avatar />
        <Avatar size="large" shape="circle"></Avatar>
        <Avatar />
        <Avatar size="large" shape="circle"></Avatar>
        <Avatar />
      </AvatarGroup>
    )

    expect(wrapper.findAll('.g-avatar').length).toBe(5)
    expect(wrapper.findAll('.g-avatar--small').length).toBe(3)
    expect(wrapper.findAll('.g-avatar--large').length).toBe(2)
    expect(wrapper.findAll('.g-avatar--circle').length).toBe(2)
    expect(wrapper.findAll('.g-avatar--square').length).toBe(3)
  })

  test('collapse-class & collapse-style', () => {
    const collapseStyle = 'background-color: red;'
    const wrapper = mount(
      <AvatarGroup
        collapseAvatars
        collapseClass="collapse-avatar"
        collapseStyle={collapseStyle}
      >
        <Avatar />
        <Avatar />
      </AvatarGroup>
    )

    const collapseAvatar = wrapper.findAll('.g-avatar')[1]
    expect(collapseAvatar.text()).toBe('+ 1')
    expect(collapseAvatar.classes()).toContain('collapse-avatar')
    expect(collapseAvatar.attributes('style')).toContain(
      'background-color: red;'
    )
  })

  test('collapse-avatars-tooltip', async () => {
    const wrapper = mount(
      <AvatarGroup collapseAvatars collapseAvatarsTooltip>
        <Avatar />
        <Avatar />
      </AvatarGroup>
    )

    const collapseAvatar = wrapper.findAll('.g-avatar')[1]
    await collapseAvatar.trigger('mouseenter')
    await nextTick()

    const tooltip = wrapper.findComponent({ name: 'GTooltip' })
    expect(tooltip.exists()).toBe(true)
    expect(tooltip.html()).toContain('g-avatar')
  })
})
