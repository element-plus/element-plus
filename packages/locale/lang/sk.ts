import type { Language } from '../index'

const sk: Language = {
  name: 'sk',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Zmazať',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Teraz',
      today: 'Dnes',
      cancel: 'Zrušiť',
      clear: 'Zmazať',
      confirm: 'OK',
      selectDate: 'Vybrať dátum',
      selectTime: 'Vybrať čas',
      startDate: 'Dátum začiatku',
      startTime: 'Čas začiatku',
      endDate: 'Dátum konca',
      endTime: 'Čas konca',
      prevYear: 'Predošlý rok',
      nextYear: 'Ďalší rok',
      prevMonth: 'Predošlý mesiac',
      nextMonth: 'Ďalší mesiac',
      week: 'Týždeň',
      year: 'Rok',
      month1: 'Január',
      month2: 'Február',
      month3: 'Marec',
      month4: 'Apríl',
      month5: 'Máj',
      month6: 'Jún',
      month7: 'Júl',
      month8: 'August',
      month9: 'September',
      month10: 'Október',
      month11: 'November',
      month12: 'December',
      weeks: {
        sun: 'Ne',
        mon: 'Po',
        tue: 'Ut',
        wed: 'St',
        thu: 'Št',
        fri: 'Pi',
        sat: 'So',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
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
      loading: 'Načítavanie',
      noMatch: 'Žiadna zhoda',
      noData: 'Žiadne dáta',
      placeholder: 'Vybrať',
    },
    mention: {
      loading: 'Načítavanie',
    },
    cascader: {
      noMatch: 'Žiadna zhoda',
      loading: 'Načítavanie',
      placeholder: 'Vybrať',
      noData: 'Žiadne dáta',
    },
    pagination: {
      goto: 'Choď na',
      pagesize: 'na stranu',
      total: 'Všetko {total}',
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
      title: 'Správa',
      confirm: 'OK',
      cancel: 'Zrušiť',
      error: 'Neplatný vstup',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'pre odstránenie stisni klávesu Delete',
      delete: 'Vymazať',
      preview: 'Prehliadať',
      continue: 'Pokračovať',
    },
    table: {
      emptyText: 'Žiadne dáta',
      confirmFilter: 'Potvrdiť',
      resetFilter: 'Zresetovať',
      clearFilter: 'Všetko',
      sumText: 'Spolu',
    },
    tree: {
      emptyText: 'Žiadne dáta',
    },
    transfer: {
      noMatch: 'Žiadna zhoda',
      noData: 'Žiadne dáta',
      titles: ['Zoznam 1', 'Zoznam 2'],
      filterPlaceholder: 'Filtrovať podľa',
      noCheckedFormat: '{total} položiek',
      hasCheckedFormat: '{checked}/{total} označených',
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

export default sk
