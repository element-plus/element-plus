export default function(target: Object, ...args: Array<Object>) {
  target = { ...target }
  for (let i = 0; i < args.length; i++) {
    Object.assign(target, args[i])
  }
  return target
}
