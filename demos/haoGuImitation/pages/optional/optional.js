// pages/optional/optional.js

var api = require("../../api/api.js");


var mAryIndex = [
  {
    goodsid: 1,
    name: '上证指数',
    zd: '-',
    zdf: '-%',
    intZd: 0
  },
  {
    goodsid: 1399001,
    name: '深证指数',
    zd: '-',
    zdf: '-%',
    intZd: 0
  },
  {
    goodsid: 1399006,
    name: '创业指数',
    zd: '-',
    zdf: '-%',
    intZd: 0
  }
];

var intervalId = 0;

var isLongTaping = false;

Page({
  data: {
    aryIndexs: [],
    sortType: 1,
    aryGoods: [],
    displayDelIndex: -1
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      aryIndexs: mAryIndex
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    startTimer(this);
  },
  onHide: function () {
    // 页面隐藏
    stopTimer();
  },
  onUnload: function () {
    // 页面关闭
    stopTimer();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  onShareAppMessage:function(){
    return {
      title:"自选",
      desc:`${getApp().globalData.shareDesc}`,
      path:'/pages/optional/optionals'
    }
  },
  onscreenTap:function(event){
     console.log("sky onscreenTap Tap:", event.currentTarget.dataset.tapIndex);
     this.setData({
       displayDelIndex:-1
     })
  },
  doChangeSort_zdf:function(){

  },
  // 显示搜索股票
  onStockSearchEvent:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //点击加号,跳转到搜索
  onAddBtnTap:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  }
})


function sortAndSetGoods(that, stype, ary) {
  ary.sort(function (goods1, goods2) {
    var zdf1 = goods1.zdfValue
    var zdf2 = goods2.zdfValue

    if (goods1.suspension == 1) {
      //停牌
      zdf1 = stype * -20000
    }
    if (goods2.suspension == 1) {
      //停牌
      zdf2 = stype * -20000
    }

    return stype * (zdf2 - zdf1);

    // return stype * (goods2.zd - goods1.zd);
  })
  that.setData({
    sortType: stype,
    aryGoods: ary

  })
}

function requestCustomGoodsInfo(that) {

  var tIndex = [1, 1399001, 1399006];
  var tOptional = getApp().globalData.optionals;
  var tCustom = tIndex.concat(tOptional);

  api.stock.getCustomDetail(tCustom).then(
    function (res) {
      var tSortType = that.data.sortType;

      if (res.customDetail.length == tCustom.length) {
        var resIndexs = res.customDetail.slice(0, 3);
        that.setData({
          aryIndexs: resIndexs,

        });
        var resOptional = res.customDetail.slice(3);
        sortAndSetGoods(that, tSortType, resOptional);
      }
    },
    function (err) {

    }
  );

}

//启动计时
function startTimer(that) {
  requestCustomGoodsInfo(that);
  var interval = getApp().globalData.netWorkType == 'wifi' ? getApp().globalData.WIFI_REFRESH_INTERVAL : getApp().globalData.MOBILE_REFRESH_INTERVAL;
  intervalId = setInterval(function () {
    requestCustomGoodsInfo(that);
  }, interval);
}

//停止计时
function stopTimer() {
  clearInterval(intervalId);
}