export default {
  name: 'mg',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'ENY',
      clear: 'Fafana',
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
      now: 'Zao',
      today: 'Androany',
      cancel: 'Hanafoana',
      clear: 'Fafana',
      confirm: 'ENY',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Misafidy daty',
      selectTime: 'Misafidy ora',
      startDate: 'Daty fanombohana',
      startTime: 'Ora fanombohana',
      endDate: 'Daty farany',
      endTime: 'Ora farany',
      prevYear: 'Taona teo aloha',
      nextYear: 'Taona manaraka',
      prevMonth: 'Volana teo aloha',
      nextMonth: 'Volana manaraka',
      year: '',
      month1: 'Janoary',
      month2: 'Febroary',
      month3: 'Martsa',
      month4: 'Aprily',
      month5: 'May',
      month6: 'Jona',
      month7: 'Jolay',
      month8: 'Aogositra',
      month9: 'Septambra',
      month10: 'Oktobra',
      month11: 'Novambra',
      month12: 'Desambra',
      weeks: {
        sun: 'Lad',
        mon: 'Ala',
        tue: 'Tal',
        wed: 'Lar',
        thu: 'Lak',
        fri: 'Zom',
        sat: 'Sab',
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
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jon',
        jul: 'Jol',
        aug: 'Aog',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Eo ampiandrasana',
      noMatch: 'Tsy misy angona mifanentana',
      noData: 'Tsy misy angona',
      placeholder: 'Safidy',
    },
    mention: {
      loading: 'Eo ampiandrasana',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Tsy misy angona mifanentana',
      loading: 'Eo ampiandrasana',
      placeholder: 'Safidy',
      noData: 'Tsy misy angona',
    },
    pagination: {
      goto: 'Mandeha any',
      pagesize: '/page',
      total: 'Totaly {total}',
      pageClassifier: '',
      page: 'Page', // to be translated
      prev: 'Go to previous page', // to be translated
      next: 'Go to next page', // to be translated
      currentPage: 'page {pager}', // to be translated
      prevPages: 'Previous {pager} pages', // to be translated
      nextPages: 'Next {pager} pages', // to be translated
      deprecationWarning:
        'Fampiasana tsy ampiasaina intsony no hita, azafady mba jereo ny tahirin-kevitra el-pagination raha mila fanazavana fanampiny',
    },
    dialog: {
      close: 'Close this dialog', // to be translated
    },
    drawer: {
      close: 'Close this dialog', // to be translated
    },
    messagebox: {
      title: 'Hafatra',
      confirm: 'ENY',
      cancel: 'Hanafoana',
      error: 'Fampidirana tsy ara-dalàna',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'tsindrio fafana raha hanala',
      delete: 'Fafana',
      preview: 'Topi-maso',
      continue: 'Hanoy',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Tsy misy angona',
      confirmFilter: 'Manamarina',
      resetFilter: 'Averina',
      clearFilter: 'Rehetra',
      sumText: 'Atambatra',
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
      emptyText: 'Tsy misy angona',
    },
    transfer: {
      noMatch: 'Tsy misy angona mifanentana',
      noData: 'Tsy misy angona',
      titles: ['Lisitra 1', 'Lisitra 2'],
      filterPlaceholder: 'Ampidiro teny fanalahidy',
      noCheckedFormat: '{total} zavatra',
      hasCheckedFormat: '{checked}/{total} voamarina',
    },
    image: {
      error: 'TSY NAHOMBY',
    },
    pageHeader: {
      title: 'Miverina',
    },
    popconfirm: {
      confirmButtonText: 'Eny',
      cancelButtonText: 'Tsy',
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
  },
}
