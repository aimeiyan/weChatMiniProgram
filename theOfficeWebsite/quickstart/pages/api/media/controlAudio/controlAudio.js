// pages/api/media/controlAudio/controlAudio.js
Page({
  data: {},
  listenerButtonPlay: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://cdn.y.baidu.com/be295bcb944a5e578a3f24038e9ee9ca.mp3',
      title: '未知',
      coverImgUrl: 'http://r1.ykimg.com/050E0000576B75F667BC3C136B06E4E7'
    })
  },
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log(res)
        //duration 总时长
        //currentPosition 当前播放位置
        //status 播放状态
        //downloadPercent 下载状况 100 即为100%
        //dataUrl 当前播放音乐地址
      }
    })
  },
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio();
  },
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 30
    })
  },
  listenerButtonStop: function () {
    wx.stopBackgroundAudio()
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    /**
     * 监听音乐播放
     */
    wx.onBackgroundAudioPlay(function () {
      console.log('onBackgroundAudioPlay')
    })

    /**
     * 监听音乐暂停
     */
    wx.onBackgroundAudioPause(function () {
      console.log('onBackgroundAudioPause')
    })

    /**
     * 监听音乐停止
     */
    wx.onBackgroundAudioStop(function () {
      console.log('onBackgroundAudioStop')
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