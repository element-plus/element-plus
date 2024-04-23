import { nextTick } from 'vue'
import { mount as _mount } from '@vue/test-utils'
import { vi } from 'vitest'

vi.mock('lodash-unified', async () => {
  return {
    ...((await vi.importActual('lodash-unified')) as Record<string, any>),
    debounce: vi.fn((fn) => {
      fn.cancel = vi.fn()
      fn.flush = vi.fn()
      return fn
    }),
  }
})

export async function doubleWait() {
  await nextTick()
  await nextTick()
}

export const mount = (opt: any) =>
  _mount<any>(opt, {
    attachTo: 'body',
  })

export function getTestData() {
  return [
    {
      id: 1,
      name: 'Toy Story',
      release: '1995-11-22',
      director: 'John Lasseter',
      runtime: 80,
    },
    {
      id: 2,
      name: "A Bug's Life",
      release: '1998-11-25',
      director: 'John Lasseter',
      runtime: 95,
    },
    {
      id: 3,
      name: 'Toy Story 2',
      release: '1999-11-24',
      director: 'John Lasseter',
      runtime: 92,
    },
    {
      id: 4,
      name: 'Monsters, Inc.',
      release: '2001-11-2',
      director: 'Peter Docter',
      runtime: 92,
    },
    {
      id: 5,
      name: 'Finding Nemo',
      release: '2003-5-30',
      director: 'Andrew Stanton',
      runtime: 100,
    },
  ]
}

export function getMutliRowTestData() {
  return [
    {
      id: '12987122',
      nodeId: 0,
      name: 'Tom',
      release: '234',
      director: '3.2',
      runtime: 10,
      span: [
        [4, 1],
        [2, 1],
      ],
    },
    {
      id: '12987123',
      nodeId: 0,
      name: 'Tom',
      release: '165',
      director: '4.43',
      runtime: 12,
      span: [
        [0, 0],
        [0, 0],
      ],
    },
    {
      id: '12987124',
      nodeId: 0,
      name: 'Tom1',
      release: '324',
      director: '1.9',
      runtime: 9,
      span: [
        [0, 0],
        [2, 1],
      ],
    },
    {
      id: '12987125',
      nodeId: 0,
      name: 'Tom1',
      release: '621',
      director: '2.2',
      runtime: 17,
      span: [
        [0, 0],
        [0, 0],
      ],
    },
    {
      id: '12987126',
      nodeId: 1,
      name: 'Tom',
      release: '539',
      director: '4.1',
      runtime: 15,
      span: [
        [2, 1],
        [1, 1],
      ],
    },
    {
      id: '12987127',
      nodeId: 1,
      name: 'Tom',
      release: '539',
      director: '4.1',
      runtime: 15,
      span: [
        [0, 0],
        [1, 1],
      ],
    },
  ]
}
