/**
 * @deprecated Use `useId` `useIdInjection` instead
 * Generate random number in range [0, 1000]
 * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
 */
export const generateId = (): number => Math.floor(Math.random() * 10000)

/**
 * @deprecated
 * Generating a random int in range (0, max - 1)
 * @param max {number}
 */
export const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max))
