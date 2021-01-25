import dayjs from 'dayjs'

// expose Day.js to window to make full bundle i18n work
(window as any).dayjs = dayjs
