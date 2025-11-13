export default {
  name: 'mn',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Тийм',
      clear: 'Цэвэрлэх',
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
      now: 'Одоо',
      today: 'Өнөөдөр',
      cancel: 'Болих',
      clear: 'Цэвэрлэх',
      confirm: 'Тийм',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Огноог сонго',
      selectTime: 'Цагийг сонго',
      startDate: 'Эхлэх огноо',
      startTime: 'Эхлэх цаг',
      endDate: 'Дуусах огноо',
      endTime: 'Дуусах цаг',
      prevYear: 'Өмнөх жил',
      nextYear: 'Дараа жил',
      prevMonth: 'Өмнөх сар',
      nextMonth: 'Дараа сар',
      year: 'он',
      month1: '1 сар',
      month2: '2 сар',
      month3: '3 сар',
      month4: '4 сар',
      month5: '5 сар',
      month6: '6 сар',
      month7: '7 сар',
      month8: '8 сар',
      month9: '9 сар',
      month10: '10 сар',
      month11: '11 сар',
      month12: '12 сар',
      weeks: {
        sun: 'Ням',
        mon: 'Дав',
        tue: 'Мяг',
        wed: 'Лха',
        thu: 'Пүр',
        fri: 'Баа',
        sat: 'Бям',
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
        jan: '1 сар',
        feb: '2 сар',
        mar: '3 сар',
        apr: '4 сар',
        may: '5 сар',
        jun: '6 сар',
        jul: '7 сар',
        aug: '8 сар',
        sep: '9 сар',
        oct: '10 сар',
        nov: '11 сар',
        dec: '12 сар',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Ачаалж байна',
      noMatch: 'Тохирох өгөгдөл байхгүй',
      noData: 'Өгөгдөл байхгүй',
      placeholder: 'Сонгох',
    },
    mention: {
      loading: 'Ачаалж байна',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Тохирох өгөгдөл байхгүй',
      loading: 'Ачаалж байна',
      placeholder: 'Сонгох',
      noData: 'Өгөгдөл байхгүй',
    },
    pagination: {
      goto: 'Очих',
      pagesize: '/хуудас',
      total: 'Нийт {total}',
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
      title: 'Зурвас',
      confirm: 'Тийм',
      cancel: 'Болих',
      error: 'Буруу утга',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Устгахын дарж арилга',
      delete: 'Устгах',
      preview: 'Өмнөх',
      continue: 'Үргэлжлүүлэх',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Өгөгдөл байхгүй',
      confirmFilter: 'Зөвшөөрөх',
      resetFilter: 'Цэвэрлэх',
      clearFilter: 'Бүгд',
      sumText: 'Нийт',
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Өгөгдөл байхгүй',
    },
    transfer: {
      noMatch: 'Тохирох өгөгдөл байхгүй',
      noData: 'Өгөгдөл байхгүй',
      titles: ['Жагсаалт 1', 'Жагсаалт 2'],
      filterPlaceholder: 'Утга оруул',
      noCheckedFormat: '{total} өгөгдөл',
      hasCheckedFormat: '{checked}/{total} сонгосон',
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
