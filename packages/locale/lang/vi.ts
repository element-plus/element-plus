export default {
  name: 'vi',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'OK',
      clear: 'Xóa',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'Hiện tại',
      today: 'Hôm nay',
      cancel: 'Hủy',
      clear: 'Xóa',
      confirm: 'OK',
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month', // to be translated
      monthTablePrompt: 'Use the arrow keys and enter to select the month', // to be translated
      yearTablePrompt: 'Use the arrow keys and enter to select the year', // to be translated
      selectedDate: 'Selected date', // to be translated
      selectDate: 'Chọn ngày',
      selectTime: 'Chọn giờ',
      startDate: 'Ngày bắt đầu',
      startTime: 'Thời gian bắt đầu',
      endDate: 'Ngày kết thúc',
      endTime: 'Thời gian kết thúc',
      prevYear: 'Năm trước',
      nextYear: 'Năm tới',
      prevMonth: 'Tháng trước',
      nextMonth: 'Tháng tới',
      year: 'Năm',
      month1: 'Tháng 1',
      month2: 'Tháng 2',
      month3: 'Tháng 3',
      month4: 'Tháng 4',
      month5: 'Tháng 5',
      month6: 'Tháng 6',
      month7: 'Tháng 7',
      month8: 'Tháng 8',
      month9: 'Tháng 9',
      month10: 'Tháng 10',
      month11: 'Tháng 11',
      month12: 'Tháng 12',
      weeks: {
        sun: 'CN',
        mon: 'T2',
        tue: 'T3',
        wed: 'T4',
        thu: 'T5',
        fri: 'T6',
        sat: 'T7',
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
        jan: 'Th.1',
        feb: 'Th.2',
        mar: 'Th.3',
        apr: 'Th.4',
        may: 'Th.5',
        jun: 'Th.6',
        jul: 'Th.7',
        aug: 'Th.8',
        sep: 'Th.9',
        oct: 'Th.10',
        nov: 'Th.11',
        dec: 'Th.12',
      },
    },
    inputNumber: {
      decrease: 'decrease number', // to be translated
      increase: 'increase number', // to be translated
    },
    select: {
      loading: 'Đang tải',
      noMatch: 'Dữ liệu không phù hợp',
      noData: 'Không tìm thấy dữ liệu',
      placeholder: 'Chọn',
    },
    mention: {
      loading: 'Đang tải',
    },
    dropdown: {
      toggleDropdown: 'Toggle Dropdown', // to be translated
    },
    cascader: {
      noMatch: 'Dữ liệu không phù hợp',
      loading: 'Đang tải',
      placeholder: 'Chọn',
      noData: 'Không tìm thấy dữ liệu',
    },
    pagination: {
      goto: 'Nhảy tới',
      pagesize: '/trang',
      total: 'Tổng {total}',
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
      title: 'Thông báo',
      confirm: 'OK',
      cancel: 'Hủy',
      error: 'Dữ liệu không hợp lệ',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'Nhấn xoá để xoá',
      delete: 'Xóa',
      preview: 'Xem trước',
      continue: 'Tiếp tục',
    },
    slider: {
      defaultLabel: 'slider between {min} and {max}', // to be translated
      defaultRangeStartLabel: 'pick start value', // to be translated
      defaultRangeEndLabel: 'pick end value', // to be translated
    },
    table: {
      emptyText: 'Không có dữ liệu',
      confirmFilter: 'Xác nhận',
      resetFilter: 'Làm mới',
      clearFilter: 'Xóa hết',
      sumText: 'Tổng',
      selectAllLabel: 'Select all rows', // to be translated
      selectRowLabel: 'Select this row', // to be translated
      expandRowLabel: 'Expand this row', // to be translated
      collapseRowLabel: 'Collapse this row', // to be translated
    },
    tour: {
      next: 'Tiếp',
      previous: 'Trước',
      finish: 'Hoàn thành',
      close: 'Close this dialog', // to be translated
    },
    tree: {
      emptyText: 'Không có dữ liệu',
    },
    transfer: {
      noMatch: 'Dữ liệu không phù hợp',
      noData: 'Không tìm thấy dữ liệu',
      titles: ['Danh sách 1', 'Danh sách 2'],
      filterPlaceholder: 'Nhập từ khóa',
      noCheckedFormat: '{total} mục',
      hasCheckedFormat: '{checked}/{total} đã chọn ',
    },
    image: {
      error: 'LỖI',
    },
    pageHeader: {
      title: 'Quay lại',
    },
    popconfirm: {
      confirmButtonText: 'Ok',
      cancelButtonText: 'Huỷ',
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
  },
}
