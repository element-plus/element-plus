import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Avatar from '../src/index.vue'
import { IMAGE_SUCCESS, IMAGE_FAIL } from '../../test-utils/mock'

beforeAll(() => {
  Object.defineProperty(global.Image.prototype, 'src', {
    set(src) {
      const event = new Event(
        src === IMAGE_FAIL ? 'error' : 'load',
      )
      nextTick(() => this.dispatchEvent(event))
    },
  })
})

describe('Avatar.vue', () => {
  test('render test', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.find('.el-avatar').exists()).toBe(true)
  })

  test('size is number', () => {
    const wrapper = mount(Avatar, {
      props: { size: 50 },
    })
    expect(wrapper.attributes('style')).toContain('height: 50px')
  })

  test('size is string', () => {
    const wrapper = mount(Avatar, {
      props: { size: 'small' },
    })
    expect(wrapper.classes()).toContain('el-avatar--small')
  })

  test('shape', () => {
    const wrapper = mount(Avatar, {
      props: { size: 'small', shape: 'square' },
    })
    expect(wrapper.classes()).toContain('el-avatar--square')
  })

  test('icon avatar', () => {
    const wrapper = mount(Avatar, {
      props: { icon: 'el-icon-user-solid' },
    })
    expect(wrapper.classes()).toContain('el-avatar--icon')
    expect(wrapper.find('i').classes()).toContain('el-icon-user-solid')
  })

  test('image avatar', () => {
    const wrapper = mount(Avatar, {
      props: { src: IMAGE_SUCCESS },
    })
    expect(wrapper.find('img').exists()).toBe(true)
  })

  test('image fallback', async () => {
    const wrapper = mount(Avatar, {
      props: { src: IMAGE_FAIL },
      slots: { default: 'fallback' },
    })
    await nextTick()
    expect(wrapper.emitted('error')).toBeDefined()
    await nextTick()
    expect(wrapper.text()).toBe('fallback')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  test('image fit', () => {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
    for (const fit of fits) {
      const wrapper = mount(Avatar, {
        props: { fit, src: IMAGE_SUCCESS },
      })
      expect(wrapper.find('img').attributes('style')).toContain(`object-fit: ${fit};`)
    }
  })
})


// import { createTest, createVue, destroyVM, wait } from '../util';
// import Avatar from 'packages/avatar';
// import { IMAGE_SUCCESS, IMAGE_FAIL } from '../mocks/uri';

// describe('Avatar', () => {
//   let vm;
//   afterEach(() => {
//     destroyVM(vm);
//   });

//   it('create', () => {
//     vm = createTest(Avatar);
//     expect(vm.$el).to.exist;
//   });

//   it('size is number', () => {
//     vm = createVue({
//       template: `
//         <el-avatar :size="50">
//         </el-avatar>
//       `
//     }, true);
//     const avatarElm = vm.$el;
//     expect(avatarElm.style.height).to.equal('50px');
//   });

//   it('size is string', () => {
//     vm = createVue({
//       template: `
//         <el-avatar size="small">
//           user
//         </el-avatar>
//       `
//     }, true);
//     const avatarElm = vm.$el;
//     expect(avatarElm.classList.contains('el-avatar--small')).to.be.true;
//   });

//   it('shape', () => {
//     vm = createVue({
//       template: `
//         <el-avatar size="small" shape="square">
//           user
//         </el-avatar>
//       `
//     }, true);
//     const avatarElm = vm.$el;
//     expect(avatarElm.classList.contains('el-avatar--square')).to.be.true;
//   });

//   it('icon avatar', () => {
//     vm = createVue({
//       template: `
//         <el-avatar icon="el-icon-user-solid">
//         </el-avatar>
//       `
//     }, true);
//     const avatarElm = vm.$el;
//     const iconELm = avatarElm.children[0];
//     expect(avatarElm.classList.contains('el-avatar--icon')).to.be.true;
//     expect(iconELm.classList.contains('el-icon-user-solid')).to.be.true;
//   });

//   it('image avatar', () => {
//     vm = createVue({
//       template: `
//         <el-avatar src="${IMAGE_SUCCESS}"></el-avatar>
//       `
//     }, true);
//     const imgElm = vm.$el.children[0];
//     expect(imgElm.tagName.toUpperCase()).to.equal('IMG');
//     expect(imgElm.src).to.equal(IMAGE_SUCCESS);
//   });

//   it('image fallback', async() => {
//     vm = createVue({
//       template: `
//         <el-avatar src="${IMAGE_FAIL}" @error="errorHandler">
//           fallback
//         </el-avatar>
//       `,
//       methods: {
//         errorHandler() {
//           return true;
//         }
//       }
//     }, true);
//     await wait();
//     const avatarElm = vm.$el;
//     expect(avatarElm.textContent.trim()).to.equal('fallback');
//   });

//   it('image fit', async() => {
//     vm = createVue({
//       template: `
//         <div>
//           <el-avatar :src="url"></el-avatar>
//           <el-avatar :src="url" v-for="fit in fits" :fit="fit" :key="fit"></el-avatar>
//         </div>

//       `,
//       data() {
//         return {
//           fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
//           url: IMAGE_SUCCESS
//         };
//       }
//     }, true);
//     await wait();
//     const containerElm = vm.$el;
//     expect(containerElm.children[0].children[0].style.objectFit).to.equal('cover');
//     expect(containerElm.children[1].children[0].style.objectFit).to.equal('fill');
//     expect(containerElm.children[2].children[0].style.objectFit).to.equal('contain');
//     expect(containerElm.children[3].children[0].style.objectFit).to.equal('cover');
//     expect(containerElm.children[4].children[0].style.objectFit).to.equal('none');
//     expect(containerElm.children[5].children[0].style.objectFit).to.equal('scale-down');
//   });
// });

