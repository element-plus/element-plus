import type { Language } from '../index'

export const pl: Language = {
  name: 'pl',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Wyczyść',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Teraz',
      today: 'Dzisiaj',
      cancel: 'Anuluj',
      clear: 'Wyczyść',
      confirm: 'OK',
      selectDate: 'Wybierz datę',
      selectTime: 'Wybierz godzinę',
      startDate: 'Data początkowa',
      startTime: 'Godzina początkowa',
      endDate: 'Data końcowa',
      endTime: 'Czas końcowa',
      prevYear: 'Poprzedni rok',
      nextYear: 'Następny rok',
      prevMonth: 'Poprzedni miesiąc',
      nextMonth: 'Następny miesiąc',
      year: 'rok',
      month1: 'styczeń',
      month2: 'luty',
      month3: 'marzec',
      month4: 'kwiecień',
      month5: 'maj',
      month6: 'czerwiec',
      month7: 'lipiec',
      month8: 'sierpień',
      month9: 'wrzesień',
      month10: 'październik',
      month11: 'listopad',
      month12: 'grudzień',
      week: 'tydzień',
      weeks: {
        sun: 'niedz.',
        mon: 'pon.',
        tue: 'wt.',
        wed: 'śr.',
        thu: 'czw.',
        fri: 'pt.',
        sat: 'sob.',
      },
      months: {
        jan: 'STY',
        feb: 'LUT',
        mar: 'MAR',
        apr: 'KWI',
        may: 'MAJ',
        jun: 'CZE',
        jul: 'LIP',
        aug: 'SIE',
        sep: 'WRZ',
        oct: 'PAŹ',
        nov: 'LIS',
        dec: 'GRU',
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
      loading: 'Ładowanie',
      noMatch: 'Brak dopasowań',
      noData: 'Brak danych',
      placeholder: 'Wybierz',
    },
    cascader: {
      noMatch: 'Brak dopasowań',
      loading: 'Ładowanie',
      placeholder: 'Wybierz',
      noData: 'Brak danych',
    },
    pagination: {
      goto: 'Idź do',
      pagesize: '/stronę',
      total: 'Wszystkich {total}',
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
      title: 'Wiadomość',
      confirm: 'OK',
      cancel: 'Anuluj',
      error: 'Wiadomość zawiera niedozwolone znaki',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'kliknij kasuj aby usunąć',
      delete: 'Kasuj',
      preview: 'Podgląd',
      continue: 'Kontynuuj',
    },
    table: {
      emptyText: 'Brak danych',
      confirmFilter: 'Potwierdź',
      resetFilter: 'Resetuj',
      clearFilter: 'Wszystko',
      sumText: 'Razem',
    },
    tour: {
      next: 'Dalej',
      previous: 'Wróć',
      finish: 'Zakończ',
    },
    tree: {
      emptyText: 'Brak danych',
    },
    transfer: {
      noMatch: 'Brak dopasowań',
      noData: 'Brak danych',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Wpisz szukaną frazę',
      noCheckedFormat: 'razem: {total}',
      hasCheckedFormat: 'wybranych: {checked}/{total}',
    },
    image: {
      error: 'BŁĄD',
    },
    pageHeader: {
      title: 'Wstecz',
    },
    popconfirm: {
      confirmButtonText: 'Tak',
      cancelButtonText: 'Nie',
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

export default pl
