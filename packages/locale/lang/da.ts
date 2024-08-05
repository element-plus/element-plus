import type { Language } from '../index'

const da: Language = {
  name: 'da',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Ryd',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Nu',
      today: 'I dag',
      cancel: 'Annuller',
      clear: 'Ryd',
      confirm: 'OK',
      selectDate: 'Vælg dato',
      selectTime: 'Vælg tidspunkt',
      startDate: 'Startdato',
      startTime: 'Starttidspunkt',
      endDate: 'Slutdato',
      endTime: 'Sluttidspunkt',
      prevYear: 'Forrige år',
      nextYear: 'Næste år',
      prevMonth: 'Forrige måned',
      nextMonth: 'Næste måned',
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'Marts',
      month4: 'April',
      month5: 'Maj',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'December',
      week: 'uge',
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
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec',
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
      loading: 'Henter',
      noMatch: 'Ingen matchende data',
      noData: 'Ingen data',
      placeholder: 'Vælg',
    },
    mention: {
      loading: 'Henter',
    },
    cascader: {
      noMatch: 'Ingen matchende data',
      loading: 'Henter',
      placeholder: 'Vælg',
      noData: 'Ingen data',
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
      nextPages: 'Next {pager} pages',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    messagebox: {
      title: 'Message', // to be translated
      confirm: 'OK',
      cancel: 'Annuller',
      error: 'Ugyldig input',
      close: 'Close this dialog',
    },
    upload: {
      deleteTip: 'tryk slet for at fjerne',
      delete: 'Slet',
      preview: 'Forhåndsvisning',
      continue: 'Fortsæt',
    },
    table: {
      emptyText: 'Ingen data',
      confirmFilter: 'Bekræft',
      resetFilter: 'Nulstil',
      clearFilter: 'Alle',
      sumText: 'Sum',
    },
    tree: {
      emptyText: 'Ingen data',
    },
    transfer: {
      noMatch: 'Ingen matchende data',
      noData: 'Ingen data',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Indtast søgeord',
      noCheckedFormat: '{total} emner',
      hasCheckedFormat: '{checked}/{total} valgt',
    },
    image: {
      error: 'FAILED', // to be translated
    },
    pageHeader: {
      title: 'Back', // to be translated
    },
    popconfirm: {
      confirmButtonText: 'Yes', // to be translated
      cancelButtonText: 'No', // to be translated
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

export default da
