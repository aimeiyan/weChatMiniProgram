//判断日期是否为今天 date
Date.prototype.today = function (date) {
    if (this != undefined && this.constructor == Date) {
        if (date == undefined) {
            date = new Date()
        }

        if (this.getYear() == date.getYear() && this.getMonth() == date.getMonth() && this.getDate() == date.getDate()) {
            return true
        } else {
            return false
        }
    }
}

//判断日期是否为今年 date
Date.prototype.thisYear = function (date) {
    if (this != undefined && this.constructor == Date) {
        if (date == undefined) {
            date = new Date()
        }

        if (this.getYear() == date.getYear()) {
            return true
        } else {
            return false
        }
    }
}