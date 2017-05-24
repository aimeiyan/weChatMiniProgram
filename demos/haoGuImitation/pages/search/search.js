// pages/search/search.js

var Api = require('../../api/api.js');
var SearchBar = require('../common/SearchBar/SearchBar.js');
var optionalUtil = require('../../utils/optionalUtil.js')
var Util = require('../../utils/util.js')
let viewmodel = require('viewmodel.js');


Page({
  data: {
    stockArray: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    var that = this;
    SearchBar.init("代码/名称/简拼", that);

    that.setData({
      stockArray: viewmodel.getDefaultData()
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '搜索',
      desc: `${getApp().globalData.shareDesc}`,
      path: `/pages/kanpan/kanpan?page=search`
    }
  },
  onSearchBarClearEvent: function (e) {
    var that = this;
    SearchBar.onSearchBarClearEvent(e, that);

    that.setData({
      stockArray: viewmodel.getDefaultData()
    })
  },
  onSearchBarChangedEvent: function (e) {
    var that = this;
    SearchBar.onSearchBarChangedEvent(e, that);
    
    if (e.detail.value.length > 0) {
      Api.stock.search({
        key: e.detail.value
      }).then(function (result) {
        that.data.stockArray = result;
        that.setData(that.data);

        if (that.data.stockArray.length == 1) {
          wx.hideKeyboard();
          var stock = that.data.stockArray[0];
          Util.gotoQuote(stock.goodsId, stock.name, stock.code);
        }

      })
    } else {
      that.setData({
        stockArray: viewmodel.getDefaultData()
      })
    }
  }
})