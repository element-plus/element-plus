import path from 'path'
import glob from 'fast-glob'
import { Octokit } from 'octokit'
import { projRoot } from '@element-plus/build'
import { branch, owner, repoName } from '../vitepress/constant'
import type { Plugin } from 'vite'

interface FetchOption {
  path: string
  after?: string
}

interface ApiResult {
  pageInfo: {
    hasNextPage: boolean
    endCursor: string
  }
  nodes: Array<{
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

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const fetchContributors = async (
  options: FetchOption[]
): Promise<Record<string, ApiResult>> => {
  const query = `{
    repository(owner: "${owner}", name: "${repoName}") {
      object(expression: "${branch}") {
        ... on Commit {
          ${options
            .map(({ path, after }, index) => {
              return `
              path${index}: history(path: "${path}"${
                after ? `, after: "${after}"` : ''
              }) {
                nodes {
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
  const respnose = (await octokit.graphql<ApiResponse>(query)).repository.object
  return Object.fromEntries(
    Object.entries(respnose).map(([key, result]) => {
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

const getContributorsAt = async (componentName: string) => {
  let options: FetchOption[] = [
    { path: `packages/components/${componentName}` },
    { path: `packages/theme-chalk/src/${componentName}.scss` },
    { path: `docs/examples/${componentName}` },
    { path: `docs/en-US/component/${componentName}.md` },
  ]
  const commits: ApiResult['nodes'] = []
  do {
    const results = await fetchContributors(options)
    options = options
      .map((option, index) => {
        const pageInfo = results[index].pageInfo
        const after = pageInfo.hasNextPage ? pageInfo.endCursor : undefined
        return { ...option, after }
      })
      .filter((option) => !!option.after)
    commits.push(...Object.values(results).flatMap((result) => result.nodes))
  } while (options.length > 0)

  return calcContributors(commits)
}

export async function getContributors() {
  if (!process.env.GITHUB_TOKEN) return {}
  const components = await glob('*', {
    cwd: path.resolve(projRoot, 'packages/components'),
    onlyDirectories: true,
  })
  const contributors = Object.fromEntries(
    await Promise.all(
      components.map((component) =>
        getContributorsAt(component).then((contributors) => [
          component,
          contributors,
        ])
      )
    )
  )
  return contributors
}

const ID = '/virtual-contributors'

export async function Contributors(): Promise<Plugin> {
  const data = await getContributors()
  return {
    name: 'element-plus-contributors',
    resolveId(id) {
      return id === ID ? ID : null
    },
    load(id) {
      if (id !== ID) return null
      return `export default ${JSON.stringify(data)}`
    },
  }
}
