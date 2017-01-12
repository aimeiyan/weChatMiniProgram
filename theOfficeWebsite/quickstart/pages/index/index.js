//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    text: 'testtest',
    array: [{ msg: '1' }, { msg: '2' }],
    userInfo: {},
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  componentsList: function () {
    wx.navigateTo({
      url: '../components/components',
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
  },
  apiList: function () {
    wx.navigateTo({
      url: '../api/api',
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
  },
  onLoad: function (options) {
    console.log('生命周期函数函数-监听页面加载');
    console.log(options, "options----+++");
    var that = this;
    var appInstance = getApp()
    console.log(appInstance.globalData.globalVar) // I am global data

    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  onReady: function () {
    console.log("生命周期函数-监听页面初次渲染完成");
    console.log(this.customData.hi, "customData---");
    this.viewTap();
    console.log(this.data, "data--");
  },
  onShow: function () {
    console.log("生命周期函数-监听页面显示");
  },
  onHide: function () {
    console.log("生命周期函数-监听页面隐藏");
  },
  onPullDownRefresh: function () {
        // wx.stopPullDownRefresh()
    console.log("页面相关事件处理函数-监听用户下拉动作");
  },
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数");
  },
  onShareAppMessage: function () {
    console.log("用户点击右上角分享");
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },
  // Event handler.
  viewTap: function () {
    console.log('view tap');
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function () {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})
