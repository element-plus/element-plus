import { h, ref, inject } from 'vue'
import { mount } from '@vue/test-utils'
import { LocaleInjectionKey } from '@element-plus/hooks'
import Chinese from '@element-plus/locale/lang/zh-cn'
import English from '@element-plus/locale/lang/en'
import { ConfigProvider } from '../config-provider'

import type { Language } from '@element-plus/locale'

const TestComp = {
  setup() {
    const { t } = inject(LocaleInjectionKey)
    return () => {
      return h('div', t('el.popconfirm.confirmButtonText'))
    }
  },
}

describe('config-provider', () => {
  describe('locale-provider', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount({
        components: {
          'el-test': TestComp,
          [ConfigProvider.name]: ConfigProvider,
        },
        setup() {
          const currentLocale = ref<Language>(English)
          const oppositeLocale = ref<Language>(Chinese)
          return {
            currentLocale,
            oppositeLocale,
            toEn() {
              currentLocale.value = English
              oppositeLocale.value = Chinese
            },
            toZh() {
              currentLocale.value = Chinese
              oppositeLocale.value = English
            },
          }
        },
        template: `
          <el-config-provider :locale="currentLocale">
            <el-test class="current-locale" />
            <el-config-provider :locale="oppositeLocale">
              <el-test class="opposite-locale" />
            </el-config-provider>
          </el-config-provider>

          <button @click="toEn" class="to-en">toEn</button>
          <button @click="toZh" class="to-zh">toZh</button>
        `,
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should provide locale properly', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText,
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText,
      )
    })

    it('should reactively update the text on page', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText,
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText,
      )

      await wrapper.find('.to-zh').trigger('click')

      expect(wrapper.find('.current-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText,
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText,
      )
    })
  })
})
