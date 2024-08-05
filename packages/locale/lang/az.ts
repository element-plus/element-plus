import type { Language } from '../index'

/** Azerbaijani / 阿塞拜疆语 */
const az: Language = {
  name: 'az',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Təsdiqlə',
      clear: 'Təmizlə',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'İndi',
      today: 'Bugün',
      cancel: 'İmtina',
      clear: 'Təmizlə',
      confirm: 'Təsdiqlə',
      selectDate: 'Tarix seç',
      selectTime: 'Saat seç',
      startDate: 'Başlanğıc Tarixi',
      startTime: 'Başlanğıc Saatı',
      endDate: 'Bitmə Tarixi',
      endTime: 'Bitmə Saatı',
      prevYear: 'Öncəki il',
      nextYear: 'Sonrakı il',
      prevMonth: 'Öncəki ay',
      nextMonth: 'Sonrakı ay',
      year: '',
      month1: 'Yanvar',
      month2: 'Fevral',
      month3: 'Mart',
      month4: 'Aprel',
      month5: 'May',
      month6: 'İyun',
      month7: 'İyul',
      month8: 'Avqust',
      month9: 'Sentyabr',
      month10: 'Oktyabr',
      month11: 'Noyabr',
      month12: 'Dekabr',
      week: 'həftə',
      weeks: {
        sun: 'Baz',
        mon: 'B.e',
        tue: 'Ç.a',
        wed: 'Çər',
        thu: 'C.a',
        fri: 'Cüm',
        sat: 'Şən',
      },
      months: {
        jan: 'Yan',
        feb: 'Fev',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'İyn',
        jul: 'İyl',
        aug: 'Avq',
        sep: 'Sen',
        oct: 'Okt',
        nov: 'Noy',
        dec: 'Dek',
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
      loading: 'Yüklənir',
      noMatch: 'Nəticə tapılmadı',
      noData: 'Məlumat yoxdur',
      placeholder: 'Seç',
    },
    mention: {
      loading: 'Yüklənir',
    },
    cascader: {
      noMatch: 'Nəticə tapılmadı',
      loading: 'Yüklənir',
      placeholder: 'Seç',
      noData: 'Məlumat yoxdur',
    },
    pagination: {
      goto: 'Get',
      pagesize: '/səhifə',
      total: 'Toplam {total}',
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
      title: 'Mesaj',
      confirm: 'Təsdiqlə',
      cancel: 'İmtina',
      error: 'Səhv',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Sürüşdürmədən sonra sil',
      delete: 'Sil',
      preview: 'Ön izlə',
      continue: 'Davam et',
    },
    table: {
      emptyText: 'Məlumat yoxdur',
      confirmFilter: 'Təsdiqlə',
      resetFilter: 'Sıfırla',
      clearFilter: 'Bütün',
      sumText: 'Cəmi',
    },
    tree: {
      emptyText: 'Məlumat yoxdur',
    },
    transfer: {
      noMatch: 'Nəticə tapılmadı',
      noData: 'Məlumat yoxdur',
      titles: ['Siyahı 1', 'Siyahı 2'],
      filterPlaceholder: 'Kəlimələri daxil et',
      noCheckedFormat: '{total} ədəd',
      hasCheckedFormat: '{checked}/{total} seçildi',
    },
    image: {
      error: 'SƏHV', // to be translated
    },
    pageHeader: {
      title: 'Geri', // to be translated
    },
    popconfirm: {
      confirmButtonText: 'Bəli', // to be translated
      cancelButtonText: 'Xeyr', // to be translated
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

export default az
