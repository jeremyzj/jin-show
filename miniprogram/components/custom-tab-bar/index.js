Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/index/index",
      iconPath: "../../images/tab1.png",
      selectedIconPath: "../../images/selected_tab1.png",
      text: "作品"
    }, {
      pagePath: "/index/index2",
      iconPath: "../../images/tab1.png",
      selectedIconPath: "../../images/selected_tab1.png",
      text: "关于"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})