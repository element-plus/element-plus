import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ArrowLeft } from '@element-plus/icons-vue'
import PageHeader from '../src/page-header.vue'

const AXIOM = 'Rem is the best girl'

describe('PageHeader.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <PageHeader content={AXIOM} />)
    expect(wrapper.find('.el-page-header__content').text()).toEqual(AXIOM)
  })

  test('should render icon props', () => {
    const icon = markRaw(ArrowLeft)
    const wrapper = mount(() => <PageHeader icon={icon} />)
    expect(wrapper.findComponent(icon).exists()).toBe(true)
  })

  test('should render icon slots', () => {
    const wrapper = mount(() => (
      <PageHeader
        v-slots={{
          icon: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-page-header__icon').text()).toEqual(AXIOM)
  })

  describe('slots', () => {
    test('content', () => {
      const wrapper = mount(() => (
        <PageHeader
          v-slots={{
            content: () => AXIOM,
          }}
        />
      ))
      expect(wrapper.find('.el-page-header__content').text()).toEqual(AXIOM)
    })

    test('breadcrumb', () => {
      const wrapper = mount(() => (
        <PageHeader
          v-slots={{
            breadcrumb: () => AXIOM,
          }}
        />
      ))
      expect(wrapper.find('.el-page-header__breadcrumb').exists()).toBe(true)
      expect(wrapper.classes()).toContain('el-page-header--has-breadcrumb')
    })

    test('extra', () => {
      const wrapper = mount(() => (
        <PageHeader
          v-slots={{
            extra: () => AXIOM,
          }}
        />
      ))
      expect(wrapper.find('.el-page-header__extra').exists()).toBe(true)
      expect(wrapper.classes()).toContain('el-page-header--has-extra')
    })

    test('default', () => {
      const wrapper = mount(() => (
        <PageHeader
          v-slots={{
            default: () => AXIOM,
          }}
        />
      ))
      expect(wrapper.find('.el-page-header__main').exists()).toBe(true)
      expect(wrapper.classes()).toContain('is-contentful')
    })
  })

  test('prop title', () => {
    const wrapper = mount(() => <PageHeader title={AXIOM} />)
    expect(wrapper.find('.el-page-header__title').text()).toEqual(AXIOM)
  })

  test('slot prop', () => {
    const wrapper = mount(() => (
      <PageHeader
        v-slots={{
          title: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-page-header__title').text()).toEqual(AXIOM)
  })

  test('event back', async () => {
    const wrapper = mount(() => <PageHeader content={AXIOM} />)
    const pageHeader = wrapper.findComponent(PageHeader)
    await pageHeader.find('.el-icon').trigger('click')
    expect(pageHeader.emitted('back')).toBeDefined()
  })
})
