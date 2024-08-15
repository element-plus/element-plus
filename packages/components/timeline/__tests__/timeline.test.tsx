import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { MoreFilled } from '@element-plus/icons-vue'
import TimeLine from '../src/timeline'
import TimeLineItem from '../src/timeline-item.vue'

import type { TimelineItemProps } from '../src/timeline-item'

const iconMoreFilled = markRaw(MoreFilled)

const activities: {
  content: string
  timestamp: string
  placement?: TimelineItemProps['placement']
  hideTimestamp?: boolean
}[] = [
  {
    content: 'Step 1: xxxxxx',
    timestamp: '2018-04-11',
  },
  {
    content: 'Step 2: xxxxxx',
    timestamp: '2018-04-13',
  },
  {
    content: 'Step 3: xxxxxx',
    timestamp: '2018-04-15',
  },
]

describe('TimeLine.vue', () => {
  test('create', () => {
    const wrapper = mount(() => (
      <TimeLine>
        {activities.map((activity, index) => (
          <TimeLineItem key={index}>{activity.content}</TimeLineItem>
        ))}
      </TimeLine>
    ))

    const contentWrappers = wrapper.findAll('.el-timeline-item__content')

    contentWrappers.forEach((content, index) => {
      expect(content.text()).toEqual(activities[index].content)
    })
  })

  test('placement', () => {
    activities[0].placement = 'top'

    const wrapper = mount(() => (
      <TimeLine>
        {activities.map((activity, index) => (
          <TimeLineItem key={index} placement={activity.placement} />
        ))}
      </TimeLine>
    ))

    const timestampWrapper = wrapper.findAll('.el-timeline-item__timestamp')[0]

    expect(timestampWrapper.classes('is-top')).toBe(true)
  })

  test('hide-timestamp', () => {
    activities[0].hideTimestamp = true

    const wrapper = mount(() => (
      <TimeLine>
        {activities.map((activity, index) => (
          <TimeLineItem key={index} hide-timestamp={activity.hideTimestamp} />
        ))}
      </TimeLine>
    ))

    const timestampWrappers = wrapper.findAll('.el-timeline-item__timestamp')

    expect(timestampWrappers.length).toEqual(2)
  })

  test('color', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem color="#f00" />
      </TimeLine>
    ))

    const vm = wrapper.vm
    const nodeElm = vm.$el.querySelector('.el-timeline-item__node')

    expect(nodeElm.style.backgroundColor).toEqual('rgb(255, 0, 0)')
  })

  test('type', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem type="primary" />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.el-timeline-item__node')

    expect(nodeWrapper.classes('el-timeline-item__node--primary')).toBe(true)
  })

  test('size', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem size="large" />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.el-timeline-item__node')

    expect(nodeWrapper.classes('el-timeline-item__node--large')).toBe(true)
  })

  test('icon', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem icon={iconMoreFilled} />
      </TimeLine>
    ))

    expect(wrapper.find('.el-timeline-item__icon').exists()).toBe(true)
    expect(wrapper.findComponent(MoreFilled).exists()).toBe(true)
  })

  test('hollow', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem hollow />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.el-timeline-item__node')

    expect(nodeWrapper.classes('is-hollow')).toBe(true)
  })

  test('dot', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem
          v-slots={{
            dot: () => 'dot',
          }}
        />
      </TimeLine>
    ))

    const dotWrapper = wrapper.find('.el-timeline-item__dot')

    expect(dotWrapper.text()).toEqual('dot')
    expect(wrapper.find('.el-timeline-item__node').exists()).toBe(false)
  })

  test('center', () => {
    const wrapper = mount(() => (
      <TimeLine>
        {activities.map((_, index) => (
          <TimeLineItem key={index} center={index === 1} />
        ))}
      </TimeLine>
    ))

    const timestampWrappers = wrapper.findAll('.el-timeline-item')

    expect(timestampWrappers[1].classes()).toContain('el-timeline-item__center')
  })
})
