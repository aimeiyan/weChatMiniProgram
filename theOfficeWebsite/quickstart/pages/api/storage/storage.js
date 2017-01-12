// pages/api/storage/storage.js
Page({
  data: {},
   /**
   * 异步存储
   */
  wxSetStorage: function () {
    wx.setStorage({
      key: "中国",
      data: "china"
    })
  },
   /**
   * 同步存储
   */
  wxSetStorageSync: function () {
    try {
      wx.setStorageSync('key', 'English')
    } catch (e) {
    }
  },
  /**
   * 异步取信息
   */
  wxGetStorage: function () {
    wx.getStorage({
      key: 'key',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  wxGetStorageInfo: function () {
    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
  },
  wxRemoveStorage: function () {
    wx.removeStorage({
      key: 'key',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  wxClearStorage: function () {
    wx.clearStorage()
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