// pages/api/interface/setNav/setNav.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '当前页面'
    });
  },
  onReady: function () {
    // 页面渲染完成
    // wx.showNavigationBarLoading();
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