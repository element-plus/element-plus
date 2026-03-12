import { markRaw, nextTick, ref } from 'vue'
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

    const contentWrappers = wrapper.findAll('.g-timeline-item__content')

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

    const timestampWrapper = wrapper.findAll('.g-timeline-item__timestamp')[0]

    expect(timestampWrapper.classes('is-top')).toBe(true)
  })

  describe('mode', () => {
    test('mode-start', () => {
      const wrapper = mount(() => (
        <TimeLine>
          {activities.map((activity, index) => (
            <TimeLineItem key={index}>{activity.content}</TimeLineItem>
          ))}
        </TimeLine>
      ))

      const timeline = wrapper.find('.g-timeline')
      const timelineItems = wrapper.findAll('.g-timeline-item')

      expect(timeline.classes('is-start')).toBe(true)
      timelineItems.forEach((item) => {
        expect(item.classes('is-start')).toBe(true)
      })
    })

    test('mode-alternate', () => {
      const wrapper = mount(() => (
        <TimeLine mode="alternate">
          {activities.map((activity, index) => (
            <TimeLineItem key={index}>{activity.content}</TimeLineItem>
          ))}
        </TimeLine>
      ))

      const timeline = wrapper.find('.g-timeline')
      const timelineItems = wrapper.findAll('.g-timeline-item')

      expect(timeline.classes('is-alternate')).toBe(true)
      timelineItems.forEach((item) => {
        expect(item.classes('is-alternate')).toBe(true)
      })
    })

    test('mode-alternate-reverse', () => {
      const wrapper = mount(() => (
        <TimeLine mode="alternate-reverse">
          {activities.map((activity, index) => (
            <TimeLineItem key={index}>{activity.content}</TimeLineItem>
          ))}
        </TimeLine>
      ))

      const timeline = wrapper.find('.g-timeline')
      const timelineItems = wrapper.findAll('.g-timeline-item')

      expect(timeline.classes('is-alternate-reverse')).toBe(true)
      timelineItems.forEach((item) => {
        expect(item.classes('is-alternate-reverse')).toBe(true)
      })
    })

    test('mode-end', () => {
      const wrapper = mount(() => (
        <TimeLine mode="end">
          {activities.map((activity, index) => (
            <TimeLineItem key={index}>{activity.content}</TimeLineItem>
          ))}
        </TimeLine>
      ))

      const timeline = wrapper.find('.g-timeline')
      const timelineItems = wrapper.findAll('.g-timeline-item')

      expect(timeline.classes('is-end')).toBe(true)
      timelineItems.forEach((item) => {
        expect(item.classes('is-end')).toBe(true)
      })
    })
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

    const timestampWrappers = wrapper.findAll('.g-timeline-item__timestamp')

    expect(timestampWrappers.length).toEqual(2)
  })

  test('color', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem color="#f00" />
      </TimeLine>
    ))

    const vm = wrapper.vm
    const nodeElm = vm.$el.querySelector('.g-timeline-item__node')

    expect(nodeElm.style.backgroundColor).toEqual('rgb(255, 0, 0)')
  })

  test('type', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem type="primary" />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.g-timeline-item__node')

    expect(nodeWrapper.classes('g-timeline-item__node--primary')).toBe(true)
  })

  test('size', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem size="large" />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.g-timeline-item__node')

    expect(nodeWrapper.classes('g-timeline-item__node--large')).toBe(true)
  })

  test('icon', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem icon={iconMoreFilled} />
      </TimeLine>
    ))

    expect(wrapper.find('.g-timeline-item__icon').exists()).toBe(true)
    expect(wrapper.findComponent(MoreFilled).exists()).toBe(true)
  })

  test('hollow', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <TimeLineItem hollow />
      </TimeLine>
    ))

    const nodeWrapper = wrapper.find('.g-timeline-item__node')

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

    const dotWrapper = wrapper.find('.g-timeline-item__dot')

    expect(dotWrapper.text()).toEqual('dot')
    expect(wrapper.find('.g-timeline-item__node').exists()).toBe(false)
  })

  test('center', () => {
    const wrapper = mount(() => (
      <TimeLine>
        {activities.map((_, index) => (
          <TimeLineItem key={index} center={index === 1} />
        ))}
      </TimeLine>
    ))

    const timestampWrappers = wrapper.findAll('.g-timeline-item')

    expect(timestampWrappers[1].classes()).toContain('g-timeline-item__center')
  })

  test('The content that is not a timeline item in the sub-slot should be rendered', () => {
    const wrapper = mount(() => (
      <TimeLine>
        <div class="custom-content">Custom Content</div>
      </TimeLine>
    ))

    // It appears there's a problem with the DOM hierarchy structure being rendered by the test framework.
    expect(wrapper.element.innerHTML).toBe('Custom Content')
  })

  describe('reverse', () => {
    test('v-for children', async () => {
      const wrapper = mount({
        template: `
          <TimeLine :reverse="reverse">
            <TimeLineItem
              v-for="(item, index) in activities"
              :key="index"
            >
              {{ item.content }}
            </TimeLineItem>
          </TimeLine>
        `,
        components: {
          TimeLine,
          TimeLineItem,
        },
        data() {
          return {
            reverse: true,
            activities,
          }
        },
      })

      let firstTimelineItem = wrapper.find('.g-timeline-item__content')
      expect(firstTimelineItem.text()).toMatchInlineSnapshot(`"Step 3: xxxxxx"`)

      await wrapper.setData({ reverse: false })
      firstTimelineItem = wrapper.find('.g-timeline-item__content')
      expect(firstTimelineItem.text()).toMatchInlineSnapshot(`"Step 1: xxxxxx"`)
    })

    test('manual children', async () => {
      const reverse = ref(true)
      const wrapper = mount(() => (
        <TimeLine reverse={reverse.value}>
          <TimeLineItem>Step 1: xxxxxx</TimeLineItem>
          <TimeLineItem>Step 2: xxxxxx</TimeLineItem>
          <TimeLineItem>Step 3: xxxxxx</TimeLineItem>
        </TimeLine>
      ))

      let firstTimelineItem = wrapper.find('.g-timeline-item__content')
      expect(firstTimelineItem.text()).toMatchInlineSnapshot(`"Step 3: xxxxxx"`)

      reverse.value = false
      await nextTick()
      firstTimelineItem = wrapper.find('.g-timeline-item__content')
      expect(firstTimelineItem.text()).toMatchInlineSnapshot(`"Step 1: xxxxxx"`)
    })
  })
})
