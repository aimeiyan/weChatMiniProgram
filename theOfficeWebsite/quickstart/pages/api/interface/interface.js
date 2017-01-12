var app = getApp();

Page({
  data: {
    text: "hello",
    itemArr: [{
      name: "交互反馈",
      pageName: "modal"
    },
    {
      name: "设置导航条",
      pageName: "setNav"
    },
    {
      name: "导航",
      pageName: "navTo"
    },
    {
      name: "动画",
      pageName: "animation"
    },
    {
      name: "绘图",
      pageName: "canvas"
    },
    {
      name: "下拉刷新",
      pageName: "pullDownRefresh"
    }],
    numberArray: [1, 2, 3, 4]
  },
  forwardLink: function (event) {
    var link = event.target.dataset.link;

    wx.navigateTo({
      url: link + "/" + link,
      success: function (res) {
        // success
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