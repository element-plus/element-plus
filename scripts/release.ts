import { release } from '@vitejs/release-scripts'
import colors from 'picocolors'
import { logRecentCommits, run } from './releaseUtils'

release({
  // Name of the repo for CI link
  repo: 'element-h',
  // List of options. Choice will be available in following callback as `pkg`
  packages: ['element-plus', 'utils'],
  toTag: (pkg, version) =>
    pkg === 'element-plus' ? `v${version}` : `${pkg}@${version}`,
  // Not shared until we find a new changelog process
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
    console.log(colors.cyan('\nGenerating changelog...'))
    const changelogArgs = [
      'conventional-changelog',
      '-p',
      'angular',
      '-i',
      'CHANGELOG.md',
      '-s',
      '--commit-path',
      '.',
    ]
    changelogArgs.push('--lerna-package', pkgName)
    await run('npx', changelogArgs, { cwd: `packages/${pkgName}` })
  },
})
