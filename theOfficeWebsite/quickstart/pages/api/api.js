var app = getApp();

Page({
  data: {
    text: "hello",
    itemArr: [{
      name: "网络接口",
      pageName: "network"
    },
    {
      name: "数据缓存",
      pageName: "storage"
    },
    {
      name: "位置",
      pageName: "location"
    },
    {
      name: "设备",
      pageName: "device"
    },
    {
      name: "界面",
      pageName: "interface"
    },
    {
      name: "媒体",
      pageName: "media"
    },
    {
      name: "文件",
      pageName: "file"
    },
    {
      name: "绘图",
      pageName: "canvas"
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