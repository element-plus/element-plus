import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Anchor from '../src/anchor.vue'
import AnchorLink from '../src/anchor-link.vue'

let id = 0

const getHash = () => `#anchor-link-${id++}`

describe('Anchor.vue', () => {
  test('snapshot', async () => {
    const hash = getHash()
    const wrapper = mount({
      props: ['direction', 'type'],
      render() {
        return (
          <Anchor direction={this.direction} type={this.type}>
            <AnchorLink href={hash}>{hash}</AnchorLink>
          </Anchor>
        )
      },
    })

    wrapper.setProps({
      direction: 'vertical',
      type: 'default',
    })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.setProps({
      direction: 'horizontal',
      type: 'default',
    })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.setProps({
      direction: 'vertical',
      type: 'underline',
    })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.setProps({
      direction: 'horizontal',
      type: 'underline',
    })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('scroll after click', async () => {
    const hash = getHash()
    const wrapper = mount(
      () => (
        <>
          <div id={hash.replace('#', '')}>hash</div>
          <Anchor>
            <AnchorLink href={hash}>{hash}</AnchorLink>
          </Anchor>
        </>
      ),
      {
        attachTo: 'body',
      }
    )
    const scrollSpy = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => undefined)
    await nextTick()
    wrapper.find(`a[href="${hash}"]`).trigger('click')
    await nextTick()
    expect(scrollSpy).toHaveBeenCalledTimes(1)
  })

  test('scrollTo method', async () => {
    const hash = getHash()
    const anchorRef = ref<InstanceType<typeof Anchor> | null>(null)
    mount(
      () => (
        <>
          <div id={hash.replace('#', '')}>hash</div>
          <Anchor ref={anchorRef}>
            <AnchorLink href={hash}>{hash}</AnchorLink>
          </Anchor>
        </>
      ),
      {
        attachTo: 'body',
      }
    )
    const scrollSpy = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => undefined)
    await nextTick()
    anchorRef.value?.scrollTo(hash)
    await nextTick()
    expect(scrollSpy).toHaveBeenCalledTimes(1)
  })

  test('change event', async () => {
    const hash1 = getHash()
    const hash2 = getHash()
    const wrapper = mount(() => (
      <Anchor>
        <AnchorLink href={hash1}>{hash1}</AnchorLink>
        <AnchorLink href={hash2}>{hash2}</AnchorLink>
      </Anchor>
    ))
    wrapper.find(`a[href="${hash1}"]`).trigger('click')
    wrapper.find(`a[href="${hash2}"]`).trigger('click')
    expect(wrapper.findComponent(Anchor).emitted('change')).toEqual([
      [hash1],
      [hash2],
    ])
  })

  test('click event', async () => {
    const hash = getHash()
    const wrapper = mount(() => (
      <Anchor>
        <AnchorLink href={hash}>{hash}</AnchorLink>
      </Anchor>
    ))
    wrapper.find(`a[href="${hash}"]`).trigger('click')

    expect(
      (wrapper.findComponent(Anchor).emitted('click') as any)[0][0]
    ).toBeInstanceOf(MouseEvent)
    expect((wrapper.findComponent(Anchor).emitted('click') as any)[0][1]).toBe(
      hash
    )
  })
})
