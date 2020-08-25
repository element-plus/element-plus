import mitt from 'mitt'
const emitter = mitt()
emitter.$off = emitter.off
emitter.$on = emitter.on
emitter.$emit = emitter.emit
export default emitter
