// pages/api/media/image/image.js
Page({
  data: {},
  chooseImage: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths, "tempFilePaths");
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
          }
        })
      }
    })
  },
  previewImage: function () {
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['https://www.baidu.com/img/bd_logo1.png'] // 需要预览的图片http链接列表
    })
  },
  /**
   * 获取图片信息
   */
  getImageInfo: function () {
    wx.getImageInfo({
      src: 'https://www.baidu.com/img/bd_logo1.png',
      success: function (res) {
        // success
        console.log(res.width)
        console.log(res.height)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
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