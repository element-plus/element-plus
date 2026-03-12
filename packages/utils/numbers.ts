export function isGreaterThan(a: number, b: number, epsilon = 0.03) {
  return a - b > epsilon
}
