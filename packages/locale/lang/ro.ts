import type { Language } from '../index'

const ro: Language = {
  name: 'ro',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Șterge',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Acum',
      today: 'Azi',
      cancel: 'Anulează',
      clear: 'Șterge',
      confirm: 'OK',
      selectDate: 'Selectează data',
      selectTime: 'Selectează ora',
      startDate: 'Data de început',
      startTime: 'Ora de început',
      endDate: 'Data de sfârșit',
      endTime: 'Ora de sfârșit',
      prevYear: 'Anul trecut',
      nextYear: 'Anul următor',
      prevMonth: 'Luna trecută',
      nextMonth: 'Luna următoare',
      year: '',
      month1: 'Ianuarie',
      month2: 'Februarie',
      month3: 'Martie',
      month4: 'Aprilie',
      month5: 'Mai',
      month6: 'Iunie',
      month7: 'Iulie',
      month8: 'August',
      month9: 'Septembrie',
      month10: 'Octombrie',
      month11: 'Noiembrie',
      month12: 'Decembrie',
      week: 'week',
      weeks: {
        sun: 'Du',
        mon: 'Lu',
        tue: 'Ma',
        wed: 'Mi',
        thu: 'Jo',
        fri: 'Vi',
        sat: 'Sâ',
      },
      months: {
        jan: 'Ian',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Iun',
        jul: 'Iul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Noi',
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
      loading: 'Se încarcă',
      noMatch: 'Nu există date potrivite',
      noData: 'Nu există date',
      placeholder: 'Selectează',
    },
    mention: {
      loading: 'Se încarcă',
    },
    cascader: {
      noMatch: 'Nu există date potrivite',
      loading: 'Se încarcă',
      placeholder: 'Selectează',
      noData: 'Nu există date',
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/pagina',
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
      title: 'Mesaj',
      confirm: 'OK',
      cancel: 'Anulează',
      error: 'Date introduse eronate',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'apăsați pe ștergeți pentru a elimina',
      delete: 'șterge',
      preview: 'previzualizare',
      continue: 'continuă',
    },
    table: {
      emptyText: 'Nu există date',
      confirmFilter: 'Confirmă',
      resetFilter: 'Resetează',
      clearFilter: 'Tot',
      sumText: 'Suma',
    },
    tree: {
      emptyText: 'Nu există date',
    },
    transfer: {
      noMatch: 'Nu există date potrivite',
      noData: 'Nu există date',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Introduceți cuvântul cheie',
      noCheckedFormat: '{total} elemente',
      hasCheckedFormat: '{checked}/{total} verificate',
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

export default ro
