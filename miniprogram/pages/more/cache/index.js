// miniprogram/pages/more/cache/index.js
import Dialog from '@vant/weapp/dialog/dialog';
import {menu_list} from '../../../config/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index_menu: menu_list,
        clearAll: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initIndexMenu()
    },
    cilckCell(e) {
        let item = e.currentTarget.dataset.item
        const message = `是否清理${item === 'all' ? '全部' : item.label}菜单缓存？`
        Dialog.confirm({
                title: '清除缓存',
                message
            })
            .then(() => {
                this.cacheEvent(item)
            })
            .catch(() => {
                // on cancel
            });
    },
    initIndexMenu() {
        this.setData({
            index_menu: this.data.index_menu.map(item => {
                item.loading =  false,
                item.isCeche = this.isCeche(item.keys)
                return item
            })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    cacheEvent(data) {
        if (data === 'all') {
            this.data.index_menu.forEach(item => {
                item.keys.map(item => {
                    this.clearCache(item)
                })
            })
        } else {
            data.keys.map(item => {
                this.clearCache(item)
            })
        }


    },
    isCeche(keys) {
        return keys.some(key => wx.getStorageSync(key))
    },
    clearCache(key) {
        wx.removeStorageSync(key)
        this.initIndexMenu()

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