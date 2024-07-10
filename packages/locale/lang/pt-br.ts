import type { Language } from '../index'

const ptBr: Language = {
  name: 'pt-br',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Limpar',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Agora',
      today: 'Hoje',
      cancel: 'Cancelar',
      clear: 'Limpar',
      confirm: 'Confirmar',
      selectDate: 'Selecione a data',
      selectTime: 'Selecione a hora',
      startDate: 'Data inicial',
      startTime: 'Hora inicial',
      endDate: 'Data final',
      endTime: 'Hora final',
      prevYear: 'Ano anterior',
      nextYear: 'Próximo ano',
      prevMonth: 'Mês anterior',
      nextMonth: 'Próximo mês',
      year: '',
      month1: 'Janeiro',
      month2: 'Fevereiro',
      month3: 'Março',
      month4: 'Abril',
      month5: 'Maio',
      month6: 'Junho',
      month7: 'Julho',
      month8: 'Agosto',
      month9: 'Setembro',
      month10: 'Outubro',
      month11: 'Novembro',
      month12: 'Dezembro',
      week: 'semana',
      weeks: {
        sun: 'Dom',
        mon: 'Seg',
        tue: 'Ter',
        wed: 'Qua',
        thu: 'Qui',
        fri: 'Sex',
        sat: 'Sab',
      },
      months: {
        jan: 'Jan',
        feb: 'Fev',
        mar: 'Mar',
        apr: 'Abr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Out',
        nov: 'Nov',
        dec: 'Dez',
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
      loading: 'Carregando',
      noMatch: 'Sem resultados',
      noData: 'Sem dados',
      placeholder: 'Selecione',
    },
    cascader: {
      noMatch: 'Sem resultados',
      loading: 'Carregando',
      placeholder: 'Selecione',
      noData: 'Sem dados',
    },
    pagination: {
      goto: 'Ir para',
      pagesize: '/página',
      total: 'Total {total}',
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
      title: 'Mensagem',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      error: 'Erro!',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'aperte delete para apagar',
      delete: 'Apagar',
      preview: 'Pré-visualizar',
      continue: 'Continuar',
    },
    table: {
      emptyText: 'Sem dados',
      confirmFilter: 'Confirmar',
      resetFilter: 'Limpar',
      clearFilter: 'Todos',
      sumText: 'Total',
    },
    tour: {
      next: 'Próximo',
      previous: 'Anterior',
      finish: 'Finalizar',
    },
    tree: {
      emptyText: 'Sem dados',
    },
    transfer: {
      noMatch: 'Sem resultados',
      noData: 'Sem dados',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Digite uma palavra-chave',
      noCheckedFormat: '{total} itens',
      hasCheckedFormat: '{checked}/{total} selecionados',
    },
    image: {
      error: 'Erro ao carregar imagem',
    },
    pageHeader: {
      title: 'Voltar',
    },
    popconfirm: {
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
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

export default ptBr
