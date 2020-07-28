
const $ELEMENT: Record<string, unknown> = { }

const setConfig = (key: string, value: unknown): void => {
  $ELEMENT[key] = value
}

const getConfig = (key: string): unknown => {
  return $ELEMENT[key]
}

export {
  getConfig,
  setConfig,
}
