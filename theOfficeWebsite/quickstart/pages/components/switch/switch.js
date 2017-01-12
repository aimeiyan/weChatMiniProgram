// pages/components/switch/switch.js
Page({
  data:{},
  switch1Change:function(e){
      console.log('swich1 发生 change 事件，携带值为：',e.detail.value)
  },  
  switch2Change:function(e){
      console.log('swich2 发生 change 事件，携带值为：',e.detail.value)},
      checkboxChange:function(e){
        console.log('checkbox发生change事件，携带值为：',e.detail.value)
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