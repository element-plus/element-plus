export default {
  name: 'kk',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Қабылдау',
      clear: 'Тазалау',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
      alphaDescription: 'alpha {alpha}, current color is {color}', // to be translated
      hueLabel: 'pick hue value', // to be translated
      hueDescription: 'hue {hue}, current color is {color}', // to be translated
      svLabel: 'pick saturation and brightness value', // to be translated
      svDescription:
        'saturation {saturation}, brightness {brightness}, current color is {color}', // to be translated
      predefineDescription: 'select {value} as the color', // to be translated
    },
    datepicker: {
      now: 'Қазір',
      today: 'Бүгін',
      cancel: 'Болдырмау',
      clear: 'Тазалау',
      confirm: 'Қабылдау',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Күнді таңдаңыз',
      selectTime: 'Сағатты таңдаңыз',
      startDate: 'Басталу күні',
      startTime: 'Басталу сағаты',
      endDate: 'Аяқталу күні',
      endTime: 'Аяқталу сағаты',
      prevYear: 'Алдыңғы жыл',
      nextYear: 'Келесі жыл',
      prevMonth: 'Алдыңғы ай',
      nextMonth: 'Келесі ай',
      year: 'Жыл',
      month1: 'Қаңтар',
      month2: 'Ақпан',
      month3: 'Наурыз',
      month4: 'Сәуір',
      month5: 'Мамыр',
      month6: 'Маусым',
      month7: 'Шілде',
      month8: 'Тамыз',
      month9: 'Қыркүйек',
      month10: 'Қазан',
      month11: 'Қараша',
      month12: 'Желтоқсан',
      weeks: {
        sun: 'Жек',
        mon: 'Дүй',
        tue: 'Сей',
        wed: 'Сәр',
        thu: 'Бей',
        fri: 'Жұм',
        sat: 'Сен',
      },
      weeksFull: {
        sun: 'Sunday', // to be translated
        mon: 'Monday', // to be translated
        tue: 'Tuesday', // to be translated
        wed: 'Wednesday', // to be translated
        thu: 'Thursday', // to be translated
        fri: 'Friday', // to be translated
        sat: 'Saturday', // to be translated
      },
      months: {
        jan: 'Қаң',
        feb: 'Ақп',
        mar: 'Нау',
        apr: 'Сәу',
        may: 'Мам',
        jun: 'Мау',
        jul: 'Шіл',
        aug: 'Там',
        sep: 'Қыр',
        oct: 'Қаз',
        nov: 'Қар',
        dec: 'Жел',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Жүктелуде',
      noMatch: 'Сәйкес деректер жоқ',
      noData: 'Деректер жоқ',
      placeholder: 'Таңдаңыз',
    },
    mention: {
      loading: 'Жүктелуде',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Сәйкес деректер жоқ',
      loading: 'Жүктелуде',
      placeholder: 'Таңдаңыз',
      noData: 'Деректер жоқ',
    },
    pagination: {
      goto: 'Бару',
      pagesize: '/page',
      total: 'Барлығы {total}',
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
    dialog: {
      close: 'Close this dialog', // to be translated
    },
    drawer: {
      close: 'Close this dialog', // to be translated
    },
    messagebox: {
      title: 'Хабар',
      confirm: 'Қабылдау',
      cancel: 'Болдырмау',
      error: 'Жарамсыз енгізулер',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Өшіруді басып өшіріңіз',
      delete: 'Өшіру',
      preview: 'Алдын ала қарау',
      continue: 'Жалғастыру',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Деректер жоқ',
      confirmFilter: 'Қабылдау',
      resetFilter: 'Қалпына келтіру',
      clearFilter: 'Барлығы',
      sumText: 'Сомасы',
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Деректер жоқ',
    },
    transfer: {
      noMatch: 'Сәйкес деректер жоқ',
      noData: 'Деректер жоқ',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Кілт сөзді енгізіңіз',
      noCheckedFormat: '{total} элэмэнт',
      hasCheckedFormat: '{checked}/{total} құсбелгісі қойылды',
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
  },
}
