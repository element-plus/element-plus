import { mount } from '@vue/test-utils'
import { t, use } from '../index'
import localeMixin from '../mixin'
import zhCn from '../lang/zh-CN'

describe('Locale', () => {
  test('t', () => {
    expect(t('el.popconfirm.confirmButtonText')).toBe('Yes')
  })

  test('return key name if not defined', () => {
    expect(t('el.popconfirm.someThing')).toBe('someThing')
  })

  test('use', () => {
    use(zhCn)
    expect(t('el.popconfirm.confirmButtonText')).toBe('确定')
  })

  test('mixin', () => {
    const component = {
      template: `<p>{{ t('el.popconfirm.cancelButtonText') }}</p>`,
      mixins: [localeMixin],
    }
    const wrapper = mount(component)
    expect(wrapper.text()).toContain('No')
  })
})
