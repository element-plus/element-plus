import { watch } from 'vue'

type CheckOptions<T> = {
  key: keyof T
  values: unknown[]
  validator?: (value: T[keyof T]) => boolean
}
// type-based declaration prop cannot set values and validator directly, so we use a function to implement the validation logic
export const useValidator = <T extends Record<string, any>>(
  props: T,
  name: string,
  checkOptions: CheckOptions<T>[]
) => {
  checkOptions.forEach(({ key, values, validator }) => {
    watch(
      () => props[key],
      (value) => {
        if (values && !values.includes(value)) {
          console.warn(
            `[Element Plus][${name}] Invalid prop: validation failed for prop "${String(key)}".` +
              `Expected one of [${values.map((v) => `"${v}"`).join(', ')}], ` +
              `got value "${value}".`
          )
        }
        if (typeof validator === 'function' && !validator(value)) {
          console.warn(
            `[Element Plus][${name}] Invalid prop: custom validation failed for prop "${String(key)}".`
          )
        }
      },
      { immediate: true }
    )
  })
}
