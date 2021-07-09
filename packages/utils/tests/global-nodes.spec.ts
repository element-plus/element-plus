import { createGlobalNode, removeGlobalNode, changeGlobalNodesTarget } from '../global-nodes'


describe('global-nodes', () => {

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should create nodes to the root element', () => {
    const el = createGlobalNode()

    expect(el).not.toBeNull()

    expect(document.body.firstChild).toBe(el)
  })


  it('should remove the recent created element', () => {

    const el = createGlobalNode()

    expect(document.body.firstElementChild).toBe(el)

    removeGlobalNode(el)

    expect(document.body.children).toHaveLength(0)
  })

  it('should change the target of created element', () => {
    const target = createGlobalNode()

    expect(document.body.firstElementChild).toBe(target)

    const el = createGlobalNode()

    expect(el.parentElement).toBe(document.body)

    changeGlobalNodesTarget(target)

    expect(el.parentElement).toBe(target)

  })


})
