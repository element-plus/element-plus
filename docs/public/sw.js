self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((t) => {
      return Promise.all(
        t.map((n) => {
          return caches.delete(n)
        })
      )
    })
  )
})
self.skipWaiting()
