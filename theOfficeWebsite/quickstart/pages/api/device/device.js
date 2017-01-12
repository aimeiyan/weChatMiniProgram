// pages/api/storage/storage.js
Page({
  data: {},

  /**
   * 获取系统信息异步接口
   */
  wxGetSystemInfo: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },

  /**
  * 获取系统信息同步接口
  */
  wxGetSystemInfoSync: function () {
    try {
      var res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
    } catch (e) {
      // Do something when catch error
    }
  },

  /**
   * 获取网络类型
   */
  wxGetNetworkType: function () {
    wx.getNetworkType({
      success: function (res) {
        var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
      }
    })
  },

  /**
   * 监听重力感应数据，频率：5次/秒
   */
  wxOnAccelerometerChange: function () {
    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
  },

  /**
   * 监听罗盘数据，频率：5次/秒
   */
  wxOnCompassChange: function () {
    wx.onCompassChange(function (res) {
      console.log(res.direction)
    })
  },

  /**
   * 拨打电话
   */
  wxMakePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '13810289671' //仅为示例，并非真实的电话号码
    })
  },

  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   */
  wxScanCode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
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