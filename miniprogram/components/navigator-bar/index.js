// components/navigator-bar/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    title: String,
    needLogo: Boolean
  },

  /**
   * Component initial data
   */
  data: {
    navigationHeight: 0,
    statusBarHeight: 0
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      this.getNavigationHeight()
    },
  },

  /**
   * Component methods
   */
  methods: {
    getNavigationHeight() {
      const screenInfo = wx.getWindowInfo()
      const { statusBarHeight } = screenInfo
      this.setData({
        navigationHeight: statusBarHeight + 44,
        statusBarHeight: statusBarHeight
      })
    },
  }
})
