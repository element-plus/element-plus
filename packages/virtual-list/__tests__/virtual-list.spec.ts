import { nextTick } from 'vue'
import makeMount from '@element-plus/test-utils/make-mount'
import makeScroll from '@element-plus/test-utils/make-scroll'
import { rAF } from '@element-plus/test-utils/tick'
import VirtualList from '../src/index.vue'
const containerSelector = '.el-vl__item-container'
const viewportSelector = '.el-vl__viewport'

const AXIOM = 'Rem is the best girl'
const mount = makeMount(VirtualList, {
  props: {
    windowSize: 300,
    itemSize: 30,
    data: Array
      .from({ length: 100 })
      .map((_, idx) => ({
        id: idx,
      })),
  },
  slots: {
    default: () => AXIOM,
  },
})

describe('VirtualList.vue', () => {
  test('render test', async () => {
    const wrapper = mount()
    await nextTick()
    expect(wrapper.text()).toContain(AXIOM)
    expect(
      wrapper
        .find(containerSelector)
        .attributes('data-direction'),
    ).toBe('v')
    expect(
      wrapper
        .find(containerSelector)
        .attributes('style'),
    ).toContain(
      'transform: translateY(0px)',
    )

    await wrapper.setProps({
      direction: 'h',
    })

    expect(
      wrapper
        .find(containerSelector)
        .attributes('data-direction'),
    ).toBe('h')
    expect(
      wrapper
        .find(containerSelector)
        .attributes('style'),
    ).toContain(
      'transform: translateX(0px)',
    )

  })

  test('should render with cache', () => {
    const wrapper = mount({
      props: {
        poolSize: 9,
      },
    })

    // rendering item should be 9 + (9 / 3) * 2
    expect(wrapper.findAll('.el-vl__item')).toHaveLength(15)
  })

  test('should handle scroll event', async () => {
    const wrapper = mount()
    await nextTick()

    await makeScroll(
      wrapper.find(viewportSelector).element,
      'scrollTop',
      90,
    )
    await rAF()

    expect(
      wrapper
        .find(containerSelector)
        .attributes('style'),
    ).toContain(
      'transform: translateY(0px)',
    )

    await makeScroll(
      wrapper.find(viewportSelector).element,
      'scrollTop',
      300,
    )

    await rAF()

    // when scroll, the scroll is calculated with formula
    // ((scrollTop / itemSize) - cache) * itemSize
    // in this case:
    // (300 / 30) - cache (20(poolSize) / 3 = 6) * itemSize(30)
    // 120
    expect(
      wrapper
        .find(containerSelector)
        .attributes('style'),
    ).toContain(
      'transform: translateY(120px)',
    )

    await nextTick()

    await wrapper.setProps({
      direction: 'h',
    })

    expect(
      wrapper
        .find(containerSelector)
        .attributes('style'),
    ).toContain(
      'transform: translateX(120px)',
    )
  })

  test('should scroll to selected index', async () => {
    const wrapper = mount()
    await nextTick();
    (wrapper.vm as any).scrollTo(10)

    await rAF()
    expect((wrapper.vm as any).window[0]).toEqual({
      id: 4, // 10 - 6(cache size)
    });

    (wrapper.vm as any).scrollTo(10, 'center')

    await nextTick()
    await rAF()

    expect((wrapper.vm as any).window[0]).toEqual({
      id: 0,
    });

    (wrapper.vm as any).scrollTo(20, 'tail')

    await nextTick()
    await rAF()
    expect((wrapper.vm as any).window[0]).toEqual({
      id: 5,
    })
  })

})
