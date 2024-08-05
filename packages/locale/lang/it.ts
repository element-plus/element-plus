import type { Language } from '../index'

const it: Language = {
  name: 'it',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Pulisci',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Ora',
      today: 'Oggi',
      cancel: 'Cancella',
      clear: 'Pulisci',
      confirm: 'OK',
      selectDate: 'Seleziona data',
      selectTime: 'Seleziona ora',
      startDate: 'Data inizio',
      startTime: 'Ora inizio',
      endDate: 'Data fine',
      endTime: 'Ora fine',
      prevYear: 'Anno precedente',
      nextYear: 'Anno successivo',
      prevMonth: 'Mese precedente',
      nextMonth: 'Mese successivo',
      year: '',
      month1: 'Gennaio',
      month2: 'Febbraio',
      month3: 'Marzo',
      month4: 'Aprile',
      month5: 'Maggio',
      month6: 'Giugno',
      month7: 'Luglio',
      month8: 'Agosto',
      month9: 'Settembre',
      month10: 'Ottobre',
      month11: 'Novembre',
      month12: 'Dicembre',
      week: 'settimana',
      weeks: {
        sun: 'Dom',
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mer',
        thu: 'Gio',
        fri: 'Ven',
        sat: 'Sab',
      },
      months: {
        jan: 'Gen',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mag',
        jun: 'Giu',
        jul: 'Lug',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Ott',
        nov: 'Nov',
        dec: 'Dic',
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
      loading: 'Caricamento',
      noMatch: 'Nessuna corrispondenza',
      noData: 'Nessun dato',
      placeholder: 'Seleziona',
    },
    mention: {
      loading: 'Caricamento',
    },
    cascader: {
      noMatch: 'Nessuna corrispondenza',
      loading: 'Caricamento',
      placeholder: 'Seleziona',
      noData: 'Nessun dato',
    },
    pagination: {
      goto: 'Vai a',
      pagesize: '/page',
      total: 'Totale {total}',
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
      confirm: 'OK',
      cancel: 'Cancella',
      error: 'Input non valido',
      title: 'Message', // to be translated
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Premi cancella per rimuovere',
      delete: 'Cancella',
      preview: 'Anteprima',
      continue: 'Continua',
    },
    table: {
      emptyText: 'Nessun dato',
      confirmFilter: 'Conferma',
      resetFilter: 'Reset',
      clearFilter: 'Tutti',
      sumText: 'Somma',
    },
    tree: {
      emptyText: 'Nessun dato',
    },
    transfer: {
      noMatch: 'Nessuna corrispondenza',
      noData: 'Nessun dato',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Inserisci filtro',
      noCheckedFormat: '{total} elementi',
      hasCheckedFormat: '{checked}/{total} selezionati',
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

export default it
