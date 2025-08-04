import { onBeforeUnmount, reactive } from 'vue'

export const useScreen = () => {
  const { visualViewport }: { visualViewport: any } = window
  const target = visualViewport || window
  const scrollingElement = document.scrollingElement || document.documentElement

  const screen = reactive({
    width: 0,
    height: 0,
    name: 'xs',

    sizes: {
      sm: 600,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },

    lt: {
      sm: true,
      md: true,
      lg: true,
      xl: true,
    },
    gt: {
      xs: false,
      sm: false,
      md: false,
      lg: false,
    },

    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const getSize = visualViewport
    ? () => [
        Math.max(window.innerWidth, scrollingElement.clientWidth),
        Math.max(window.innerHeight, scrollingElement.clientHeight),
      ]
    : () => [
        visualViewport!.width * visualViewport!.scale +
          window.innerWidth -
          scrollingElement.clientWidth,
        visualViewport!.height * visualViewport!.scale +
          window.innerHeight -
          scrollingElement.clientHeight,
      ]

  const update = function (force = false) {
    const [w, h] = getSize()
    if (h !== screen.height) {
      screen.height = h
    }
    if (w !== screen.width) {
      screen.width = w
    } else if (force !== true) {
      return
    }
    const s = screen.sizes
    screen.gt.xs = w > s.sm
    screen.gt.sm = w >= s.md
    screen.gt.md = w >= s.lg
    screen.gt.lg = w >= s.xl
    screen.lt.sm = w < s.sm
    screen.lt.md = w < s.md
    screen.lt.lg = w < s.lg
    screen.lt.xl = w < s.xl
    screen.xs = screen.lt.sm
    screen.sm = screen.gt.xs === true && screen.lt.md === true
    screen.md = screen.gt.sm === true && screen.lt.lg === true
    screen.lg = screen.gt.md === true && screen.lt.xl === true
    screen.xl = screen.gt.lg

    const sizeName =
      (screen.xs === true && 'xs') ||
      (screen.sm === true && 'sm') ||
      (screen.md === true && 'md') ||
      (screen.lg === true && 'lg') ||
      'xl'

    if (sizeName !== screen.name) {
      screen.name = sizeName
    }
  }

  const resizeHandler = () => {
    update(true)
  }

  const start = () => {
    update(true)
    target.addEventListener('resize', resizeHandler, { passive: true })
  }

  start()

  onBeforeUnmount(() => {
    target.removeEventListener('resize', resizeHandler, { passive: true })
  })

  return screen
}
