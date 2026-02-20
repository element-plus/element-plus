import consola from 'consola'
import chalk from 'chalk'
import { errorAndExit, getWorkspacePackages } from '@element-plus/build-utils'

import type { Project } from '@element-plus/build-utils'

async function main() {
  const tagVersion = process.env.TAG_VERSION
  const gitHead = process.env.GIT_HEAD
  if (!tagVersion || !gitHead) {
    errorAndExit(
      new Error(
        'No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n'
      )
    )
  }

  consola.log(chalk.cyan('Start updating version'))
  consola.log(chalk.cyan(`$TAG_VERSION: ${tagVersion}`))
  consola.log(chalk.cyan(`$GIT_HEAD: ${gitHead}`))

  consola.debug(chalk.yellow(`Updating package.json for element-plus`))

  const pkgs = (await getWorkspacePackages()).filter(
    (pkg) => !pkg.manifest.private
  )

  const writeVersion = async (project: Project) => {
    await project.writeProjectManifest({
      ...project.manifest,
      version: tagVersion,
      // @ts-expect-error
      gitHead,
      name: project.manifest.name!.replace(
        '@element-plus/',
        '@makedopamine/element-plus-'
      ),
    })
  }

  try {
    for (const pkg of pkgs) {
      await writeVersion(pkg)
    }
  } catch (err: any) {
    errorAndExit(err)
  }

  consola.success(chalk.green(`Version updated to ${tagVersion}`))
  consola.success(chalk.green(`Git head updated to ${gitHead}`))
}

main()
