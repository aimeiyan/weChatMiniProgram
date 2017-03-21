import Promise from './lib/es6-promise-min';

let StaticStrings = require('../utils/StaticStrings.js')

// let BaseUrl = "http://192.168.3.51:8094/?X-Protocol-Id="    // 邬  K线
// let BaseUrl = "http://120.55.169.35:1121/?X-Protocol-Id="    // 郭磊  K线
// let BaseUrl = "http://192.168.8.189:2368/?X-Protocol-Id="      // 郭磊   个股新闻
//let BaseUrl = "http://192.168.8.189:1122/?X-Protocol-Id="    // 邬  股票行情
// var TranferUrl = "https://mobiletest.emoney.cn/wxapp/transfer"
// let BaseOptionalUrl = "http://192.168.8.189:1131/?X-Protocol-Id="   // 男神   自选股

let BaseUrl = "https://wxapp.emoney.cn/haogu365/";

let BaseInfoUrl = BaseUrl + "info" + "?X-Protocol-Id="       //新闻
let BaseQuotaUrl = BaseUrl + "quota" + "?X-Protocol-Id="        // 行情
let BaseHaoGuUrl = BaseUrl + "biz" + "?X-Protocol-Id="          // 好股
let BaseOptionalUrl = BaseUrl + "web/usertransfer" + "?X-Protocol-Id="      // 自选

function request(options) {
    var opts = Object.assign({
        method: 'POST',
        header: {
            // 'X-Protocol-Id': '20400',
            'X-Request-Id': '2016-12-15',
            'Content-Type': 'application/json'
        },
        showLoading: true,
        showFailMsg: true
    }, options);

    var promise = new Promise(function (resolve, reject) {
        opts.success = function (res) {
            resolve(res);
        }

        opts.fail = function (res) {
            opts.showFailMsg && wx.showToast({
                title: '请求失败',
                icon: 'warn',
                duration: 10000
            });
            reject(res)
        }

        opts.complete = function (res) {
            opts.showLoading && wx.hideToast();
            // typeof options.complete === 'function' && options.complete(res);
        }

        opts.showLoading && wx.showToast({
            title:'加载中',
            icon:'loading',
            duration:100000
        })
        wx.request(opts);
    })

    return promise

}