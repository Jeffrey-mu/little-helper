// pages/chatgpt/index.js
let requestTask = null;
import {
    OPEN_API_KEY,
    baseUrl
} from '../../config/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: '',
        loading: {
            role: 'loding',
            content: "加载中..."
        },
        state: ['assistant', 'user', 'loding'],
        dialogue_list: [],
        disabled: false,
        currentItem: 'bottom'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    scroll(e) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    clear() {
        if (this.data.disabled) return
        this.setData({
            dialogue_list: []
        })
    },
    changeInput(e) {
        this.setData({
            inputValue: e.detail
        })
    },
    confirm(e) {
        this.setData({
            disabled: true,
            dialogue_list: [...this.data.dialogue_list,
                {
                    role: this.data.state[1],
                    content: e.detail,
                },
                this.data.loading
            ],
            inputValue: ''
        })
        this.request(e.detail)
        this.setData({
            currentItem: "bottom",
        })
    },
    request(value) {
        let that = this
        requestTask = wx.request({
            url: `${baseUrl}/v1/chat/completions`,
            method: 'POST',
            header: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPEN_API_KEY}`,
            },
            data: {
                model: 'gpt-3.5-turbo',
                max_tokens: 350,
                temperature: 0.5,
                messages: [{
                    "role": that.data.state[1],
                    "content": value
                }]
            },
            success(res) {
                that.setData({
                    dialogue_list: [...that.data.dialogue_list.slice(0, -1),
                        {
                            role: that.data.state[0],
                            content: res.data.choices[0].message.content
                        }
                    ],
                    disabled: false
                })
                that.setData({
                    currentItem: "bottom",
                })
            },
        })
    },
    cancelRequestTask() {
        if (!requestTask) return
        requestTask.abort()
        this.setData({
            dialogue_list: [...this.data.dialogue_list.slice(0, -1)],
            disabled: false
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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
