import { rolldown } from 'rolldown'
import { parseArgs } from 'node:util'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const { positionals: targets } = parseArgs({
    allowPositionals: true
})




for (const target of targets) {
    const packageJSON = JSON.parse(await readFile(path.resolve(`packages/${target}/package.json`), 'utf8'))
    console.log(packageJSON)
    const bundle = await rolldown({
        input: `packages/${target}/index.ts`,
    })

    await bundle.generate({
        format: 'cjs',
    })

    await bundle.write({
        file: `packages/${target}/dist/bundle.js`
    })
}


console.log(performance.measure('build time'))

