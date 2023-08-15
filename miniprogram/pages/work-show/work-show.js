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
    selectedVideo: -1,
    scrollHeight: getScrollHeight()
  },

  chooseVipCategory(evt) {
    const id = evt.currentTarget.dataset.id
    this.setData({
      intoView: `category-${id}`,
      selected: parseInt(id, 10)
    })
  },

  tapWorkVideo(e) {
    const {videoId} = e.detail
    this.setData({
      selectedVideo: videoId
    })
  }
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
    '这里可以填写优秀作品的视频标题',
    '直接全球气候变化',
    '幻想奇遇·3D音乐节'
  ]
  const works = []
  for (let id = 0; id < num; id++) {
    works.push({
      id,
      title: titles[(id % titles.length)],
      url: 'https://636c-cloud1-8gnde99f1c63f90f-1319765993.tcb.qcloud.la/F1258B99-3F5E-40F5-8B15-4B59CB1D5D02.MOV?sign=50a00ddeb88c68a4e6683df4c016e3b1&t=1691904373'
    })
  }
  return works
}

function getVideoHeight() {
  let screenInfo = wx.getWindowInfo()
  let height = screenInfo.windowWidth * (9 / 16)
  return height
}

function getScrollHeight() {
  let screenInfo = wx.getWindowInfo()
  return screenInfo.windowHeight - 67
}