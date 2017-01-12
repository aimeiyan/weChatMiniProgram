// pages/components/text/text.js
var initData = "this is first line\nthis ig second line"
var extraLine = [];
Page({
  data: {
    text: initData
  },
  add: function () {
    extraLine.push("other line")
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function () {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }

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