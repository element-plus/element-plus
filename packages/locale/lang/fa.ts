export default {
  name: 'fa',
  el: {
    breadcrumb: {
      label: 'مسیر راهنما', // to be translated
    },
    colorpicker: {
      confirm: 'تأیید',
      clear: 'پاک کردن',
      defaultLabel: 'انتخاب‌گر رنگ',
      description:
        'رنگ فعلی {color} است. برای انتخاب رنگ جدید، اینتر را فشار دهید.',
      alphaLabel: 'مقدار آلفا را انتخاب کنید',
    },
    datepicker: {
      now: 'اکنون',
      today: 'امروز',
      cancel: 'لغو',
      clear: 'پاک کردن',
      confirm: 'تأیید',
      dateTablePrompt:
        'از کلیدهای جهت‌دار و اینتر برای انتخاب روز ماه استفاده کنید',
      monthTablePrompt: 'از کلیدهای جهت‌دار و اینتر برای انتخاب ماه استفاده کنید',
      yearTablePrompt: 'از کلیدهای جهت‌دار و اینتر برای انتخاب سال استفاده کنید',
      selectedDate: 'تاریخ انتخاب‌شده',
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
      year: '',
      month1: 'ژانویه',
      month2: 'فوریه',
      month3: 'مارس',
      month4: 'آوریل',
      month5: 'مه',
      month6: 'ژوئن',
      month7: 'ژوئیه',
      month8: 'اوت',
      month9: 'سپتامبر',
      month10: 'اکتبر',
      month11: 'نوامبر',
      month12: 'دسامبر',
      week: 'هفته',
      weeks: {
        sun: 'یک‌شنبه',
        mon: 'دوشنبه',
        tue: 'سه‌شنبه',
        wed: 'چهارشنبه',
        thu: 'پنج‌شنبه',
        fri: 'جمعه',
        sat: 'شنبه',
      },
      weeksFull: {
        sun: 'یک‌شنبه',
        mon: 'دوشنبه',
        tue: 'سه‌شنبه',
        wed: 'چهارشنبه',
        thu: 'پنج‌شنبه',
        fri: 'جمعه',
        sat: 'شنبه',
      },
      months: {
        jan: 'ژانویه',
        feb: 'فوریه',
        mar: 'مارچ',
        apr: 'آوریل',
        may: 'مه',
        jun: 'ژوئن',
        jul: 'ژوئیه',
        aug: 'اوت',
        sep: 'سپتامبر',
        oct: 'اکتبر',
        nov: 'نوامبر',
        dec: 'دسامبر',
      },
    },
    inputNumber: {
      decrease: 'کاهش عدد',
      increase: 'افزایش عدد',
    },
    select: {
      loading: 'در حال بارگذاری',
      noMatch: 'هیچ داده منطبقی وجود ندارد',
      noData: 'داده‌ای موجود نیست',
      placeholder: 'انتخاب کنید',
    },
    mention: {
      loading: 'در حال بارگذاری',
    },
    dropdown: {
      toggleDropdown: 'باز و بسته کردن منوی کشویی',
    },
    cascader: {
      noMatch: 'هیچ داده منطبقی وجود ندارد',
      loading: 'در حال بارگذاری',
      placeholder: 'انتخاب کنید',
      noData: 'داده‌ای موجود نیست',
    },
    pagination: {
      goto: 'برو به',
      pagesize: '/صفحه',
      total: 'مجموع {total}',
      pageClassifier: '',
      page: 'صفحه',
      prev: 'برو به صفحه قبلی',
      next: 'برو به صفحه بعدی',
      currentPage: 'صفحه {pager}',
      prevPages: '{pager} صفحات قبلی',
      nextPages: '{pager} صفحات بعدی',
      deprecationWarning:
        'استفاده‌های منسوخ شناسایی شد، لطفاً به مستندات el-pagination مراجعه کنید',
    },
    dialog: {
      close: 'بستن این دیالوگ',
    },
    drawer: {
      close: 'بستن این دیالوگ',
    },
    messagebox: {
      title: 'پیام',
      confirm: 'تأیید',
      cancel: 'لغو',
      error: 'ورودی نامعتبر',
      close: 'بستن این دیالوگ',
    },
    upload: {
      deleteTip: 'برای حذف، کلید delete را فشار دهید',
      delete: 'حذف',
      preview: 'پیش‌نمایش',
      continue: 'ادامه',
    },
    slider: {
      defaultLabel: 'لغزنده بین {min} و {max}',
      defaultRangeStartLabel: 'انتخاب مقدار شروع',
      defaultRangeEndLabel: 'انتخاب مقدار پایان',
    },
    table: {
      emptyText: 'داده‌ای موجود نیست',
      confirmFilter: 'تأیید',
      resetFilter: 'بازنشانی',
      clearFilter: 'همه',
      sumText: 'مجموع',
    },
    tour: {
      next: 'بعدی',
      previous: 'قبلی',
      finish: 'پایان',
    },
    tree: {
      emptyText: 'داده‌ای موجود نیست',
    },
    transfer: {
      noMatch: 'داده‌ای مطابقت ندارد',
      noData: 'داده‌ای موجود نیست',
      titles: ['فهرست ۱', 'فهرست ۲'], // to be translated
      filterPlaceholder: 'کلمه کلیدی را وارد کنید', // to be translated
      noCheckedFormat: '{total} آیتم', // to be translated
      hasCheckedFormat: '{checked}/{total} انتخاب‌شده', // to be translated
    },
    image: {
      error: 'ناموفق',
    },
    pageHeader: {
      title: 'بازگشت', // to be translated
    },
    popconfirm: {
      confirmButtonText: 'بله',
      cancelButtonText: 'خیر',
    },
    carousel: {
      leftArrow: 'پیکان به جهت چپ',
      rightArrow: 'پیکان چرخان به جهت راست',
      indicator: 'سوئیچ چرخان به شاخص {index}',
    },
  },
}
