import type { Language } from '../index'

const sl: Language = {
  name: 'sl',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'V redu',
      clear: 'Počisti',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Zdaj',
      today: 'Danes',
      cancel: 'Prekliči',
      clear: 'Počisti',
      confirm: 'Potrdi',
      selectDate: 'Izberi datum',
      selectTime: 'Izberi čas',
      startDate: 'Začetni datum',
      startTime: 'Začetni čas',
      endDate: 'Končni datum',
      endTime: 'Končni čas',
      prevYear: 'Prejšnje leto',
      nextYear: 'Naslednje leto',
      prevMonth: 'Prejšnji mesec',
      nextMonth: 'Naslednji mesec',
      year: '',
      month1: 'Jan',
      month2: 'Feb',
      month3: 'Mar',
      month4: 'Apr',
      month5: 'Maj',
      month6: 'Jun',
      month7: 'Jul',
      month8: 'Avg',
      month9: 'Sep',
      month10: 'Okt',
      month11: 'Nov',
      month12: 'Dec',
      week: 'teden',
      weeks: {
        sun: 'Ned',
        mon: 'Pon',
        tue: 'Tor',
        wed: 'Sre',
        thu: 'Čet',
        fri: 'Pet',
        sat: 'Sob',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Avg',
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
      loading: 'Nalaganje',
      noMatch: 'Ni ustreznih podatkov',
      noData: 'Ni podatkov',
      placeholder: 'Izberi',
    },
    mention: {
      loading: 'Nalaganje',
    },
    cascader: {
      noMatch: 'Ni ustreznih podatkov',
      loading: 'Nalaganje',
      placeholder: 'Izberi',
      noData: 'Ni podatkov',
    },
    pagination: {
      goto: 'Pojdi na',
      pagesize: '/stran',
      total: 'Skupno {total}',
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
      title: 'Sporočilo',
      confirm: 'V redu',
      cancel: 'Prekliči',
      error: 'Nedovoljen vnos',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Izbriši',
      preview: 'Predogled',
      continue: 'Nadaljuj',
    },
    table: {
      emptyText: 'Ni podatkov',
      confirmFilter: 'Potrdi',
      resetFilter: 'Ponastavi',
      clearFilter: 'Vse',
      sumText: 'Skupno',
    },
    tree: {
      emptyText: 'Ni podatkov',
    },
    transfer: {
      noMatch: 'Ni ustreznih podatkov',
      noData: 'Ni podatkov',
      titles: ['Seznam 1', 'Seznam 2'],
      filterPlaceholder: 'Vnesi ključno besedo',
      noCheckedFormat: '{total} elementov',
      hasCheckedFormat: '{checked}/{total} izbranih',
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

export default sl
