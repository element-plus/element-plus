export const sendEvent = (
  action: string,
  label: string,
  value?: any,
  category?: string
): void => {
  const gtag = (window as any).gtag
  if (gtag) {
    gtag('event', action, {
      event_label: label,
      event_value: value,
      event_category: category,
    })
  }
}
