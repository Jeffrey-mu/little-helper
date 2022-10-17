// miniprogram/pages/password/password.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        password: {
            password: '',
            oldPassword: ''
        },
        type: 1,
        showForm: false,
        envId: '',
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            envId: options.envId
        });
        this.queryPassword()
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
        if (!detail.values.password) {
            wx.showToast({
                title: '请输入密码！',
                icon: 'none',
                duration: 2000
            })
            return
        } else if (!detail.values.oldPassword && this.data.type === 2) {
            wx.showToast({
                title: '请输入旧密码！',
                icon: 'none',
                duration: 2000
            })
            return
        }
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                type: 'userPasswordAdd',
                add: {
                    password: detail.values.password,
                    oldPassword: detail.values.oldPassword || '',
                }
            }
        }).then(res => {
            try {
                if (res.result.stats.updated) {
                    wx.showModal({
                        title: '成功！',
                        content: '密码修改成功！',
                        success(res) {
                            if (res.confirm) {
                                wx.navigateBack()
                            } else if (res.cancel) {
                                console.log('用户点击取消')
                            }
                        }
                    })

                } else if (res.result.stats.updated === 0) {
                    wx.showToast({
                        title: '旧密码错误！',
                        icon: 'error',
                        duration: 2000
                    })

                }
            } catch (err) {
                wx.showModal({
                    title: '成功！',
                    content: '密码添加成功！',
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
    queryPassword() {
        wx.cloud.callFunction({
            name: 'quickstartFunctions',
            config: {
                env: this.data.envId
            },
            data: {
                // type: 'userPasswordQuery',
                type: 'userPasswordQuery',
            }
        }).then(res => {
            console.log(res)
            if (res.result.data.length) {
                this.setData({
                    type: 2
                })
            }
        }).finally(() => {
            this.setData({
                showForm: true
            })
            setTimeout(() => {
                wx.lin.initValidateForm(this)
            })
        })
    },
})