import type { Language } from '../index'

export const ky: Language = {
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
    },
    datepicker: {
      now: 'азыр',
      today: 'бүгүн',
      cancel: 'жокко чыгарылды',
      clear: 'ачык',
      confirm: 'белгилөө',
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
      // week: '周次',
      weeks: {
        sun: 'жети жума',
        mon: 'дүйшөмбү',
        tue: 'шейшемби',
        wed: 'шаршемби',
        thu: 'бейшемби',
        fri: 'жума',
        sat: 'ишемби',
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
      loading: 'Жүктөлүүдө',
      noMatch: 'Дал келген маалыматтар',
      noData: 'маалымат жок',
      placeholder: 'тандоо',
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
    table: {
      emptyText: 'маалымат жок',
      confirmFilter: 'чыпка',
      resetFilter: 'кайра орнотуу',
      clearFilter: 'бүткөн',
      sumText: 'Бардыгы болуп',
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

export default ky
