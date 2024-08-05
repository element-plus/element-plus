import type { Language } from '../index'

const hr: Language = {
  name: 'hr',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Očisti',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Sada',
      today: 'Danas',
      cancel: 'Otkaži',
      clear: 'Očisti',
      confirm: 'OK',
      selectDate: 'Odaberi datum',
      selectTime: 'Odaberi vrijeme',
      startDate: 'Datum početka',
      startTime: 'Vrijeme početka',
      endDate: 'Datum završetka',
      endTime: 'Vrijeme završetka',
      prevYear: 'Prethodna godina',
      nextYear: 'Sljedeća godina',
      prevMonth: 'Prethodni mjesec',
      nextMonth: 'Sljedeći mjesec',
      year: '',
      month1: 'Siječanj',
      month2: 'Veljača',
      month3: 'Ožujak',
      month4: 'Travanj',
      month5: 'Svibanj',
      month6: 'Lipanj',
      month7: 'Srpanj',
      month8: 'Kolovoz',
      month9: 'Rujan',
      month10: 'Listopad',
      month11: 'Studeni',
      month12: 'Prosinac',
      week: 'tjedan',
      weeks: {
        sun: 'Ned',
        mon: 'Pon',
        tue: 'Uto',
        wed: 'Sri',
        thu: 'Čet',
        fri: 'Pet',
        sat: 'Sub',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
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
      loading: 'Učitavanje',
      noMatch: 'Nema pronađenih podataka',
      noData: 'Nema podataka',
      placeholder: 'Izaberi',
    },
    mention: {
      loading: 'Učitavanje',
    },
    cascader: {
      noMatch: 'Nema pronađenih podataka',
      loading: 'Učitavanje',
      placeholder: 'Izaberi',
      noData: 'Nema podataka',
    },
    pagination: {
      goto: 'Idi na',
      pagesize: '/stranica',
      total: 'Ukupno {total}',
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
      title: 'Poruka',
      confirm: 'OK',
      cancel: 'Otkaži',
      error: 'Pogrešan unos',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'pritisnite izbriši za brisanje',
      delete: 'Izbriši',
      preview: 'Pregled',
      continue: 'Nastavak',
    },
    table: {
      emptyText: 'Nema podataka',
      confirmFilter: 'Potvrdi',
      resetFilter: 'Resetiraj',
      clearFilter: 'Sve',
      sumText: 'Suma',
    },
    tree: {
      emptyText: 'Nema podataka',
    },
    transfer: {
      noMatch: 'Nema pronađenih podataka',
      noData: 'Nema podataka',
      titles: ['Lista 1', 'Lista 2'], // to be translated
      filterPlaceholder: 'Unesite ključnu riječ', // to be translated
      noCheckedFormat: '{total} stavki', // to be translated
      hasCheckedFormat: '{checked}/{total} checked', // to be translated
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

export default hr
