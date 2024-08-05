import type { Language } from '../index'

const he: Language = {
  name: 'he',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'אישור',
      clear: 'נקה',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'כעת',
      today: 'היום',
      cancel: 'בטל',
      clear: 'נקה',
      confirm: 'אישור',
      selectDate: 'בחר תאריך',
      selectTime: 'בחר זמן',
      startDate: 'תאריך התחלה',
      startTime: 'זמן התחלה',
      endDate: 'תאריך סיום',
      endTime: 'זמן סיום',
      prevYear: 'שנה קודמת',
      nextYear: 'שנה הבאה',
      prevMonth: 'חודש קודם',
      nextMonth: 'חודש הבא',
      year: 'שנה',
      month1: 'ינואר',
      month2: 'פברואר',
      month3: 'מרץ',
      month4: 'אפריל',
      month5: 'מאי',
      month6: 'יוני',
      month7: 'יולי',
      month8: 'אוגוסט',
      month9: 'ספטמבר',
      month10: 'אוקטובר',
      month11: 'נובמבר',
      month12: 'דצמבר',
      week: 'שבוע',
      weeks: {
        sun: 'א׳',
        mon: 'ב׳',
        tue: 'ג׳',
        wed: 'ד׳',
        thu: 'ה׳',
        fri: 'ו׳',
        sat: 'שבת',
      },
      months: {
        jan: 'ינואר',
        feb: 'פברואר',
        mar: 'מרץ',
        apr: 'אפריל',
        may: 'מאי',
        jun: 'יוני',
        jul: 'יולי',
        aug: 'אוגוסט',
        sep: 'ספטמבר',
        oct: 'אוקטובר',
        nov: 'נובמבר',
        dec: 'דצמבר',
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
      loading: 'טוען',
      noMatch: 'לא נמצאה התאמה',
      noData: 'אין נתונים',
      placeholder: 'שומר מקום',
    },
    mention: {
      loading: 'טוען',
    },
    cascader: {
      noMatch: 'לא נמצאה התאמה',
      loading: 'טוען',
      placeholder: 'שומר מקום',
      noData: 'אין נתונים',
    },
    pagination: {
      goto: 'עבור ל',
      pagesize: '/עמוד',
      total: 'כולל {total}',
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
    messagebox: {
      title: 'הודעה',
      confirm: 'אישור',
      cancel: 'בטל',
      error: 'קלט לא תקין',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'לחץ כדי למחוק',
      delete: 'מחק',
      preview: 'תצוגה מקדימה',
      continue: 'המשך',
    },
    table: {
      emptyText: 'אין נתונים',
      confirmFilter: 'אישור',
      resetFilter: 'נקה',
      clearFilter: 'הכל',
      sumText: 'סך הכל',
    },
    tree: {
      emptyText: 'אין נתונים',
    },
    transfer: {
      noMatch: 'לא נמצאה התאמה',
      noData: 'אין נתונים',
      titles: ['רשימה 1', 'רשימה 2'],
      filterPlaceholder: 'סנן לפי...',
      noCheckedFormat: 'פריטים {total}',
      hasCheckedFormat: ' נבחרו {checked}/{total}',
    },
    image: {
      error: 'שגיאה',
    },
    pageHeader: {
      title: 'חזרה',
    },
    popconfirm: {
      confirmButtonText: 'כן',
      cancelButtonText: 'לא',
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

export default he
