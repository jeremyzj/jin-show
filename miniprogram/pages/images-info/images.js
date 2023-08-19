// pages/images.js
Page({

  /**
   * Page initial data
   */
  data: {
    images: [],
    swipperHeight: 0,
    screenHeight: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.loadSwpperHeight()
    this.loadActivityInfo(options.id).then(res => {
      const {images} =  res.result.data
      const imageItems = images.map((value, id) => {
        return {
          item: value,
          id
        }
      })
      console.log(imageItems)
      this.setData({
        images: imageItems
      })
    })

    
  },

  loadActivityInfo(id) {
    return wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'jdShow',
      data: {
        type: 'activityInfo',
        activityId: id
      }
    })
  },

  loadSwpperHeight() {
    const screenInfo = wx.getWindowInfo()
    this.setData({
      swipperHeight: screenInfo.safeArea.bottom - screenInfo.statusBarHeight - 44,
      screenHeight: screenInfo.windowHeight
    })
  }
})