export default {
  name: 'ta',
  el: {
    global: {
      placeholder: 'Please select',
      close: 'Close',
    },
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'உறுதி செய்',
      clear: 'தெளிவாக்கு',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'தற்போது',
      today: 'இன்று',
      cancel: 'ரத்து செய்',
      clear: 'சரி',
      confirm: 'உறுதி செய்',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'தேதியை தேர்வு செய்',
      selectTime: 'நேரத்தை தேர்வு செய்',
      startDate: 'தொடங்கும் நாள்',
      startTime: 'தொடங்கும் நேரம்',
      endDate: 'முடியும் தேதி',
      endTime: 'முடியும் நேரம்',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'வருடம்',
      month1: 'ஜனவரி',
      month2: 'பிப்ரவரி',
      month3: 'மார்ச்',
      month4: 'ஏப்ரல்',
      month5: 'மே',
      month6: 'ஜூன்',
      month7: 'ஜூலை',
      month8: 'ஆகஸ்ட்',
      month9: 'செப்டம்பர்',
      month10: 'அக்டோபர்',
      month11: 'நவம்பர்',
      month12: 'டிசம்பர்',
      weeks: {
        sun: 'ஞாயிறு',
        mon: 'திங்கள்',
        tue: 'செவ்வாய்',
        wed: 'புதன்',
        thu: 'வியாழன்',
        fri: 'வெள்ளி',
        sat: 'சனி',
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
        jan: 'ஜனவரி',
        feb: 'பிப்ரவரி',
        mar: 'மார்ச்',
        apr: 'ஏப்ரல்',
        may: 'மே',
        jun: 'ஜூன்',
        jul: 'ஜூலை',
        aug: 'ஆகஸ்ட்',
        sep: 'செப்டம்பர்',
        oct: 'அக்டோபர்',
        nov: 'நவம்பர்',
        dec: 'டிசம்பர்',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'தயாராகிக்கொண்டிருக்கிறது',
      noMatch: 'பொருத்தமான தரவு கிடைக்கவில்லை',
      noData: 'தரவு இல்லை',
      placeholder: 'தேர்வு செய்',
    },
    mention: {
      loading: 'தயாராகிக்கொண்டிருக்கிறது',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'பொருத்தமான தரவு கிடைக்கவில்லை',
      loading: 'தயாராகிக்கொண்டிருக்கிறது',
      placeholder: 'தேர்வு செய்',
      noData: 'தரவு இல்லை',
    },
    pagination: {
      goto: 'தேவையான் பகுதிக்கு செல்',
      pagesize: '/page',
      total: 'மொத்தம் {total}',
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
      title: 'செய்தி',
      confirm: 'உறுதி செய்',
      cancel: 'ரத்து செய்',
      error: 'பொருத்தாமில்லாத உள்ளீடு',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'நீக்கு',
      preview: 'முன்னோட்டம் பார்',
      continue: 'தொடரு',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'தரவு இல்லை',
      confirmFilter: 'உறுதி செய்',
      resetFilter: 'புதுமாற்றம் செய்',
      clearFilter: 'அனைத்தும்',
      sumText: 'கூட்டு',
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
    },
    tree: {
      emptyText: 'தரவு இல்லை',
    },
    transfer: {
      noMatch: 'பொருத்தமான தரவு கிடைக்கவில்லை',
      noData: 'தரவு இல்லை',
      titles: ['பட்டியல் 1', 'பட்டியல் 2'],
      filterPlaceholder: 'சொல்லை உள்ளீடு செய்',
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} தேர்வு செய்யப்பட்டவைகள்',
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
