/* eslint-disable @typescript-eslint/ban-types */

import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { expectTypeOf } from 'expect-type'
import { buildProp, definePropType, mutable, keysOf, buildProps } from '../..'
import type { propKey } from '../..'

import type { PropType, ExtractPropTypes } from 'vue'

describe('buildProp', () => {
  it('Only type', () => {
    expectTypeOf(
      buildProp({
        type: definePropType<'a' | 'b'>(String),
      })
    ).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b'>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Only values', () => {
    expectTypeOf(
      buildProp({
        values: [1, 2, 3, 4],
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<1 | 2 | 3 | 4>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type and values', () => {
    expectTypeOf(
      buildProp({
        type: definePropType<number[]>(Array),
        values: [1, 2, 3, 4],
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<1 | 2 | 3 | 4 | number[]>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Values and validator', () => {
    expectTypeOf(
      buildProp({
        values: ['a', 'b', 'c'],
        validator: (val: unknown): val is number => typeof val === 'number',
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<number | 'a' | 'b' | 'c'>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Values and required', () => {
    expectTypeOf(
      buildProp({
        values: ['a', 'b', 'c'],
        required: true,
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b' | 'c'>
      readonly required: true
      readonly default?: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Value and default', () => {
    expectTypeOf(
      buildProp({
        values: ['a', 'b', 'c'],
        required: false,
        default: 'b',
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b' | 'c'>
      readonly required: false
      readonly default: 'b'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type and Array default value', () => {
    expectTypeOf(
      buildProp({
        type: definePropType<string[]>(Array),
        default: () => mutable(['a', 'b'] as const),
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<string[]>
      readonly required: false
      readonly default: ['a', 'b']
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type and Object default value', () => {
    interface Options {
      key: string
    }

    expectTypeOf(
      buildProp({
        type: definePropType<Options>(Object),
        default: () => mutable({ key: 'value' } as const),
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<Options>
      readonly required: false
      readonly default: { key: 'value' }
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type, validator and Object default value', () => {
    interface Options {
      key: string
    }
    expectTypeOf(
      buildProp({
        type: definePropType<Options>(Object),
        default: () => ({ key: 'value' }),
        validator: (val: unknown): val is string => true,
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<string | Options>
      readonly required: false
      readonly default: { key: string }
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type, validator, required', () => {
    expectTypeOf(
      buildProp({
        type: definePropType<'a' | 'b' | 'c'>(String),
        required: true,
        validator: (val: unknown): val is number => true,
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<number | 'a' | 'b' | 'c'>
      readonly required: true
      readonly default?: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Normal type', () => {
    expectTypeOf(
      buildProp({
        type: String,
      })
    ).toEqualTypeOf<{
      readonly type: PropType<string>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Normal types', () => {
    expectTypeOf(buildProp({ type: [String, Number, Boolean] })).toEqualTypeOf<{
      readonly type: PropType<string | number | boolean>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Normal type and values', () => {
    expectTypeOf(
      buildProp({
        type: String,
        values: ['1', '2', '3'],
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<'1' | '2' | '3'>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Required and validator', () => {
    expectTypeOf(
      buildProp({
        required: true,
        validator: (val: unknown): val is string => true,
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<string>
      readonly required: true
      readonly default?: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Required and validator', () => {
    expectTypeOf(
      buildProp({
        values: keysOf({ a: 'a', b: 'b' }),
        default: 'a',
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b'>
      readonly required: false
      readonly default: 'a'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type and default value', () => {
    expectTypeOf(
      buildProp({
        type: definePropType<{ key: 'a' | 'b' | 'c' } | undefined>(Object),
        default: () => mutable({ key: 'a' } as const),
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<{ key: 'a' | 'b' | 'c' } | undefined>
      readonly required: false
      readonly default: { key: 'a' }
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('Type and default value', () => {
    expectTypeOf(
      buildProp({
        type: [String, Number],
        default: '',
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<string | number>
      readonly required: false
      readonly default: ''
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('default value is empty object', () => {
    expectTypeOf(
      buildProp({
        type: Object,
        default: () => mutable({} as const),
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<Record<string, any>>
      readonly required: false
      readonly default: {}
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })

  it('extract', () => {
    const props = {
      key1: buildProp({
        type: String,
        required: true,
      }),
      key2: buildProp({
        type: [String, Number],
        required: true,
      }),
    } as const
    type Extracted = ExtractPropTypes<typeof props>

    expectTypeOf<Extracted>().toEqualTypeOf<{
      readonly key1: string
      readonly key2: string | number
    }>()
  })
})

describe('buildProps', () => {
  it('test buildProps', () => {
    const propsCommon = buildProps({
      type: {
        type: String,
        default: 'hello',
      },
    } as const)

    const props = buildProps({
      ...propsCommon,
      key1: {
        type: definePropType<'a' | 'b'>(String),
      },
      key2: {
        values: [1, 2, 3, 4],
      },
      key3: {
        values: [1, 2, 3, 4],
        default: 2,
      },
      key4: {
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
      } as const),

      // default generator
      key13: {
        type: [String, Number, Function],
        default: () => '123' as const,
      } as const,
      key14: {
        type: Function,
        default: () => '123' as const,
      } as const,
      key15: {
        type: Function,
        default: () => () => '123' as const,
      } as const,
      key16: {
        type: String,
        default: () => '123' as const,
      } as const,
    } as const)

    expectTypeOf(props.type).toEqualTypeOf<{
      readonly type: PropType<string>
      readonly required: false
      readonly default: 'hello'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key1).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b'>
      readonly required: false
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
      readonly default: undefined
    }>()

    expectTypeOf(props.key2).toEqualTypeOf<{
      readonly type: PropType<1 | 2 | 3 | 4>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key3).toEqualTypeOf<{
      readonly type: PropType<1 | 2 | 3 | 4>
      readonly required: false
      readonly default: 2
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key4).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b'>
      readonly required: false
      readonly default: 'a'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key5).toEqualTypeOf<BooleanConstructor>()
    expectTypeOf(props.key6).toEqualTypeOf<StringConstructor>()
    expectTypeOf(props.key7).toEqualTypeOf<null>()
    expectTypeOf(props.key8).toEqualTypeOf<ObjectConstructor>()
    expectTypeOf(props.key9).toEqualTypeOf<DateConstructor>()
    expectTypeOf(props.key10).toEqualTypeOf<SetConstructor>()
    expectTypeOf(props.key11).toEqualTypeOf<undefined>()

    expectTypeOf(props.key12).toEqualTypeOf<{
      readonly type: PropType<string>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key13).toEqualTypeOf<{
      readonly type: PropType<string | number | Function>
      readonly required: false
      readonly default: '123'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key14).toEqualTypeOf<{
      readonly type: PropType<Function>
      readonly required: false
      readonly default: () => '123'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key15).toEqualTypeOf<{
      readonly type: PropType<Function>
      readonly required: false
      readonly default: () => () => '123'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()

    expectTypeOf(props.key16).toEqualTypeOf<{
      readonly type: PropType<string>
      readonly required: false
      readonly default: '123'
      readonly validator: ((val: unknown) => boolean) | undefined
      [propKey]: true
    }>()
  })
})

describe('runtime', () => {
  it('default value', () => {
    const warnHandler = jest.fn()

    const Foo = defineComponent({
      props: buildProps({
        bar: { type: Boolean },
        baz: { values: ['a', 'b', 'c'] },
        qux: { values: ['a', 'b', 'c'], required: true },
        qux2: { values: ['a', 'b', 'c'], required: true },
      } as const),
      template: `{{ $props }}`,
    })
    const props = mount(Foo as any, {
      props: {
        baz: undefined,
        qux2: undefined,
      },
      global: {
        config: {
          warnHandler,
        },
      },
    }).props()

    expect(props.bar).toBe(false)
    expect(props.baz).toBe(undefined)

    expect(warnHandler.mock.calls[0][0]).toBe('Missing required prop: "qux"')
    expect(warnHandler.mock.calls[1][0]).toBe(
      'Invalid prop: validation failed for prop "qux2". Expected one of ["a", "b", "c"], got value undefined.'
    )
  })
})
