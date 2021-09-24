import { spawn } from 'child_process'
import { green, red } from './log'
import { projRoot } from './paths'

export const run = async (command: string, cwd: string = projRoot) =>
  new Promise<void>((resolve, reject) => {
    const args = command.split(' ')
    const cmd = args.shift()!

    green(`run: ${cmd} ${args.join(' ')}`)
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
    })
    app.on('close', (code) => {
      if (code === 0) resolve()
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        )
    })
    process.on('exit', () => app.kill('SIGHUP'))
  })
