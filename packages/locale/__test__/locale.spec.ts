import { t, use } from '../index'
import zhCn from '../lang/zh-cn'
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
})
