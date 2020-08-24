import { mount } from '@vue/test-utils'
import Pagination from '../src/index'

describe('Pagination.vue', () => {
  it('layout', () => {
    const wrapper = mount(Pagination, {
      props: {
        layout: 'prev, pager, next',
      },
    })
    expect(wrapper.find('button.btn-prev').exists()).toBe(true)
    expect(wrapper.find('ul.el-pager').exists()).toBe(true)
    expect(wrapper.find('button.btn-next').exists()).toBe(true)
    expect(wrapper.find('.el-pagination__jump').exists()).toBe(false)
    expect(wrapper.find('.el-pagination__rightwrapper').exists()).toBe(false)
    expect(wrapper.find('.el-pagination__total').exists()).toBe(false)
  })

  it('slot', () => {
    const TestComponent = {
      template: `
        <el-pagination
          layout="slot, prev, pager, next"
          :page-size="25"
          :total="100">
          <span class="slot-test">slot test</span>
        </el-pagination>
      `,
    }
    const wrapper = mount(TestComponent)
    expect(wrapper.find('.slot-test').exists()).toBe(true)
  })

  it('small', () => {
    const wrapper = mount(Pagination, {
      props: {
        small: true,
      },
    })
    expect(wrapper.vm.$el.classList.contains('el-pagination--small')).toBe(true)
  })

  it('pageSize', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        total: 100,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(4)
  })

  it('pageSize: NaN', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: NaN,
        total: 100,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(7)
  })

  it('pageCount', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        pagerCount: 4,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(4)
  })

  it('pagerCount', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        total: 1000,
        pagerCount: 21,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(21)
  })

  it('will work without total & page-count', (done) => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        currentPage: 2,
      },
    })
    wrapper.find('.btn-prev').trigger('click')
    setTimeout(() => {
      expect(wrapper.vm.internalCurrentPage).toEqual(1)
      wrapper.find('.btn-prev').trigger('click')
      expect(wrapper.vm.internalCurrentPage).toEqual(1)
      done()
    }, 20)
  })

  it('currentPage', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 20,
        total: 200,
        currentPage: 3,
      },
    })
    expect(wrapper.find('li.number.active').text()).toEqual('3')
  })

  it('currentPage: NaN', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 20,
        total: 200,
        currentPage: NaN,
      },
    })
    expect(wrapper.find('li.number.active').text()).toEqual('1')
    expect(wrapper.vm.$el.querySelectorAll('li.number').length).toBe(7)
  })

  it('layout is empty', () => {
    const wrapper = mount(Pagination, {
      props: {
        layout: '',
      },
    })
    expect(wrapper.vm.$el.textContent).toEqual('')
  })
})

describe('click pager', () => {
  it('click ul', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.find('.el-pager').trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(1)
  })

  it('click li', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.findAll('.el-pager li.number')[1].trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(2)
  })

  it('click next icon-more', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.find('.el-pager .more').trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(6)
  })

  it('click prev icon-more', done => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.find('.btn-quicknext.more').trigger('click')
    setTimeout(() => {
      expect(wrapper.find('.btn-quickprev.more').exists()).toBe(true)
      wrapper.find('.btn-quickprev.more').trigger('click')
      expect(wrapper.vm.internalCurrentPage).toEqual(1)
      done()
    }, 50)
  })

  it('click last page', done => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    const nodes = wrapper.findAll('li.number')
    nodes[nodes.length - 1].trigger('click')
    setTimeout(() => {
      expect(wrapper.find('.btn-quickprev.more').exists()).toBe(true)
      expect(wrapper.find('.btn-quicknext.more').exists()).toBe(false)
      done()
    }, 50)
  })
})

