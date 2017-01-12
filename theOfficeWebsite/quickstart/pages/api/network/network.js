// pages/api/wxRequest/wxRequest.js
Page({
  data: {
    flag: true
  },
  networkRequest: function () {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.title)
        that.setData({
          title: res.data.title,
          image: res.data.image,
          author: res.data.author,
          flag: false
        })
      }
    })
  },
  wxUploadFile: function () {
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  wxDownloadFile: function () {
    wx.downloadFile({
      url: 'https://codeload.github.com/douban/douban-client/zip/master', //仅为示例，并非真实的资源
      success: function (res) {
        wx.playVoice({
          filePath: res.tempFilePath
        })
      }
    })
  },
  connectSocket: function () {
    var socketOpen = false
    var socketMsgQueue = []

    // 创建一个 WebSocket 连接
    wx.connectSocket({
      url: 'https://api.douban.com/v2/book/1220562',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function () {
        // 监听WebSocket连接打开事件。
        wx.onSocketOpen(function (res) {
          socketOpen = true
          for (var i = 0; i < socketMsgQueue.length; i++) {
            sendSocketMessage(socketMsgQueue[i])
          }
          socketMsgQueue = []
        })

      }
    })


    function sendSocketMessage(msg) {
      if (socketOpen) {
        wx.sendSocketMessage({
          data: msg
        })
      } else {
        socketMsgQueue.push(msg)
      }
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数



    // 监听WebSocket错误
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！')
    })
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