var Color = require('../models/Color.js')

//数字格式化
function formatNumber(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}

//时间格式化 format 格式，如yyyy-MM-dd HH:mm:ss.hhh
function formatTime(date, format) {
  var result = format
  result = result.replace("yyyy", date.getFullYear())
  var fullYear = '' + date.getFullYear()
  result = result.replace('yy', fullYear.substr(fullYear.length - 2, 2))
  result = result.replace('MM', formatNumber(date.getMonth() + 1, 2))
  result = result.replace('dd', formatNumber(date.getDate(), 2))
  result = result.replace('HH', formatNumber(date.getHours(), 2))
  result = result.replace('mm', formatNumber(date.getMinutes(), 2))
  result = result.replace('ss', formatNumber(date.getSeconds(), 2))
  result = result.replace('hhh', formatNumber(date.getMilliseconds(), 3))

  return result;
}

//转换时间显示格式 20170124->2017-01-24

function formatDateYYYYmmdd(originDate, seperate) {
  var result = ''
  var tSeperate = "-"
  if (seperate != null && seperate != '') {
    tSeperate = seperate
  }

  originDate = originDate + ''
  var length = originDate.length
  if (length >= 8) {
    var year = originDate.substr(0, 4)
    var month = originDate.substr(4, 2)
    var day = originDate.substr(6, 2)
    result = year + tSeperate + month + tSeperate + day
  }
  return result;
}

//转换时间格式 1701241049 ->17/01/24/10:49
function formatDateY_M_D_HHmm(originDate, seperate) {
  var result = ''
  var tSeperate = '/'
  if (seperate != null && seperate != '') {
    tSeperate = seperate
  }

  var length = originDate.length;
  if (length >= 10) {
    var year = originDate.substring(0, 2)
    var month = originDate.substring(2, 4)
    var day = originDate.substring(4, 6)
    var hh = originDate.substring(6, 8)
    var mm = originDate.substring(8, 10)

    var result = year + tSeperate + month + tSeperate + day + tSeperate + hh + ":" + mm
  }
  return result
}

//保留两位小数
function formatPrice(value) {
  if (!value) return '--'

  value = value / 1000
  return value.toFixed(2)
}

function formatZd(value) {
  if (!value) return '--'

  value = value / 1000
  return value.toFixed(2)
}

function formatZdf(value) {
  if (!value) return '--'

  value = value / 100
  return value.toFixed(2) + '%'
}

// 格式化换手率
function formatHsl(value) {
  value = value / 100
  return value.toFixed(2) + '%'
}

//格式化市盈率、市净率、量比
function formatSyl(value) {
  if (!value) return value = '--'

  value = value / 100
  return value.toFixed(2)
}

//格式化成交量（占占7个字符）
function formatVolumn(value) {
  if (value < 100000) {
    return value.toFixed(2)
  } else if (100000 <= value < 1000000) {
    value = value / 10000
    return value.toFixed(2) + '万'
  } else if (1000000 <= value < 10000000) {
    value = value / 10000
    return value.toFixed(1) + '万'
  } else if (10000000 <= value < 100000000) {
    value = value / 10000
    return value.toFixed(0) + '万'
  } else {
    value = value / 100000000
    return value.toFixed(2) + '亿'
  }
}

//格式化净流量
function formatJl(val) {
  var flag = '';
  if (val < 0) {
    flag = "-";
    val = -val;
  }

  if (val < 10000) {
    return flag + val;
  } else if (val < 100000000) {
    val = val / 10000
    return flag + val.toFixed(0) + '万'
  } else if (val < 100000000000) {
    val = val / 100000000
    return flag + val.toFixed(1) + '亿'
  } else {
    val = val / 100000000
    return flag + val.toFixed(0) + '亿'
  }
}


//格式化总值（最多占7个字符的位置，如1001.9万，30.00亿、300.0亿）
function formatAmount(val) {
  var flag = "";
  if (val < 0) {
    flag = "-1";
    val = -val;
  }

  if (val < 100000) {  //<10万
    return flag + val.toFixed(0)    //返回至最多占5个字符
  } else if (val >= 100000 && val < 1000000) {  // 10万到100万
    val = val / 10000;
    return flag + val.toFixed(2) + "万";  //返回至最多占6个字符
  } else if (val >= 1000000 && val < 10000000) {   //100万到1000万
    val = val / 10000;
    return flag + val.toFixed(1) + "万"  //返回至最多占6个字符
  } else if (val >= 10000000 && val < 100000000) {  //1000万到1亿
    val = val / 10000;
    return flag + val.foFixed(1) + "万"
  } else if (val >= 100000000 && val < 1000000000) {  //1亿到10亿
    val = val / 100000000;
    return flag + val.toFixed(2) + "亿";
  } else if (val >= 1000000000 && val < 10000000000) { //10亿到100亿
    val = val / 100000000;
    return flag + val.toFixed(2) + "亿";
  } else {
    val = val / 100000000;
    return flag + val.toFixed(1) + "亿"
  }

}

//获取不同的颜色值
function getColorByZd(zd){
  if(zd>=0){
    return Color.c1
  }else{
    return Color.c2
  }
}

module.exports = {
  formatNumber: formatNumber,
  formatTime: formatTime,
  formatDateYYYYmmdd: formatDateYYYYmmdd,
  formatDateY_M_D_HHmm: formatDateY_M_D_HHmm,
  formatPrice: formatPrice,
  formatZd: formatZd,
  formatZdf: formatZdf,
  formatHsl: formatHsl,
  formatSyl: formatSyl,
  formatVolumn: formatVolumn,
  formatJl: formatJl,
  formatAmount: formatAmount,
  getColorByZd:getColorByZd
}