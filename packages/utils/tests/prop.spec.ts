import { expectTypeOf } from 'expect-type'
import { buildProp, definePropType, mutable, keyOf } from '../props'

import type { PropType } from 'vue'

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
      readonly default: never
      readonly validator: ((val: unknown) => boolean) | undefined
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
      readonly default: () => ['a', 'b']
      readonly validator: ((val: unknown) => boolean) | undefined
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
      readonly default: () => { key: 'value' }
      readonly validator: ((val: unknown) => boolean) | undefined
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
      readonly default: () => { key: string }
      readonly validator: ((val: unknown) => boolean) | undefined
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
      readonly default: never
      readonly validator: ((val: unknown) => boolean) | undefined
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
    }>()
  })

  it('Normal types', () => {
    expectTypeOf(buildProp({ type: [String, Number, Boolean] })).toEqualTypeOf<{
      readonly type: PropType<string | number | boolean>
      readonly required: false
      readonly default: undefined
      readonly validator: ((val: unknown) => boolean) | undefined
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
      readonly default: never
      readonly validator: ((val: unknown) => boolean) | undefined
    }>()
  })

  it('Required and validator', () => {
    expectTypeOf(
      buildProp({
        values: keyOf({ a: 'a', b: 'b' }),
        default: 'a',
      } as const)
    ).toEqualTypeOf<{
      readonly type: PropType<'a' | 'b'>
      readonly required: false
      readonly default: 'a'
      readonly validator: ((val: unknown) => boolean) | undefined
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
      readonly default: () => { key: 'a' }
      readonly validator: ((val: unknown) => boolean) | undefined
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
    }>()
  })
})
