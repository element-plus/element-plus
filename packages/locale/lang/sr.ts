export default {
  name: 'sr',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Поништи',
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
      now: 'Сада',
      today: 'Данас',
      cancel: 'Откажи',
      clear: 'Бриши',
      confirm: 'OK',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Изабери датум',
      selectTime: 'Изабери време',
      startDate: 'Датум почетка',
      startTime: 'Време почетка',
      endDate: 'Датум завршетка',
      endTime: 'Време завршетка',
      prevYear: 'Претходна година',
      nextYear: 'Следећа година',
      prevMonth: 'Претходни месец',
      nextMonth: 'Следећи месец',
      year: 'година',
      month1: 'јануар',
      month2: 'фебруар',
      month3: 'март',
      month4: 'април',
      month5: 'мај',
      month6: 'јун',
      month7: 'јул',
      month8: 'август',
      month9: 'септембар',
      month10: 'октобар',
      month11: 'новембар',
      month12: 'децембар',
      weeks: {
        sun: 'Нед',
        mon: 'Пон',
        tue: 'Уто',
        wed: 'Сре',
        thu: 'Чет',
        fri: 'Пет',
        sat: 'Суб',
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
        jan: 'јан',
        feb: 'феб',
        mar: 'мар',
        apr: 'апр',
        may: 'мај',
        jun: 'јун',
        jul: 'јул',
        aug: 'авг',
        sep: 'сеп',
        oct: 'окт',
        nov: 'нов',
        dec: 'дец',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Учитавање',
      noMatch: 'Нема резултата',
      noData: 'Нема података',
      placeholder: 'Изабери',
    },
    mention: {
      loading: 'Учитавање',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Нема резултата',
      loading: 'Учитавање',
      placeholder: 'Изабери',
      noData: 'Нема података',
    },
    pagination: {
      goto: 'Иди на',
      pagesize: '/страни',
      total: 'Укупно {total}',
      pageClassifier: '',
      page: 'Страна',
      prev: 'Иди на претходну страну',
      next: 'Иди на следећу страну',
      currentPage: 'страна {pager}',
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
      title: 'Порука',
      confirm: 'OK',
      cancel: 'Откажи',
      error: 'Неисправан унос',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'притисни БРИШИ да обришеш',
      delete: 'Бриши',
      preview: 'Види',
      continue: 'Настави',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Нема података',
      confirmFilter: 'Потврди',
      resetFilter: 'Ресетуј',
      clearFilter: 'Све',
      sumText: 'Збир',
      selectAllLabel: 'Select all rows', // to be translated
      selectRowLabel: 'Select this row', // to be translated
      expandRowLabel: 'Expand this row', // to be translated
      collapseRowLabel: 'Collapse this row', // to be translated
      sortLabel: 'Sort by {column}', // to be translated
      filterLabel: 'Filter by {column}', // to be translated
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Нема података',
    },
    transfer: {
      noMatch: 'Нема резултата',
      noData: 'Нема података',
      titles: ['Листа 1', 'Листа 2'],
      filterPlaceholder: 'Унеси кључну реч',
      noCheckedFormat: '{total} ставки',
      hasCheckedFormat: '{checked}/{total} обележених',
    },
    image: {
      error: 'НЕУСПЕШНО',
    },
    pageHeader: {
      title: 'Назад',
    },
    popconfirm: {
      confirmButtonText: 'Да',
      cancelButtonText: 'Не',
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
  },
}
