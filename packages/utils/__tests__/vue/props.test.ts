import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { expectTypeOf } from 'expect-type'
import { buildProp, buildProps, definePropType, keysOf } from '../..'

import type { PropType } from 'vue'

describe('buildProp', () => {
  test('single type', () => {
    expectTypeOf(buildProp(String)).toEqualTypeOf<StringConstructor>()

    expectTypeOf(buildProp({ type: String })).toEqualTypeOf<{
      type: StringConstructor
    }>()
  })

  test('multiple types', () => {
    expectTypeOf(buildProp([String, Number, Boolean])).toEqualTypeOf<
      (StringConstructor | NumberConstructor | BooleanConstructor)[]
    >()

    expectTypeOf(buildProp({ type: [String, Number, Boolean] })).toEqualTypeOf<{
      type: (StringConstructor | NumberConstructor | BooleanConstructor)[]
    }>()
  })

  test('required', () => {
    expectTypeOf(buildProp({ type: String, required: true })).toEqualTypeOf<{
      type: StringConstructor
      required: true
    }>()
  })

  test('values', () => {
    expectTypeOf(
      buildProp({ type: String, values: ['a', 'b'] })
    ).toEqualTypeOf<{
      type: PropType<'a' | 'b'>
    }>()

    expectTypeOf(buildProp({ type: Number, values: [1, 2] })).toEqualTypeOf<{
      type: PropType<1 | 2>
    }>()

    // @ts-expect-error
    buildProp({ type: String, values: [1] })
  })

  test('default', () => {
    expectTypeOf(buildProp({ type: String, default: 'a' })).toEqualTypeOf<{
      type: StringConstructor
      default: 'a'
    }>()

    // @ts-expect-error
    buildProp({ type: String, default: 1 })
    // @ts-expect-error
    buildProp({ type: String, values: ['a'], default: 'b' })
  })
})

describe('buildProps', () => {
  test('type checking', () => {
    buildProps({
      // @ts-expect-error
      foo: { type: String, values: [1] },
    })
    buildProps({
      // @ts-expect-error
      foo: { type: String, default: 1 },
    })
    buildProps({
      // @ts-expect-error
      foo: { type: String, values: ['a'], default: 'b' },
    })
  })

  test('return type', () => {
    const propsCommon = buildProps({
      key0: {
        type: String,
        default: 'hello',
      },
    })

    const props = buildProps({
      ...propsCommon,
      key1: {
        type: definePropType<'a' | 'b'>(String),
      },
      key2: {
        type: Number,
        values: [1, 2, 3, 4],
      },
      key3: {
        type: Number,
        values: [1, 2, 3, 4],
        default: 2,
      },
      key4: {
        type: String,
        values: keysOf({ a: 'a', b: 'b' }),
        default: 'a',
      },
      key5: Boolean,
      key6: String,
      key7: null,
      key8: Object,
      key9: Date,
      key10: Set,
      key11: undefined,
      // nested
      key12: buildProp({
        type: String,
      }),

      // default generator
      key13: {
        type: [String, Number, Function],
        default: () => '123',
      },
      key14: {
        type: Function,
        default: () => '123',
      },
      key15: {
        type: Function,
        default: () => () => '123',
      },
      key16: {
        type: String,
        default: () => '123',
      },
    })

    expectTypeOf(props.key0).toEqualTypeOf<{
      type: StringConstructor
      default: 'hello'
    }>()

    expectTypeOf(props.key1).toEqualTypeOf<{
      type: PropType<'a' | 'b'>
    }>()

    expectTypeOf(props.key2).toEqualTypeOf<{
      type: PropType<1 | 2 | 3 | 4>
    }>()

    expectTypeOf(props.key3).toEqualTypeOf<{
      type: PropType<1 | 2 | 3 | 4>
      default: 2
    }>()

    expectTypeOf(props.key4).toEqualTypeOf<{
      type: PropType<'a' | 'b'>
      default: 'a'
    }>()

    expectTypeOf(props.key5).toEqualTypeOf<BooleanConstructor>()
    expectTypeOf(props.key6).toEqualTypeOf<StringConstructor>()
    expectTypeOf(props.key7).toEqualTypeOf<null>()
    expectTypeOf(props.key8).toEqualTypeOf<ObjectConstructor>()
    expectTypeOf(props.key9).toEqualTypeOf<DateConstructor>()
    expectTypeOf(props.key10).toEqualTypeOf<SetConstructor>()
    expectTypeOf(props.key11).toEqualTypeOf<undefined>()

    expectTypeOf(props.key12).toEqualTypeOf<{
      type: StringConstructor
    }>()

    expectTypeOf(props.key13).toEqualTypeOf<{
      type: (StringConstructor | NumberConstructor | FunctionConstructor)[]
      default: () => '123'
    }>()

    expectTypeOf(props.key14).toEqualTypeOf<{
      type: FunctionConstructor
      default: () => '123'
    }>()

    expectTypeOf(props.key15).toEqualTypeOf<{
      type: FunctionConstructor
      default: () => () => '123'
    }>()

    expectTypeOf(props.key16).toEqualTypeOf<{
      type: StringConstructor
      default: () => '123'
    }>()
  })
})

describe('runtime', () => {
  test('validator', () => {
    const warnHandler = vi.fn()

    const Foo = defineComponent({
      props: buildProps({
        qux: { type: String, values: ['a', 'b', 'c'], required: true },
        qux2: { type: String, values: ['a', 'b', 'c'], required: true },
        qux3: { type: String, values: ['a', 'b', 'c'], required: true },
      }),
    })
    mount(Foo, {
      props: {
        qux2: undefined,
        qux3: 'd',
      },
      global: {
        config: {
          warnHandler,
        },
      },
    })

    expect(warnHandler.mock.calls[0][0]).toBe('Missing required prop: "qux"')
    expect(warnHandler.mock.calls[1][0]).toBe(
      'Invalid prop: type check failed for prop "qux2". Expected String with value "undefined", got Undefined '
    )
    expect(warnHandler.mock.calls[2][0]).toBe(
      'Invalid prop: validation failed for prop "qux3". Expected one of ["a", "b", "c"], got value "d".'
    )
  })
})
