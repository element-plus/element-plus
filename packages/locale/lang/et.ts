import type { Language } from '../index'

const et: Language = {
  name: 'et',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Tühjenda',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Praegu',
      today: 'Täna',
      cancel: 'Tühista',
      clear: 'Tühjenda',
      confirm: 'OK',
      selectDate: 'Vali kuupäev',
      selectTime: 'Vali kellaaeg',
      startDate: 'Alguskuupäev',
      startTime: 'Algusaeg',
      endDate: 'Lõpukuupäev',
      endTime: 'Lõpuaeg',
      prevYear: 'Eelmine aasta',
      nextYear: 'Järgmine aasta',
      prevMonth: 'Eelmine kuu',
      nextMonth: 'Järgmine kuu',
      year: '',
      month1: 'Jaanuar',
      month2: 'Veebruar',
      month3: 'Märts',
      month4: 'Aprill',
      month5: 'Mai',
      month6: 'Juuni',
      month7: 'Juuli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktoober',
      month11: 'November',
      month12: 'Detsember',
      week: 'nädal',
      weeks: {
        sun: 'P',
        mon: 'E',
        tue: 'T',
        wed: 'K',
        thu: 'N',
        fri: 'R',
        sat: 'L',
      },
      months: {
        jan: 'Jaan',
        feb: 'Veeb',
        mar: 'Mär',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Juun',
        jul: 'Juul',
        aug: 'Aug',
        sep: 'Sept',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dets',
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
      loading: 'Laadimine',
      noMatch: 'Sobivad andmed puuduvad',
      noData: 'Andmed puuduvad',
      placeholder: 'Vali',
    },
    mention: {
      loading: 'Laadimine',
    },
    cascader: {
      noMatch: 'Sobivad andmed puuduvad',
      loading: 'Laadimine',
      placeholder: 'Vali',
      noData: 'Andmed puuduvad',
    },
    pagination: {
      goto: 'Mine lehele',
      pagesize: '/page',
      total: 'Kokku {total}',
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
      title: 'Teade',
      confirm: 'OK',
      cancel: 'Tühista',
      error: 'Vigane sisend',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Vajuta "Kustuta", et eemaldada',
      delete: 'Kustuta',
      preview: 'Eelvaate',
      continue: 'Jätka',
    },
    table: {
      emptyText: 'Andmed puuduvad',
      confirmFilter: 'Kinnita',
      resetFilter: 'Taasta',
      clearFilter: 'Kõik',
      sumText: 'Summa',
    },
    tree: {
      emptyText: 'Andmed puuduvad',
    },
    transfer: {
      noMatch: 'Sobivad andmed puuduvad',
      noData: 'Andmed puuduvad',
      titles: ['Loend 1', 'Loend 2'],
      filterPlaceholder: 'Sisesta märksõna',
      noCheckedFormat: '{total} objekti',
      hasCheckedFormat: '{checked}/{total} valitud',
    },
    image: {
      error: 'Ebaõnnestus',
    },
    pageHeader: {
      title: 'Tagasi',
    },
    popconfirm: {
      confirmButtonText: 'Jah',
      cancelButtonText: 'Ei',
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

export default et
