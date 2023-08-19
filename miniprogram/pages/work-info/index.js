// pages/work-info/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    content: "",
    images: [],
    id : ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log(options)

    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.loadActivityInfo(options.id).then(res => {
      const {content, images} =  res.result.data
      const imageItems = images.map((value, id) => {
        return {
          item: value,
          id
        }
      })

      this.setData({
        content: content,
        images: imageItems,
        id: options.id
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

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})