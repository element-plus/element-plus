import type { Language } from '../index'

const cs: Language = {
  name: 'cs',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Vymazat',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Teď',
      today: 'Dnes',
      cancel: 'Zrušit',
      clear: 'Vymazat',
      confirm: 'OK',
      selectDate: 'Vybrat datum',
      selectTime: 'Vybrat čas',
      startDate: 'Datum začátku',
      startTime: 'Čas začátku',
      endDate: 'Datum konce',
      endTime: 'Čas konce',
      prevYear: 'Předchozí rok',
      nextYear: 'Příští rok',
      prevMonth: 'Předchozí měsíc',
      nextMonth: 'Příští měsíc',
      week: 'Týden',
      year: 'Rok',
      month1: 'Leden',
      month2: 'Únor',
      month3: 'Březen',
      month4: 'Duben',
      month5: 'Květen',
      month6: 'Červen',
      month7: 'Červenec',
      month8: 'Srpen',
      month9: 'Září',
      month10: 'Říjen',
      month11: 'Listopad',
      month12: 'Prosinec',
      weeks: {
        sun: 'Ne',
        mon: 'Po',
        tue: 'Út',
        wed: 'St',
        thu: 'Čt',
        fri: 'Pá',
        sat: 'So',
      },
      months: {
        jan: 'Led',
        feb: 'Úno',
        mar: 'Bře',
        apr: 'Dub',
        may: 'Kvě',
        jun: 'Čer',
        jul: 'Čvc',
        aug: 'Srp',
        sep: 'Zář',
        oct: 'Říj',
        nov: 'Lis',
        dec: 'Pro',
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
      loading: 'Načítání',
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      placeholder: 'Vybrat',
    },
    mention: {
      loading: 'Načítání',
    },
    cascader: {
      noMatch: 'Žádná shoda',
      loading: 'Načítání',
      placeholder: 'Vybrat',
      noData: 'Žádná data',
    },
    pagination: {
      goto: 'Jít na',
      pagesize: 'na stranu',
      total: 'Celkem {total}',
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
      title: 'Zpráva',
      confirm: 'OK',
      cancel: 'Zrušit',
      error: 'Neplatný vstup',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Stisknout pro smazání',
      delete: 'Vymazat',
      preview: 'Náhled',
      continue: 'Pokračovat',
    },
    table: {
      emptyText: 'Žádná data',
      confirmFilter: 'Potvrdit',
      resetFilter: 'Resetovat',
      clearFilter: 'Vše',
      sumText: 'Celkem',
    },
    tree: {
      emptyText: 'Žádná data',
    },
    transfer: {
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      titles: ['Seznam 1', 'Seznam 2'],
      filterPlaceholder: 'Klíčové slovo',
      noCheckedFormat: '{total} položek',
      hasCheckedFormat: '{checked}/{total} vybráno',
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

export default cs
