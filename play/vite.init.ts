import { existsSync, writeFileSync, readFileSync } from 'fs'

const play = 'play.vue'
const example = 'play.example'

if (!existsSync(play)) {
  writeFileSync(play, readFileSync(example))
}
