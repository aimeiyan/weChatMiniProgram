// pages/components/input/input.js
Page({
  data:{
    focus:false,
    inputValue:""
  },
  bindButtonTap:function(){
    this.setData({
      focus:"true"
    })
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  bindReplaceInput:function(e){
    var value=e.detail.value
    var pos=e.detail.cursor
    if(pos!=-1){
      var left=e.detail.value.slice(0,pos)
      pos=left.replace(/11/g,"2").length
    }

    return{
      value:value.replace(/11/g,'2'),
      cursor:pos
    }

     //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  },
  bindHideKeyboard:function(e){
    if(e.detail.value==='123'){
      wx.hideKeyboard();
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})