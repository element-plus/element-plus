export const sleep = (time = 0) =>
  new Promise((resolve) => setTimeout(resolve, time))
