/**
 * Due to browser rendering and calculation precision loss issues,
 * boundary checks cannot be based solely on value equality;
 * a certain range of fluctuation is permissible.
 */
export function isGreaterThan(a: number, b: number, epsilon = 0.03) {
  return a - b > epsilon
}
