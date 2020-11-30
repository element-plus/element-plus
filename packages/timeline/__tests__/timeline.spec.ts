import { mount } from '@vue/test-utils'
import TimeLine from '../src/index.vue'
import TimeLineItem from '../src/item.vue'
import { defineComponent } from 'vue'

const Component = defineComponent({
  components: {
    'el-timeline': TimeLine,
    'el-timeline-item': TimeLineItem,
  },
  props: [],
  data() {
    return {
      activities: [{
        content: 'Step 1: xxxxxx',
        timestamp: '2018-04-11',
      }, {
        content: 'Step 2: xxxxxx',
        timestamp: '2018-04-13',
      }, {
        content: 'Step 3: xxxxxx',
        timestamp: '2018-04-15',
      }],
    }
  },
  template: `
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  `,
})

describe('TimeLine.vue', () => {
  test('create', () => {
    const wrapper = mount(Component)
    const vm = wrapper.vm

    const contentWrappers = wrapper.findAll('.el-timeline-item__content')
    contentWrappers.forEach((content, index) => {
      expect(content.text()).toEqual(vm.activities[index].content)
    })

    const timestampWrappers = wrapper.findAll('.el-timeline-item__timestamp')
    timestampWrappers.forEach((timestamp, index) => {
      expect(timestamp.text()).toEqual(vm.activities[index].timestamp)
    })
  })

  test('placement', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :placement="activity.placement">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      `,
      data() {
        return {
          activities: [{
            content: 'Step 1: xxxxxx',
            timestamp: '2018-04-11',
            placement: 'top',
          }, {
            content: 'Step 2: xxxxxx',
            timestamp: '2018-04-13',
          }, {
            content: 'Step 3: xxxxxx',
            timestamp: '2018-04-15',
          }],
        }
      },
    })
    const timestampWrapper = wrapper.findAll('.el-timeline-item__timestamp')[0]
    expect(timestampWrapper.classes('is-top')).toBe(true)
  })

  test('hide-timestamp', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :hide-timestamp="activity.hideTimestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      `,
      data() {
        return {
          activities: [{
            content: 'Step 1: xxxxxx',
            timestamp: '2018-04-11',
            hideTimestamp: true,
          }, {
            content: 'Step 2: xxxxxx',
            timestamp: '2018-04-13',
          }, {
            content: 'Step 3: xxxxxx',
            timestamp: '2018-04-15',
          }],
        }
      },
    })
    const timestampWrappers = wrapper.findAll('.el-timeline-item__timestamp')
    expect(timestampWrappers.length).toEqual(2)
  })

  test('color', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            timestamp="2018-04-11"
            color="#f00">
            Step 1: xxxxxx
          </el-timeline-item>
        </el-timeline>
      `,
    })
    const vm = wrapper.vm
    const nodeElm = vm.$el.querySelector('.el-timeline-item__node')
    expect(nodeElm.style.backgroundColor).toEqual('rgb(255, 0, 0)')
  })

  test('type', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            timestamp="2018-04-11"
            type="primary">
            Step 1: xxxxxx
          </el-timeline-item>
        </el-timeline>
      `,
    })
    const nodeWrapper = wrapper.find('.el-timeline-item__node')
    expect(nodeWrapper.classes('el-timeline-item__node--primary')).toBe(true)
  })

  test('size', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            timestamp="2018-04-11"
            type="large">
            Step 1: xxxxxx
          </el-timeline-item>
        </el-timeline>
      `,
    })
    const nodeWrapper = wrapper.find('.el-timeline-item__node')
    expect(nodeWrapper.classes('el-timeline-item__node--large')).toBe(true)
  })

  test('icon', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            timestamp="2018-04-11"
            icon="el-icon-more">
            Step 1: xxxxxx
          </el-timeline-item>
        </el-timeline>
      `,
    })
    const nodeWrapper = wrapper.find('.el-timeline-item__icon')
    expect(nodeWrapper.classes('el-icon-more')).toBe(true)
  })

  test('dot', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <el-timeline>
          <el-timeline-item
            timestamp="2018-04-11"
          >
            <template #dot>
              dot
            </template>
          </el-timeline-item>
        </el-timeline>
      `,
    })

    const dotWrapper = wrapper.find('.el-timeline-item__dot')
    expect(dotWrapper.text()).toEqual('dot')
    expect(wrapper.find('.el-timeline-item__node').exists()).toBe(false)
  })
})
