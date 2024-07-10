import type { Language } from '../index'

export const ugCn: Language = {
  name: 'ug-cn',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'جەزملەش',
      clear: 'قۇرۇقداش',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'ھازىرقى ۋاقىت',
      today: 'بۈگۈن',
      cancel: 'بىكار قىلىش',
      clear: 'قۇرۇقداش',
      confirm: 'جەزملەش',
      selectDate: 'چىسلا تاللاڭ',
      selectTime: 'ۋاقىت تاللاڭ',
      startDate: 'باشلانغان چىسلا',
      startTime: 'باشلانغان ۋاقىت',
      endDate: 'ئاخىرلاشقان چىسلا',
      endTime: 'ئاخىرلاشقان ۋاقىت',
      prevYear: 'ئالدىنقى يىل',
      nextYear: 'كىيىنكى يىل',
      prevMonth: 'ئالدىنقى ئاي',
      nextMonth: 'كىيىنكى ئاي',
      year: '- يىل',
      month1: '1-ئاي',
      month2: '2-ئاي',
      month3: '3-ئاي',
      month4: '4-ئاي',
      month5: '5-ئاي',
      month6: '6-ئاي',
      month7: '7-ئاي',
      month8: '8-ئاي',
      month9: '9-ئاي',
      month10: '10-ئاي',
      month11: '11-ئاي',
      month12: '12-ئاي',
      week: 'week',
      weeks: {
        sun: 'يەكشەنبە',
        mon: 'دۈشەنبە',
        tue: 'سەيشەنبە',
        wed: 'چارشەنبە',
        thu: 'پەيشەنبە',
        fri: 'جۈمە',
        sat: 'شەنبە',
      },
      months: {
        jan: '1-ئاي',
        feb: '2-ئاي',
        mar: '3-ئاي',
        apr: '4-ئاي',
        may: '5-ئاي',
        jun: '6-ئاي',
        jul: '7-ئاي',
        aug: '8-ئاي',
        sep: '9-ئاي',
        oct: '10-ئاي',
        nov: '11-ئاي',
        dec: '12-ئاي',
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
      loading: 'يۈكلىنىۋاتىدۇ',
      noMatch: 'ئۇچۇر تېپىلمىدى',
      noData: 'ئۇچۇر يوق',
      placeholder: 'تاللاڭ',
    },
    cascader: {
      noMatch: 'ئۇچۇر تېپىلمىدى',
      loading: 'يۈكلىنىۋاتىدۇ',
      placeholder: 'تاللاڭ',
      noData: 'ئۇچۇر يوق',
    },
    pagination: {
      goto: 'كىيىنكى بەت',
      pagesize: 'تال/بەت',
      total: 'جەمئىي {total} تال',
      pageClassifier: 'بەت',
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
      title: 'ئەسكەرتىش',
      confirm: 'جەزملەش',
      cancel: 'بىكار قىلىش',
      error: 'كىرگۈزگەن ئۇچۇرىڭىزدا خاتالىق بار!',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'delete كۇنپكىسىنى بېسىپ ئۆچۈرەلەيسىز',
      delete: 'ئۆچۈرۈش',
      preview: 'رەسىمنى كۆرۈش',
      continue: 'رەسىم يوللاش',
    },
    table: {
      emptyText: 'ئۇچۇر يوق',
      confirmFilter: 'سۈزگۈچ',
      resetFilter: 'قايتا تولدۇرۇش',
      clearFilter: 'ھەممە',
      sumText: 'جەمئىي',
    },
    tree: {
      emptyText: 'ئۇچۇر يوق',
    },
    transfer: {
      noMatch: 'ئۇچۇر تېپىلمىدى',
      noData: 'ئۇچۇر يوق',
      titles: ['جەدۋەل 1', 'جەدۋەل 2'],
      filterPlaceholder: 'ئىزدىمەكچى بولغان مەزمۇننى كىرگۈزۈڭ',
      noCheckedFormat: 'جەمئىي {total} تۈر',
      hasCheckedFormat: 'تاللانغىنى {checked}/{total} تۈر',
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

export default ugCn
