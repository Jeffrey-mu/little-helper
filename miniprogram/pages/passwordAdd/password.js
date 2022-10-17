// miniprogram/pages/password/password.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        password: {
            id: '',
            password: '',
            dis: ''
        },
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.lin.initValidateForm(this)
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
    handleAdd() {

    },
    handleCancel() {
        wx.navigateBack()
    },
    submit(event) {
        const {
            detail
        } = event;
        if ( !detail.values.id ||  !detail.values.password ) {
            wx.showToast({
              title: '账号密码不可为空！',
              icon: 'none'
            })
            return
        }
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                type: 'passwordAdd',
                add: {
                    id: detail.values.id,
                    password: detail.values.password,
                    dis: detail.values.dis,
                }
            }
        }).then(res => {

            if (res.result.success) {
                wx.showModal({
                    title: '成功！',
                    content: '数据添加成功！',
                    showCancel: false,
                    success(res) {
                        if (res.confirm) {
                            wx.navigateBack()
                        }
                    }
                })
            }
        })
    },
})