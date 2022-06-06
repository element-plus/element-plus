const {
  default: getWorkspacePackages,
} = require('@pnpm/find-workspace-packages')

async function getPackages(context) {
  const ctx = context || {}
  const cwd = ctx.cwd || process.cwd()
  const packages = await getWorkspacePackages(cwd)
  return packages
    .map((pkg) => pkg.manifest.name)
    .filter((name) => !!name)
    .map((name) => (name.charAt(0) === '@' ? name.split('/')[1] : name))
}

const scopes = [
  'project',
  'core',
  'style',
  'docs',
  'ci',
  'dev',
  'build',
  'deploy',
  'other',
  'typography',
  'color',
  'border',
  'var',
  'ssr',
]

module.exports = {
  rules: {
    /**
     * type[scope]: [function] description
     *      ^^^^^
     */
    'scope-enum': (ctx) =>
      getPackages(ctx).then((packages) => [
        2,
        'always',
        [...packages, ...scopes],
      ]),
    /**
     * type[scope]: [function] description
     *
     * ^^^^^^^^^^^^^^ empty line.
     * - Something here
     */
    'body-leading-blank': [1, 'always'],
    /**
     * type[scope]: [function] description
     *
     * - something here
     *
     * ^^^^^^^^^^^^^^
     */
    'footer-leading-blank': [1, 'always'],
    /**
     * type[scope]: [function] description [No more than 72 characters]
     *      ^^^^^
     */
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    /**
     * type[scope]: [function] description
     * ^^^^
     */
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'release',
        'style',
        'test',
        'improvement',
      ],
    ],
  },
}
