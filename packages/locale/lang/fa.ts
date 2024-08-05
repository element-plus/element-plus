import type { Language } from '../index'

const fa: Language = {
  name: 'fa',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'تایید',
      clear: 'حذف',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'اکنون',
      today: 'امروز',
      cancel: 'انصراف',
      clear: 'حذف',
      confirm: 'تایید',
      selectDate: 'انتخاب تاریخ',
      selectTime: 'انتخاب زمان',
      startDate: 'تاریخ شروع',
      startTime: 'زمان شروع',
      endDate: 'تاریخ پایان',
      endTime: 'زمان پایان',
      prevYear: 'سال قبل',
      nextYear: 'سال بعد',
      prevMonth: 'ماه قبل',
      nextMonth: 'ماه بعد',
      year: 'سال',
      month1: 'ژانویه',
      month2: 'فوریه',
      month3: 'مارس',
      month4: 'آوریل',
      month5: 'مه',
      month6: 'ژوئن',
      month7: 'جولای',
      month8: 'اوت',
      month9: 'سپتامبر',
      month10: 'اکتبر',
      month11: 'نوامبر',
      month12: 'دسامبر',
      week: 'week',
      weeks: {
        sun: 'یکشنبه',
        mon: 'دوشنبه',
        tue: 'سه​شنبه',
        wed: 'چهارشنبه',
        thu: 'پنج​شنبه',
        fri: 'جمعه',
        sat: 'شنبه',
      },
      months: {
        jan: 'ژانویه',
        feb: 'فوریه',
        mar: 'مارس',
        apr: 'آوریل',
        may: 'مه',
        jun: 'ژوئن',
        jul: 'جولای',
        aug: 'اوت',
        sep: 'سپتامبر',
        oct: 'اکتبر',
        nov: 'نوامبر',
        dec: 'دسامبر',
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
      loading: 'در حال بارگذاری',
      noMatch: 'هیچ نتیجه‌ای پیدا نشد',
      noData: 'اطلاعاتی وجود ندارد',
      placeholder: 'انتخاب کنید',
    },
    mention: {
      loading: 'در حال بارگذاری',
    },
    cascader: {
      noMatch: 'هیچ نتیجه‌ای پیدا نشد',
      loading: 'در حال بارگذاری',
      placeholder: 'انتخاب کنید',
      noData: 'اطلاعاتی وجود ندارد',
    },
    pagination: {
      goto: 'برو به',
      pagesize: '/صفحه',
      total: 'مجموع {total}',
      pageClassifier: '',
      page: 'صفحه',
      prev: 'صفحه قبل',
      next: 'صفحه بعد',
      currentPage: 'صفحه {pager}',
      prevPages: '{pager} صفحه قبل',
      nextPages: '{pager} صفحه بعد',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    messagebox: {
      title: 'پیام',
      confirm: 'تایید',
      cancel: 'انصراف',
      error: 'ورودی غیر مجاز',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'برای پاک کردن حذف را فشار دهید',
      delete: 'حذف',
      preview: 'پیش‌نمایش',
      continue: 'ادامه',
    },
    table: {
      emptyText: 'اطلاعاتی وجود ندارد',
      confirmFilter: 'تایید',
      resetFilter: 'حذف',
      clearFilter: 'همه',
      sumText: 'جمع',
    },
    tour: {
      next: 'بعدی',
      previous: 'قبلی',
      finish: 'پایان',
    },
    tree: {
      emptyText: 'اطلاعاتی وجود ندارد',
    },
    transfer: {
      noMatch: 'هیچ نتیجه‌ای پیدا نشد',
      noData: 'اطلاعاتی وجود ندارد',
      titles: ['لیست 1', 'لیست 2'],
      filterPlaceholder: 'کلید واژه‌ها را وارد کن',
      noCheckedFormat: '{total} مورد',
      hasCheckedFormat: '{checked} مورد از {total} مورد انتخاب شده است',
    },
    image: {
      error: 'خطا در بارگذاری تصویر',
    },
    pageHeader: {
      title: 'بازگشت',
    },
    popconfirm: {
      confirmButtonText: 'بله',
      cancelButtonText: 'خیر',
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

export default fa
