import { spawn } from 'child_process'
import { red, cyan, green } from './log'
import { projRoot } from './paths'

export const run = async (command: string, cwd: string = projRoot) =>
  new Promise<void>((resolve, reject) => {
    const args = command.split(' ')
    const cmd = args.shift()!

    green(`run: ${cmd} ${args.join(' ')}`)
    const app = spawn(cmd, args, { cwd })
    app.stdout.on('data', (data) => cyan(data.toString()))
    app.stderr.on('data', (data) => red(data.toString()))

    app.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command failed. Code: ${code}`))
    })
  })
