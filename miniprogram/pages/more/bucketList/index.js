// pages/more/bucketList/index.js
import { bucketList } from './state'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bucketList,
        show: false,
        active: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.initData()
    },
    choose(e) {
        let value = e.currentTarget.dataset.index
        this.setData(({
            active: value
        }))
    },
    backPage() {
        wx.switchTab({
            url: '/pages/index/index',
        })
    },
    onClose() {
        this.setData({
            show: false
        });
    },
    open_popup() {
        this.setData({
            show: true
        });
    },
    handleItem(e) {
        let value = e.currentTarget.dataset.index
        let data = this.data.bucketList[this.data.active]
        data.list.forEach((item, index) => {
            if (index === value) {
                item.flag = item.flag ? 0 : 1
            }
        })
        data.selected = data.list.filter(item => item.flag).length
        this.setData({
            bucketList: this.data.bucketList
        })
        this.saveData()
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() { },
    saveData() {
        //数据存储选中下标
        let stored_value = {}
        for (let i of this.data.bucketList) {
            stored_value[i['title']] = i.list.map((item, index) => item.flag === 1 && index).filter(Boolean)
        }
        wx.setStorageSync('more:bucketList:state', {
            stored_value: stored_value,
            active: this.data.active
        })
    },
    initData() {
        //数据存储选中下标
        let data = wx.getStorageSync('more:bucketList:state')
        if (data) {
            this.data.bucketList.map(item => {
                let list = data.stored_value[item.title] || []
                for (let i of list) {
                    item.list[i].flag = 1
                }
                item.selected = item.list.filter(item => item.flag).length
            })

            this.setData({
                bucketList: this.data.bucketList,
                active: data.active
            })
        }
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        this.saveData()
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
