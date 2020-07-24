import {mount} from '@vue/test-utils'
import Tag from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Tag.vue', () => {
  test('render text & class', () => {
    const instance = mount(Tag, {
      slots: {
        default: AXIOM
      },
    })
    expect(instance.text()).toEqual(AXIOM)

    const vm = instance.vm;

    expect(vm.$el.classList.contains('el-tag')).toEqual(true);
    expect(vm.$el.classList.contains('el-tag__close')).toEqual(false);
    expect(vm.$el.classList.contains('is-hit')).toEqual(false);
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false);
  })

  test('type', () => {
    const instance = mount(Tag, {
      props: {
        type: 'primary'
      },
    })
    const vm = instance.vm;
    expect(vm.$el.classList.contains('el-tag--primary')).toEqual(true);
  })

  test('hit', () => {
    const instance = mount(Tag, {
      props: {
        hit: true
      },
    })
    const vm = instance.vm;
    expect(vm.$el.classList.contains('is-hit')).toEqual(true);
  })

  test('closeable', () => {
    const instance = mount(Tag, {
      props: {
        closable: true,
      },
    })
    const closeBtn = instance.find('.el-tag .el-tag__close');
    expect(closeBtn.exists()).toBe(true);
  })

  test('closeTransition', () => {
    const instance = mount(Tag, {
      props: {
        closeTransition: true,
      },
    })
    const vm = instance.vm;
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false);
  })

  test('color', () => {
    const instance = mount(Tag, {
      props: {
        color: 'rgb(0, 0, 0)',
      },
    })
    const vm = instance.vm;
    expect(vm.$el.style.backgroundColor).toEqual('rgb(0, 0, 0)');
  })

  test('theme', () => {
    const instance = mount(Tag, {
      props: {
        effect: 'dark',
      },
    })
    const vm = instance.vm;
    const el = vm.$el;
    expect(el.className.indexOf('el-tag--dark') > -1).toEqual(true);
    expect(el.className.indexOf('el-tag--light') > -1).toEqual(false);
    expect(el.className.indexOf('el-tag--plain') > -1).toEqual(false);
  })
})