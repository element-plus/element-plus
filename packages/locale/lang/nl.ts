import type { Language } from '../index'

const nl: Language = {
  name: 'nl',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Bevestig',
      clear: 'Wissen',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Nu',
      today: 'Vandaag',
      cancel: 'Annuleren',
      clear: 'Legen',
      confirm: 'Bevestig',
      selectDate: 'Selecteer datum',
      selectTime: 'Selecteer tijd',
      startDate: 'Startdatum',
      startTime: 'Starttijd',
      endDate: 'Einddatum',
      endTime: 'Eindtijd',
      prevYear: 'Vorig jaar',
      nextYear: 'Volgend jaar',
      prevMonth: 'Vorige maand',
      nextMonth: 'Volgende maand',
      year: '',
      month1: 'januari',
      month2: 'februari',
      month3: 'maart',
      month4: 'april',
      month5: 'mei',
      month6: 'juni',
      month7: 'juli',
      month8: 'augustus',
      month9: 'september',
      month10: 'oktober',
      month11: 'november',
      month12: 'december',
      weeks: {
        sun: 'Zo',
        mon: 'Ma',
        tue: 'Di',
        wed: 'Wo',
        thu: 'Do',
        fri: 'Vr',
        sat: 'Za',
      },
      months: {
        jan: 'jan',
        feb: 'feb',
        mar: 'maa',
        apr: 'apr',
        may: 'mei',
        jun: 'jun',
        jul: 'jul',
        aug: 'aug',
        sep: 'sep',
        oct: 'okt',
        nov: 'nov',
        dec: 'dec',
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
      loading: 'Laden',
      noMatch: 'Geen overeenkomende resultaten',
      noData: 'Geen data',
      placeholder: 'Selecteer',
    },
    cascader: {
      noMatch: 'Geen overeenkomende resultaten',
      loading: 'Laden',
      placeholder: 'Selecteer',
      noData: 'Geen data',
    },
    pagination: {
      goto: 'Ga naar',
      pagesize: '/pagina',
      total: 'Totaal {total}',
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
      title: 'Bericht',
      confirm: 'Bevestig',
      cancel: 'Annuleren',
      error: 'Ongeldige invoer',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Kies verwijder om te wissen',
      delete: 'Verwijder',
      preview: 'Voorbeeld',
      continue: 'Doorgaan',
    },
    table: {
      emptyText: 'Geen data',
      confirmFilter: 'Bevestigen',
      resetFilter: 'Reset',
      clearFilter: 'Alles',
      sumText: 'Som',
    },
    tree: {
      emptyText: 'Geen data',
    },
    transfer: {
      noMatch: 'Geen overeenkomende resultaten',
      noData: 'Geen data',
      titles: ['Lijst 1', 'Lijst 2'],
      filterPlaceholder: 'Geef zoekwoerd',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} geselecteerd',
    },
    image: {
      error: 'MISLUKT',
    },
    pageHeader: {
      title: 'Terug',
    },
    popconfirm: {
      confirmButtonText: 'Ja',
      cancelButtonText: 'Nee',
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

export default nl
