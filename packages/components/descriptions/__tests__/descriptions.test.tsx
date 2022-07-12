// @ts-nocheck
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ElTag from '@element-plus/components/tag'
import ElDescriptions from '../src/index.vue'
import ElDescriptionsItem from '../src/description-item'

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <ElDescriptions title="title" extra="extra">
        {Array.from({ length: 4 }).map(() => (
          <ElDescriptionsItem />
        ))}
      </ElDescriptions>
    ))

    expect(wrapper.find('.el-descriptions__title').text()).toEqual('title')
    expect(wrapper.find('.el-descriptions__extra').text()).toEqual('extra')
    expect(wrapper.findAll('.el-descriptions__label').length).toEqual(4)
  })

  test('should render border props', () => {
    const wrapper = mount(() => (
      <ElDescriptions border>
        <ElDescriptionsItem />
      </ElDescriptions>
    ))

    expect(wrapper.find('table').classes()).toContain('is-bordered')
  })

  test('should render align props', () => {
    const wrapper = mount(() => (
      <ElDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <ElDescriptionsItem align="right" labelAlign="center" />
        ))}
      </ElDescriptions>
    ))

    expect(wrapper.find('.el-descriptions__label').classes()).toContain(
      'is-center'
    )
    expect(wrapper.find('.el-descriptions__content').classes()).toContain(
      'is-right'
    )
  })

  test('should render width props', () => {
    const wrapper = mount(() => (
      <ElDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <ElDescriptionsItem width="50px" min-width="60px" />
        ))}
      </ElDescriptions>
    ))

    expect(
      wrapper.find('.el-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
    expect(
      wrapper.find('.el-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
  })

  test('should render class props', () => {
    const wrapper = mount(() => (
      <ElDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <ElDescriptionsItem
            class-name="class-name"
            label-class-name="label-class-name"
          />
        ))}
      </ElDescriptions>
    ))

    expect(wrapper.find('.el-descriptions__label').classes()).toContain(
      'label-class-name'
    )
    expect(wrapper.find('.el-descriptions__content').classes()).toContain(
      'class-name'
    )
  })

  test('should render column props', async () => {
    const border = ref(false)

    const wrapper = mount(() => (
      <ElDescriptions column={5} border={border.value}>
        {Array.from({ length: 10 }).map(() => (
          <ElDescriptionsItem />
        ))}
      </ElDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(5)

    border.value = true

    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(10)
  })

  test('should render direction props', async () => {
    const direction = ref('horizontal')

    const wrapper = mount(() => (
      <ElDescriptions column={5} direction={direction.value} border>
        {Array.from({ length: 10 }).map((item) => (
          <ElDescriptionsItem label={String(item)}>
            {String(item)}
          </ElDescriptionsItem>
        ))}
      </ElDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(10)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[0].element.children[1].innerHTML
    )

    direction.value = 'vertical'
    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(5)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[1].element.children[0].innerHTML
    )
  })

  test('should render title slots', async () => {
    const wrapper = mount(() => (
      <ElDescriptions
        v-slots={{
          title: () => 'title',
          default: () =>
            Array.from({ length: 10 }).map(() => <ElDescriptionsItem />),
        }}
      ></ElDescriptions>
    ))

    expect(wrapper.find('.el-descriptions__title').text()).toEqual('title')
  })

  test('should render span props', async () => {
    const wrapper = mount(() => (
      <ElDescriptions>
        <ElDescriptionsItem label="1">1</ElDescriptionsItem>
        <ElDescriptionsItem label="2" span={2}>
          2
        </ElDescriptionsItem>
        <ElDescriptionsItem label="3">3</ElDescriptionsItem>
        <ElDescriptionsItem label="4">4</ElDescriptionsItem>
      </ElDescriptions>
    ))

    expect(wrapper.findAll('td')[1].element.getAttribute('colSpan')).toEqual(
      '2'
    )
    expect(wrapper.findAll('td')[3].element.getAttribute('colSpan')).toEqual(
      '2'
    )
  })

  test('re-rendered when slots is updated', async () => {
    const CHANGE_VALUE = 'company'
    const remarks = ref(['school', 'hospital'])

    const onClick = () => {
      remarks.value[0] = CHANGE_VALUE
    }

    const wrapper = mount(() => (
      <>
        {remarks.value.map((remark, index) => (
          <ElDescriptions key={index} title={remark}>
            <ElDescriptionsItem label={remark}>
              <ElTag size="small">{remark}</ElTag>
            </ElDescriptionsItem>
          </ElDescriptions>
        ))}
        <button onClick={onClick}>click</button>
      </>
    ))

    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.findComponent(ElTag).text()).toBe(CHANGE_VALUE)
  })
})
