import type { Language } from '../index'

export const ru: Language = {
  name: 'ru',
  el: {
    breadcrumb: {
      label: 'Хлебные крошки',
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Очистить',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Сейчас',
      today: 'Сегодня',
      cancel: 'Отмена',
      clear: 'Очистить',
      confirm: 'OK',
      selectDate: 'Выбрать дату',
      selectTime: 'Выбрать время',
      startDate: 'Дата начала',
      startTime: 'Время начала',
      endDate: 'Дата окончания',
      endTime: 'Время окончания',
      prevYear: 'Предыдущий год',
      nextYear: 'Следующий год',
      prevMonth: 'Предыдущий месяц',
      nextMonth: 'Следующий месяц',
      year: '',
      month1: 'Январь',
      month2: 'Февраль',
      month3: 'Март',
      month4: 'Апрель',
      month5: 'Май',
      month6: 'Июнь',
      month7: 'Июль',
      month8: 'Август',
      month9: 'Сентябрь',
      month10: 'Октябрь',
      month11: 'Ноябрь',
      month12: 'Декабрь',
      week: 'неделя',
      weeks: {
        sun: 'Вс',
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт',
        sat: 'Сб',
      },
      months: {
        jan: 'Янв',
        feb: 'Фев',
        mar: 'Мар',
        apr: 'Апр',
        may: 'Май',
        jun: 'Июн',
        jul: 'Июл',
        aug: 'Авг',
        sep: 'Сен',
        oct: 'Окт',
        nov: 'Ноя',
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
    },
    select: {
      loading: 'Загрузка',
      noMatch: 'Совпадений не найдено',
      noData: 'Нет данных',
      placeholder: 'Выбрать',
    },
    cascader: {
      noMatch: 'Совпадений не найдено',
      loading: 'Загрузка',
      placeholder: 'Выбрать',
      noData: 'Нет данных',
    },
    pagination: {
      goto: 'Перейти',
      pagesize: ' на странице',
      total: 'Всего {total}',
      pageClassifier: '',
      page: 'Страница',
      prev: 'Перейти на предыдущую страницу',
      next: 'Перейти на следующую страницу',
      currentPage: 'страница {pager}',
      prevPages: 'Предыдущие {pager} страниц',
      nextPages: 'Следующие {pager} страниц',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    messagebox: {
      title: 'Сообщение',
      confirm: 'OK',
      cancel: 'Отмена',
      error: 'Недопустимый ввод данных',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Нажмите [Удалить] для удаления',
      delete: 'Удалить',
      preview: 'Превью',
      continue: 'Продолжить',
    },
    table: {
      emptyText: 'Нет данных',
      confirmFilter: 'Подтвердить',
      resetFilter: 'Сбросить',
      clearFilter: 'Все',
      sumText: 'Сумма',
    },
    tour: {
      next: 'Далее',
      previous: 'Назад',
      finish: 'Завершить',
    },
    tree: {
      emptyText: 'Нет данных',
    },
    transfer: {
      noMatch: 'Совпадений не найдено',
      noData: 'Нет данных',
      titles: ['Список 1', 'Список 2'],
      filterPlaceholder: 'Введите ключевое слово',
      noCheckedFormat: '{total} пунктов',
      hasCheckedFormat: '{checked}/{total} выбрано',
    },
    image: {
      error: 'ОШИБКА',
    },
    pageHeader: {
      title: 'Назад',
    },
    popconfirm: {
      confirmButtonText: 'OK',
      cancelButtonText: 'Отмена',
    },
    carousel: {
      leftArrow: 'Слайдер стрелка влево',
      rightArrow: 'Слайдер стрелка вправо',
      indicator: 'Слайдер перейти на страницу под номером {index}',
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
  },
}

export default ru
