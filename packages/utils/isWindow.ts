export function isWindow(obj: any) {
  return obj !== null && obj !== undefined && obj === obj.window
}
