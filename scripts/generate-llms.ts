import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'

async function generateLLms() {
  const cwd = process.cwd()
  const siteDir = path.resolve(cwd, 'docs/llms')
  const docsDir = ['docs/en-US', 'docs/examples']

  const matchSuffix = '.md'

  // Ensure siteDir exists
  await fs.ensureDir(siteDir)

  const docs = await fg(`{${docsDir.join(',')}}/**/*${matchSuffix}`, {
    cwd,
    absolute: false,
  })

  const docsIndex: Array<{ title: string; url: string }> = []
  const docsBody: string[] = []

  for (const markdown of docs) {
    const mdPath = path.join(cwd, markdown)

    const fsContent = (await fs.readFile(mdPath, 'utf-8')).trim()

    // e.g. # Button 按钮 -> Button
    const title = fsContent
      .match(/^#\s*(.*?)(?:\s+[\u4E00-\u9FA5].*)?$/m)?.[1]
      ?.trim()

    if (!title) {
      continue
    }

    // URL
    let url = `https://element-plus.org/${markdown
      .replace(/^docs\//, '')
      .replace(matchSuffix, '')}`
    if (url.includes('/examples/')) {
      url = url.replace('/index', '')
    }

    // Docs: title
    docsIndex.push({
      title,
      url,
    })

    // Docs: content
    const parsedContent = fsContent
      .replace(/^---[\s\S]*?---\n/, '') // Remove frontmatter
      .replace(/:::\s*demo.*?:::/gs, '') // Remove demo blocks
      .replace(/:::\s*tip.*?:::/gs, '') // Remove tip blocks
      .replace(/:::\s*warning.*?:::/gs, '') // Remove warning blocks
      .trim()

    const fullContent = [
      // Title
      '---',
      `Title: ${title}`,
      `URL: ${url}`,
      '---',
      '',
      // Content
      parsedContent,
      '',
    ].join('\n')

    docsBody.push(fullContent)
  }

  const docsIndexContent = [
    '# Element Plus - A Vue 3 based component library',
    '',
    '- Element Plus is a Vue 3 based component library for developers, designers and product managers, with a set of high-quality components and rich features for building modern web applications.',
    '',
    '## Documentation',
    '',
    ...docsIndex.map(({ title, url }) => `- [${title}](${url})`),
    '',
  ].join('\n')

  const docsBodyContent = docsBody.join('\n')

  await fs.writeFile(path.join(siteDir, 'llms.txt'), docsIndexContent)
  await fs.writeFile(path.join(siteDir, 'llms-full.txt'), docsBodyContent)
}

;(async () => {
  if (require.main === module) {
    await generateLLms()
  }
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
