export default {
  name: 'el',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'Εντάξει',
      clear: 'Καθαρισμός',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Τώρα',
      today: 'Σήμερα',
      cancel: 'Ακύρωση',
      clear: 'Καθαρισμός',
      confirm: 'Εντάξει',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Επιλέξτε ημέρα',
      selectTime: 'Επιλέξτε ώρα',
      startDate: 'Ημερομηνία Έναρξης',
      startTime: 'Ωρα Έναρξης',
      endDate: 'Ημερομηνία Λήξης',
      endTime: 'Ωρα Λήξης',
      prevYear: 'Προηγούμενο Έτος',
      nextYear: 'Επόμενο Έτος',
      prevMonth: 'Προηγούμενος Μήνας',
      nextMonth: 'Επόμενος Μήνας',
      year: 'Έτος',
      month1: 'Ιανουάριος',
      month2: 'Φεβρουάριος',
      month3: 'Μάρτιος',
      month4: 'Απρίλιος',
      month5: 'Μάιος',
      month6: 'Ιούνιος',
      month7: 'Ιούλιος',
      month8: 'Αύγουστος',
      month9: 'Σεπτέμβριος',
      month10: 'Οκτώβριος',
      month11: 'Νοέμβριος',
      month12: 'Δεκέμβριος',
      weeks: {
        sun: 'Κυρ',
        mon: 'Δευ',
        tue: 'Τρι',
        wed: 'Τετ',
        thu: 'Πεμ',
        fri: 'Παρ',
        sat: 'Σαβ',
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
        jan: 'Ιαν',
        feb: 'Φεβ',
        mar: 'Μαρ',
        apr: 'Απρ',
        may: 'Μαϊ',
        jun: 'Ιουν',
        jul: 'Ιουλ',
        aug: 'Αυγ',
        sep: 'Σεπ',
        oct: 'Οκτ',
        nov: 'Νοε',
        dec: 'Δεκ',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Φόρτωση',
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      noData: 'Χωρίς δεδομένα',
      placeholder: 'Επιλογή',
    },
    mention: {
      loading: 'Φόρτωση',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      loading: 'Φόρτωση',
      placeholder: 'Επιλογή',
      noData: 'Χωρίς δεδομένα',
    },
    pagination: {
      goto: 'Μετάβαση σε',
      pagesize: '/σελίδα',
      total: 'Σύνολο {total}',
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
    dialog: {
      close: 'Close this dialog', // to be translated
    },
    drawer: {
      close: 'Close this dialog', // to be translated
    },
    messagebox: {
      title: 'Μήνυμα',
      confirm: 'Εντάξει',
      cancel: 'Ακύρωση',
      error: 'Άκυρη εισαγωγή',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Πάτησε Διαγραφή για αφαίρεση',
      delete: 'Διαγραφή',
      preview: 'Προεπισκόπηση',
      continue: 'Συνέχεια',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Χωρίς Δεδομένα',
      confirmFilter: 'Επιβεβαίωση',
      resetFilter: 'Επαναφορά',
      clearFilter: 'Όλα',
      sumText: 'Σύνολο',
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Χωρίς Δεδομένα',
    },
    transfer: {
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      noData: 'Χωρίς δεδομένα',
      titles: ['Λίστα 1', 'Λίστα 2'],
      filterPlaceholder: 'Αναζήτηση',
      noCheckedFormat: '{total} Αντικείμενα',
      hasCheckedFormat: '{checked}/{total} επιλεγμένα',
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
  },
}
