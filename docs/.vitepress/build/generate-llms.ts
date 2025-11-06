import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'

async function generateLLms() {
  const cwd = process.cwd()
  const siteDir = path.resolve(cwd, 'public')
  const docsDir = ['en-US', 'examples']

  const matchSuffixes = ['.md', '.vue']

  // Ensure siteDir exists
  await fs.ensureDir(siteDir)

  const docs = await fg(
    `{${docsDir.join(',')}}/**/*{${matchSuffixes.join(',')}}`,
    {
      cwd,
      absolute: false,
    }
  )

  const docsIndex: Array<{ title: string; url: string }> = []
  const docsBody: string[] = []

  for (const markdown of docs) {
    const mdPath = path.join(cwd, markdown)

    const fsContent = (await fs.readFile(mdPath, 'utf-8')).trim()

    // e.g. # Button -> Button
    const title = fsContent
      .match(/^#\s*([^\n]+)$/m)?.[1]
      ?.replace(/\^\([^)]+\)/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/^#+\s*/, '') // 去除开头的#符号
      .replace(/\s+/g, ' ') // 将多个空格替换为单个空格
      .trim()

    if (!title) {
      continue
    }

    // URL
    let url = `https://element-plus.org/${markdown
      .replace(/^docs\//, '')
      .replace(/\.(md|vue)$/, '')}`
    if (url.includes('/examples/')) {
      url = url.replace('/index', '')
    }

    // Docs: title
    docsIndex.push({
      title,
      url,
    })

    // Docs: content
    let parsedContent = fsContent

    if (markdown.endsWith('.md')) {
      parsedContent = fsContent
        .replace(/^---[\s\S]*?---\n/, '') // Remove frontmatter
        .replace(/:::\s*demo.*?:::/gs, '') // Remove demo blocks
        .replace(/:::\s*tip.*?:::/gs, '') // Remove tip blocks
        .replace(/:::\s*warning.*?:::/gs, '') // Remove warning blocks
        .trim()

      // 提取组件名称
      const componentName = markdown.split('/').pop()?.replace('.md', '')
      if (componentName) {
        // 在examples目录下查找对应的Vue示例文件
        const examplesDir = path.join(cwd, 'examples', componentName)
        if (fs.existsSync(examplesDir)) {
          const vueFiles = await fg('**/*.vue', {
            cwd: examplesDir,
            absolute: true,
          })

          // 添加Vue示例代码
          if (vueFiles.length > 0) {
            parsedContent += '\n\n## Vue Examples\n'
            for (const vueFile of vueFiles) {
              const vueContent = await fs.readFile(vueFile, 'utf-8')
              const fileName = path.basename(vueFile)
              parsedContent += `\n### ${fileName}\n\`\`\`vue\n${vueContent}\n\`\`\`\n`
            }
          }
        }
      }
    } else if (markdown.endsWith('.vue')) {
      // For Vue files, use the entire content as example code
      parsedContent = `\`\`\`vue\n${fsContent}\n\`\`\``
    }

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
