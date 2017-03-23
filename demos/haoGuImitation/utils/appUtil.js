var Api = require('../api/api.js');

var Service = require('../api/service.js')
var Promise = Service.Promise
var StaticStrings = Service.StaticStrings

var newsUtil = require('newsUtil.js')

function getUid(app) {
    wx.login({
        success: function (res) {
            //success
            console.log("login success", res);
            var code = res.code;
            getUserId(code, "", "");

            // wx.getUserInfo({
            //   success: function(res){
            //     // success
            //     console.log("=======userinfo",res);
            //     getUserId(code,res.encryptedData,res.iv)
            //   },
            //   fail: function() {
            //     // fail
            //   },
            //   complete: function() {
            //     // complete
            //   }
            // })

            // wx.request({
            //     url: 'https://api.weixin.qq.com/sns/jscode2session',
            //     data: {
            //         appid: "wxcf49fea1d8e137ba",
            //         secret: "1df1ef42b8060f96d7752fe03569ab97",
            //         js_code: res.code,
            //         grant_type: "authorization_code"
            //     },
            //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            //     // header: {}, // 设置请求的 header
            //     success: function (res) {
            //         // success
            //         console.log("=======truususususuususussuussu====res", res)
            //         app.globalData.uid = res.data.uid
            //         requestOptionals()
            //         loadReadNews()
            //     },
            //     fail: function () {
            //         // fail
            //         console.log("get uid fail", res)

            //     },
            //     complete: function () {
            //         // complete
            //     }
            // })
        },
        fail: function (res) {
            console.log("login fail", res);
        },
        complete: function () {
            //complete
        }
    })
}

function getUserId(code, encryptedData, iv) {
    wx.request({
        url: 'https://wxapp.emoney.cn/haogu365/web/user/getid',
        data: {
            jsCode: code,
            encryptedData: encryptedData,
            iv: iv
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
            // success
            console.log("===========get user id success=res", res)

            if (res.statusCode == 200) {
                if (res.data.result.code == 0) {
                    getApp().globalData.uid = res.data.detail;
                    requestOptionals();
                    loadReadNews();
                } else {
                    console.log("======获取uid失败", res)
                }
            } else {
                console.log("======获取uid失败", res);
            }

        },
        fail: function () {
            // fail
            console.log("=========获取UID失败", res)
        },
        complete: function () {
            // complete
        }
    })
}

//网络类型
function getNetWorkType() {
    wx.getNetworkType({
        success: function (res) {
            getApp().globalData.netWorkType = res.networkType
        }
    })
}