import type { Language } from '../index'

const eu: Language = {
  name: 'eu',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Ados',
      clear: 'Garbitu',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Orain',
      today: 'Gaur',
      cancel: 'Utzi',
      clear: 'Garbitu',
      confirm: 'Ados',
      selectDate: 'Hautatu data',
      selectTime: 'Hautatu ordua',
      startDate: 'Hasierako data',
      startTime: 'Hasierako ordua',
      endDate: 'Amaierako data',
      endTime: 'Amaierako ordua',
      prevYear: 'Aurreko urtea',
      nextYear: 'Hurrengo urtea',
      prevMonth: 'Aurreko hilabetea',
      nextMonth: 'Hurrengo hilabetea',
      year: '',
      month1: 'Urtarrila',
      month2: 'Otsaila',
      month3: 'Martxoa',
      month4: 'Apirila',
      month5: 'Maiatza',
      month6: 'Ekaina',
      month7: 'Uztaila',
      month8: 'Abuztua',
      month9: 'Iraila',
      month10: 'Urria',
      month11: 'Azaroa',
      month12: 'Abendua',
      week: 'astea',
      weeks: {
        sun: 'ig.',
        mon: 'al.',
        tue: 'ar.',
        wed: 'az.',
        thu: 'og.',
        fri: 'ol.',
        sat: 'lr.',
      },
      months: {
        jan: 'urt',
        feb: 'ots',
        mar: 'mar',
        apr: 'api',
        may: 'mai',
        jun: 'eka',
        jul: 'uzt',
        aug: 'abu',
        sep: 'ira',
        oct: 'urr',
        nov: 'aza',
        dec: 'abe',
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
      loading: 'Kargatzen',
      noMatch: 'Bat datorren daturik ez',
      noData: 'Daturik ez',
      placeholder: 'Hautatu',
    },
    mention: {
      loading: 'Kargatzen',
    },
    cascader: {
      noMatch: 'Bat datorren daturik ez',
      loading: 'Kargatzen',
      placeholder: 'Hautatu',
      noData: 'Daturik ez',
    },
    pagination: {
      goto: 'Joan',
      pagesize: '/orria',
      total: 'Guztira {total}',
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
      title: 'Mezua',
      confirm: 'Ados',
      cancel: 'Utzi',
      error: 'Sarrera baliogabea',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'sakatu Ezabatu kentzeko',
      delete: 'Ezabatu',
      preview: 'Aurrebista',
      continue: 'Jarraitu',
    },
    table: {
      emptyText: 'Daturik ez',
      confirmFilter: 'Baieztatu',
      resetFilter: 'Berrezarri',
      clearFilter: 'Guztia',
      sumText: 'Batura',
    },
    tour: {
      next: 'Hurrengoa',
      previous: 'Aurrekoa',
      finish: 'Bukatu',
    },
    tree: {
      emptyText: 'Daturik ez',
    },
    transfer: {
      noMatch: 'Bat datorren daturik ez',
      noData: 'Daturik ez',
      titles: ['Zerrenda 1', 'Zerrenda 2'], // to be translated
      filterPlaceholder: 'Sartu gako-hitza', // to be translated
      noCheckedFormat: '{total} elementu', // to be translated
      hasCheckedFormat: '{checked}/{total} hautatuta', // to be translated
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
  },
}

export default eu
