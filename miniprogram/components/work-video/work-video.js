// components/work-video/work-video.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: String,
    poster: String,
    isSelect: Boolean,
    title: String,
    videoId: Number,
    videoIcon: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    videoHeight: 0,
    screenWidth: 0
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      this.getVideoHeight()
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getVideoHeight() {
      let screenInfo = wx.getWindowInfo()
      let height = screenInfo.windowWidth * (9 / 16)
      this.setData({
        videoHeight: height,
        screenWidth: screenInfo.windowWidth
      })
    },
    tapImageCover(e) {
      var detail = {videoId: this.properties.videoId} // detail对象，提供给事件监听函数
      this.triggerEvent('tapVideo', detail)
    },
  }
})
