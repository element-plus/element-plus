// to expose Day.js to window to make full bundle i18n work
import dayjs from 'dayjs'

(window as any).dayjs = dayjs
