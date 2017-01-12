// pages/api/file/file.js
Page({
  data: {},
  saveFile: function () {
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) {
            var savedFilePath = res.savedFilePath
            console.log(savedFilePath)
          }
        })
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },
  getSavedFileList: function () {
    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
      }
    })
  },
  getSavedFileInfo: function () {
    wx.getSavedFileInfo({
      filePath: 'wxfile://somefile', //仅做示例用，非真正的文件路径
      success: function (res) {
        console.log(res.size)
        console.log(res.createTime)
      }
    })
  },
  removeSavedFile: function () {
    wx.getSavedFileList({
      success: function (res) {
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  openDocument: function () {
    wx.downloadFile({
      url: 'http://pages.ctrip.com/tour/visa/bj1409/word/534.doc',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
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