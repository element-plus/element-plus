import path from 'path'
import chalk from 'chalk'
import consola from 'consola'
import fs from 'fs/promises'
import { docRoot, errorAndExit } from '@element-plus/build-utils'

const credentialPlaceholder = 'API_TOKEN_PLACEHOLDER'

const CREDENTIAL = process.env.CROWDIN_TOKEN
if (!CREDENTIAL) {
  errorAndExit(new Error('Environment variable CROWDIN_TOKEN cannot be empty'))
}

;(async () => {
  consola.debug(chalk.cyan('Fetching Crowdin credential'))
  const configPath = path.resolve(docRoot, 'crowdin.yml')
  try {
    const file = await fs.readFile(configPath, {
      encoding: 'utf-8',
    })
    await fs.writeFile(
      configPath,
      file.replace(credentialPlaceholder, CREDENTIAL)
    )
    consola.success(chalk.green('Crowdin credential update successfully'))
  } catch (e: any) {
    errorAndExit(e)
  }
})()
