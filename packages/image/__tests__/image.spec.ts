import { mount } from '@vue/test-utils'
import Image from '../src/index.vue'
import { nextTick } from 'vue'

import { IMAGE_SUCCESS, IMAGE_FAIL } from '../../test-utils/mock'

/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
export const wait = function(ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}


describe('Image.vue', () => {

  beforeAll(() => {
    Object.defineProperty(global.Image.prototype, 'src', {
      set(src) {
        const type = !src || src === IMAGE_FAIL ? 'error' : 'load'
        const event = new Event(type)
        nextTick(() => this.dispatchEvent(event))
      },
    })
  })

  // test('render test', () => {
  //   const wrapper = mount(Image)
  //   expect(wrapper.find('.el-image').exists()).toBe(true)
  // })

  // test('image load success test', async () => {
  //   const alt = 'this ia alt'
  //   const wrapper = mount(Image, {
  //     props: {
  //       src: IMAGE_SUCCESS,
  //       alt,
  //     },
  //   })
  //   await nextTick()
  //   expect(wrapper.find('.el-image__placeholder').exists()).toBe(true)
  //   await nextTick()
  //   expect(wrapper.find('.el-image__inner').exists()).toBe(true)
  //   expect(wrapper.find('img').exists()).toBe(true)
  //   expect(wrapper.find('.el-image__placeholder').exists()).toBe(false)
  //   expect(wrapper.find('.el-image__error').exists()).toBe(false)
  // })

  // test('image load error test', async () => {
  //   const wrapper = mount(Image, {
  //     props: {
  //       src: IMAGE_FAIL,
  //     },
  //   })

  //   await nextTick()
  //   expect(wrapper.emitted('error')).toBeDefined()
  //   await nextTick()
  //   expect(wrapper.find('.el-image__inner').exists()).toBe(false)
  //   expect(wrapper.find('img').exists()).toBe(false)
  //   expect(wrapper.find('.el-image__error').exists()).toBe(true)
  // })

  // test('imageStyle fit test', () => {
  //   const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  //   for (const fit of fits) {
  //     const wrapper = mount(Image, {
  //       props: { fit, src: IMAGE_SUCCESS },
  //     })
  //     expect(wrapper.find('img').attributes('style')).toContain(`object-fit: ${fit};`)
  //   }
  // })

  // test('preview classname test', () => {
  //   const wrapper = mount(Image, {
  //     props: {
  //       fit: 'cover',
  //       src: IMAGE_SUCCESS,
  //       previewSrcList: new Array(3).fill(IMAGE_SUCCESS),
  //     },
  //   })
  //   expect(wrapper.find('img').classes()).toContain('el-image__preview')
  // })


  // test('$attrs', async () => {
  //   const alt = 'this ia alt'
  //   const wrapper = mount(Image, {
  //     props: {
  //       src: IMAGE_SUCCESS,
  //       alt,
  //       referrerpolicy: 'origin'
  //     },
  //   })
  //   expect(wrapper.find('img').attributes('alt')).toBe(alt)
  //   expect(wrapper.find('img').attributes('referrerpolicy')).toBe('origin')
  // })

  // it('pass event listeners', async() => {
  //   let result = false
  //   const wrapper = mount(Image, {
  //     props: {
  //       src: IMAGE_SUCCESS,
  //       onClick: (e) => result = true
  //     },
  //   })
  //   const inner = wrapper.find('.el-image__inner').element as HTMLElement
  //   inner.click()
  //   expect(result).toBeTruthy()
  // })

  test('lazy update', async () => {
    const wrapper = mount({
      components: {
        'el-image': Image,
      },
      template: `
        <div ref="container" style="height: 200px; overflow: auto;">
          <el-image
            v-for="item in [0, 1, 2]"
            :key="item"
            :src="src"
            ref="image"
            style="display: block; height: 200px;"
            lazy></el-image>
        </div>
      `,
      data() {
        return {
          src: IMAGE_SUCCESS,
        }
      },
    })
    const vm = wrapper.vm
    // console.log(vm.$refs, '===<< vm')
    // const coreEl = vm.$el.querySelector('.el-image__inner')

    const { image, container } = vm.$refs
    console.log('===<< vm =====', image)
    // const [image1] = image
    // console.log(image1, '===<< vm =====', image2)

    // expect(coreEl.style.backgroundColor).toEqual('rgb(0, 255, 0)')
    // const coreWrapper = wrapper.find('.el-switch__core')
    // await coreWrapper.trigger('click')
    // expect(coreEl.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    // expect(vm.value).toEqual(false)
    // await coreWrapper.trigger('click')
    // expect(vm.value).toEqual(true)


  })

  // it('lazy load', async() => {

  //   const { image, wrapper } = vm.$refs;
  //   const [image1, image2] = image;

  //   await wait();
  //   expect(image1.loading).to.be.false;
  //   expect(image2.loading).to.be.true;
  //   wrapper.scrollTop = 10;

  //   await wait();
  //   expect(image2.loading).to.be.false;
  // });

})



//   it('lazy load', async() => {
//     vm = createVue({
//       template: `
//         <div ref="wrapper" style="height: 200px; overflow: auto;">
//           <el-image
//             v-for="item in 2"
//             :key="item"
//             :src="src"
//             ref="image"
//             style="display: block; height: 200px;"
//             lazy></el-image>
//         </div>
//       `,
//       data() {
//         return {
//           src
//         };
//       }
//     }, true);
//     const { image, wrapper } = vm.$refs;
//     const [image1, image2] = image;

//     await wait();
//     expect(image1.loading).to.be.false;
//     expect(image2.loading).to.be.true;
//     wrapper.scrollTop = 10;

//     await wait();
//     expect(image2.loading).to.be.false;
//   });



//   it('big image preview', async() => {
//     vm = createVue({
//       template: `
//         <el-image :src="src" :preview-src-list="srcList"></el-image>
//       `,
//       data() {
//         return {
//           src: src,
//           srcList: [src]
//         };
//       }
//     }, true);
//     await wait();
//     vm.$el.querySelector('.el-image__inner').click();
//     await wait();

//     expect(vm.$el.querySelector('.el-image-viewer__wrapper')).to.exist;
//     vm.$el.querySelector('.el-image-viewer__close').click();
//     await wait(1000);
//     expect(vm.$el.querySelector('.el-image-viewer__wrapper')).to.not.exist;
//   });
// });

