// pages/components/checkbox/checkbox.js
Page({
  data: {
    items: [
      { name: "USA", value: "美国", color: 'red' ,disabled:'true'},
      { name: "CHN", value: "中国", checked: 'true' },
      { name: "BRA", value: "巴西", color: 'blue' },
      { name: "JPN", value: "日本", color: 'green' },
      { name: "ENG", value: "英国", color: 'yellow' },
      { name: "TUR", value: "法国" }
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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