// eslint-disable-next-line @typescript-eslint/no-empty-function
const NoopFunction = (): void => {}
export function useMutationObserver(
  wrapper: HTMLElement,
  el: HTMLElement
): { stop: typeof NoopFunction } {
  const options: MutationObserverInit = {
    childList: true,
    subtree: true,
    attributeFilter: ['style', 'class'],
    attributeOldValue: true,
  }

  const observer = new MutationObserver((records: MutationRecord[]) => {
    records
      .filter((record) => record.target === el || record.target === wrapper)
      .forEach((record) => {
        // avoid modifying data
        if (record.type === 'attributes') {
          reset(() => {
            el!.setAttribute(record.attributeName!, record.oldValue!)
          })
        }
        // avoid deleted
        if (record.type === 'childList') {
          reset(() => {
            wrapper!.appendChild(record.removedNodes[0])
          })
        }
      })
  })

  observer.observe(wrapper, options)

  const reset = (resume = NoopFunction) => {
    requestAnimationFrame(() => {
      observer.disconnect()
      resume()
      observer.observe(wrapper, options)
    })
  }

  return {
    stop: () => observer.disconnect(),
  }
}
