// miniprogram/pages/more/workPlan/index.js
import {
    copy,
} from './../../../utils/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: `${new Date().getMonth() + 1 + '.' + new Date().getDate()} 工作计划`,
        workList: [
            '亚马逊账号日常维护',
            'dv优化，上素材和订单项',
            'Start.IO数据api对接',
            '产品化开发，GoogleAPI对接',
            '新客审核质控',
            '整体流量质控，GA监测反馈',
            '客户服务平台客户管理细节设计',
        ],
        active: -1,
        state: 0,
        edit: false
    },
    editEvent() {
        this.setData({
            edit: !this.data.edit
        })
    },
    copyEvent() {
        let workPlan = [this.data.title, ...this.data.workList]
        copy(workPlan.map((item, index) => (index ? index + '、' + item : item)).filter(item => item)
            .join('\n')).then(res => {
            wx.setStorageSync('workPlan', this.data.workList)
            this.setData({
                state: 1
            })
        })
    },
    addEvent() {
        this.setData({
            workList: [...this.data.workList, '']
        })
        this.setData({
            active: this.data.workList.length - 1
        })
    },
    inputChange(e) {
        // wx.request({
        // method: 'GET',
        //     url: "http://101.42.50.148:3000/verification?content=" + e.detail,
        //     header: { "Content-Type": "application/json" },
        //     success: (res) => {
        //         if (res.errcode !== 0) {
        //             wx.showToast({
        //               title: '内容违规',
        //             })
        //         }
        //     },
        //     error: res => {
        //         console.log(res);
        //     }
        //   });

        const index = e.currentTarget.dataset.index;
        const value = e.detail;
        const items = this.data.workList;
        items[index] = value;
        this.setData({
            workList: items
        });
    },
    delEvent(e) {
        const index = e.currentTarget.dataset.index;
        const items = this.data.workList;
        items.splice(index, 1)
        this.setData({
            workList: items
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (wx.getStorageSync('workPlan')) {
            this.setData({
                workList: wx.getStorageSync('workPlan')
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // wx.setStorageSync('workPlan', this.data.workList)
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