export default {
  title: 'Card',
}

export const BasicCard = () :string => '<el-card header="I am the header">basic card</el-card>'
export const MinimalCard = (): string => '<el-card>Minimal card with no header</el-card>'
export { default as ComplexCard } from './complex.vue'
