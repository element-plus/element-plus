import type { Language } from '../index'

/** Bulgarian / 保加利亚语 */
const bg: Language = {
  name: 'bg',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Изчисти',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Сега',
      today: 'Днес',
      cancel: 'Откажи',
      clear: 'Изчисти',
      confirm: 'ОК',
      selectDate: 'Избери дата',
      selectTime: 'Избери час',
      startDate: 'Начална дата',
      startTime: 'Начален час',
      endDate: 'Крайна дата',
      endTime: 'Краен час',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Януари',
      month2: 'Февруари',
      month3: 'Март',
      month4: 'Април',
      month5: 'Май',
      month6: 'Юни',
      month7: 'Юли',
      month8: 'Август',
      month9: 'Септември',
      month10: 'Октомври',
      month11: 'Ноември',
      month12: 'Декември',
      // week: 'Седмица',
      weeks: {
        sun: 'Нед',
        mon: 'Пон',
        tue: 'Вто',
        wed: 'Сря',
        thu: 'Чет',
        fri: 'Пет',
        sat: 'Съб',
      },
      months: {
        jan: 'Яну',
        feb: 'Фев',
        mar: 'Мар',
        apr: 'Апр',
        may: 'Май',
        jun: 'Юни',
        jul: 'Юли',
        aug: 'Авг',
        sep: 'Сеп',
        oct: 'Окт',
        nov: 'Ное',
        dec: 'Дек',
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
      week: 'week', //  to be translated
    },
    select: {
      loading: 'Зареждане',
      noMatch: 'Няма намерени',
      noData: 'Няма данни',
      placeholder: 'Избери',
    },
    mention: {
      loading: 'Зареждане',
    },
    cascader: {
      noMatch: 'Няма намерени',
      loading: 'Зареждане',
      placeholder: 'Избери',
      noData: 'Няма данни',
    },
    pagination: {
      goto: 'Иди на',
      pagesize: '/страница',
      total: 'Общо {total}',
      pageClassifier: '',
      page: 'Page', // to be translated
      prev: 'Go to previous page', // to be translated
      next: 'Go to next page', // to be translated
      currentPage: 'page {pager}', // to be translated
      prevPages: 'Previous {pager} pages', // to be translated
      nextPages: 'Next {pager} pages',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    messagebox: {
      title: 'Съобщение',
      confirm: 'ОК',
      cancel: 'Откажи',
      error: 'Невалидни данни',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Изтрий',
      preview: 'Прегледай',
      continue: 'Продължи',
    },
    table: {
      emptyText: 'Няма данни',
      confirmFilter: 'Потвърди',
      resetFilter: 'Изчисти',
      clearFilter: 'Всички',
      sumText: 'Sum', // to be translated
    },
    tree: {
      emptyText: 'Няма данни',
    },
    transfer: {
      noMatch: 'Няма намерени',
      noData: 'Няма данни',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked', // to be translated
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

export default bg
