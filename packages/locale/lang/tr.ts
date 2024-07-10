import type { Language } from '../index'

const tr: Language = {
  name: 'tr',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Onayla',
      clear: 'Temizle',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'Şimdi',
      today: 'Bugün',
      cancel: 'İptal',
      clear: 'Temizle',
      confirm: 'Onayla',
      selectDate: 'Tarih seç',
      selectTime: 'Saat seç',
      startDate: 'Başlangıç Tarihi',
      startTime: 'Başlangıç Saati',
      endDate: 'Bitiş Tarihi',
      endTime: 'Bitiş Saati',
      prevYear: 'Önceki Yıl',
      nextYear: 'Sonraki Yıl',
      prevMonth: 'Önceki Ay',
      nextMonth: 'Sonraki Ay',
      year: '',
      month1: 'Ocak',
      month2: 'Şubat',
      month3: 'Mart',
      month4: 'Nisan',
      month5: 'Mayıs',
      month6: 'Haziran',
      month7: 'Temmuz',
      month8: 'Ağustos',
      month9: 'Eylül',
      month10: 'Ekim',
      month11: 'Kasım',
      month12: 'Aralık',
      week: 'week',
      weeks: {
        sun: 'Paz',
        mon: 'Pzt',
        tue: 'Sal',
        wed: 'Çar',
        thu: 'Per',
        fri: 'Cum',
        sat: 'Cmt',
      },
      months: {
        jan: 'Oca',
        feb: 'Şub',
        mar: 'Mar',
        apr: 'Nis',
        may: 'May',
        jun: 'Haz',
        jul: 'Tem',
        aug: 'Ağu',
        sep: 'Eyl',
        oct: 'Eki',
        nov: 'Kas',
        dec: 'Ara',
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
      loading: 'Yükleniyor',
      noMatch: 'Eşleşen veri bulunamadı',
      noData: 'Veri yok',
      placeholder: 'Seç',
    },
    cascader: {
      noMatch: 'Eşleşen veri bulunamadı',
      loading: 'Yükleniyor',
      placeholder: 'Seç',
      noData: 'Veri yok',
    },
    pagination: {
      goto: 'Git',
      pagesize: '/sayfa',
      total: 'Toplam {total}',
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
      title: 'Mesaj',
      confirm: 'Onayla',
      cancel: 'İptal',
      error: 'İllegal giriş',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'kaldırmak için delete tuşuna bas',
      delete: 'Sil',
      preview: 'Görüntüle',
      continue: 'Devam',
    },
    table: {
      emptyText: 'Veri yok',
      confirmFilter: 'Onayla',
      resetFilter: 'Sıfırla',
      clearFilter: 'Hepsi',
      sumText: 'Sum',
    },
    tree: {
      emptyText: 'Veri yok',
    },
    transfer: {
      noMatch: 'Eşleşen veri bulunamadı',
      noData: 'Veri yok',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Anahtar kelimeleri gir',
      noCheckedFormat: '{total} adet',
      hasCheckedFormat: '{checked}/{total} seçildi',
    },
    image: {
      error: 'BAŞARISIZ OLDU',
    },
    pageHeader: {
      title: 'Geri',
    },
    popconfirm: {
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
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

export default tr
