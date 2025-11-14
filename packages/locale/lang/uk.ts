export default {
  name: 'uk',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Очистити',
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
      now: 'Зараз',
      today: 'Сьогодні',
      cancel: 'Відміна',
      clear: 'Очистити',
      confirm: 'OK',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Вибрати дату',
      selectTime: 'Вибрати час',
      startDate: 'Дата початку',
      startTime: 'Час початку',
      endDate: 'Дата завершення',
      endTime: 'Час завершення',
      prevYear: 'Попередній Рік',
      nextYear: 'Наступний Рік',
      prevMonth: 'Попередній Місяць',
      nextMonth: 'Наступний Місяць',
      year: '',
      month1: 'Січень',
      month2: 'Лютий',
      month3: 'Березень',
      month4: 'Квітень',
      month5: 'Травень',
      month6: 'Червень',
      month7: 'Липень',
      month8: 'Серпень',
      month9: 'Вересень',
      month10: 'Жовтень',
      month11: 'Листопад',
      month12: 'Грудень',
      weeks: {
        sun: 'Нд',
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт',
        sat: 'Сб',
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
        jan: 'Січ',
        feb: 'Лют',
        mar: 'Бер',
        apr: 'Кві',
        may: 'Тра',
        jun: 'Чер',
        jul: 'Лип',
        aug: 'Сер',
        sep: 'Вер',
        oct: 'Жов',
        nov: 'Лис',
        dec: 'Гру',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Завантаження',
      noMatch: 'Співпадінь не знайдено',
      noData: 'Немає даних',
      placeholder: 'Обрати',
    },
    mention: {
      loading: 'Завантаження',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Співпадінь не знайдено',
      loading: 'Завантаження',
      placeholder: 'Обрати',
      noData: 'Немає даних',
    },
    pagination: {
      goto: 'Перейти',
      pagesize: 'на сторінці',
      total: 'Всього {total}',
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
      title: 'Повідомлення',
      confirm: 'OK',
      cancel: 'Відміна',
      error: 'Неприпустимий ввід даних',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'натисніть кнопку щоб видалити',
      delete: 'Видалити',
      preview: 'Перегляд',
      continue: 'Продовжити',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Немає даних',
      confirmFilter: 'Підтвердити',
      resetFilter: 'Скинути',
      clearFilter: 'Все',
      sumText: 'Сума',
      selectAllLabel: 'Select all rows', // to be translated
      selectRowLabel: 'Select this row', // to be translated
      expandRowLabel: 'Expand this row', // to be translated
      collapseRowLabel: 'Collapse this row', // to be translated
      sortLabel: 'Sort by {column}', // to be translated
      filterLabel: 'Filter by {column}', // to be translated
    },
    tour: {
      next: 'Далі',
      previous: 'Назад',
      finish: 'Завершити',
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Немає даних',
    },
    transfer: {
      noMatch: 'Співпадінь не знайдено',
      noData: 'Обрати',
      titles: ['Список 1', 'Список 2'],
      filterPlaceholder: 'Введіть ключове слово',
      noCheckedFormat: '{total} пунктів',
      hasCheckedFormat: '{checked}/{total} вибрано',
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
