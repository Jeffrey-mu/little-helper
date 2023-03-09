// custom-tab-bar/index.js
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
        active: -1
    },


    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            this.setData({
                active: event.detail
            })
        if ( 0<event.detail<2 ) {
            wx.showToast({
              title: '正在积极开发中...',
              icon: "none"
            })
        }

        }
    }
})