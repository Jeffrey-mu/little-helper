// miniprogram/pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        menu_list: [
            {
                label: '工作计划',
                icon: 'gongzuojihua',
                link: '/pages/more/workPlan/index',
                color: ['#62CDFF', '#19A7CE']
            },
            {
                label: '智能Bot',
                icon: 'jiqiren',
                link: '/pages/chatgpt/index',
                color: ['#F7DB6A', '#EBB02D']
            },
            {
                label: '帮你选',
                icon: 'mingzhong',
                link: '/pages/more/select/index',
                color: ['#30E3DF', '#0EA293']
            },
            {
                label: '工资计算',
                icon: 'tubiao',
                link: '/pages/salary/index',
                color: ['#B2A4FF', '#AA77FF']
            },
            {
                label: '手持弹幕',
                icon: 'danmushu',
                link: '/pages/more/barrage/index',
                color: ['#A9907E', '#A9907E']
            },
            // {
            //     label: '分贝检测',
            //     icon: 'jianzhuanquan',
            //     link: '/pages/more/decibel/index'
            // },
            {
                label: '电子木鱼',
                icon: 'muyu1',
                link: '/pages/more/woodenFish/index',
                color: ['#4D4D4D', '#000000']
            },
            // {
            //     label: '清理缓存',
            //     icon: 'qinglihuancun',
            //     link: '/pages/more/cache/index'
            // },
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
