var app = getApp();

Page({
    data:{
        text:"hello",
        itemArr:["view","scroll-view","swiper","icon","text","progress","button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","navigator","audio","image","video","map","canvas","contact-button"],
        numberArray:[1, 2, 3, 4]
    },
    forwardLink:function(event){
        var link=event.target.dataset.link;

        wx.navigateTo({
          url: link+"/"+link,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})