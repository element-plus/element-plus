import type { Language } from '../index'

export const sr: Language = {
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
    },
    datepicker: {
      now: 'Сада',
      today: 'Данас',
      cancel: 'Откажи',
      clear: 'Бриши',
      confirm: 'OK',
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
      week: 'седмица',
      weeks: {
        sun: 'Нед',
        mon: 'Пон',
        tue: 'Уто',
        wed: 'Сре',
        thu: 'Чет',
        fri: 'Пет',
        sat: 'Суб',
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
      loading: 'Учитавање',
      noMatch: 'Нема резултата',
      noData: 'Нема података',
      placeholder: 'Изабери',
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
    table: {
      emptyText: 'Нема података',
      confirmFilter: 'Потврди',
      resetFilter: 'Ресетуј',
      clearFilter: 'Све',
      sumText: 'Збир',
    },
    tree: {
      emptyText: 'Нема података',
    },
    transfer: {
      noMatch: 'Нема резултата',
      noData: 'Нема података',
      titles: ['Листа 1', 'Листа 2'], // to be translated
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

export default sr
