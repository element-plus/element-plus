export default {
  name: 'ku',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Temam',
      clear: 'Paqij bike',
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
      now: 'Niha',
      today: 'Îro',
      cancel: 'Betal bike',
      clear: 'Paqij bike',
      confirm: 'Temam',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Dîrokê bibijêre',
      selectTime: 'Demê bibijêre',
      startDate: 'Dîroka Destpêkê',
      startTime: 'Dema Destpêkê',
      endDate: 'Dîroka Dawî',
      endTime: 'Dema Dawî',
      prevYear: 'Sala Pêş',
      nextYear: 'Sala Paş',
      prevMonth: 'Meha Pêş',
      nextMonth: 'Meha Paş',
      year: 'Sal',
      month1: 'Rêbendan',
      month2: 'Reşemeh',
      month3: 'Adar',
      month4: 'Avrêl',
      month5: 'Gulan',
      month6: 'Pûşber',
      month7: 'Tîrmeh',
      month8: 'Gilavêj',
      month9: 'Rezber',
      month10: 'Kewçêr',
      month11: 'Sarmawaz',
      month12: 'Berfanbar',
      weeks: {
        sun: 'Yek',
        mon: 'Duş',
        tue: 'Sêş',
        wed: 'Çar',
        thu: 'Pên',
        fri: 'În',
        sat: 'Şem',
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
        jan: 'Rêb',
        feb: 'Reş',
        mar: 'Ada',
        apr: 'Avr',
        may: 'Gul',
        jun: 'Pûş',
        jul: 'Tîr',
        aug: 'Gil',
        sep: 'Rez',
        oct: 'Kew',
        nov: 'Sar',
        dec: 'Ber',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Bardibe',
      noMatch: 'Li hembere ve agahî tune',
      noData: 'Agahî tune',
      placeholder: 'Bibijêre',
    },
    mention: {
      loading: 'Bardibe',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Li hembere ve agahî tune',
      loading: 'Bardibe',
      placeholder: 'Bibijêre',
      noData: 'Agahî tune',
    },
    pagination: {
      goto: 'Biçe',
      pagesize: '/rupel',
      total: 'Tevahî {total}',
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
      title: 'Peyam',
      confirm: 'Temam',
      cancel: 'Betal bike',
      error: 'Beyana çewt',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'ji bo rake pêl "delete" bike',
      delete: 'Rake',
      preview: 'Pêşdîtin',
      continue: 'Berdewam',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Agahî tune',
      confirmFilter: 'Piştrast bike',
      resetFilter: 'Jê bibe',
      clearFilter: 'Hemû',
      sumText: 'Kom',
    },
    tag: {
      close: 'Close', // to be translated
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Agahî tune',
    },
    transfer: {
      noMatch: 'Li hembere ve agahî tune',
      noData: 'Agahî tune',
      titles: ['Lîste 1', 'Lîste 2'],
      filterPlaceholder: 'Binivîse',
      noCheckedFormat: '{total} lib',
      hasCheckedFormat: '{checked}/{total} bijartin',
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
