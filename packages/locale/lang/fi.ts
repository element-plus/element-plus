import type { Language } from '../index'

/** Finnish / 芬兰语 */
const fi: Language = {
  name: 'fi',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Tyhjennä',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Nyt',
      today: 'Tänään',
      cancel: 'Peruuta',
      clear: 'Tyhjennä',
      confirm: 'OK',
      selectDate: 'Valitse päivä',
      selectTime: 'Valitse aika',
      startDate: 'Aloituspäivä',
      startTime: 'Aloitusaika',
      endDate: 'Lopetuspäivä',
      endTime: 'Lopetusaika',
      prevYear: 'Edellinen vuosi',
      nextYear: 'Seuraava vuosi',
      prevMonth: 'Edellinen kuukausi',
      nextMonth: 'Seuraava kuukausi',
      year: '',
      month1: 'tammikuu',
      month2: 'helmikuu',
      month3: 'maaliskuu',
      month4: 'huhtikuu',
      month5: 'toukokuu',
      month6: 'kesäkuu',
      month7: 'heinäkuu',
      month8: 'elokuu',
      month9: 'syyskuu',
      month10: 'lokakuu',
      month11: 'marraskuu',
      month12: 'joulukuu',
      week: 'week',
      weeks: {
        sun: 'su',
        mon: 'ma',
        tue: 'ti',
        wed: 'ke',
        thu: 'to',
        fri: 'pe',
        sat: 'la',
      },
      months: {
        jan: 'tammi',
        feb: 'helmi',
        mar: 'maalis',
        apr: 'huhti',
        may: 'touko',
        jun: 'kesä',
        jul: 'heinä',
        aug: 'elo',
        sep: 'syys',
        oct: 'loka',
        nov: 'marras',
        dec: 'joulu',
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
      loading: 'Lataa',
      noMatch: 'Ei vastaavia tietoja',
      noData: 'Ei tietoja',
      placeholder: 'Valitse',
    },
    mention: {
      loading: 'Lataa',
    },
    cascader: {
      noMatch: 'Ei vastaavia tietoja',
      loading: 'Lataa',
      placeholder: 'Valitse',
      noData: 'Ei tietoja',
    },
    pagination: {
      goto: 'Mene',
      pagesize: '/sivu',
      total: 'Yhteensä {total}',
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
      title: 'Viesti',
      confirm: 'OK',
      cancel: 'Peruuta',
      error: 'Virheellinen syöte',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Poista Delete-näppäimellä',
      delete: 'Poista',
      preview: 'Esikatsele',
      continue: 'Jatka',
    },
    table: {
      emptyText: 'Ei tietoja',
      confirmFilter: 'Vahvista',
      resetFilter: 'Tyhjennä',
      clearFilter: 'Kaikki',
      sumText: 'Summa',
    },
    tree: {
      emptyText: 'Ei tietoja',
    },
    transfer: {
      noMatch: 'Ei vastaavia tietoja',
      noData: 'Ei tietoja',
      titles: ['Luettelo 1', 'Luettelo 2'],
      filterPlaceholder: 'Syötä hakusana',
      noCheckedFormat: '{total} kohdetta',
      hasCheckedFormat: '{checked}/{total} valittu',
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

export default fi
