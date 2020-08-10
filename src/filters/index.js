  // import moment from 'moment'
  // import {format} from 'date-fns'
  import format from 'date-fns/format'
  import Vue from 'vue'

  Vue.filter('dateFormat', function (value, formatStr='yyyy-mm-dd hh:mm:ss') {
    // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
    return format(value, formatStr)
  })
