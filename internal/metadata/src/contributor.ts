import path from 'path'
import { existsSync } from 'fs'
import glob from 'fast-glob'
import { Octokit } from 'octokit'
import consola from 'consola'
import chalk from 'chalk'
import { chunk, mapValues, uniqBy } from 'lodash-unified'
import {
  ensureDir,
  errorAndExit,
  projRoot,
  writeJson,
} from '@element-plus/build-utils'
import {
  REPO_BRANCH,
  REPO_NAME,
  REPO_OWNER,
} from '@element-plus/build-constants'

interface FetchOption {
  key: string
  path: string
  after?: string
}

interface ApiResult {
  pageInfo: {
    hasNextPage: boolean
    endCursor: string
  }
  nodes: Array<{
    oid: string
    author: {
      avatarUrl: string
      date: string
      email: string
      name: string
      user?: {
        login: string
      }
    }
  }>
}

interface ApiResponse {
  repository: {
    object: Record<`path${number}`, ApiResult>
  }
}

interface ContributorInfo {
  login: string
  name: string
  email: string
  avatar: string
  count: number
}

const fetchCommits = async (
  options: FetchOption[]
): Promise<Record<string, ApiResult>> => {
  const query = `{
    repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") {
      object(expression: "${REPO_BRANCH}") {
        ... on Commit {
          ${options
            .map(({ path, after }, index) => {
              return `
              path${index}: history(path: "${path}"${
                after ? `, after: "${after}"` : ''
              }) {
                nodes {
                  oid
                  author {
                    avatarUrl
                    date
                    email
                    name
                    user {
                      login
                    }
                  }
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }`
            })
            .join('\n')}
        }
      }
    }
  }`
  const response = (await octokit.graphql<ApiResponse>(query)).repository.object
  return Object.fromEntries(
    Object.entries(response).map(([key, result]) => {
      const index = +key.replace('path', '')
      return [index, result]
    })
  )
}

const calcContributors = (commits: ApiResult['nodes']) => {
  const contributors: Record<string, ContributorInfo> = {}
  for (const { author } of commits) {
    const login = author.user?.login
    if (!login) continue

    if (!contributors[login])
      contributors[login] = {
        login,
        name: author.name,
        email: author.email,
        avatar: author.avatarUrl,
        count: 0,
      }

    contributors[login].count++
  }
  return Object.values(contributors).sort((a, b) => b.count - a.count)
}

const getContributorsByComponents = async (components: string[]) => {
  let options: FetchOption[] = components.flatMap((component) => [
    { key: component, path: `packages/components/${component}` },
    { key: component, path: `packages/theme-chalk/src/${component}.scss` },
    { key: component, path: `docs/examples/${component}` },
    { key: component, path: `docs/en-US/component/${component}.md` },
  ])
  const commits: Record<string /* component name */, ApiResult['nodes']> = {}
  do {
    const results = await fetchCommits(options)

    for (const [i, result] of Object.values(results).entries()) {
      const component = options[i].key
      if (!commits[component]) commits[component] = []
      commits[component].push(...result.nodes)
    }

    options = options
      .map((option, index) => {
        const pageInfo = results[index].pageInfo
        const after = pageInfo.hasNextPage ? pageInfo.endCursor : undefined
        return { ...option, after }
      })
      .filter((option) => !!option.after)
  } while (options.length > 0)

  return mapValues(commits, (commits) =>
    calcContributors(uniqBy(commits, 'oid'))
  )
}

async function getContributors() {
  if (!process.env.GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is empty')

  const components = await glob('*', {
    cwd: path.resolve(projRoot, 'packages/components'),
    onlyDirectories: true,
  })
  let contributors: Record<string, ContributorInfo[]> = {}

  consola.info('Fetching contributors...')
  for (const chunkComponents of chunk(components, 10)) {
    contributors = {
      ...contributors,
      ...(await getContributorsByComponents(chunkComponents)),
    }
    consola.success(
      chalk.green(`Fetched contributors: ${chunkComponents.join(', ')}`)
    )
  }
  return contributors
}

const pathOutput = path.resolve(__dirname, '..', 'dist')
const pathDest = path.resolve(pathOutput, 'contributors.json')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

async function main() {
  await ensureDir(pathOutput)

  let contributors: Record<string, ContributorInfo[]>
  if (process.env.DEV) {
    if (existsSync(pathDest)) return
    contributors = {}
  } else {
    contributors = await getContributors().catch((err) => {
      errorAndExit(err)
    })
  }

  await writeJson(pathDest, contributors)
  consola.success(chalk.green('Contributors generated'))
}

main()
