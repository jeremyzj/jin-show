// components/work-category/work-category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    worksCategorys: getCategorys(),
    intoView: '',
    selected: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseVipCategory(evt) {
      const id = evt.currentTarget.dataset.id
      this.setData({
        intoView: `category-${id}`,
        selected: parseInt(id, 10)
      })
    },
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