import { mount } from '@vue/test-utils'
import { t, use } from '../index'
import localeMixin from '../mixin'
import zhCn from '../lang/zh-CN'
import en from '../lang/en'

describe('Locale', () => {
  test('t', () => {
    expect(t('el.popconfirm.confirmButtonText')).toBe('Yes')
  })

  test('return key name if not defined', () => {
    expect(t('el.popconfirm.someThing')).toBeUndefined()
  })

  test('use', () => {
    use(zhCn)
    expect(t('el.popconfirm.confirmButtonText')).toBe('确定')
    use(en)
  })

  test('mixin', () => {
    const component = {
      template: `<p>{{ t('el.popconfirm.cancelButtonText') }}</p>`,
      mixins: [localeMixin],
    } as any
    const wrapper = mount(component)
    expect(wrapper.text()).toContain('No')
  })
})
