interface QueueOptions {
  concurrency?: number
}

/**
 * @typeParam
 */
export class Queue<T = unknown> {
  private concurrency: number
  private queue: Array<{
    id: number
    task: () => Promise<T>
    resolve: (value: T | PromiseLike<T>) => void
    reject: (reason?: any) => void
  }>
  private running: number

  /**
   * @param options
   */
  constructor(options?: QueueOptions) {
    const { concurrency = 3 } = options || {}
    this.concurrency = concurrency
    this.queue = []
    this.running = 0
  }

  /**
   * @param task
   * @returns
   */
  public add(id: number, task: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push({ id, task, resolve, reject })
      this._next()
    })
  }
  /**
   *
   * @param id
   */
  public remove(id: number) {
    this.queue = this.queue.filter((item) => item.id !== id)
  }

  public clear() {
    this.queue = []
  }

  private _next(): void {
    while (this.running < this.concurrency && this.queue.length) {
      const { task, resolve, reject } = this.queue.shift()!
      this.running++
      Promise.resolve()
        .then(() => task())
        .then((result) => resolve(result))
        .catch((error) => reject(error))
        .finally(() => {
          this.running--
          this._next()
        })
    }
  }
}
