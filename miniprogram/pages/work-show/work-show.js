// pages/work-show/work-show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    worksCategorys: getCategorys(),
    worksData: getWorksList(3),
    intoView: '',
    selected: 0,
    screenInfo: wx.getWindowInfo()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  chooseVipCategory(evt) {
    const id = evt.currentTarget.dataset.id
    this.setData({
      intoView: `category-${id}`,
      selected: parseInt(id, 10)
    })
  },
})

function getCategorys() {
  let expCategorys = [
    '优秀作品',
    '政务视频',
    '婚礼视频',
    '创意视频'
  ]
  expCategorys = expCategorys.map((name, id) => ({
    id,
    name
  }))
  return expCategorys
}

function getWorksList(num) {
  const titles = [
    '酷跑春天·跑鞋新品发布会',
    '直接全球气候变化',
    '幻想奇遇·3D音乐节'
  ]
  const works = []
  for (let id = 0; id < num; id++) {
    works.push({
      id,
      title: titles[(id % titles.length)],
      url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
    })
  }
  return works
}