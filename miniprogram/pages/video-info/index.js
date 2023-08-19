// pages/video-info/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    video: '',
    videoHeight: 0
  },

  onLoad(options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.getVideoHeight()
    this.loadActivityInfo(options.id).then(res => {
      const { video } = res.result.data
      this.setData({
        video: video
      })
    })
  },

  loadActivityInfo(id) {
    return wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'jdShow',
      data: {
        type: 'activityVideo',
        activityId: id
      }
    })
  },

  getVideoHeight() {
    let screenInfo = wx.getWindowInfo()
    this.setData({
      videoHeight: screenInfo.safeArea.bottom - screenInfo.statusBarHeight - 44
    })
  }
})