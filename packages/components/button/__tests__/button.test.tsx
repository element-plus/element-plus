import { markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import { Loading, Search } from '@element-plus/icons-vue'

import Form from '@element-plus/components/form'
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'
import type { ComponentSize } from '@element-plus/constants'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)

    expect(wrapper.classes()).toContain('el-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(() => <Button icon={markRaw(Search)} />)

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('nativeType', () => {
    const wrapper = mount(() => <Button nativeType="submit" />)

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('loading', () => {
    const wrapper = mount(() => <Button loading />)

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })

  it('size', () => {
    const wrapper = mount(() => <Button size="large" />)

    expect(wrapper.classes()).toContain('el-button--large')
  })

  it('plain', () => {
    const wrapper = mount(() => <Button plain />)

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(() => <Button round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(() => <Button circle />)

    expect(wrapper.classes()).toContain('is-circle')
  })

  it('text', async () => {
    const bg = ref(false)

    const wrapper = mount(() => <Button text bg={bg.value} />)

    expect(wrapper.classes()).toContain('is-text')

    bg.value = true

    await nextTick()

    expect(wrapper.classes()).toContain('is-has-bg')
  })

  it('link', async () => {
    const wrapper = mount(() => <Button link />)

    expect(wrapper.classes()).toContain('is-link')
  })

  test('render text', () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('handle click inside', async () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => <span class="inner-slot"></span>,
        }}
      />
    ))

    wrapper.find('.inner-slot').trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => AXIOM,
        }}
        loading
      />
    ))

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(() => <Button disabled />)

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('loading icon', () => {
    const wrapper = mount(() => (
      <Button loadingIcon={markRaw(Search)} loading />
    ))

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('loading slot', () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <Button
            v-slots={{ loading: () => <span class="custom-loading">111</span> }}
            loading={true}
          >
            Loading
          </Button>
        ),
    })

    expect(wrapper.find('.custom-loading').exists()).toBeTruthy()
  })

  it('tag', () => {
    const link = 'https://github.com/element-plus/element-plus'
    const wrapper = mount(() => (
      // @ts-ignore
      <Button tag="a" href={link}>
        {AXIOM}
      </Button>
    ))

    expect(wrapper.text()).toEqual(AXIOM)
    expect(wrapper.element.nodeName).toBe('A')
    expect(wrapper.attributes('href')).toBe(link)
  })
})
describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <ButtonGroup>
            <Button type="primary">Prev</Button>
            <Button type="primary">Next</Button>
          </ButtonGroup>
        ),
    })
    expect(wrapper.classes()).toContain('el-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group reactive size', async () => {
    const size = ref<ComponentSize>('small')
    const wrapper = mount({
      setup: () => () =>
        (
          <ButtonGroup size={size.value}>
            <Button type="primary">Prev</Button>
            <Button type="primary">Next</Button>
          </ButtonGroup>
        ),
    })
    expect(wrapper.classes()).toContain('el-button-group')
    expect(
      wrapper.findAll('.el-button-group button.el-button--small').length
    ).toBe(2)

    size.value = 'large'
    await nextTick()

    expect(
      wrapper.findAll('.el-button-group button.el-button--large').length
    ).toBe(2)
  })

  it('button group type', async () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <ButtonGroup type="warning">
            <Button type="primary">Prev</Button>
            <Button>Next</Button>
          </ButtonGroup>
        ),
    })
    expect(wrapper.classes()).toContain('el-button-group')
    expect(
      wrapper.findAll('.el-button-group button.el-button--primary').length
    ).toBe(1)
    expect(
      wrapper.findAll('.el-button-group button.el-button--warning').length
    ).toBe(1)
  })

  it('add space in two Chinese characters', async () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => '中文',
        }}
        autoInsertSpace
      />
    ))

    expect(wrapper.find('.el-button span').text()).toBe('中文')
    expect(wrapper.find('.el-button span').classes()).toContain(
      'el-button__text--expand'
    )
  })

  it('add space between two Chinese characters even if there is whitespace at both ends', async () => {
    const wrapper = mount(() => (
      <Button autoInsertSpace>&nbsp;中文&nbsp;</Button>
    ))

    expect(wrapper.find('.el-button span').text()).toBe('中文')
    expect(wrapper.find('.el-button span').classes()).toContain(
      'el-button__text--expand'
    )
  })

  it('should use props of form', async () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <Form size="large" disabled>
            <Button
              v-slots={{
                default: () => AXIOM,
              }}
            />
          </Form>
        ),
    })
    const btn = wrapper.findComponent(Button)
    expect(btn.classes()).toContain('el-button--large')
    expect(btn.classes()).toContain('is-disabled')
    await btn.trigger('click')
    expect(btn.emitted('click')).toBeUndefined()
  })

  it('should use size of form-item', async () => {
    const wrapper = mount({
      setup: () => () =>
        (
          <Form size="large" disabled>
            <Form.FormItem size="small">
              <Button
                v-slots={{
                  default: () => AXIOM,
                }}
              />
            </Form.FormItem>
          </Form>
        ),
    })
    const btn = wrapper.findComponent(Button)
    expect(btn.classes()).toContain('el-button--small')
  })

  it('use custom tag disabled click not triggered', async () => {
    const isLoaing = ref(false)
    const isDisabled = ref(false)
    const wrapper = mount(() => (
      <div>
        <Button
          tag="div"
          loading={isLoaing.value}
          disabled={isDisabled.value}
        ></Button>
      </div>
    ))
    const btn = wrapper.findComponent(Button)
    isDisabled.value = true
    await nextTick()
    await btn.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
    isLoaing.value = true
    isDisabled.value = false
    await nextTick()
    await btn.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
    isLoaing.value = false
    isDisabled.value = false
    await nextTick()
    await btn.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
