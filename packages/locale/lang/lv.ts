import type { Language } from '../index'

export const lv: Language = {
  name: 'lv',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Labi',
      clear: 'Notīrīt',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Tagad',
      today: 'Šodien',
      cancel: 'Atcelt',
      clear: 'Notīrīt',
      confirm: 'Labi',
      selectDate: 'Izvēlēties datumu',
      selectTime: 'Izvēlēties laiku',
      startDate: 'Sākuma datums',
      startTime: 'Sākuma laiks',
      endDate: 'Beigu datums',
      endTime: 'Beigu laiks',
      prevYear: 'Iepriekšējais gads',
      nextYear: 'Nākamais gads',
      prevMonth: 'Iepriekšējais mēnesis',
      nextMonth: 'Nākamais mēnesis',
      year: '',
      month1: 'Janvāris',
      month2: 'Februāris',
      month3: 'Marts',
      month4: 'Aprīlis',
      month5: 'Maijs',
      month6: 'Jūnijs',
      month7: 'Jūlijs',
      month8: 'Augusts',
      month9: 'Septembris',
      month10: 'Oktobris',
      month11: 'Novembris',
      month12: 'Decembris',
      week: 'nedēļa',
      weeks: {
        sun: 'Sv',
        mon: 'Pr',
        tue: 'Ot',
        wed: 'Tr',
        thu: 'Ce',
        fri: 'Pk',
        sat: 'Se',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jūn',
        jul: 'Jūl',
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
      loading: 'Ielādē',
      noMatch: 'Nav atbilstošu datu',
      noData: 'Nav datu',
      placeholder: 'Izvēlēties',
    },
    cascader: {
      noMatch: 'Nav atbilstošu datu',
      loading: 'Ielādē',
      placeholder: 'Izvēlēties',
      noData: 'Nav datu',
    },
    pagination: {
      goto: 'Iet uz',
      pagesize: '/lapa',
      total: 'Kopā {total}',
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
      title: 'Paziņojums',
      confirm: 'Labi',
      cancel: 'Atcelt',
      error: 'Nederīga ievade',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Nospiediet dzēst lai izņemtu',
      delete: 'Dzēst',
      preview: 'Priekšskatīt',
      continue: 'Turpināt',
    },
    table: {
      emptyText: 'Nav datu',
      confirmFilter: 'Apstiprināt',
      resetFilter: 'Atiestatīt',
      clearFilter: 'Visi',
      sumText: 'Summa',
    },
    tree: {
      emptyText: 'Nav datu',
    },
    transfer: {
      noMatch: 'Nav atbilstošu datu',
      noData: 'Nav datu',
      titles: ['Saraksts 1', 'Saraksts 2'],
      filterPlaceholder: 'Ievadīt atslēgvārdu',
      noCheckedFormat: '{total} vienības',
      hasCheckedFormat: '{checked}/{total} atzīmēti',
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

export default lv
