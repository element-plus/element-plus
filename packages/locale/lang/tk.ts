import type { Language } from '../index'

const tk: Language = {
  name: 'tk',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Arassala',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Şuwagt',
      today: 'Şügün',
      cancel: 'Bes et',
      clear: 'Arassala',
      confirm: 'OK',
      selectDate: 'Güni saýlaň',
      selectTime: 'Wagty saýlaň',
      startDate: 'Başlaýan güni',
      startTime: 'Başlaýan wagty',
      endDate: 'Gutarýan güni',
      endTime: 'Gutarýan wagty',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Ýan',
      month2: 'Few',
      month3: 'Mar',
      month4: 'Apr',
      month5: 'Maý',
      month6: 'Iýn',
      month7: 'Iýl',
      month8: 'Awg',
      month9: 'Sen',
      month10: 'Okt',
      month11: 'Noý',
      month12: 'Dek',
      weeks: {
        sun: 'Ýek',
        mon: 'Duş',
        tue: 'Siş',
        wed: 'Çar',
        thu: 'Pen',
        fri: 'Ann',
        sat: 'Şen',
      },
      months: {
        jan: 'Ýan',
        feb: 'Few',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maý',
        jun: 'Iýn',
        jul: 'Iýl',
        aug: 'Awg',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Noý',
        dec: 'Dek',
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
      loading: 'Indirilýär',
      noMatch: 'Hiçzat tapylmady',
      noData: 'Hiçzat ýok',
      placeholder: 'Saýla',
    },
    cascader: {
      noMatch: 'Hiçzat tapylmady',
      loading: 'Indirilýär',
      placeholder: 'Saýlaň',
      noData: 'Hiçzat ýok',
    },
    pagination: {
      goto: 'Git',
      pagesize: '/sahypa',
      total: 'Umumy {total}',
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
      title: 'Hat',
      confirm: 'OK',
      cancel: 'Bes et',
      error: 'Ýalňyş girizme',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Pozmak üçin "poz" düwmä basyň',
      delete: 'Poz',
      preview: 'Gör',
      continue: 'Dowam et',
    },
    table: {
      emptyText: 'Maglumat ýok',
      confirmFilter: 'Tassykla',
      resetFilter: 'Arassala',
      clearFilter: 'Hemmesi',
      sumText: 'Jemi',
    },
    tree: {
      emptyText: 'Maglumat ýok',
    },
    transfer: {
      noMatch: 'Hiçzat tapylmady',
      noData: 'Hiçzat ýok',
      titles: ['Sanaw 1', 'Sanaw 2'],
      filterPlaceholder: 'Gözleg sözlerini giriziň',
      noCheckedFormat: '{total} sany',
      hasCheckedFormat: '{checked}/{total} saýlanan',
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

export default tk
