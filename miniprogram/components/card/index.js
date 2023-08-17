// components/card/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    icon:String,
    title: String,
    comment: String,
    isVideo: Boolean,
    videoIcon: String
  },

  /**
   * Component initial data
   */
  data: {
    imageHeight: 0,
    imageWidth: 0
  },

  /**
   * Component methods
   */
  methods: {
    imageOnload(event) {
      console.log(event.detail)
      const {width, height} = event.detail
      const screenWidth = wx.getWindowInfo().screenWidth
      const imageWidth =  screenWidth / 2 - 6
      const imageHeight = ( height / width )  * imageWidth
      this.setData({
        imageHeight: imageHeight,
        imageWidth: imageWidth
      })
    }
  }
})
