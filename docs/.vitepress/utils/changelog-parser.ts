import fs from 'node:fs/promises'
import path from 'node:path'
import { projRoot } from '@element-plus/build-utils'

export interface ChangelogEntry {
  type: 'feature' | 'bugfix' | 'refactor' | 'breaking'
  description: string
  pr?: string
  author?: string
}

export interface VersionChangelog {
  version: string
  date: string
  entries: ChangelogEntry[]
}

export type ComponentChangelogs = Record<string, VersionChangelog[]>

const COMPONENT_ENTRY_RE =
  /^-\s+(?:Components?\s*)?\[([^\]]+)\]\s+(.+?)(?:\s*\(#(\d+)(?:\s+by\s+@(\S+))?\))?$/

const TYPE_MAP: Record<string, ChangelogEntry['type']> = {
  Features: 'feature',
  'Bug fixes': 'bugfix',
  Refactors: 'refactor',
  'Breaking Changes': 'breaking',
}

function normalizeComponentNames(raw: string): string[] {
  const parts = Array.from(
    new Set(
      raw
        .split(/[/,]/)
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
    )
  )

  const result: string[] = []

  // Alias map for sub-components or shorthand references
  const aliasMap: Record<string, string> = {
    textarea: 'input',
    'collapse-item': 'collapse',
    'menu-item': 'menu',
    'dropdown-item': 'dropdown',
    'tab-pane': 'tabs',
    'tab-bar': 'tabs',
    'timeline-item': 'timeline',
    'form-item': 'form',
    'virtual-table': 'table-v2',
  }

  for (let i = 0; i < parts.length; i++) {
    let name = parts[i]

    // Handle shorthand like [select/v2] → ['select', 'select-v2']
    if (i > 0 && !name.includes('-') && name.length <= 3) {
      const combined = `${parts[0]}-${name}`
      result.push(parts[0])
      result.push(combined)
      continue
    }

    // Apply alias mapping
    if (aliasMap[name]) {
      name = aliasMap[name]
    }

    result.push(name)
  }

  return [...new Set(result)]
}

export function parseChangelog(content: string): ComponentChangelogs {
  const lines = content.split('\n')
  const componentMap: ComponentChangelogs = {}

  let currentVersion = ''
  let currentDate = ''
  let currentType: ChangelogEntry['type'] = 'feature'

  for (const line of lines) {
    // Match version: ### 2.13.3
    const versionMatch = line.match(/^###\s+(\d+\.\d+\.\d+.*)$/)
    if (versionMatch) {
      currentVersion = versionMatch[1].trim()
      currentDate = ''
      continue
    }

    // Match date: _2026-02-28_
    const dateMatch = line.match(/^_(.+)_$/)
    if (dateMatch) {
      currentDate = dateMatch[1].trim()
      continue
    }

    // Match section type: #### Features
    const typeMatch = line.match(/^####\s+(.+)$/)
    if (typeMatch) {
      const typeKey = typeMatch[1].trim()
      currentType = TYPE_MAP[typeKey] || 'refactor'
      continue
    }

    // Match component entries
    if (!currentVersion) continue

    const entryMatch = line.match(COMPONENT_ENTRY_RE)
    if (!entryMatch) continue

    const [, rawComponents, description, pr, author] = entryMatch
    const componentNames = normalizeComponentNames(rawComponents)

    const entry: ChangelogEntry = {
      type: currentType,
      description: description.trim(),
      ...(pr && { pr }),
      ...(author && { author }),
    }

    for (const compName of componentNames) {
      if (!componentMap[compName]) {
        componentMap[compName] = []
      }

      let versionEntry = componentMap[compName].find(
        (v) => v.version === currentVersion
      )
      if (!versionEntry) {
        versionEntry = {
          version: currentVersion,
          date: currentDate,
          entries: [],
        }
        componentMap[compName].push(versionEntry)
      }

      versionEntry.entries.push(entry)
    }
  }

  // Limit to most recent 10 versions per component
  for (const key of Object.keys(componentMap)) {
    componentMap[key] = componentMap[key].slice(0, 10)
  }

  return componentMap
}

export async function loadChangelog(): Promise<ComponentChangelogs> {
  const changelogPath = path.resolve(projRoot, 'CHANGELOG.en-US.md')
  const content = await fs.readFile(changelogPath, 'utf-8')
  return parseChangelog(content)
}
