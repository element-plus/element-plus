import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Chinese from '@element-plus/locale/lang/zh-cn'
import English from '@element-plus/locale/lang/en'
import {
  provideLocale,
  useLocaleProps,
  useLocale,
  buildTranslator,
} from '../use-locale'

const TestComp = {
  setup() {
    const { t } = useLocale()
    return () => {
      return h(
        'div',
        { class: 'locale-manifest' },
        t('el.popconfirm.confirmButtonText')
      )
    }
  },
}

describe('use-locale', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      {
        props: useLocaleProps,
        components: {
          'el-test': TestComp,
        },
        setup(_, { slots }) {
          provideLocale()
          return () => slots.default()
        },
      },
      {
        props: {
          locale: Chinese,
        },
        slots: {
          default: () => h(TestComp),
        },
      }
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should provide locale correctly', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText
    )
  })

  it('should update the text reactively', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText
    )
    await wrapper.setProps({
      locale: English,
    })

    expect(wrapper.find('.locale-manifest').text()).toBe(
      English.el.popconfirm.confirmButtonText
    )
  })

  test('return key name if not defined', () => {
    const t = buildTranslator(English)
    expect(t('el.popconfirm.someThing')).toBe('el.popconfirm.someThing')
  })
})
