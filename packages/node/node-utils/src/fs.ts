import { readFile } from 'fs/promises'

export const readJSON = async <T = unknown>(path: string): Promise<T> =>
  JSON.parse(await readFile(path, 'utf-8'))
