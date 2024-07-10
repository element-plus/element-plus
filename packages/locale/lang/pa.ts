import type { Language } from '../index'

export const pa: Language = {
  name: 'pa',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'تایید',
      clear: 'پاکول',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'اوس',
      today: 'نن',
      cancel: 'ردول',
      clear: 'پاکول',
      confirm: 'تایید',
      selectDate: 'نیټه وټاکئ',
      selectTime: 'وخت وټاکئ',
      startDate: 'پیل نیټه',
      startTime: 'د پيل وخت',
      endDate: 'د پای نیټه',
      endTime: 'د پای وخت',
      prevYear: 'تیر کال',
      nextYear: 'راتلونکی کال',
      prevMonth: 'تیره میاشت',
      nextMonth: 'راتلونکې میاشت',
      year: 'کال',
      month1: 'جنوري',
      month2: 'فبروري',
      month3: 'مارچ',
      month4: 'اپریل',
      month5: 'می',
      month6: 'جون',
      month7: 'جولای',
      month8: 'اګست',
      month9: 'سپتمبر',
      month10: 'اکتوبر',
      month11: 'نومبر',
      month12: 'دسمبر',
      weeks: {
        sun: 'یکشنبه',
        mon: 'دوشنبه',
        tue: 'سه​ شنبه',
        wed: 'چهارشنبه',
        thu: 'پنج​شنبه',
        fri: 'جمعه',
        sat: 'شنبه',
      },
      months: {
        jan: 'جنوري',
        feb: 'فبروري',
        mar: 'مارچ',
        apr: 'اپریل',
        may: 'می',
        jun: 'جون',
        jul: 'جولای',
        aug: 'اګست',
        sep: 'سپتمبر',
        oct: 'اکتوبر',
        nov: 'نومبر',
        dec: 'دسمبر',
      },
      week: 'week', //  to be translated

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
      loading: 'بار کول',
      noMatch: 'هیڅه ونه موندل شول',
      noData: 'هیڅ معلومات نشته',
      placeholder: 'ځای لرونکی',
    },
    cascader: {
      noMatch: 'هیڅه ونه موندل شول',
      loading: 'بار کول',
      placeholder: 'ځای لرونکی',
      noData: 'هیڅ معلومات نشته',
    },
    pagination: {
      goto: 'ورتګ',
      pagesize: '/د پاڼې اندازه',
      total: 'مجموعه {total}',
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
      title: 'عنوان',
      confirm: 'تایید',
      cancel: 'لغوه کول',
      error: 'تيروتنه',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'د حذف کولو لپاره پاکه تڼۍ فشار کړئ',
      delete: 'ړنګول',
      preview: 'مخکتنه',
      continue: 'ادامه',
    },
    table: {
      emptyText: 'هیڅ معلومات ونه موندل شول',
      confirmFilter: 'تایید',
      resetFilter: 'پاکول',
      clearFilter: 'ټول',
      sumText: 'مجموعه',
    },
    tree: {
      emptyText: 'هیڅ معلومات ونه موندل شول',
    },
    transfer: {
      noMatch: 'هیڅه ونه موندل شول',
      noData: 'هیڅ معلومات نشته',
      titles: ['لیسټ 1', 'لیسټ 2'],
      filterPlaceholder: 'د متن کلیمې دننه کړئ',
      noCheckedFormat: '{total} توکي',
      hasCheckedFormat: '{checked} توکي از {total} توکي ټاکل شوی دي',
    },
    image: {
      error: 'د انځور پورته کولو کې ستونزه',
    },
    pageHeader: {
      title: 'بیرته راتګ',
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

export default pa
