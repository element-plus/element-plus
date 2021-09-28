import through2 from 'through2'
import { pathRewriter } from './pkg'
import type { TaskFunction } from 'gulp'
import type { Module } from '../info'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const gulpPathRewriter = (module: Module) => {
  const rewriter = pathRewriter(module, true)

  return through2.obj((file, _, cb) => {
    const contents: string = file.contents.toString()
    file.contents = Buffer.from(rewriter(contents))
    cb(null, file)
  })
}
