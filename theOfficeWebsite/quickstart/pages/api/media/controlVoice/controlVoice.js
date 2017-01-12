// pages/api/media/controlVoice/controlVoice.js
Page({
  data: {},
  playVoice: function () {
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        console.log(tempFilePath, "tempFilePath");

        // wx.playVoice({
        //   filePath: tempFilePath,
        //   success: function (res) {
        //     console.log("播放完毕")
        //   }
        // })
      }
    })

    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)

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