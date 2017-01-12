// pages/api/interface/navTo/navTo.js
Page({
  data: {},
  wxNavigateTo: function () {
    wx.navigateTo({
      url: '../modal/modal?id=1'
    })
  },
  wxRedirectTo: function () {
    wx.redirectTo({
      url: '../modal/modal?id=3',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  wxSwitchTab: function () {
    wx.switchTab({
      url: '../../../index/index',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  wxNavigateBack: function () {
    
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})