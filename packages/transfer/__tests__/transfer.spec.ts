import { mount } from '@vue/test-utils'
import Transfer from '../src/index.vue'

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
    const wrapper = mount({
      template: `
        <transfer :data="testData" />
      `,
      components: { Transfer },
      created() {
        this.testData = getTestData()
      },
    })
    expect(wrapper.findComponent({ name: 'ElTransfer' })).toBeTruthy()
  })

  it('default target list', () => {
    const wrapper = mount({
      template: `
        <transfer :data="testData" v-model="value" />
      `,
      components: { Transfer },
      created() {
        this.testData = getTestData()
      },
      data() {
        return {
          value: [1, 4],
        }
      },
    })
    const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
    expect(ElTransfer.vm.sourceData.length).toBe(13)
  })

  it('filterable', done => {
    const wrapper = mount({
      template: `
        <transfer
          :data="testData"
          filterable
          v-model="value"
          :filter-method="method" />
      `,
      components: { Transfer },
      created() {
        this.testData = getTestData()
      },
      data() {
        return {
          value: [],
        }
      },
      methods: {
        method(query, option) {
          return option.key === Number(query)
        },
      },
    })
    const leftList: any = wrapper.findComponent({ name: 'ElTransferPanel' })
    leftList.vm.query = '1'
    setTimeout(() => {
      expect(leftList.vm.filteredData.length).toBe(1)
      done()
    }, 50)
  })

  it('transfer', done => {
    const wrapper = mount({
      template: `
        <transfer
          :data="testData"
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          v-model="value"
        />
      `,
      components: { Transfer },
      created() {
        this.testData = getTestData()
      },
      data() {
        return {
          value: [1, 4],
        }
      },
    })
    const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })

    setTimeout(() => {
      ElTransfer.vm.addToLeft()
      setTimeout(() => {
        expect(ElTransfer.vm.sourceData.length).toBe(14)
        ElTransfer.vm.addToRight()
        setTimeout(() => {
          expect(ElTransfer.vm.sourceData.length).toBe(12)
          done()
        }, 50)
      }, 50)
    }, 50)
  })

  it('customize', () => {
    const wrapper = mount({
      template: `
        <transfer
          :data="testData"
          v-model="value"
          :titles="titles"
          :render-content="renderFunc"
          :format="format"
        />
      `,
      components: { Transfer },
      created() {
        this.testData = getTestData()
      },
      data() {
        return {
          value: [2],
          titles: ['表1', '表2'],
          format: { noChecked: 'no', hasChecked: 'has' },
        }
      },
      methods: {
        renderFunc(h ,option) {
          return h('span', `${option.key} - ${option.label}`)
        },
      },
    })

    const label = wrapper.find('.el-transfer-panel__header .el-checkbox__label')
    expect(label.text().includes('表1')).toBeTruthy()
    expect(wrapper.find('.el-transfer-panel__list .el-checkbox__label span').text()).toBe('1 - 备选项 1')
    expect(label.find('span').text()).toBe('no')
  })

  it('check', () => {
    const wrapper = mount({
      template: `
        <transfer
          :data="testData"
          v-model="value"
        />
      `,
      components: { Transfer },
      created() {
        this.testData = getTestData()
      },
      data() {
        return {
          value: [],
        }
      },
    })

    const leftList: any = wrapper.findComponent({ name: 'ElTransferPanel' })
    leftList.vm.handleAllCheckedChange({ target: { checked: true } })
    expect(leftList.vm.checked.length).toBe(12)
  })

  describe('target order', () => {
    it('original(default)', done => {
      const wrapper = mount({
        template: `
          <transfer
            :data="testData"
            v-model="value"
            :left-default-checked="[2, 3]"
          />
        `,
        components: { Transfer },
        created() {
          this.testData = getTestData()
        },
        data() {
          return {
            value: [1, 4],
          }
        },
      })

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      setTimeout(() => {
        ElTransfer.vm.addToRight()
        setTimeout(() => {
          const targetItems = [].slice.call(wrapper.findAll('.el-transfer__buttons + .el-transfer-panel .el-transfer-panel__body .el-checkbox__label span'))
          expect(targetItems.map(item => item.text())).toStrictEqual(['备选项 1', '备选项 2', '备选项 3', '备选项 4'])
          done()
        }, 50)
      }, 50)
    })

    it('push', done => {
      const wrapper = mount({
        template: `
          <transfer
            :data="testData"
            v-model="value"
            :left-default-checked="[2, 3]"
            target-order="push"
          />
        `,
        components: { Transfer },
        created() {
          this.testData = getTestData()
        },
        data() {
          return {
            value: [1, 4],
          }
        },
      })

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      setTimeout(() => {
        ElTransfer.vm.addToRight()
        setTimeout(() => {
          const targetItems = [].slice.call(wrapper.findAll('.el-transfer__buttons + .el-transfer-panel .el-transfer-panel__body .el-checkbox__label span'))
          expect(targetItems.map(item => item.text())).toStrictEqual(['备选项 1', '备选项 4', '备选项 2', '备选项 3'])
          done()
        }, 50)
      }, 50)
    })

    it('unshift', done => {
      const wrapper = mount({
        template: `
          <transfer
            :data="testData"
            v-model="value"
            :left-default-checked="[2, 3]"
            target-order="unshift"
          />
        `,
        components: { Transfer },
        created() {
          this.testData = getTestData()
        },
        data() {
          return {
            value: [1, 4],
          }
        },
      })

      const ElTransfer: any = wrapper.findComponent({ name: 'ElTransfer' })
      setTimeout(() => {
        ElTransfer.vm.addToRight()
        setTimeout(() => {
          const targetItems = [].slice.call(wrapper.findAll('.el-transfer__buttons + .el-transfer-panel .el-transfer-panel__body .el-checkbox__label span'))
          expect(targetItems.map(item => item.text())).toStrictEqual(['备选项 2', '备选项 3', '备选项 1', '备选项 4'])
          done()
        }, 50)
      }, 50)
    })
  })
})
