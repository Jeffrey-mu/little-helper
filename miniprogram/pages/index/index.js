// miniprogram/pages/index/index.js
import {
    menu_list
} from '../../config/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        menu_list: [], 
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            menu_list: this.groupByCount(menu_list, 6)
        })
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
    groupByCount(arr, count) {
        const groups = [];
        let groupIndex = -1;

        for (let i = 0; i < arr.length; i++) {
            if (i % count === 0) {
                groupIndex++;
                groups[groupIndex] = [];
            }
            groups[groupIndex].push(arr[i]);
        }

        return groups;
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