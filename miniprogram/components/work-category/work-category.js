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
    worksCategorys: [],
    intoView: '',
    selected: 0
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      this.getCategorys()
    },
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
      const { worksCategorys } = this.data
      const category = worksCategorys.filter(value => value.id == id)
      const detail = {
        categoryId: id,
        type: category[0].type
      }
      this.triggerEvent('tapCategory', detail)
    },

    getCategorys() {
      wx.cloud.callFunction({
        // 要调用的云函数名称
        name: 'jdShow',
        data: {
          type: 'category'
        }
      }).then(res => {
        const list = res.result.data
        const categorys = list.map((value, id) => ({
          id,
          name: value.title,
          width: parseFloat(value.width),
          type: value.type
        }))
        this.setData({
          worksCategorys: categorys
        })
        if (categorys.length > 0) {
          const {type} = categorys[0]
          const detail = {
            type: type
          }
          this.triggerEvent('loadedCategory', detail)
        }
      }).catch(err => {
        console.error(err)
      })
    },
  },
})


