import { mount } from '@vue/test-utils'
import Descriptions from '../src/index.vue'
import DescriptionsItem from '../src/description-item'
import { nextTick } from 'vue'

const _mount = (template: string, data?: () => void, methods?: any) =>
  mount({
    components: {
      'el-descriptions': Descriptions,
      'el-descriptions-item': DescriptionsItem,
    },
    template,
    data,
    methods,
  })

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = _mount(`
      <el-descriptions title="title" extra="extra">
        <el-descriptions-item v-for="item in 4"></el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('.el-descriptions__title').text()).toEqual('title')
    expect(wrapper.find('.el-descriptions__extra').text()).toEqual('extra')
    expect(wrapper.findAll('.el-descriptions__label').length).toEqual(4)
  })

  test('should render border props', () => {
    const wrapper = _mount(`
      <el-descriptions border>
        <el-descriptions-item v-for="item in 3" :label="item">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('table').classes()).toContain('is-bordered')
  })

  test('should render align props', () => {
    const wrapper = _mount(`
      <el-descriptions border>
        <el-descriptions-item v-for="item in 3" :label="item" align="right" label-align="center">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('.el-descriptions__label').classes()).toContain('is-center')
    expect(wrapper.find('.el-descriptions__content').classes()).toContain('is-right')
  })

  test('should render width props', () => {
    const wrapper = _mount(`
      <el-descriptions border>
        <el-descriptions-item v-for="item in 3" :label="item" width="50px" min-width="60px">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('.el-descriptions__label').attributes('style')).toContain('width: 50px; min-width: 60px;')
    expect(wrapper.find('.el-descriptions__content').attributes('style')).toContain('width: 50px; min-width: 60px;')
  })

  test('should render class props', () => {
    const wrapper = _mount(`
      <el-descriptions border>
        <el-descriptions-item v-for="item in 3" :label="item" class-name="class-name" label-class-name="label-class-name">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('.el-descriptions__label').classes()).toContain('label-class-name')
    expect(wrapper.find('.el-descriptions__content').classes()).toContain('class-name')
  })

  test('should render width props', () => {
    const wrapper = _mount(`
      <el-descriptions border>
        <el-descriptions-item v-for="item in 3" :label="item" width="50px" min-width="60px">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('.el-descriptions__label').attributes('style')).toContain('width: 50px; min-width: 60px;')
    expect(wrapper.find('.el-descriptions__content').attributes('style')).toContain('width: 50px; min-width: 60px;')
  })

  test('should render column props', async () => {
    const wrapper = _mount(`
      <el-descriptions :column="5" :border="border">
        <el-descriptions-item v-for="item in 10" :label="item">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `, () => {
      return {
        border: false,
      }
    })

    expect(wrapper.find('tr').element.children.length).toEqual(5)
    wrapper.vm.border = true
    await nextTick()
    expect(wrapper.find('tr').element.children.length).toEqual(10)
  })

  test('should render direction props', async () => {
    const wrapper = _mount(`
      <el-descriptions :column="5" :direction="direction" border>
        <el-descriptions-item v-for="item in 10" :label="item">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `, () => {
      return {
        direction: 'horizontal',
      }
    })

    expect(wrapper.find('tr').element.children.length).toEqual(10)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(wrapper.findAll('tr')[0].element.children[1].innerHTML)
    wrapper.vm.direction = 'vertical'
    await nextTick()
    expect(wrapper.find('tr').element.children.length).toEqual(5)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(wrapper.findAll('tr')[1].element.children[0].innerHTML)
  })

  test('should render title slots', async () => {
    const wrapper = _mount(`
      <el-descriptions>
        <template #title>title</template>
        <el-descriptions-item v-for="item in 10" :label="item">{{ item }}</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.find('.el-descriptions__title').text()).toEqual('title')
  })

  test('should render span props', async () => {
    const wrapper = _mount(`
      <el-descriptions :column="3">
        <el-descriptions-item label="1">1</el-descriptions-item>
        <el-descriptions-item label="2" :span="2">2</el-descriptions-item>
        <el-descriptions-item label="3">3</el-descriptions-item>
        <el-descriptions-item label="4">4</el-descriptions-item>
      </el-descriptions>
    `)

    expect(wrapper.findAll('td')[1].element.getAttribute('colSpan')).toEqual('2')
    expect(wrapper.findAll('td')[3].element.getAttribute('colSpan')).toEqual('2')
  })

  test('re-rendered when slots is updated', async () => {
    const CHANGE_VALUE = 'company'
    const wrapper = _mount(`
      <el-descriptions v-for="(remark,index) in remarks" :key="index" :title="remark">
        <el-descriptions-item label="remark">
          <el-tag size="small">{{remark}}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <button @click="onClick">click</button>
    `, () => {
      return {
        remarks: ['school', 'hospital'],
      }
    }, {
      onClick() {
        this.remarks[0] = CHANGE_VALUE
      },
    })
    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.find('el-tag').text()).toBe(CHANGE_VALUE)
  })
})
