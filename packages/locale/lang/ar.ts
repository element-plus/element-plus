export default {
  name: 'ar',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'موافق',
      clear: 'إزالة',
      defaultLabel: 'إختر اللون',
      description: 'اللون الحالي هو {color}. اضفط انتر لاختيار لون جديد',
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'الآن',
      today: 'اليوم',
      cancel: 'إلغاء',
      clear: 'إزالة',
      confirm: 'موافق',
      dateTablePrompt:
        'استخدم مفاتيح الاسهم و اضغط انتر لاختيار اليوم المراد من الشهر',
      monthTablePrompt: 'استخدم مفاتيح الاسهم واضغط انتر لاختيار الشهر',
      yearTablePrompt: 'استخدم مفاتيح الاسهم واضغط انتر لاختيار السنة',
      selectedDate: 'Selected date', // to be translated
      selectDate: 'إختر التاريخ',
      selectTime: 'إختر الوقت',
      startDate: 'تاريخ البدء',
      startTime: 'وقت البدء',
      endDate: 'تاريخ الإنتهاء',
      endTime: 'وقت الإنتهاء',
      prevYear: 'السنة السابقة',
      nextYear: 'السنة التالية',
      prevMonth: 'الشهر السابق',
      nextMonth: 'الشهر التالي',
      year: 'سنة',
      month1: 'كانون الثاني',
      month2: 'شباط',
      month3: 'اذار',
      month4: 'نيسان',
      month5: 'أيار',
      month6: 'حزيران',
      month7: 'تموز',
      month8: 'اّب',
      month9: 'ايلول',
      month10: 'تشرين الاول',
      month11: 'تشرين الثاني',
      month12: 'كانون الاول',
      weeks: {
        sun: 'الأحد',
        mon: 'الأثنين',
        tue: 'الثلاثاء',
        wed: 'الأربعاء',
        thu: 'الخميس',
        fri: 'الجمعة',
        sat: 'السبت',
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
        jan: 'كانون الثاني',
        feb: 'شباط',
        mar: 'اذار',
        apr: 'نيسان',
        may: 'ايار',
        jun: 'حزيران',
        jul: 'تمور',
        aug: 'اّب',
        sep: 'ايلول',
        oct: 'تشرين الاول',
        nov: 'تشرين الثاني',
        dec: 'كانون الاول',
      },
    },
    inputNumber: {
      decrease: 'طرح رقم',
      increase: 'زيادة رقم',
    },
    select: {
      loading: 'جار التحميل',
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      placeholder: 'إختر',
    },
    mention: {
      loading: 'جار التحميل',
    },
    dropdown: {
      toggleDropdown: 'تبديل القائمة',
    },
    cascader: {
      noMatch: 'لايوجد بيانات مطابقة',
      loading: 'جار التحميل',
      placeholder: 'إختر',
      noData: 'لايوجد بيانات',
    },
    pagination: {
      goto: 'أذهب إلى',
      pagesize: '/صفحة',
      total: 'الكل {total}',
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
      close: 'أغلق هذا التبويب',
    },
    drawer: {
      close: 'أغلق هذا التبويب',
    },
    messagebox: {
      title: 'العنوان',
      confirm: 'موافق',
      cancel: 'إلغاء',
      error: 'مدخل غير صحيح',
      close: 'أغلق هذا التبويب',
    },
    upload: {
      deleteTip: 'اضغط ازالة لحذف المحتوى',
      delete: 'حذف',
      preview: 'عرض',
      continue: 'إستمرار',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'لايوجد بيانات',
      confirmFilter: 'تأكيد',
      resetFilter: 'حذف',
      clearFilter: 'الكل',
      sumText: 'المجموع',
      selectAllLabel: 'Select all rows', // to be translated
      selectRowLabel: 'Select this row', // to be translated
      expandRowLabel: 'Expand this row', // to be translated
      collapseRowLabel: 'Collapse this row', // to be translated
    },
    tour: {
      next: 'Next', // to be translated
      previous: 'Previous', // to be translated
      finish: 'Finish', // to be translated
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'لايوجد بيانات',
    },
    transfer: {
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      titles: ['قائمة 1', 'قائمة 2'],
      filterPlaceholder: 'ادخل كلمة',
      noCheckedFormat: '{total} عناصر',
      hasCheckedFormat: '{checked}/{total} مختار',
    },
    image: {
      error: 'فشل',
    },
    pageHeader: {
      title: 'عودة',
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
