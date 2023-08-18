// pages/work-show/work-show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    microfilms: [],
    promotions: [],
    activities: [],
    goods: getGoods(20),
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
    } else if (type == WorkType.activity) {
      funNameType = "activity"
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
        console.log(result)
        this.setData({
          promotions: result
        })
      } else if (type == WorkType.activity) {
        console.log(result)
        this.setData({
          activities: result
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
    console.log(screenInfo)
    this.setData({
      scrollHeight: screenInfo.windowHeight - 148 - screenInfo.screenTop
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



export function getGoods(num) {
  const titles = [
    '小程序性能优化课程基于实际开发场景，提升小程序性能表现，满足用户体验',
    '解析常见小程序违规类型，帮助大家更好理解平台规则',
    '快速了解微信小程序在医疗行业的应用',
    '小程序直播的企业实践案例。',
    '微信客服轻松配置，入门必修',
    '想做互联网的生意，可以通过微信怎么经营呢？',
    '了解小程序开发动态，听官方为你解读新能力',
    '医保支付、互联网医院、线上问诊...小程序如何帮助传统医院数字化？',
    '内含开店指引、店铺运营和平台规则，帮你快速掌握小商店经营秘诀',
    '浅谈连锁零售的私域流量运营'
  ]

  const images = [
    'https://res.wx.qq.com/op_res/RBwYn_b7VGuWuLJ2qBChU_LhYxhaP5JTy7TWgezsDY7RW_l_e04fR7oG7sCKmS8hc8mVeZaY6eUWT3nk-ww_ZQ',
    'https://res.wx.qq.com/op_res/Zmvv0fisUjaMjuqWLhWWkuzGktaXJEQt46EaKsCKeT06Z4tROseXN0joI7h2qwzqyx2FUy57cveZL-8iArI8_Q',
    'https://res.wx.qq.com/op_res/mGK9l-4vYzVgHuIz_uFeJrBCMpypwJ_xFgSnas6etb7Y6JuMRRMBJ6cSMmbmSkCkOjCSPDdC_eLEK1_FT-d-PQ',
    'https://res.wx.qq.com/op_res/RBwYn_b7VGuWuLJ2qBChU-O3axOjUJGFgutF9Xc1JL1uxXFWYdW85mWG0Zvm5nv7rvP18CJ0q6-RRFM0xWLLog',
    'https://res.wx.qq.com/op_res/RBwYn_b7VGuWuLJ2qBChU3ywQmrV-rSREDwo0Hp9m7iIZZ7Njvjq_TlOg_0ss0cgQL0pfKOuB2NRpAcwfALxvw',
    'https://res.wx.qq.com/op_res/mGK9l-4vYzVgHuIz_uFeJgc9If4xjgvN3O4UQclWMiJxMoExkarf71FN-3SSf3Sh-GoatfvTbKcPE-grH-1L9g',
    'https://res.wx.qq.com/op_res/mGK9l-4vYzVgHuIz_uFeJu8Q1L10fFiMMnZVYnLoP1GuT0q26CJLtjSRfJAjTvj6DBNuWrzzMD9UYZEb-pznKA',
    'https://res.wx.qq.com/op_res/RBwYn_b7VGuWuLJ2qBChU1GROxmiPIBOCoA5Es44GxjN0KuCQQsoxEH33l05TCgk04n0dssHAIPxIV2ycSlSJA',
    'https://res.wx.qq.com/op_res/RBwYn_b7VGuWuLJ2qBChU68wmBQzYcfQfuIAh1IKWq7OyG0EWxdWGhotYHFh-k-JpmkJ1Otq-mYUT8Dp3iucvg',
    'https://res.wx.qq.com/op_res/mGK9l-4vYzVgHuIz_uFeJrmxgZKLSYHHwqx6YfJyqPnSNeIHovelr_r6GLFpsiCuCuBgYKBc68vBi0dJYSMeZA'
  ]

  const goods = []
  for (let id = 0; id < num; id++) {
    goods.push({
      id,
      title: titles[(id % titles.length)],
      icon: images[(id % titles.length)] // `/images/goods/g${(id % num)}.jpg`
    })
  }
  return goods
}