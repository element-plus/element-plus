import { spawn } from 'child_process'
import { green } from 'chalk'
import { projRoot } from './paths'

export const run = async (command: string, cwd: string = projRoot) =>
  new Promise<void>((resolve, reject) => {
    let [cmd, ...args] = command.split(' ')
    args.forEach((item, index) => {
      console.log(item)
      args[index] = item.replace(/\//g, '\\')
    })
    if (process.platform === 'win32') {
      switch (cmd) {
        case 'cp':
          cmd = 'copy'
          break
        case 'mv':
          cmd = 'del'
          break
        case 'rmdir':
          cmd = 'del'
          break
        case 'rsync':
          cmd = 'xcopy'
          args.map((item, index) => {
            if (item === '-a') args.splice(index, 1)
          })
          break
        case 'mkdir':
          args.map((item, index) => {
            if (item === '-p') args.splice(index, 1)
          })
          break
        default:
          break
      }
    }
    console.log(`run: ${green(`${cmd} ${args.join(' ')}`)}`)
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })

    const onProcessExit = () => app.kill('SIGHUP')

    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit)

      if (code === 0) resolve()
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        )
    })
    process.on('exit', onProcessExit)
  })
