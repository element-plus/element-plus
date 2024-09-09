import { defineComponent, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useLocale } from '@element-plus/hooks'
import Chinese from '@element-plus/locale/lang/zh-cn'
import English from '@element-plus/locale/lang/en'
import { ElButton, ElMessage, ElPagination } from '@element-plus/components'
import { rAF } from '@element-plus/test-utils/tick'
import { getStyle } from '@element-plus/utils'
import {
  useGlobalComponentSettings,
  useGlobalConfig,
} from '../src/hooks/use-global-config'
import ConfigProvider from '../src/config-provider'

import type { PropType } from 'vue'
import type { VueWrapper } from '@vue/test-utils'
import type { Language } from '@element-plus/locale'
import type { ComponentSize } from '@element-plus/constants'
import type { ConfigProviderProps } from '../src/config-provider-props'

const TestComp = defineComponent({
  setup() {
    const { t } = useLocale()
    return () => <div>{t('el.popconfirm.confirmButtonText')}</div>
  },
})

describe('config-provider', () => {
  describe('locale-provider', () => {
    let wrapper: VueWrapper<any>

    beforeEach(() => {
      const currentLocale = ref<Language>(English)
      const oppositeLocale = ref<Language>(Chinese)
      const toEn = () => {
        currentLocale.value = English
        oppositeLocale.value = Chinese
      }
      const toZh = () => {
        currentLocale.value = Chinese
        oppositeLocale.value = English
      }

      wrapper = mount(() => (
        <>
          <ConfigProvider locale={currentLocale.value}>
            <TestComp class="current-locale" />
            <ConfigProvider locale={oppositeLocale.value}>
              <TestComp class="opposite-locale" />
            </ConfigProvider>
          </ConfigProvider>

          <button onClick={toEn} class="to-en">
            toEn
          </button>
          <button onClick={toZh} class="to-zh">
            toZh
          </button>
        </>
      ))
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should provide locale properly', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )
    })

    it('should reactively update the text on page', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )

      await wrapper.find('.to-zh').trigger('click')

      expect(wrapper.find('.current-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
    })
  })

  describe('button-config', () => {
    it('autoInsertSpace', async () => {
      const config = reactive({
        autoInsertSpace: true,
      })

      const wrapper = mount(() => (
        <>
          <ConfigProvider button={config}>
            <ElButton>中文</ElButton>
          </ConfigProvider>
          <button
            class="toggle"
            onClick={() => (config.autoInsertSpace = !config.autoInsertSpace)}
          >
            toggle
          </button>
        </>
      ))

      await nextTick()
      expect(
        wrapper.find('.el-button .el-button__text--expand').exists()
      ).toBeTruthy()
      await wrapper.find('.toggle').trigger('click')
      expect(
        wrapper.find('.el-button .el-button__text--expand').exists()
      ).toBeFalsy()
    })
  })

  describe('namespace-config', () => {
    it('reactive namespace', async () => {
      const namespace = ref()

      const wrapper = mount(() => (
        <ConfigProvider namespace={namespace.value}>
          <ElButton>test str</ElButton>
        </ConfigProvider>
      ))

      await nextTick()
      expect(wrapper.find('button').classes().join('')).toBe('el-button')
      namespace.value = 'ep'
      await nextTick()
      expect(wrapper.find('button').classes().join('')).toBe('ep-button')
    })
  })

  describe('message-config', () => {
    afterEach(() => {
      ElMessage.closeAll()
    })

    it('limit the number of messages displayed at the same time', async () => {
      const config = reactive({
        max: 3,
      })
      const open = () => {
        ElMessage('this is a message.')
      }

      const wrapper = mount(() => (
        <ConfigProvider message={config}>
          <ElButton onClick={open}>open</ElButton>
        </ConfigProvider>
      ))

      await nextTick()
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      await nextTick()
      expect(document.querySelectorAll('.el-message').length).toBe(3)

      config.max = 10
      await nextTick()
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      await nextTick()
      expect(document.querySelectorAll('.el-message').length).toBe(7)
    })

    it('new config parameters effective', async () => {
      const config = reactive({
        grouping: true,
        showClose: true,
        offset: 200,
      })
      const open = () => {
        ElMessage('this is a message.')
      }

      const wrapper = mount(() => (
        <ConfigProvider message={config}>
          <ElButton onClick={open}>open</ElButton>
        </ConfigProvider>
      ))

      await rAF()

      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      await nextTick()
      const elements = document.querySelectorAll('.el-message')
      expect(elements.length).toBe(1)
      expect(document.querySelectorAll('.el-message__closeBtn').length).toBe(1)

      const getTopValue = (elm: Element): number =>
        Number.parseFloat(getStyle(elm as HTMLElement, 'top'))
      expect(getTopValue(elements[0])).toBe(config.offset)
    })

    it('multiple config-provider config override', async () => {
      const config = reactive({
        max: 3,
      })
      const overrideConfig = reactive({
        max: 1,
      })
      const open = () => {
        ElMessage('this is a message.')
      }

      const wrapper = mount(() => (
        <ConfigProvider message={config}>
          <ConfigProvider message={overrideConfig}>
            <ElButton onClick={open}>open</ElButton>
          </ConfigProvider>
        </ConfigProvider>
      ))

      await rAF()
      await wrapper.find('.el-button').trigger('click')
      await wrapper.find('.el-button').trigger('click')
      await wrapper.find('.el-button').trigger('click')
      await nextTick()
      expect(document.querySelectorAll('.el-message').length).toBe(1)
    })
  })

  describe('feature checking', () => {
    const TestComponent = defineComponent({
      props: {
        configKey: {
          type: String as PropType<keyof ConfigProviderProps>,
          required: true,
        },
      },
      setup(props) {
        const features = useGlobalConfig(props.configKey)
        return {
          [props.configKey]: features,
        }
      },
      render: () => <div />,
    })

    it.each([
      { feature: 'a11y', config: false },
      { feature: 'keyboardNavigation', config: false },
      { feature: 'experimentalFeatures', config: { someFeature: true } },
    ])(
      'should inject config $feature to $config correctly',
      ({ feature, config }: { feature: string; config: any }) => {
        const props: Record<string, any> = {}
        props[feature] = config

        const wrapper = mount(() => (
          <ConfigProvider {...props}>
            <TestComponent configKey={feature as keyof ConfigProviderProps} />
          </ConfigProvider>
        ))

        expect(wrapper.findComponent(TestComponent).vm[feature]).toEqual(config)
      }
    )
  })

  describe('global component configs', () => {
    it('should use global configured settings', async () => {
      const namespace = 'test'
      const locale = Chinese
      const zIndex = 1000
      const block = 'button'
      const size = 'large'
      const receiverRef = ref()
      const fallback = ref('' as ComponentSize)
      const ReceiverComponent = defineComponent({
        setup() {
          receiverRef.value = useGlobalComponentSettings(block, fallback)
        },
        template: '<div></div>',
      })
      mount(() => (
        <ConfigProvider
          zIndex={zIndex}
          locale={locale}
          namespace={namespace}
          size={size}
        >
          <ReceiverComponent />
        </ConfigProvider>
      ))

      const vm = receiverRef.value
      expect(vm.ns.namespace).toBe(namespace)
      expect(vm.locale.locale).toBe(locale)
      expect(vm.zIndex.currentZIndex).toBeGreaterThanOrEqual(zIndex)
      expect(vm.size).toBe(size)

      fallback.value = 'small'
      await nextTick()

      expect(vm.size).toBe('small')
    })

    // #18004
    it('dynamically modify global size configuration', async () => {
      const size = ref<ComponentSize>('small')
      const wrapper = mount(() => (
        <ConfigProvider size={size.value}>
          <ElButton />
          <ElPagination total={100} background={true} />
        </ConfigProvider>
      ))
      const button = wrapper.findComponent(ElButton)
      const pagination = wrapper.findComponent(ElPagination)
      expect(button.vm.$el.className.includes('small')).toBe(true)
      expect(pagination.vm.$el.className.includes('small')).toBe(true)

      size.value = 'large'
      await nextTick()
      expect(button.vm.$el.className.includes('large')).toBe(true)
      expect(pagination.vm.$el.className.includes('large')).toBe(true)
    })
  })
})
