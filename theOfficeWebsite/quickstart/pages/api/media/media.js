var app = getApp();

Page({
  data: {
    text: "hello",
    itemArr: [{
      name: "图片",
      pageName: "image"
    },
    {
      name: "录音",
      pageName: "record"
    },
    {
      name: "音频播放控制",
      pageName: "controlVoice"
    },
    {
      name: "音乐播放控制",
      pageName: "controlAudio"
    },
    {
      name: "音乐组件控制",
      pageName: "controlAudioContext"
    },
    {
      name: "视频",
      pageName: "video"
    },
    {
      name: "视频组件控制",
      pageName: "controlVideoContext"
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