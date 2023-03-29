// miniprogram/pages/more/barrage/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '霜皮溜雨四十围，黛色参天二千尺。',
        showBack: true,
        bg_color: ['#111111', '#FF0000', '#8F43EE', '#FFED00', '#ffffff'],
        box_bg_color: '#8F43EE',
        color: '#FFED00',
        rolling_speed: 10
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let {
            value = '霜皮溜雨四十围，黛色参天二千尺。',
                box_bg_color,
                color,
                rolling_speed = 10
        } = wx.getStorageSync('litle:heloer:barrage')
        this.setData({
            color,
            box_bg_color,
            value,
            rolling_speed
        })
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        let {
            value,
            box_bg_color,
            color,
            rolling_speed
        } = this.data
        wx.setStorageSync('litle:heloer:barrage', {
            color,
            box_bg_color,
            value,
            rolling_speed
        })
    },
    changeInput(e) {
        this.setData({
            value: e.detail.value
        })
    },
    onChange(e) {
        const rolling_speed = e.detail
        this.setData({
            rolling_speed
        })
    },
    clickEvent(e) {
        let {
            key,
            value
        } = e.currentTarget.dataset
        this.setData({
            [key]: value
        })
    },
    showBackEvent() {
        this.setData({
            showBack: !this.data.showBack
        })
    },
    backPage() {
        wx.navigateBack()
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

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

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