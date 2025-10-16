export default {
  name: 'ky',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Мурунку',
      clear: 'ачык',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
      alphaDescription: 'alpha {alpha}, current color is {color}', // to be translated
      hueLabel: 'pick hue value', // to be translated
      hueDescription: 'hue {hue}, current color is {color}', // to be translated
    },
    datepicker: {
      now: 'азыр',
      today: 'бүгүн',
      cancel: 'жокко чыгарылды',
      clear: 'ачык',
      confirm: 'белгилөө',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'дата',
      selectTime: 'тандоо убактысы',
      startDate: 'Башталган датасы',
      startTime: 'Start убакыт',
      endDate: 'Бүткөн датасы',
      endTime: 'End убакыт',
      prevYear: 'өткөн жылы',
      nextYear: 'бир жылдан кийин',
      prevMonth: 'Өткөн айда',
      nextMonth: 'Кийинки ай',
      year: 'жыл',
      month1: 'биринчи ай',
      month2: 'Экинчи айда',
      month3: 'Үчүнчү айда',
      month4: 'Төртүнчү айда',
      month5: 'бешинчи айда',
      month6: 'Алгачкы алты ай',
      month7: 'жетинчи айда',
      month8: 'сегизинчи ай',
      month9: 'Алгачкы тогуз ай',
      month10: 'онунчу айда',
      month11: 'он биринчи ай',
      month12: 'он экинчи айда',
      weeks: {
        sun: 'жети жума',
        mon: 'дүйшөмбү',
        tue: 'шейшемби',
        wed: 'шаршемби',
        thu: 'бейшемби',
        fri: 'жума',
        sat: 'ишемби',
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
        jan: 'биринчи ай',
        feb: 'Экинчи айда',
        mar: 'Үчүнчү айда',
        apr: 'Төртүнчү айда',
        may: 'бешинчи айда',
        jun: 'Алгачкы алты ай',
        jul: 'жетинчи айда',
        aug: 'сегизинчи ай',
        sep: 'Алгачкы тогуз ай',
        oct: 'онунчу айда',
        nov: 'он биринчи ай',
        dec: 'он экинчи айда',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Жүктөлүүдө',
      noMatch: 'Дал келген маалыматтар',
      noData: 'маалымат жок',
      placeholder: 'тандоо',
    },
    mention: {
      loading: 'Жүктөлүүдө',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Дал келген маалыматтар',
      loading: 'Жүктөлүүдө',
      placeholder: 'тандоо',
      noData: 'маалымат жок',
    },
    pagination: {
      goto: 'Мурунку',
      pagesize: 'бир',
      total: 'бүтүндөй {total} сан ',
      pageClassifier: 'бет',
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
      title: 'тез',
      confirm: 'белгилөө',
      cancel: 'жокко чыгарылды',
      error: 'Маалыматтарды киргизүү мыйзамдуу эмес!',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Жок кылуу баскычын басуу жок',
      delete: 'жок кылуу',
      preview: 'ЖМКнын картинки',
      continue: 'жүктөп бер',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'маалымат жок',
      confirmFilter: 'чыпка',
      resetFilter: 'кайра орнотуу',
      clearFilter: 'бүткөн',
      sumText: 'Бардыгы болуп',
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'маалымат жок',
    },
    transfer: {
      noMatch: 'Дал келген маалыматтар',
      noData: 'маалымат жок',
      titles: ['1 тизмеси', '2 тизмеси'],
      filterPlaceholder: 'Сураныч, издөө кирет',
      noCheckedFormat: 'бүтүндөй {total} сан',
      hasCheckedFormat: 'Тандалган {checked}/{total} сан',
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
