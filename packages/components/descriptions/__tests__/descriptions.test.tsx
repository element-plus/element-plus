import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import GTag from '@element-plus/components/tag'
import GDescriptions from '../src/description.vue'
import GDescriptionsItem from '../src/description-item'

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <GDescriptions title="title" extra="extra">
        {Array.from({ length: 4 }).map((_, index) => (
          <GDescriptionsItem label={String(index)} />
        ))}
      </GDescriptions>
    ))

    expect(wrapper.find('.g-descriptions__title').text()).toEqual('title')
    expect(wrapper.find('.g-descriptions__extra').text()).toEqual('extra')
    expect(wrapper.findAll('.g-descriptions__label').length).toEqual(4)
    expect(wrapper.findAll('.g-descriptions__content').length).toEqual(4)
  })

  test('render empty label', () => {
    const wrapper = mount(() => (
      <GDescriptions>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem />
        ))}
      </GDescriptions>
    ))

    expect(wrapper.findAll('.g-descriptions__label').length).toEqual(0)
    expect(wrapper.findAll('.g-descriptions__content').length).toEqual(3)
  })

  test('should render border props', () => {
    const wrapper = mount(() => (
      <GDescriptions border>
        <GDescriptionsItem />
      </GDescriptions>
    ))

    expect(wrapper.find('table').classes()).toContain('is-bordered')
  })

  test('should render align props', () => {
    const wrapper = mount(() => (
      <GDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem align="right" labelAlign="center" />
        ))}
      </GDescriptions>
    ))

    expect(wrapper.find('.g-descriptions__label').classes()).toContain(
      'is-center'
    )
    expect(wrapper.find('.g-descriptions__content').classes()).toContain(
      'is-right'
    )
  })

  test('should render width props', () => {
    const wrapper = mount(() => (
      <GDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem width="50px" min-width="60px" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.find('.g-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
    expect(
      wrapper.find('.g-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
  })

  test('should render class props', () => {
    const wrapper = mount(() => (
      <GDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem
            class-name="class-name"
            label-class-name="label-class-name"
          />
        ))}
      </GDescriptions>
    ))

    expect(wrapper.find('.g-descriptions__label').classes()).toContain(
      'label-class-name'
    )
    expect(wrapper.find('.g-descriptions__content').classes()).toContain(
      'class-name'
    )
  })

  test('should render column props', async () => {
    const border = ref(false)

    const wrapper = mount(() => (
      <GDescriptions column={5} border={border.value}>
        {Array.from({ length: 10 }).map(() => (
          <GDescriptionsItem />
        ))}
      </GDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(5)

    border.value = true

    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(10)
  })

  test('should render direction props', async () => {
    const direction = ref<'horizontal' | 'vertical'>('horizontal')

    const wrapper = mount(() => (
      <GDescriptions column={5} direction={direction.value} border>
        {Array.from({ length: 10 }).map((item) => (
          <GDescriptionsItem label={String(item)}>
            {String(item)}
          </GDescriptionsItem>
        ))}
      </GDescriptions>
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
      <GDescriptions
        v-slots={{
          title: () => 'title',
          default: () =>
            Array.from({ length: 10 }).map(() => <GDescriptionsItem />),
        }}
      ></GDescriptions>
    ))

    expect(wrapper.find('.g-descriptions__title').text()).toEqual('title')
  })

  test('should render span props', async () => {
    const wrapper = mount(() => (
      <GDescriptions>
        <GDescriptionsItem label="1">1</GDescriptionsItem>
        <GDescriptionsItem label="2" span={2}>
          2
        </GDescriptionsItem>
        <GDescriptionsItem label="3">3</GDescriptionsItem>
        <GDescriptionsItem label="4">4</GDescriptionsItem>
      </GDescriptions>
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
          <GDescriptions key={index} title={remark}>
            <GDescriptionsItem label={remark}>
              <GTag size="small">{remark}</GTag>
            </GDescriptionsItem>
          </GDescriptions>
        ))}
        <button onClick={onClick}>click</button>
      </>
    ))

    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.findComponent(GTag).text()).toBe(CHANGE_VALUE)
  })

  test('should render labelWidth prop of DescriptionsItem', () => {
    const wrapper = mount(() => (
      <GDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem label="测试标签" labelWidth="150px" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.find('.g-descriptions__label').attributes('style')
    ).toContain('width: 150px')
  })

  test('should render labelWidth prop of Descriptions', () => {
    const wrapper = mount(() => (
      <GDescriptions label-width="150px" border>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem label="测试标签" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.find('.g-descriptions__label').attributes('style')
    ).toContain('width: 150px')
  })

  test('should render labelWidth prop of Descriptions and DescriptionsItem with higher priority', () => {
    const wrapper = mount(() => (
      <GDescriptions label-width="100px" border>
        <GDescriptionsItem label="测试标签" />
        {Array.from({ length: 2 }).map(() => (
          <GDescriptionsItem label="测试标签" label-width="150px" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.findAll('.g-descriptions__label')[0].attributes('style')
    ).toContain('width: 100px')
    expect(
      wrapper.findAll('.g-descriptions__label')[1].attributes('style')
    ).toContain('width: 150px')
  })

  test('should render labelWidth prop of DescriptionsItem with no border', () => {
    const wrapper = mount(() => (
      <GDescriptions>
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem label="测试标签" labelWidth="150px" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.find('.g-descriptions__label').attributes('style')
    ).toContain('width: 150px')
  })

  test('should render labelWidth prop of Descriptions with no border', () => {
    const wrapper = mount(() => (
      <GDescriptions label-width="150px">
        {Array.from({ length: 3 }).map(() => (
          <GDescriptionsItem label="测试标签" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.find('.g-descriptions__label').attributes('style')
    ).toContain('width: 150px')
  })

  test('should render labelWidth prop of Descriptions and DescriptionsItem with higher priority with no border', () => {
    const wrapper = mount(() => (
      <GDescriptions label-width="100px">
        <GDescriptionsItem label="测试标签" />
        {Array.from({ length: 2 }).map(() => (
          <GDescriptionsItem label="测试标签" label-width="150px" />
        ))}
      </GDescriptions>
    ))

    expect(
      wrapper.findAll('.g-descriptions__label')[0].attributes('style')
    ).toContain('width: 100px')
    expect(
      wrapper.findAll('.g-descriptions__label')[1].attributes('style')
    ).toContain('width: 150px')
  })

  test('render customize functional components', () => {
    const CustomComponent = () => {
      return <GDescriptionsItem label="label">123</GDescriptionsItem>
    }
    const wrapper = mount(() => (
      <GDescriptions title="title" extra="extra">
        <CustomComponent />
        <CustomComponent />
        <GDescriptionsItem label="label">123</GDescriptionsItem>
      </GDescriptions>
    ))

    expect(wrapper.find('.g-descriptions__title').text()).toEqual('title')
    expect(wrapper.find('.g-descriptions__extra').text()).toEqual('extra')
    expect(wrapper.findAll('.g-descriptions__label').length).toEqual(3)
    expect(wrapper.findAll('.g-descriptions__content').length).toEqual(3)
  })
})
