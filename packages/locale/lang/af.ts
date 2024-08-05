import type { Language } from '../index'

/** Afrikaans / 南非荷兰语 */
const af: Language = {
  name: 'af',
  el: {
    breadcrumb: {
      label: 'Broodkruimels',
    },
    colorpicker: {
      confirm: 'Bevestig',
      clear: 'Maak skoon',
      defaultLabel: 'kleurkieser',
      description: `die huidige kleur is {color}. druk enter om'n nuwe kleur te kies.`,
      alphaLabel: 'kies alfa-waarde',
    },
    datepicker: {
      now: 'Nou',
      today: 'Vandag',
      cancel: 'Kanselleer',
      clear: 'Maak skoon',
      confirm: 'Bevestig',
      selectDate: 'Kies datum',
      selectTime: 'Kies tyd',
      startDate: 'Begindatum',
      startTime: 'Begintyd',
      endDate: 'Einddatum',
      endTime: 'Eindtyd',
      prevYear: 'Vorige jaar',
      nextYear: 'Volgende jaar',
      prevMonth: 'Vorige maand',
      nextMonth: 'Volgende maand',
      year: 'Jaar',
      month1: 'Jan',
      month2: 'Feb',
      month3: 'Mrt',
      month4: 'Apr',
      month5: 'Mei',
      month6: 'Jun',
      month7: 'Jul',
      month8: 'Aug',
      month9: 'Sep',
      month10: 'Okt',
      month11: 'Nov',
      month12: 'Des',
      week: 'week',
      weeks: {
        sun: 'So',
        mon: 'Ma',
        tue: 'Di',
        wed: 'Wo',
        thu: 'Do',
        fri: 'Vr',
        sat: 'Sa',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mrt',
        apr: 'Apr',
        may: 'Mei',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des',
      },
      dateTablePrompt:
        'Gebruik die pyl-sleutels en enter om die dag van die maand te kies',
      monthTablePrompt:
        'Gebruik die pyl-sleutels en enter om die maand te kies',
      yearTablePrompt: 'Gebruik die pyl-sleutels en enter om die jaar te kies',
      selectedDate: 'Gekose datum',
      weeksFull: {
        sun: 'Sondag',
        mon: 'Maandag',
        tue: 'Dinsdag',
        wed: 'Woensdag',
        thu: 'Donderdag',
        fri: 'Vrydag',
        sat: 'Saterdag',
      },
    },
    select: {
      loading: 'Laai',
      noMatch: 'Geen toepaslike data',
      noData: 'Geen data',
      placeholder: 'Kies',
    },
    mention: {
      loading: 'Laai',
    },
    cascader: {
      noMatch: 'Geen toepaslike data',
      loading: 'Laai',
      placeholder: 'Kies',
      noData: 'Geen data',
    },
    pagination: {
      goto: 'Gaan na',
      pagesize: '/bladsy',
      total: 'Totaal {total}',
      pageClassifier: '',
      page: 'Bladsy',
      prev: 'Gaan na vorige bladsy',
      next: 'Gaan na volgende bladsy',
      currentPage: 'bladsy {pager}',
      prevPages: 'Vorige {pager} bladsye',
      nextPages: 'Volgende {pager} bladsye',
      deprecationWarning:
        'Verouderde gebruike waargeneem, verwys asseblief na die el-paginering dokumentasie vir meer besonderhede',
    },
    messagebox: {
      title: 'Boodskap',
      confirm: 'Bevestig',
      cancel: 'Kanselleer',
      error: 'Ongeldige invoer',
      close: 'Maak hierdie dialoogvenster toe',
    },
    upload: {
      deleteTip: 'druk delete om te verwyder',
      delete: 'Verwyder',
      preview: 'Voorskou',
      continue: 'Gaan voort',
    },
    table: {
      emptyText: 'Geen Data',
      confirmFilter: 'Bevestig',
      resetFilter: 'Herstel',
      clearFilter: 'Alles',
      sumText: 'Som',
    },
    tree: {
      emptyText: 'Geen Data',
    },
    transfer: {
      noMatch: 'Geen toepaslike data',
      noData: 'Geen data',
      titles: ['Lys 1', 'Lys 2'],
      filterPlaceholder: 'Voer sleutelwoord in',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} gekies',
    },
    image: {
      error: 'MISLUK',
    },
    pageHeader: {
      title: 'Terug',
    },
    popconfirm: {
      confirmButtonText: 'Ja',
      cancelButtonText: 'Nee',
    },
    carousel: {
      leftArrow: 'Karoesel-pyl links',
      rightArrow: 'Karoesel-pyl regs',
      indicator: 'Karoesel wissel na indeks {index}',
    },
    inputNumber: {
      decrease: 'verminder getal',
      increase: 'verhoog getal',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown',
    },
    dialog: {
      close: 'Maak hierdie dialoogvenster toe',
    },
    drawer: {
      close: 'Maak hierdie dialoogvenster toe',
    },
    slider: {
      defaultLabel: 'glyer tussen {min} en {max}',
      defaultRangeStartLabel: 'kies beginwaarde',
      defaultRangeEndLabel: 'kies eindwaarde',
    },
    tour: {
      next: 'Volgende',
      previous: 'Vorige',
      finish: 'Klaar',
    },
  },
}

export default af
