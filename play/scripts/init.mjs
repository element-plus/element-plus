import { existsSync, readFileSync, writeFileSync } from 'fs'

const app = 'src/App.vue'
const example = 'app.example.vue'

if (!existsSync(app)) {
  writeFileSync(app, readFileSync(example))
}
