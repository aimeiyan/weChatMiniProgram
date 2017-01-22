// pages/api/canvas/canvas.js
Page({
  data: {
    x: 0,
    y: 0,
    hidden: true
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    const ctx = wx.createCanvasContext('myCanvas1')
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()
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
  },
  start: function (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end: function () {
    this.setData({
      hidden: true
    })
  }
})