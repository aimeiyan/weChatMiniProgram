// pages/api/canvas/canvas.js
Page({
  data: {
    x: 0,
    y: 0,
    hidden: true
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    const ctx1 = wx.createCanvasContext('myCanvas1')
    // ctx1.setStrokeStyle('black')
    // ctx1.setFillStyle('blue')
    // ctx1.setShadow(10, 10, 10, 'red')
    // ctx1.fillRect(10, 10, 150, 75)
    ctx1.setStrokeStyle('red')
    ctx1.strokeRect(10, 10, 150, 75)
    ctx1.draw()

    const ctx3 = wx.createCanvasContext('myCanvas3')
    const grd3 = ctx3.createLinearGradient(0, 0, 200, 0)
    grd3.addColorStop(0, 'red')
    grd3.addColorStop(0.16, 'orange')
    grd3.addColorStop(0.33, 'yellow')
    grd3.addColorStop(0.5, 'green')
    grd3.addColorStop(0.66, 'cyan')
    grd3.addColorStop(0.83, 'blue')
    grd3.addColorStop(1, 'purple')
    ctx3.setFillStyle(grd3)
    ctx3.fillRect(10, 10, 150, 80)
    ctx3.draw()

    const ctx4 = wx.createCanvasContext('myCanvas4')
    const grd4 = ctx4.createCircularGradient(75, 50, 30)
    grd4.addColorStop(0, 'red')
    grd4.addColorStop(1, 'white')

    ctx4.setFillStyle(grd4)
    ctx4.fillRect(10, 10, 150, 80)
    ctx4.draw()

    const ctx5 = wx.createCanvasContext('myCanvas5')
    ctx5.beginPath()
    ctx5.moveTo(10, 10)
    ctx5.lineTo(150, 10)
    ctx5.stroke()

    ctx5.beginPath()
    ctx5.setLineCap("round")
    ctx5.setLineWidth(10)
    ctx5.moveTo(10, 20)
    ctx5.lineTo(150, 20)
    ctx5.stroke()

    ctx5.beginPath()
    ctx5.setLineWidth(10)
    ctx5.moveTo(10, 30)
    ctx5.lineTo(30, 45)
    ctx5.lineTo(10, 60)
    //  ctx5.fill()
    ctx5.stroke()

    ctx5.beginPath()
    ctx5.setLineJoin("miter")
    ctx5.setMiterLimit(1)
    ctx5.setLineWidth(10)
    ctx5.moveTo(30, 30)
    ctx5.lineTo(50, 45)
    ctx5.lineTo(30, 60)
    // ctx5.fill()
    ctx5.stroke()

    ctx5.draw()

    const ctx6 = wx.createCanvasContext('myCanvas6')
    ctx6.setFillStyle('red')
    ctx6.fillRect(0, 0, 150, 200)
    ctx6.setFillStyle('blue')
    ctx6.fillRect(150, 0, 150, 200)
    ctx6.clearRect(10, 10, 150, 75)
    ctx6.draw()

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
  },
  exportImg: function () {
    wx.canvasToTempFilePath({
      canvasId: "myCanvas4",
      success: function (res) {
        // success
        console.log(res.tempFilePath)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  }
})