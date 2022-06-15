import { nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ElTag from '@element-plus/components/tag'
import Descriptions from '../src/index.vue'
import DescriptionsItem from '../src/description-item'

describe('Descriptions.vue', () => {
  test('render test', () => {
    const title = 'title'
    const extra = 'extra'
    const wrapper = mount(
      <Descriptions title={title} extra={extra}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <DescriptionsItem key={idx} />
        ))}
      </Descriptions>
    )

    expect(wrapper.find('.el-descriptions__title').text()).toEqual(title)
    expect(wrapper.find('.el-descriptions__extra').text()).toEqual(extra)
    expect(wrapper.findAll('.el-descriptions__label').length).toEqual(4)
  })

  test('should render border props', () => {
    const wrapper = mount(
      <Descriptions border>
        {Array.from({ length: 3 }).map((_, idx) => (
          <DescriptionsItem key={idx} />
        ))}
      </Descriptions>
    )

    expect(wrapper.find('table').classes()).toContain('is-bordered')
  })

  test('should render align props', () => {
    const wrapper = mount(
      <Descriptions border>
        {Array.from({ length: 3 }).map((_, idx) => (
          <DescriptionsItem
            key={idx}
            label={idx as unknown as string}
            align="right"
            label-align="center"
          />
        ))}
      </Descriptions>
    )

    expect(wrapper.find('.el-descriptions__label').classes()).toContain(
      'is-center'
    )
    expect(wrapper.find('.el-descriptions__content').classes()).toContain(
      'is-right'
    )
  })

  test('should render width props', () => {
    const wrapper = mount(
      <Descriptions border>
        {Array.from({ length: 3 }).map((_, idx) => (
          <DescriptionsItem
            key={idx}
            label={idx as unknown as string}
            width="50px"
            min-width="60px"
          />
        ))}
      </Descriptions>
    )

    expect(
      wrapper.find('.el-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
    expect(
      wrapper.find('.el-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
  })

  test('should render class props', () => {
    const wrapper = mount(
      <Descriptions border>
        {Array.from({ length: 3 }).map((_, idx) => (
          <DescriptionsItem
            key={idx}
            label={idx as unknown as string}
            class-name="class-name"
            label-class-name="label-class-name"
          />
        ))}
      </Descriptions>
    )

    expect(wrapper.find('.el-descriptions__label').classes()).toContain(
      'label-class-name'
    )
    expect(wrapper.find('.el-descriptions__content').classes()).toContain(
      'class-name'
    )
  })

  test('should render width props', () => {
    const wrapper = mount(
      <Descriptions border>
        {Array.from({ length: 3 }).map((_, idx) => (
          <DescriptionsItem
            key={idx}
            label={idx as unknown as string}
            width="50px"
            min-width="60px"
          />
        ))}
      </Descriptions>
    )

    expect(
      wrapper.find('.el-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
    expect(
      wrapper.find('.el-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
  })

  test('should render column props', async () => {
    const border = ref(false)
    const wrapper = mount(() => (
      <Descriptions column={5} border={border.value}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <DescriptionsItem key={idx} label={idx as unknown as string}>
            {idx}
          </DescriptionsItem>
        ))}
      </Descriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(5)
    border.value = true
    await nextTick()
    expect(wrapper.find('tr').element.children.length).toEqual(10)
  })

  test('should render direction props', async () => {
    const direction = ref('horizontal')
    const wrapper = mount(() => (
      <Descriptions column={5} direction={direction.value} border>
        {Array.from({ length: 10 }).map((_, idx) => (
          <DescriptionsItem key={idx} label={idx as unknown as string}>
            {idx}
          </DescriptionsItem>
        ))}
      </Descriptions>
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
    const wrapper = mount(
      <Descriptions v-slots={{ title: () => 'title' }}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <DescriptionsItem key={idx} label={idx as unknown as string}>
            {idx}
          </DescriptionsItem>
        ))}
      </Descriptions>
    )

    expect(wrapper.find('.el-descriptions__title').text()).toEqual('title')
  })

  test('should render span props', async () => {
    const wrapper = mount(
      <Descriptions column={3}>
        <DescriptionsItem label="1">1</DescriptionsItem>
        <DescriptionsItem label="2" span={2}>
          2
        </DescriptionsItem>
        <DescriptionsItem label="3">3</DescriptionsItem>
        <DescriptionsItem label="4">4</DescriptionsItem>
      </Descriptions>
    )

    expect(wrapper.findAll('td')[1].element.getAttribute('colSpan')).toEqual(
      '2'
    )
    expect(wrapper.findAll('td')[3].element.getAttribute('colSpan')).toEqual(
      '2'
    )
  })

  test('re-rendered when slots is updated', async () => {
    const CHANGE_VALUE = 'company'
    const state = reactive({
      remarks: ['school', 'hospital'],
    })
    const onClick = () => {
      state.remarks[0] = CHANGE_VALUE
    }
    const wrapper = mount(() => (
      <template>
        {state.remarks.map((remark, idx) => {
          return (
            <Descriptions key={idx} title={remark}>
              <DescriptionsItem label="remark">
                <ElTag size="small">{remark}</ElTag>
              </DescriptionsItem>
              <DescriptionsItem label="1">1</DescriptionsItem>
            </Descriptions>
          )
        })}
        <button onClick={onClick}>click</button>
      </template>
    ))

    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.findComponent(ElTag).text()).toBe(CHANGE_VALUE)
  })
})
