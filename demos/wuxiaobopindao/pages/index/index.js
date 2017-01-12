//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/resource/images/banner/1.jpg', '/resource/images/banner/2.jpg', '/resource/images/banner/3.jpg', '/resource/images/banner/4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    latest: [
      {
        img: "/resource/images/banner/1.jpg",
        title: "这个房产商为什么去养牛了？",
        subtitle: "《吴晓波频道新锐会员》",
        listend: "1.2W",
        msg: "99",
        date:"01-11"
      },
      {
        img: "/resource/images/banner/1.jpg",
        title: "60后企业家干投资，不应该受指责",
        subtitle: "《吴晓波频道新锐会员》",
        listend: "5W",
        msg: "233",
        date:"01-10"
      },
      {
        img: "/resource/images/banner/1.jpg",
        title: "一款天气app都要上市说明了这3个问题",
        subtitle: "《吴晓波频道新锐会员》",
        listend: "4W",
        msg: "45",
        date:"01-09"
      }, {
        img: "/resource/images/banner/1.jpg",
        title: "吴晓波频道新锐会员",
        subtitle: "《吴晓波频道新锐会员》",
        listend: "5.8W",
        msg: "567",
        date:"01-08"
      }
      , {
        img: "/resource/images/banner/1.jpg",
        title: "吴晓波频道新锐会员",
        subtitle: "《吴晓波频道新锐会员》",
        listend: "8.8W",
        msg: "32",
        date:"01-07"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/pages/index/index'
    }
  }
})
