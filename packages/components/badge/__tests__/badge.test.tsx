import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { InfoFilled } from '@element-plus/icons-vue'
import { ElIcon } from '@element-plus/components/icon'
import Badge from '../src/badge.vue'

const AXIOM = 'Rem is the best girl'

describe('Badge', () => {
  test('has value', () => {
    const wrapper = mount(() => <Badge value={80} />)
    expect(wrapper.find('.el-badge__content').text()).toEqual('80')
  })

  test('is fixed', () => {
    const wrapper = mount(() => (
      <Badge
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-badge__content.is-fixed').exists()).toBe(true)
    expect(wrapper.find('.el-badge').text()).toBe(AXIOM)
  })

  test('is dot', () => {
    const wrapper = mount(() => (
      <Badge
        isDot={true}
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-badge__content.is-dot').exists()).toBe(true)
    expect(
      wrapper.find('.el-badge__content.el-badge__content--danger').exists()
    ).toBe(true)
  })

  test('is dot with type', () => {
    const wrapper = mount(() => (
      <Badge
        isDot={true}
        type={'success'}
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-badge__content.is-dot').exists()).toBe(true)
    expect(
      wrapper.find('.el-badge__content.el-badge__content--success').exists()
    ).toBe(true)
  })

  test('max', async () => {
    const badgeValue = ref(200)
    const wrapper = mount(() => <Badge max={100} value={badgeValue.value} />)
    expect(wrapper.find('.el-badge__content').text()).toEqual('100+')
    badgeValue.value = 80
    await nextTick()
    expect(wrapper.find('.el-badge__content').text()).toEqual('80')
  })

  test('showZero', async () => {
    const showZero = ref(true)
    const badgeValue = ref(0)
    const wrapper = mount(() => (
      <Badge showZero={showZero.value} value={badgeValue.value} />
    ))
    expect(wrapper.find('.el-badge__content').text()).toEqual('0')
    showZero.value = false
    await nextTick()
    expect(wrapper.find('.el-badge__content').classes()).toContain(
      'is-hide-zero'
    )

    badgeValue.value = 1
    await nextTick()
    expect(wrapper.find('.el-badge__content').text()).toEqual('1')
    expect(wrapper.find('.el-badge__content').classes()).not.toContain(
      'is-hide-zero'
    )
    badgeValue.value = 0
    await nextTick()
    expect(wrapper.find('.el-badge__content').classes()).toContain(
      'is-hide-zero'
    )

    showZero.value = true
    await nextTick()
    expect(wrapper.find('.el-badge__content').classes()).not.toContain(
      'is-hide-zero'
    )
  })

  test('showZero with max', async () => {
    const showZero = ref(true)
    const badgeValue = ref(0)
    const wrapper = mount(() => (
      <Badge showZero={showZero.value} max={-1} value={badgeValue.value} />
    ))
    expect(wrapper.find('.el-badge__content').text()).toEqual('-1+')
    showZero.value = false
    badgeValue.value = 0
    await nextTick()
    expect(wrapper.find('.el-badge__content').text()).toEqual('-1+')
  })

  test('color', () => {
    const badgeValue = ref(20)
    const wrapper = mount(() => <Badge value={badgeValue.value} color="blue" />)
    expect(wrapper.find('.el-badge__content').attributes('style')).toContain(
      'background-color: blue'
    )
  })

  test('badgeStyle', () => {
    const badgeValue = ref(20)
    const wrapper = mount(() => (
      <Badge value={badgeValue.value} badgeStyle={{ background: 'blue' }} />
    ))
    expect(wrapper.find('.el-badge__content').attributes('style')).toContain(
      'background: blue'
    )
  })

  test('badgeClass', () => {
    const badgeValue = ref(20)
    const wrapper = mount(() => (
      <Badge value={badgeValue.value} badgeClass="test-badge-class" />
    ))
    expect(wrapper.find('.test-badge-class').exists()).toBe(true)
  })

  test('offset', () => {
    const badgeValue = ref(20)
    const wrapper = mount(() => (
      <Badge value={badgeValue.value} offset={[10, 10]} />
    ))
    expect(wrapper.find('.el-badge__content').attributes('style')).toContain(
      'margin-right: -10px'
    )
    expect(wrapper.find('.el-badge__content').attributes('style')).toContain(
      'margin-top: 10px'
    )
  })

  test('content slot', () => {
    const wrapper = mount(() => (
      <Badge
        value={99}
        v-slots={{
          content: ({ value }: { value: string }) => (
            <div class="custom">
              <ElIcon>
                <InfoFilled />
              </ElIcon>
              <span>{value}</span>
            </div>
          ),
        }}
      />
    ))
    expect(wrapper.find('.el-badge__content .custom').exists()).toBe(true)
  })
})
