import { cacheNames, clientsClaim } from 'workbox-core'
import type { ManifestEntry } from 'workbox-build'

declare let self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: ManifestEntry[]
}
const manifest = self.__WB_MANIFEST
const cacheName = cacheNames.runtime
const defaultLang = manifest.some((item) => {
  return item.url.includes(navigator.language)
})
  ? navigator.language
  : 'en-US'

let userPreferredLang = ''
let cacheEntries: RequestInfo[] = []
let cacheManifestURLs: string[] = []
let manifestURLs: string[] = []

class LangDB {
  private db: IDBDatabase | undefined
  private databaseName = 'PWA_DB'
  private version = 1
  private storeNames = 'lang'

  constructor() {
    this.initDB()
  }

  private initDB() {
    return new Promise<boolean>((resolve) => {
      const request = indexedDB.open(this.databaseName, this.version)

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result
        resolve(true)
      }

      request.onupgradeneeded = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result

        if (!this.db.objectStoreNames.contains(this.storeNames)) {
          this.db.createObjectStore(this.storeNames, { keyPath: 'id' })
        }
      }
    })
  }

  private async initLang() {
    this.db!.transaction(this.storeNames, 'readwrite')
      .objectStore(this.storeNames)
      .add({ id: 1, lang: defaultLang })
  }

  async getLang() {
    if (!this.db) await this.initDB()

    return new Promise<string>((resolve) => {
      const request = this.db!.transaction(this.storeNames)
        .objectStore(this.storeNames)
        .get(1)

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result.lang)
        } else {
          this.initLang()
          resolve(defaultLang)
        }
      }

      request.onerror = () => {
        resolve(defaultLang)
      }
    })
  }

  async setLang(lang: string) {
    if (userPreferredLang !== lang) {
      userPreferredLang = lang
      cacheEntries = []
      cacheManifestURLs = []
      manifestURLs = []

      if (!this.db) await this.initDB()

      this.db!.transaction(this.storeNames, 'readwrite')
        .objectStore(this.storeNames)
        .put({ id: 1, lang })
    }
  }
}

async function initManifest() {
  userPreferredLang = userPreferredLang || (await langDB.getLang())
  // match the data that needs to be cached
  // NOTE: When the structure of the document dist files changes, it needs to be changed here
  const cacheList = [
    userPreferredLang,
    `assets/(${userPreferredLang}|app|index|style|chunks)`,
    'images',
    'android-chrome',
    'apple-touch-icon',
    'manifest.webmanifest',
  ]
  const regExp = new RegExp(`^(${cacheList.join('|')})`)

  for (const item of manifest) {
    const url = new URL(item.url, self.location.origin)
    manifestURLs.push(url.href)

    if (regExp.test(item.url) || /^\/$/.test(item.url)) {
      const request = new Request(url.href, { credentials: 'same-origin' })
      cacheEntries.push(request)
      cacheManifestURLs.push(url.href)
    }
  }
}

const langDB = new LangDB()

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      if (!cacheEntries.length) await initManifest()

      return cache.addAll(cacheEntries)
    })
  )
})

self.addEventListener('activate', (event: ExtendableEvent) => {
  // clean up outdated runtime cache
  event.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      if (!cacheManifestURLs.length) await initManifest()

      cache.keys().then((keys) => {
        keys.forEach((request) => {
          // clean up those who are not listed in cacheManifestURLs
          !cacheManifestURLs.includes(request.url) && cache.delete(request)
        })
      })
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(async (response) => {
      // when the cache is hit, it returns directly to the cache
      if (response) return response
      if (!manifestURLs.length) await initManifest()
      const requestClone = event.request.clone()

      // otherwise create a new fetch request
      return fetch(requestClone)
        .then((response) => {
          const responseClone = response.clone()

          if (response.type !== 'basic' && response.status !== 200) {
            return response
          }

          // cache the data contained in the manifestURLs list
          manifestURLs.includes(requestClone.url) &&
            caches.open(cacheName).then((cache) => {
              cache.put(requestClone, responseClone)
            })
          return response
        })
        .catch((err) => {
          throw new Error(`Failed to load resource ${requestClone.url}, ${err}`)
        })
    })
  )
})

self.addEventListener('message', (event) => {
  if (event.data) {
    if (event.data.type === 'SKIP_WAITING') {
      self.skipWaiting()
    } else if (event.data.type === 'LANG') {
      langDB.setLang(event.data.lang)
    }
  }
})

clientsClaim()
