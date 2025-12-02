export default {
  name: 'id',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Pilih',
      clear: 'Kosongkan',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
      alphaDescription: 'alpha {alpha}, current color is {color}', // to be translated
      hueLabel: 'pick hue value', // to be translated
      hueDescription: 'hue {hue}, current color is {color}', // to be translated
      svLabel: 'pick saturation and brightness value', // to be translated
      svDescription:
        'saturation {saturation}, brightness {brightness}, current color is {color}', // to be translated
      predefineDescription: 'select {value} as the color', // to be translated
    },
    datepicker: {
      now: 'Sekarang',
      today: 'Hari ini',
      cancel: 'Batal',
      clear: 'Kosongkan',
      confirm: 'Ya',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Pilih tanggal',
      selectTime: 'Pilih waktu',
      startDate: 'Tanggal Mulai',
      startTime: 'Waktu Mulai',
      endDate: 'Tanggal Selesai',
      endTime: 'Waktu Selesai',
      prevYear: 'Tahun Sebelumnya',
      nextYear: 'Tahun Selanjutnya',
      prevMonth: 'Bulan Sebelumnya',
      nextMonth: 'Bulan Selanjutnya',
      year: 'Tahun',
      month1: 'Januari',
      month2: 'Februari',
      month3: 'Maret',
      month4: 'April',
      month5: 'Mei',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'Agustus',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Desember',
      weeks: {
        sun: 'Min',
        mon: 'Sen',
        tue: 'Sel',
        wed: 'Rab',
        thu: 'Kam',
        fri: 'Jum',
        sat: 'Sab',
      },
      weeksFull: {
        sun: 'Sunday', // to be translated
        mon: 'Monday', // to be translated
        tue: 'Tuesday', // to be translated
        wed: 'Wednesday', // to be translated
        thu: 'Thursday', // to be translated
        fri: 'Friday', // to be translated
        sat: 'Saturday', // to be translated
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mei',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Agu',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Memuat',
      noMatch: 'Tidak ada data yg cocok',
      noData: 'Tidak ada data',
      placeholder: 'Pilih',
    },
    mention: {
      loading: 'Memuat',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Tidak ada data yg cocok',
      loading: 'Memuat',
      placeholder: 'Pilih',
      noData: 'Tidak ada data',
    },
    pagination: {
      goto: 'Pergi ke',
      pagesize: '/halaman',
      total: 'Total {total}',
      pageClassifier: '',
      page: 'Page', // to be translated
      prev: 'Go to previous page', // to be translated
      next: 'Go to next page', // to be translated
      currentPage: 'page {pager}', // to be translated
      prevPages: 'Previous {pager} pages', // to be translated
      nextPages: 'Next {pager} pages', // to be translated
      deprecationWarning:
        'Penggunaan yang tidak akan digunakan lagi terdeteksi, silakan lihat dokumentasi el-pagination untuk lebih jelasnya',
    },
    dialog: {
      close: 'Close this dialog', // to be translated
    },
    drawer: {
      close: 'Close this dialog', // to be translated
    },
    messagebox: {
      title: 'Pesan',
      confirm: 'Ya',
      cancel: 'Batal',
      error: 'Masukan ilegal',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Tekan hapus untuk melanjutkan',
      delete: 'Hapus',
      preview: 'Pratinjau',
      continue: 'Lanjutkan',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Tidak ada data',
      confirmFilter: 'Konfirmasi',
      resetFilter: 'Atur ulang',
      clearFilter: 'Semua',
      sumText: 'Jumlah',
      selectAllLabel: 'Select all rows', // to be translated
      selectRowLabel: 'Select this row', // to be translated
      expandRowLabel: 'Expand this row', // to be translated
      collapseRowLabel: 'Collapse this row', // to be translated
      sortLabel: 'Sort by {column}', // to be translated
      filterLabel: 'Filter by {column}', // to be translated
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Tidak ada data',
    },
    transfer: {
      noMatch: 'Tidak ada data yg cocok',
      noData: 'Tidak ada data',
      titles: ['Daftar 1', 'Daftar 2'],
      filterPlaceholder: 'Masukan kata kunci',
      noCheckedFormat: '{total} item',
      hasCheckedFormat: '{checked}/{total} terpilih',
    },
    image: {
      error: 'GAGAL',
    },
    pageHeader: {
      title: 'Kembali',
    },
    popconfirm: {
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
  },
}
