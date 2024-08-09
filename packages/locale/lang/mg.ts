import type { Language } from '../index'

/** Madagascar / 马达加斯加 */
const mg: Language = {
  name: 'mg',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'ENY',
      clear: 'Fafana',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Zao',
      today: 'Androany',
      cancel: 'Hanafoana',
      clear: 'Fafana',
      confirm: 'ENY',
      selectDate: 'Misafidy daty',
      selectTime: 'Misafidy ora',
      startDate: 'Daty fanombohana',
      startTime: 'Ora fanombohana',
      endDate: 'Daty farany',
      endTime: 'Ora farany',
      prevYear: 'Taona teo aloha',
      nextYear: 'Taona manaraka',
      prevMonth: 'Volana teo aloha',
      nextMonth: 'Volana manaraka',
      year: '',
      month1: 'Janoary',
      month2: 'Febroary',
      month3: 'Martsa',
      month4: 'Aprily',
      month5: 'May',
      month6: 'Jona',
      month7: 'Jolay',
      month8: 'Aogositra',
      month9: 'Septambra',
      month10: 'Oktobra',
      month11: 'Novambra',
      month12: 'Desambra',
      week: 'herinandro',
      weeks: {
        sun: 'Lad',
        mon: 'Ala',
        tue: 'Tal',
        wed: 'Lar',
        thu: 'Lak',
        fri: 'Zom',
        sat: 'Sab',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jon',
        jul: 'Jol',
        aug: 'Aog',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des',
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
      loading: 'Eo ampiandrasana',
      noMatch: 'Tsy misy angona mifanentana',
      noData: 'Tsy misy angona',
      placeholder: 'Safidy',
    },
    mention: {
      loading: 'Eo ampiandrasana',
    },
    cascader: {
      noMatch: 'Tsy misy angona mifanentana',
      loading: 'Eo ampiandrasana',
      placeholder: 'Safidy',
      noData: 'Tsy misy angona',
    },
    pagination: {
      goto: 'Mandeha any',
      pagesize: '/page',
      total: 'Totaly {total}',
      pageClassifier: '',
      page: 'Page', // to be translated
      prev: 'Go to previous page', // to be translated
      next: 'Go to next page', // to be translated
      currentPage: 'page {pager}', // to be translated
      prevPages: 'Previous {pager} pages', // to be translated
      nextPages: 'Next {pager} pages', // to be translated
      deprecationWarning:
        'Fampiasana tsy ampiasaina intsony no hita, azafady mba jereo ny tahirin-kevitra el-pagination raha mila fanazavana fanampiny',
    },
    messagebox: {
      title: 'Hafatra',
      confirm: 'ENY',
      cancel: 'Hanafoana',
      error: 'Fampidirana tsy ara-dalàna',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'tsindrio fafana raha hanala',
      delete: 'Fafana',
      preview: 'Topi-maso',
      continue: 'Hanoy',
    },
    table: {
      emptyText: 'Tsy misy angona',
      confirmFilter: 'Manamarina',
      resetFilter: 'Averina',
      clearFilter: 'Rehetra',
      sumText: 'Atambatra',
    },
    tree: {
      emptyText: 'Tsy misy angona',
    },
    transfer: {
      noMatch: 'Tsy misy angona mifanentana',
      noData: 'Tsy misy angona',
      titles: ['Lisitra 1', 'Lisitra 2'], // to be translated
      filterPlaceholder: 'Ampidiro teny fanalahidy', // to be translated
      noCheckedFormat: '{total} zavatra', // to be translated
      hasCheckedFormat: '{checked}/{total} voamarina', // to be translated
    },
    image: {
      error: 'TSY NAHOMBY',
    },
    pageHeader: {
      title: 'Miverina', // to be translated
    },
    popconfirm: {
      confirmButtonText: 'Eny',
      cancelButtonText: 'Tsy',
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

export default mg
