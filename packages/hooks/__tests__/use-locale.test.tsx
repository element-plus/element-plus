import { computed, defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Chinese from '@element-plus/locale/lang/zh-cn'
import English from '@element-plus/locale/lang/en'
import { buildTranslator, useLocale } from '../use-locale'
import { provideGlobalConfig } from '..'
import type { Language } from '@element-plus/locale'
import type { ComponentPublicInstance, PropType } from 'vue'
import type { VueWrapper } from '@vue/test-utils'

const TestComp = defineComponent({
  setup() {
    const { t } = useLocale()
    return () => (
      <div class="locale-manifest">{t('el.popconfirm.confirmButtonText')}</div>
    )
  },
})

describe('use-locale', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = mount(
      defineComponent({
        props: {
          locale: {
            type: Object as PropType<Language>,
            default: Chinese,
          },
        },
        setup(props) {
          provideGlobalConfig(computed(() => ({ locale: props.locale })))
          return () => <TestComp />
        },
      })
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

  it('return key name if not defined', () => {
    const t = buildTranslator(English)
    expect(t('el.popconfirm.someThing')).toBe('el.popconfirm.someThing')
  })
})
