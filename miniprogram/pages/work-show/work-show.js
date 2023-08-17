// pages/work-show/work-show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    microfilms: [],
    promotions: [],
    intoView: '',
    selected: 0,
    selectedVideo: -1,
    scrollHeight: 0,
    navigationHeight: 0,
    statusBarHeight: 0,
    videoIcon: '',
    padding: [0, 16, 0, 16],
  },

  onLoad: function(options) {
    this.getVideoIcon()
    this.getNavigationHeight()
    this.getScrollHeight()
  },

  getNavigationHeight() {
    const screenInfo = wx.getWindowInfo()
    const { statusBarHeight } = screenInfo
    this.setData({
      navigationHeight: statusBarHeight + 48,
      statusBarHeight: statusBarHeight
    })
  },

  tapWorkVideo(e) {
    const {videoId} = e.detail
    this.setData({
      selectedVideo: videoId
    })
  },

  tapWorkCategory(e) {
    const {categoryId, type} = e.detail
    this.setData({
      selected: categoryId
    })
    
    this.loadedCategory(e)
  },

  getVideoIcon() {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'jdShow',
      data: {
        type: 'videoIcon'
      }
    }).then(res => {
      const result = res.result
      this.setData({
        videoIcon: result
      })
    }).catch(err => {
      console.error(err)
    })
  },

  loadWorksData(type) {
    return wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'jdShow',
      data: {
        type: type
      }
    })
  },

  loadedCategory(e) {
    const { type } = e.detail
    let funNameType = ''
    if (type == WorkType.microfilm) {
      funNameType = "microfilm"
    } else if (type == WorkType.promotional){
      funNameType = "promotion"
    } else {
      return
    }

    this.loadWorksData(funNameType).then(res => {
      const result = res.result.data
      if (type == WorkType.microfilm) {
        this.setData({
          microfilms: result
        })
      } else if (type == WorkType.promotional){
        this.setData({
          promotions: result
        })
      } else {
        return
      }
      
    }).catch(err => {
      console.error(err)
    })
  },

  getScrollHeight() {
    let screenInfo = wx.getWindowInfo()
    this.setData({
      scrollHeight: screenInfo.windowHeight - 68 - screenInfo.screenTop
    })
  }
})

const WorkType = {
  promotional: 1,  // 宣传片
  microfilm: 2,    // 微电影
  activity: 3,     // 活动跟拍
  graduation: 4,   // 毕业季
  wedding: 5       // 婚礼跟拍
}