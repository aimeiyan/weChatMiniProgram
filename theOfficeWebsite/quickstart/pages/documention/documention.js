var common = require('../../js/common.js')

var localValue = 'b';
//获取应用实例
var app = getApp();
console.log(app.globalData.count, "count-count--");

Page({
  data: {
    motto: 'documention',
    count: 1,
    id: 0,
    flag: false,
    array: [1, 2, 3, 4, 5],
    view: 'MINA',
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    userInfo: {},
    a: 1,
    b: 2,
    c: 3
  },
  //事件处理函数
  bindViewTap: function () {
    this.helloMINA();
    this.goodbyeMINA();
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  add: function () {
    this.setData({
      count: this.data.count + 1
    })
  },
  helloMINA: function () {
    common.sayHello('MINA')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA')
  }
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
