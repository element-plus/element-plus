import type { Language } from '../index'

const ca: Language = {
  name: 'ca',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Netejar',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Ara',
      today: 'Avui',
      cancel: 'Cancel·lar',
      clear: 'Netejar',
      confirm: 'Confirmar',
      selectDate: 'Seleccionar data',
      selectTime: 'Seleccionar hora',
      startDate: 'Data Inici',
      startTime: 'Hora Inici',
      endDate: 'Data Final',
      endTime: 'Hora Final',
      prevYear: 'Any anterior',
      nextYear: 'Pròxim Any',
      prevMonth: 'Mes anterior',
      nextMonth: 'Pròxim Mes',
      year: '',
      month1: 'Gener',
      month2: 'Febrer',
      month3: 'Març',
      month4: 'Abril',
      month5: 'Maig',
      month6: 'Juny',
      month7: 'Juliol',
      month8: 'Agost',
      month9: 'Setembre',
      month10: 'Octubre',
      month11: 'Novembre',
      month12: 'Desembre',
      // week: 'setmana',
      weeks: {
        sun: 'Dg',
        mon: 'Dl',
        tue: 'Dt',
        wed: 'Dc',
        thu: 'Dj',
        fri: 'Dv',
        sat: 'Ds',
      },
      months: {
        jan: 'Gen',
        feb: 'Febr',
        mar: 'Març',
        apr: 'Abr',
        may: 'Maig',
        jun: 'Juny',
        jul: 'Jul',
        aug: 'Ag',
        sep: 'Set',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Des',
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
      week: 'week', //  to be translated
    },
    select: {
      loading: 'Carregant',
      noMatch: 'No hi ha dades que coincideixin',
      noData: 'Sense Dades',
      placeholder: 'Seleccionar',
    },
    cascader: {
      noMatch: 'No hi ha dades que coincideixin',
      loading: 'Carregant',
      placeholder: 'Seleccionar',
      noData: 'Sense Dades',
    },
    pagination: {
      goto: 'Anar a',
      pagesize: '/pàgina',
      total: 'Total {total}',
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
      confirm: 'Acceptar',
      cancel: 'Cancel·lar',
      error: 'Entrada invàlida',
      title: 'Message', // to be translated
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'premi eliminar per descartar',
      delete: 'Eliminar',
      preview: 'Vista Prèvia',
      continue: 'Continuar',
    },
    table: {
      emptyText: 'Sense Dades',
      confirmFilter: 'Confirmar',
      resetFilter: 'Netejar',
      clearFilter: 'Tot',
      sumText: 'Tot',
    },
    tree: {
      emptyText: 'Sense Dades',
    },
    transfer: {
      noMatch: 'No hi ha dades que coincideixin',
      noData: 'Sense Dades',
      titles: ['Llista 1', 'Llista 2'],
      filterPlaceholder: 'Introdueix la paraula clau',
      noCheckedFormat: '{total} ítems',
      hasCheckedFormat: '{checked}/{total} seleccionats',
    },
    image: {
      error: 'HA FALLAT',
    },
    pageHeader: {
      title: 'Tornar',
    },
    popconfirm: {
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
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

export default ca
