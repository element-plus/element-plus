import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import { errorAndExit } from './utils/log'

const credentialPlaceholder = 'API_TOKEN_PLACEHOLDER'

const CREDENTIAL = process.env.CROWDIN_TOKEN

;(async () => {
  console.info(chalk.cyan('Fetching Crowdin credential'))
  const configPath = path.resolve(__dirname, '../docs/crowdin.yml')
  try {
    const file = await fs.promises.readFile(configPath, {
      encoding: 'utf-8',
    })
    await fs.promises.writeFile(
      configPath,
      file.replace(credentialPlaceholder, CREDENTIAL!)
    )
    console.info(chalk.green('Crowdin credential update successfully'))
  } catch (e: any) {
    errorAndExit(e)
  }
})()
