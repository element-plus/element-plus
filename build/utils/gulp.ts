export const withTaskName = <T extends (...args: any) => any>(
  name: string,
  fn: T
) => Object.assign(fn, { displayName: name })
