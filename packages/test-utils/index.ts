<<<<<<< HEAD
export * from './mock'
export { default as defineGetter } from './define-getter'
export { default as makeScroll } from './make-scroll'
export { default as sleep } from './sleep'
=======
export const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))
>>>>>>> feat(input): mainly complete input component & add more input tests
