// miniprogram/pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index_menu: [{
                label: '工作计划',
                icon: 'gongzuojihua',
                link: '/pages/more/workPlan/index'
            },
            {
                label: '帮你选',
                icon: 'mingzhong',
                link: '/pages/more/select/index'
            },
            {
                label: '工资计算',
                icon: 'tubiao',
                link: '/pages/salary/index'
            },
            {
                label: '手持弹幕',
                icon: 'danmu',
                link: '/pages/more/barrage/index'
            },
            // {
            //     label: '分贝检测',
            //     icon: 'jianzhuanquan',
            //     link: '/pages/more/decibel/index'
            // },
            {
                label: '电子木鱼',
                icon: 'muyu1',
                link: '/pages/more/woodenFish/index'
            },
            {
                label: '清理缓存',
                icon: 'qinglihuancun',
                link: '/pages/more/cache/index'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                type: 'getOpenId'
            }
        }).then((resp) => {})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                // 当前页面的 tabBar 索引
                active: 0
            })
        }
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    goto() {
        wx.switchTab({
            url: '/pages/password/password',
        })
    }
})
