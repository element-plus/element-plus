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
  /^-\s+(?:[^[]*?\s?)?\[([^\]]+)\]:?\s+(.+?)(?:\s*\(#(\d+)(?:\s+by\s+@(\S+))?\))?$/

const TYPE_MAP: Record<string, ChangelogEntry['type']> = {
  Features: 'feature',
  'Bug fixes': 'bugfix',
  Refactors: 'refactor',
  'Breaking Changes': 'breaking',
}

// Alias map for sub-components or shorthand references
const ALIAS_MAP: Record<string, string> = {
  // Sub-components → parent
  textarea: 'input',
  'breadcrumb-item': 'breadcrumb',
  'button-group': 'button',
  'carousel-item': 'carousel',
  'checkbox-button': 'checkbox',
  'checkbox-group': 'checkbox',
  'collapse-item': 'collapse',
  'collapse-transition': 'collapse',
  'descriptions-item': 'descriptions',
  'dropdown-item': 'dropdown',
  'dropdown-menu': 'dropdown',
  'form-item': 'form',
  'form-label-wrap': 'form',
  'label-wrap': 'form',
  'menu-item': 'menu',
  'menu-item-group': 'menu',
  'sub-menu': 'menu',
  option: 'select',
  'option-group': 'select',
  'radio-button': 'radio',
  'radio-group': 'radio',
  'skeleton-item': 'skeleton',
  'splitter-panel': 'splitter',
  step: 'steps',
  'tab-pane': 'tabs',
  'tab-bar': 'tabs',
  tab: 'tabs',
  bar: 'tabs',
  'table-column': 'table',
  'table-body': 'table',
  'table-header': 'table',
  'table-footer': 'table',
  'timeline-item': 'timeline',
  'tour-step': 'tour',
  'anchor-link': 'anchor',
  'avatar-group': 'avatar',

  // Container sub-components
  aside: 'container',
  footer: 'container',
  header: 'container',
  main: 'container',

  // Layout
  col: 'layout',
  row: 'layout',

  // Standalone → canonical parent
  'virtual-table': 'table-v2',
  'image-viewer': 'image',
  'cascader-panel': 'cascader',
  'check-tag': 'tag',
  'upload-dragger': 'upload',

  // Internal sub-components
  'popper-trigger': 'popper',
  'popper-container': 'popper',
  'tree-node-content': 'tree',

  // Changelog typos & alternate names
  description: 'descriptions',
  'description-item': 'descriptions',
  'descriptions-cell': 'descriptions',
  'data-picker': 'date-picker',
  'date-time-picker': 'datetime-picker',
  timepicker: 'time-picker',
  calender: 'calendar',
  'number-input': 'input-number',
  checkout: 'checkbox',
  opover: 'popover',
  'pop-confirm': 'popconfirm',
}

function normalizeComponentNames(raw: string): string[] {
  const parts = Array.from(
    new Set(
      raw
        .split(/[/,&]/)
        .map((s) => s.trim())
        .filter(Boolean)
    )
  )

  const result: string[] = []

  for (let i = 0; i < parts.length; i++) {
    let name = parts[i]

    // Strip 'el-' / 'El' prefix
    name = name.replace(/^[Ee]l-?/, '')

    // Convert camelCase / PascalCase → kebab-case:
    //   timelineItem → timeline-item, DatePickerPanel → date-picker-panel
    name = name
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()

    // Handle version shorthand like [select/v2] → ['select', 'select-v2']
    if (i > 0 && /^v\d+$/.test(name)) {
      const base = normalizeComponentNames(parts[0])[0]
      const combined = `${base}-${name}`
      result.push(base)
      result.push(combined)
      continue
    }

    // Apply alias mapping
    if (ALIAS_MAP[name]) {
      name = ALIAS_MAP[name]
    }

    result.push(name)
  }

  return [...new Set(result)]
}

export function parseChangelog(content: string): ComponentChangelogs {
  const lines = content.replace(/\r\n?/g, '\n').split('\n')
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

  // Limit to most recent 20 versions per component
  for (const key of Object.keys(componentMap)) {
    componentMap[key] = componentMap[key].slice(0, 20)
  }

  return componentMap
}

export async function loadChangelog(): Promise<ComponentChangelogs> {
  const changelogPath = path.resolve(projRoot, 'CHANGELOG.en-US.md')
  const content = await fs.readFile(changelogPath, 'utf-8')
  return parseChangelog(content)
}
