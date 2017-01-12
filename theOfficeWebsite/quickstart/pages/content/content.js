//index.js

var localValue='a';

//获取应用实例
var app = getApp();
app.globalData.count++;

Page({
  data: {
    motto: 'content',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
