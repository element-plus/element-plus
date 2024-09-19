import type { Language } from '../index'

/** Norwegian / 挪威语 */
const nbNo: Language = {
  name: 'nb-no',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Tøm',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Nå',
      today: 'I dag',
      cancel: 'Avbryt',
      clear: 'Tøm',
      confirm: 'OK',
      selectDate: 'Velg dato',
      selectTime: 'Velg tidspunkt',
      startDate: 'Startdato',
      startTime: 'Starttidspunkt',
      endDate: 'Sluttdato',
      endTime: 'Sluttidspunkt',
      prevYear: 'I fjor',
      nextYear: 'Neste år',
      prevMonth: 'Forrige Måned',
      nextMonth: 'Neste Måned',
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'Mars',
      month4: 'April',
      month5: 'Mai',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Desember',
      week: 'uke',
      weeks: {
        sun: 'Søn',
        mon: 'Man',
        tue: 'Tir',
        wed: 'Ons',
        thu: 'Tor',
        fri: 'Fre',
        sat: 'Lør',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des',
      },
      // to be translated
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      // to be translated
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
      },
    },
    select: {
      loading: 'Laster',
      noMatch: 'Ingen samsvarende resulater',
      noData: 'Ingen resulater',
      placeholder: 'Velg',
    },
    mention: {
      loading: 'Laster',
    },
    cascader: {
      noMatch: 'Ingen samsvarende resultater',
      loading: 'Laster',
      placeholder: 'Velg',
      noData: 'Ingen resultater',
    },
    pagination: {
      goto: 'Gå til',
      pagesize: '/side',
      total: 'Total {total}',
      pageClassifier: '',
      page: 'Page', // to be translated
      prev: 'Go to previous page', // to be translated
      next: 'Go to next page', // to be translated
      currentPage: 'page {pager}', // to be translated
      prevPages: 'Previous {pager} pages', // to be translated
      nextPages: 'Next {pager} pages', // to be translated
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    messagebox: {
      title: 'Message', // to be translated
      confirm: 'OK',
      cancel: 'Avbryt',
      error: 'Ugyldig input',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'trykk på x for å slette',
      delete: 'Slett',
      preview: 'Forhåndsvisning',
      continue: 'Fortsett',
    },
    table: {
      emptyText: 'Ingen Data',
      confirmFilter: 'Bekreft',
      resetFilter: 'Tilbakestill',
      clearFilter: 'Alle',
      sumText: 'Sum',
    },
    tree: {
      emptyText: 'Ingen Data',
    },
    transfer: {
      noMatch: 'Ingen samsvarende data',
      noData: 'Ingen data',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Skriv inn nøkkelord',
      noCheckedFormat: '{total} gjenstander',
      hasCheckedFormat: '{checked}/{total} valgt',
    },
    image: {
      error: 'FEILET',
    },
    pageHeader: {
      title: 'Tilbake',
    },
    popconfirm: {
      confirmButtonText: 'Ja',
      cancelButtonText: 'Nei',
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
    // to be translated
    inputNumber: {
      decrease: 'decrease number',
      increase: 'increase number',
    },
    // to be translated
    dropdown: {
      toggleDropdown: 'Toggle Dropdown',
    },
    // to be translated
    dialog: {
      close: 'Close this dialog',
    },
    // to be translated
    drawer: {
      close: 'Close this dialog',
    },
    // to be translated
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value',
    },
    // to be translated
    tour: {
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
    },
  },
}

export default nbNo
