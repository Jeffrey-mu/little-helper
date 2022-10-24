// miniprogram/pages/password/password.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showUploadTip: false,
        haveGetOpenId: false,
        envId: '',
        openId: '',
        showAdd: false,
        passwordList: [],
        student: {
            name: '',
            age: '',
            address: ''
        },
        showData: false,
        scrollTop: undefined
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            envId: options.envId
        });
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
        this.queryPasswordList()
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
        wx.navigateTo({
            url: "/pages/passwordAdd/password"
        })
    },
    handleCancel() {
        this.setData({
            showAdd: false
        })
    },
    queryPasswordList() {
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                type: 'passwordQuery',
            }
        }).then(res => {
            this.setData({
                passwordList: res.result.data
            })
        })
    },
    handleDel(event) {
        console.log(event.currentTarget.dataset.id);
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                type: 'passwordDel',
                id: event.currentTarget.dataset.id
            }
        }).then(res => {
            console.log(res)
            this.queryPasswordList()
        })
    },
    onPageScroll(res) {
        this.setData({
            scrollTop: res.scrollTop
        })
    },
    inputEvent(e) {
        let password = e.detail.value;
        if (!password) {
            wx.showToast({
              title: '请输入密码！',
              icon: 'none'
            })
            return
        }
        this.queryPassword(password)
    },
    queryPassword(password) {
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                // type: 'userPasswordQuery',
                type: 'userPasswordQuery',
                password
            }
        }).then(res => {
            console.log(res)
            if (res.result.data.length) {
                this.setData({
                    showData: true
                })
            }
        })
    },
})