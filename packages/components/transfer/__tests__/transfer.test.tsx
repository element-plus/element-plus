import { nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Transfer from '../src/transfer.vue'
import type { TransferDataItem, renderContent } from '../src/transfer'

describe('Transfer', () => {
  const getTestData = () => {
    const data = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return data
  }

  it('create', () => {
    const wrapper = mount(() => <Transfer data={getTestData()} />)
    expect(wrapper.findComponent({ name: 'ElTransfer' })).toBeTruthy()
  })

  it('default target list', () => {
    const value = ref([1, 4])
    const wrapper = mount(() => (
      <Transfer v-model={value.value} data={getTestData()} />
    ))
    const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
    expect(ElTransfer.vm.sourceData.length).toBe(13)
  })

  it('filterable', async () => {
    const value = ref([])
    const method = (query: string, option: TransferDataItem) => {
      return option.key === Number(query)
    }

    const wrapper = mount(() => (
      <Transfer
        v-model={value.value}
        filterable
        data={getTestData()}
        filter-method={method}
      />
    ))
    const leftList: any = wrapper.findComponent({ name: 'ElTransferPanel' })
    leftList.vm.query = '1'
    await leftList.find('input').setValue('1')
    expect(leftList.vm.filteredData.length).toBe(1)
  })

  it('transfer', async () => {
    const value = ref([1, 4])
    const wrapper = mount(() => (
      <Transfer
        v-model={value.value}
        leftDefaultChecked={[2, 3]}
        rightDefaultChecked={[1]}
        data={getTestData()}
      />
    ))

    const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })

    ElTransfer.vm.addToLeft()
    await nextTick()
    expect(ElTransfer.vm.sourceData.length).toBe(14)
    ElTransfer.vm.addToRight()
    await nextTick()
    expect(ElTransfer.vm.sourceData.length).toBe(12)
  })

  it('customize', () => {
    const state = reactive({
      value: [2],
      titles: ['表1', '表2'],
      format: { noChecked: 'no', hasChecked: 'has' },
    })
    const renderFunc: renderContent = (_h, option) => (
      <span>{`${option.key} - ${option.label}`}</span>
    )
    const wrapper = mount(() => (
      <Transfer
        v-model={state.value}
        titles={state.titles as [string, string]}
        format={state.format}
        renderContent={renderFunc}
        data={getTestData()}
      />
    ))

    const label = wrapper.find('.el-transfer-panel__header .el-checkbox__label')
    expect(label.text().includes('表1')).toBeTruthy()
    expect(
      wrapper.find('.el-transfer-panel__list .el-checkbox__label span').text()
    ).toBe('1 - 备选项 1')
    expect(label.find('span').text()).toBe('no')
  })

  it('check', () => {
    const value = ref([])
    const wrapper = mount(() => (
      <Transfer v-model={value.value} data={getTestData()} />
    ))

    const leftList: any = wrapper.findComponent({ name: 'ElTransferPanel' })
    leftList.vm.handleAllCheckedChange({ target: { checked: true } })
    expect(leftList.vm.checked.length).toBe(12)
  })

  describe('target order', () => {
    it('original(default)', async () => {
      const value = ref([1, 4])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          leftDefaultChecked={[2, 3]}
          data={getTestData()}
        />
      ))

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      ElTransfer.vm.addToRight()
      await nextTick()
      const targetItems = wrapper.findAll(
        '.el-transfer__buttons + .el-transfer-panel .el-transfer-panel__body .el-checkbox__label span'
      )
      expect(targetItems.map((item) => item.text())).toStrictEqual([
        '备选项 1',
        '备选项 2',
        '备选项 3',
        '备选项 4',
      ])
    })

    it('push', async () => {
      const value = ref([1, 4])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          leftDefaultChecked={[2, 3]}
          target-order="push"
          data={getTestData()}
        />
      ))

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      ElTransfer.vm.addToRight()
      await nextTick()
      const targetItems = wrapper.findAll(
        '.el-transfer__buttons + .el-transfer-panel .el-transfer-panel__body .el-checkbox__label span'
      )
      expect(targetItems.map((item) => item.text())).toStrictEqual([
        '备选项 1',
        '备选项 4',
        '备选项 2',
        '备选项 3',
      ])
    })

    it('unshift', async () => {
      const value = ref([1, 4])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          leftDefaultChecked={[2, 3]}
          target-order="unshift"
          data={getTestData()}
        />
      ))

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      ElTransfer.vm.addToRight()
      await nextTick()
      const targetItems = wrapper.findAll(
        '.el-transfer__buttons + .el-transfer-panel .el-transfer-panel__body .el-checkbox__label span'
      )
      expect(targetItems.map((item) => item.text())).toStrictEqual([
        '备选项 2',
        '备选项 3',
        '备选项 1',
        '备选项 4',
      ])
    })
  })

  describe('validate clearQuery', () => {
    it('set query and clear query', async () => {
      const value = ref([])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          filterable={true}
          data={getTestData()}
        />
      ))

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      const app = ElTransfer.vm
      app.leftPanel.query = '11'
      app.rightPanel.query = '22'
      await nextTick()
      expect(app.leftPanel.query).toBe('11')
      expect(app.rightPanel.query).toBe('22')

      app.clearQuery('left')
      await nextTick()
      expect(app.leftPanel.query).toBeFalsy()

      app.clearQuery('right')
      await nextTick()
      expect(app.rightPanel.query).toBeFalsy()
    })
  })

  describe('render default slot', () => {
    it('single comment node', () => {
      const wrapper = mount(Transfer, {
        props: {
          data: getTestData(),
        },
        slots: {
          default: '<!--  -->',
        },
      })

      const leftPanel = wrapper.find('.el-transfer-panel')
      const labels = leftPanel.findAll(
        '.el-transfer-panel__body .el-checkbox__label'
      )

      expect(labels.map((l) => l.text())).toMatchInlineSnapshot(`
        [
          "备选项 1",
          "备选项 2",
          "备选项 3",
          "备选项 4",
          "备选项 5",
          "备选项 6",
          "备选项 7",
          "备选项 8",
          "备选项 9",
          "备选项 10",
          "备选项 11",
          "备选项 12",
          "备选项 13",
          "备选项 14",
          "备选项 15",
        ]
      `)
    })

    it('multiple comment nodes', () => {
      const wrapper = mount(Transfer, {
        props: {
          data: getTestData(),
        },
        slots: {
          default: `
<!--  -->
<!--  -->
`,
        },
      })

      const leftPanel = wrapper.find('.el-transfer-panel')
      const labels = leftPanel.findAll(
        '.el-transfer-panel__body .el-checkbox__label'
      )

      expect(labels.map((l) => l.text())).toMatchInlineSnapshot(`
        [
          "备选项 1",
          "备选项 2",
          "备选项 3",
          "备选项 4",
          "备选项 5",
          "备选项 6",
          "备选项 7",
          "备选项 8",
          "备选项 9",
          "备选项 10",
          "备选项 11",
          "备选项 12",
          "备选项 13",
          "备选项 14",
          "备选项 15",
        ]
      `)
    })

    it('contents with multiple comment nodes', () => {
      const wrapper = mount(Transfer, {
        props: {
          data: getTestData(),
        },
        slots: {
          default: `
<!--  -->
1
<!--  -->
2
`,
        },
      })

      const leftPanel = wrapper.find('.el-transfer-panel')
      const labels = leftPanel.findAll(
        '.el-transfer-panel__body .el-checkbox__label'
      )

      expect(labels.map((l) => l.text())).toMatchInlineSnapshot(`
        [
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
        ]
      `)
    })
  })

  describe('empty slots', () => {
    it('render left-empty and right-empty slots', () => {
      const wrapper = mount(() => (
        <Transfer
          data={[]}
          v-slots={{
            'left-empty': () => <span>No data</span>,
            'right-empty': () => <span>No data</span>,
          }}
        />
      ))

      const panels = wrapper.findAll('.el-transfer-panel__empty')
      expect(panels).toHaveLength(2)
      expect(panels[0].text()).toBe('No data')
      expect(panels[1].text()).toBe('No data')
    })

    it('render default empty content when slots not provided', () => {
      const wrapper = mount(() => <Transfer data={[]} />)

      const panels = wrapper.findAll('.el-transfer-panel__empty')
      expect(panels).toHaveLength(2)
      expect(panels[0].text()).toBe('No data')
      expect(panels[1].text()).toBe('No data')
    })

    it('show no match content when filtering', async () => {
      const wrapper = mount(() => (
        <Transfer
          data={getTestData()}
          filterable={true}
          v-slots={{
            'left-empty': () => <span>No data</span>,
          }}
        />
      ))

      const leftPanel: any = wrapper.findComponent({ name: 'ElTransferPanel' })
      leftPanel.vm.query = 'non-existing-data'
      await nextTick()

      const emptyContent = wrapper.find('.el-transfer-panel__empty')
      expect(emptyContent.exists()).toBe(true)
      expect(emptyContent.text()).toBe('No data')
    })
  })
})
