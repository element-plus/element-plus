import type { Language } from '../index'

/** Spanish / 西班牙语 */
const es: Language = {
  name: 'es',
  el: {
    breadcrumb: {
      label: 'Miga de pan',
    },
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Despejar',
      defaultLabel: 'selector de color',
      description:
        'el color actual es {color}. presione enter para seleccionar un nuevo color.',
      alphaLabel: 'seleccione el valor de alpha',
    },
    datepicker: {
      now: 'Ahora',
      today: 'Hoy',
      cancel: 'Cancelar',
      clear: 'Despejar',
      confirm: 'Confirmar',
      selectDate: 'Seleccionar fecha',
      selectTime: 'Seleccionar hora',
      startDate: 'Fecha Incial',
      startTime: 'Hora Inicial',
      endDate: 'Fecha Final',
      endTime: 'Hora Final',
      prevYear: 'Año Anterior',
      nextYear: 'Próximo Año',
      prevMonth: 'Mes Anterior',
      nextMonth: 'Próximo Mes',
      year: '',
      month1: 'enero',
      month2: 'febrero',
      month3: 'marzo',
      month4: 'abril',
      month5: 'mayo',
      month6: 'junio',
      month7: 'julio',
      month8: 'agosto',
      month9: 'septiembre',
      month10: 'octubre',
      month11: 'noviembre',
      month12: 'diciembre',
      week: 'semana',
      weeks: {
        sun: 'dom',
        mon: 'lun',
        tue: 'mar',
        wed: 'mié',
        thu: 'jue',
        fri: 'vie',
        sat: 'sáb',
      },
      months: {
        jan: 'ene',
        feb: 'feb',
        mar: 'mar',
        apr: 'abr',
        may: 'may',
        jun: 'jun',
        jul: 'jul',
        aug: 'ago',
        sep: 'sep',
        oct: 'oct',
        nov: 'nov',
        dec: 'dic',
      },
      dateTablePrompt:
        'Use las teclas de flecha y enter para seleccionar el día del mes',
      monthTablePrompt:
        'Use las teclas de flecha y enter para seleccionar el mes',
      yearTablePrompt:
        'Use las teclas de flecha y enter para seleccionar el año',
      selectedDate: 'Fecha seleccionada',
      weeksFull: {
        sun: 'Domingo',
        mon: 'Lunes',
        tue: 'Martes',
        wed: 'Miércoles',
        thu: 'Jueves',
        fri: 'Viernes',
        sat: 'Sábado',
      },
    },
    select: {
      loading: 'Cargando',
      noMatch: 'No hay datos que coincidan',
      noData: 'Sin datos',
      placeholder: 'Seleccionar',
    },
    mention: {
      loading: 'Cargando',
    },
    cascader: {
      noMatch: 'No hay datos que coincidan',
      loading: 'Cargando',
      placeholder: 'Seleccionar',
      noData: 'Sin datos',
    },
    pagination: {
      goto: 'Ir a',
      pagesize: '/página',
      total: 'Total {total}',
      pageClassifier: '',
      page: 'Página',
      prev: 'Ir a la página anterior',
      next: 'Ir a la página siguiente',
      currentPage: 'página {pager}',
      prevPages: '{pager} páginas anteriores',
      nextPages: '{pager} páginas siguientes',
      deprecationWarning:
        'Se detectaron usos obsoletos, consulte la documentación de el-pagination para obtener más detalles',
    },
    messagebox: {
      confirm: 'Aceptar',
      cancel: 'Cancelar',
      error: 'Entrada inválida',
      title: 'Mensaje',
      close: 'Cerrar este diálogo',
    },
    upload: {
      deleteTip: 'Pulse Eliminar para retirar',
      delete: 'Eliminar',
      preview: 'Vista Previa',
      continue: 'Continuar',
    },
    table: {
      emptyText: 'Sin Datos',
      confirmFilter: 'Confirmar',
      resetFilter: 'Reiniciar',
      clearFilter: 'Despejar',
      sumText: 'Suma',
    },
    tree: {
      emptyText: 'Sin Datos',
    },
    transfer: {
      noMatch: 'No hay datos que coincidan',
      noData: 'Sin datos',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Ingresar palabra clave',
      noCheckedFormat: '{total} artículos',
      hasCheckedFormat: '{checked}/{total} revisados',
    },
    image: {
      error: 'HA FALLADO',
    },
    pageHeader: {
      title: 'Volver',
    },
    popconfirm: {
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    },
    carousel: {
      leftArrow: 'Flecha izquierda del carrusel',
      rightArrow: 'Flecha derecha del carrusel',
      indicator: 'Cambiar al índice {index} del carrusel',
    },
    inputNumber: {
      decrease: 'disminuir número',
      increase: 'aumentar número',
    },
    dropdown: {
      toggleDropdown: 'Activar desplegable',
    },
    dialog: {
      close: 'Cerrar este diálogo',
    },
    drawer: {
      close: 'Cerrar este diálogo',
    },
    slider: {
      defaultLabel: 'deslizador entre {min} y {max}',
      defaultRangeStartLabel: 'selecciona el valor inicial',
      defaultRangeEndLabel: 'selecciona el valor final',
    },
    tour: {
      next: 'Siguiente',
      previous: 'Anterior',
      finish: 'Finalizar',
    },
  },
}

export default es
