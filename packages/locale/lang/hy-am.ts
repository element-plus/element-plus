export default {
  name: 'hy-am',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Լաւ',
      clear: 'Մաքրել',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
      alphaDescription: 'alpha {alpha}, current color is {color}', // to be translated
      hueLabel: 'pick hue value', // to be translated
      hueDescription: 'hue {hue}, current color is {color}', // to be translated
    },
    datepicker: {
      now: 'Հիմա',
      today: 'Այսօր',
      cancel: 'Չեղարկել',
      clear: 'Մաքրել',
      confirm: 'Լաւ',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Ընտրեք ամսաթիւը',
      selectTime: 'Ընտրեք ժամանակը',
      startDate: 'Սկզբ. ամսաթիւը',
      startTime: 'Սկզբ. ժամանակը',
      endDate: 'Վերջ. ամսաթիվը',
      endTime: 'Վերջ. ժամանակը',
      prevYear: 'Նախորդ տարի',
      nextYear: 'Յաջորդ տարի',
      prevMonth: 'Նախորդ ամիս',
      nextMonth: 'Յաջորդ ամիս',
      year: 'Տարի',
      month1: 'Յունուար',
      month2: 'Փետրուար',
      month3: 'Մարտ',
      month4: 'Ապրիլ',
      month5: 'Մայիս',
      month6: 'Յունիս',
      month7: 'Յուլիս',
      month8: 'Օգոստոս',
      month9: 'Սեպտեմբեր',
      month10: 'Յոկտեմբեր',
      month11: 'Նոյեմբեր',
      month12: 'Դեկտեմբեր',
      weeks: {
        sun: 'Կիր',
        mon: 'Երկ',
        tue: 'Եր',
        wed: 'Չոր',
        thu: 'Հինգ',
        fri: 'Ուրբ',
        sat: 'Շաբ',
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
        jan: 'Յունվ',
        feb: 'Փետ',
        mar: 'Մար',
        apr: 'Ապր',
        may: 'Մայ',
        jun: 'Յուն',
        jul: 'Յուլ',
        aug: 'Օգ',
        sep: 'Սեպտ',
        oct: 'Յոկ',
        nov: 'Նոյ',
        dec: 'Դեկ',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Բեռնում',
      noMatch: 'Համապատասխան տուեալներ չկան',
      noData: 'Տվյալներ չկան',
      placeholder: 'Ընտրել',
    },
    mention: {
      loading: 'Բեռնում',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Համապատասխան տուեալներ չկան',
      loading: 'Բեռնում',
      placeholder: 'Ընտրել',
      noData: 'Տվյալներ չկան',
    },
    pagination: {
      goto: 'Անցնել',
      pagesize: ' էջում',
      total: 'Ընդամենը {total}',
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
      title: 'Հաղորդագրութիւն',
      confirm: 'Լաւ',
      cancel: 'Չեղարկել',
      error: 'Անվաւեր տուեալների մուտք',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Սեղմեք [Ջնջել] ջնջելու համար',
      delete: 'Ջնջել',
      preview: 'Նախադիտում',
      continue: 'Շարունակել',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Տուեալներ չկան',
      confirmFilter: 'Յաստատել',
      resetFilter: 'Վերագործարկել',
      clearFilter: 'Բոլորը',
      sumText: 'Գումարը',
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Տուեալներ չկան',
    },
    transfer: {
      noMatch: 'Համապատասխան տուեալներ չկան',
      noData: 'Տուեալներ չկան',
      titles: ['Ցուցակ 1', 'Ցուցակ 2'],
      filterPlaceholder: 'Մուտքագրեք բանալի բառ',
      noCheckedFormat: '{total} միաւոր',
      hasCheckedFormat: '{checked}/{total} ընտրուած է',
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
