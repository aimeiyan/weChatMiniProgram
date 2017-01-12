// pages/api/interface/modal/modal.js
Page({
  data: {},
  /**
   * 显示消息提示框
   */
  wxShowToast: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
      success: function () {
        console.log("成功显示消息提示框")
      }
    })
  },
  /**
   * 隐藏消息提示框
   */
  wxHideToast: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  },
  /**
   * ​显示模态弹窗
   */
  wxShowModal: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  /**
   * 显示操作菜单
   */
  wxShowActionSheet: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.query)
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