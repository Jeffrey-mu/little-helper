// miniprogram/pages/more/cache/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index_menu: [{
                label: '工作计划',
                icon: 'gongzuojihua',
                key: 'workPlan',
                loading: false,
                isCeche: false
            },
            {
                label: '帮你选',
                icon: 'mingzhong',
                key: 'eatlist',
                loading: false,
                isCeche: false
            },
        ],
        clearAll: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initIndexMenu()
    },
    initIndexMenu(key) {
        this.setData({
            index_menu: this.data.index_menu.map(item => {
                item.isCeche = this.isCeche(item.key)
                if (item.key === key) {
                    item.loading = false

                } else if (key === 'all')
                    item.loading = false

                return item
            })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    cacheEvent(e) {

        let key = e.currentTarget.dataset.key
        if (key === 'all') {
            this.data.index_menu.forEach(item => {
                if (item.isCeche)
                    this.clearCache(item.key)
            })
        } else {
            this.setData({
                index_menu: this.data.index_menu.map(item => {
                    if (item.key === key) {
                        item.loading = true;
                    }
                    return item
                })
            })
        }

        setTimeout(() => {
            if (key !== 'all')
                this.clearCache(key)
            this.initIndexMenu(key)
        }, 1000)
    },
    isCeche(key) {
        return wx.getStorageSync(key)
    },
    clearCache(key) {
        wx.removeStorageSync(key)
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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

    }
})