import type { Language } from '../index'

export const hu: Language = {
  name: 'hu',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Törlés',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Most',
      today: 'Ma',
      cancel: 'Mégse',
      clear: 'Törlés',
      confirm: 'OK',
      selectDate: 'Dátum',
      selectTime: 'Időpont',
      startDate: 'Dátum-tól',
      startTime: 'Időpont-tól',
      endDate: 'Dátum-ig',
      endTime: 'Időpont-ig',
      prevYear: 'Előző év',
      nextYear: 'Következő év',
      prevMonth: 'Előző hónap',
      nextMonth: 'Következő hónap',
      year: '',
      month1: 'Január',
      month2: 'Február',
      month3: 'Március',
      month4: 'Április',
      month5: 'Május',
      month6: 'Június',
      month7: 'Július',
      month8: 'Augusztus',
      month9: 'Szeptember',
      month10: 'Október',
      month11: 'November',
      month12: 'December',
      weeks: {
        sun: 'Vas',
        mon: 'Hét',
        tue: 'Ked',
        wed: 'Sze',
        thu: 'Csü',
        fri: 'Pén',
        sat: 'Szo',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Már',
        apr: 'Ápr',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
        aug: 'Aug',
        sep: 'Szep',
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
      week: 'week',
    },
    select: {
      loading: 'Betöltés',
      noMatch: 'Nincs találat',
      noData: 'Nincs adat',
      placeholder: 'Válassz',
    },
    cascader: {
      noMatch: 'Nincs találat',
      loading: 'Betöltés',
      placeholder: 'Válassz',
      noData: 'Nincs adat',
    },
    pagination: {
      goto: 'Ugrás',
      pagesize: '/oldal',
      total: 'Össz {total}',
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
      title: 'Üzenet',
      confirm: 'OK',
      cancel: 'Mégse',
      error: 'Hibás adat',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'kattints a törléshez',
      delete: 'Törlés',
      preview: 'Előnézet',
      continue: 'Tovább',
    },
    table: {
      emptyText: 'Nincs adat',
      confirmFilter: 'Megerősít',
      resetFilter: 'Alaphelyet',
      clearFilter: 'Mind',
      sumText: 'Összeg',
    },
    tree: {
      emptyText: 'Nincs adat',
    },
    transfer: {
      noMatch: 'Nincs találat',
      noData: 'Nincs adat',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Kulcsszó',
      noCheckedFormat: '{total} elem',
      hasCheckedFormat: '{checked}/{total} kiválasztva',
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

export default hu
