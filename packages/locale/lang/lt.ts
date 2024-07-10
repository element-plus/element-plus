import type { Language } from '../index'

export const lt: Language = {
  name: 'lt',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Valyti',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Dabar',
      today: 'Šiandien',
      cancel: 'Atšaukti',
      clear: 'Valyti',
      confirm: 'OK',
      selectDate: 'Pasirink datą',
      selectTime: 'Pasirink laiką',
      startDate: 'Data nuo',
      startTime: 'Laikas nuo',
      endDate: 'Data iki',
      endTime: 'Laikas iki',
      prevYear: 'Metai atgal',
      nextYear: 'Metai į priekį',
      prevMonth: 'Mėn. atgal',
      nextMonth: 'Mėn. į priekį',
      year: '',
      month1: 'Sausis',
      month2: 'Vasaris',
      month3: 'Kovas',
      month4: 'Balandis',
      month5: 'Gegužė',
      month6: 'Birželis',
      month7: 'Liepa',
      month8: 'Rugpjūtis',
      month9: 'Rugsėjis',
      month10: 'Spalis',
      month11: 'Lapkritis',
      month12: 'Gruodis',
      week: 'savaitė',
      weeks: {
        sun: 'S.',
        mon: 'Pr.',
        tue: 'A.',
        wed: 'T.',
        thu: 'K.',
        fri: 'Pn.',
        sat: 'Š.',
      },
      months: {
        jan: 'Sau',
        feb: 'Vas',
        mar: 'Kov',
        apr: 'Bal',
        may: 'Geg',
        jun: 'Bir',
        jul: 'Lie',
        aug: 'Rugp',
        sep: 'Rugs',
        oct: 'Spa',
        nov: 'Lap',
        dec: 'Gruo',
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
      loading: 'Kraunasi',
      noMatch: 'Duomenų nerasta',
      noData: 'Nėra duomenų',
      placeholder: 'Pasirink',
    },
    cascader: {
      noMatch: 'Duomenų nerasta',
      loading: 'Kraunasi',
      placeholder: 'Pasirink',
      noData: 'Nėra duomenų',
    },
    pagination: {
      goto: 'Eiti į',
      pagesize: '/p',
      total: 'Viso {total}',
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
      title: 'Žinutė',
      confirm: 'OK',
      cancel: 'Atšaukti',
      error: 'Klaida įvestuose duomenyse',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'spauskite "Trinti" norėdami pašalinti',
      delete: 'Trinti',
      preview: 'Peržiūrėti',
      continue: 'Toliau',
    },
    table: {
      emptyText: 'Duomenų nerasta',
      confirmFilter: 'Patvirtinti',
      resetFilter: 'Atstatyti',
      clearFilter: 'Išvalyti',
      sumText: 'Suma',
    },
    tour: {
      next: 'Kitas',
      previous: 'Ankstesnis',
      finish: 'Baigti',
    },
    tree: {
      emptyText: 'Nėra duomenų',
    },
    transfer: {
      noMatch: 'Duomenų nerasta',
      noData: 'Nėra duomenų',
      titles: ['Sąrašas 1', 'Sąrašas 2'],
      filterPlaceholder: 'Įvesk raktažodį',
      noCheckedFormat: 'Viso: {total}',
      hasCheckedFormat: 'Pažymėta {checked} iš {total}',
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
  },
}

export default lt
