// pages/chatgpt/index.js
import {
    copy,
} from '../../utils/index'
import {
    OPEN_API_KEY,
    baseUrl
} from '../../config/index'
import showdown from 'showdown'
// 创建转换器
const converter = new showdown.Converter();
let requestTask = null;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: '',
        loading: {
            role: 'loading',
            content: "加载中..."
        },
        role_types: ['assistant', 'user', 'loading', 'system'],
        dialogue_list: [],
        original_dialogue_list: [],
        disabled: false,
        currentItem: 'bottom',
        title: '小帮手',
        prompt: {},
        system: {
            role: 'system',
            content: "小帮手"
        }
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
    copyEvent(e) {
        let {
            index
        } = e.currentTarget.dataset

        copy(this.data.original_dialogue_list[index])
    },
    clear() {
        if (this.data.disabled) return
        this.setData({
            dialogue_list: [],
            original_dialogue_list: []
        })
    },
    changeInput(e) {
        this.setData({
            inputValue: e.detail
        })
    },
    start_continuous() {
        let messages = []
        if (this.is_continuous()) {
            messages = (this.data.dialogue_list.length > 1 ? this.data.dialogue_list.slice(0, -2) : []) || []
        }
        if (messages.length) {
            messages.map((item, index) => {item.content = this.data.original_dialogue_list[index]})
        }
        return messages
    },
    is_continuous() {
        return this.data.prompt.continuation
    },
    confirm(e) {
        if (!e.detail) {
            return
        }
        this.setData({
            disabled: true,
            dialogue_list: [
                ...this.data.dialogue_list,
                {
                    role: this.data.role_types[1],
                    content: e.detail,
                },
                this.data.loading
            ],
            original_dialogue_list: [
                ...this.data.original_dialogue_list,
                e.detail,
            ],
            inputValue: ''
        })
        this.request(e.detail)
        this.setData({
            currentItem: "bottom",
        })
    },
    backPage() {
        wx.switchTab({
            url: '/pages/index/index',
        })
    },
    goPage() {
        wx.navigateTo({
            url: '/pages/prompt/index',
        })
    },
    request(value) {
        let {
            role_types
        } = this.data

        requestTask = wx.request({
            url: `${baseUrl}/v1/chat/completions`,
            method: 'POST',
            responseType: 'text',
            header: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPEN_API_KEY}`,
            },
            data: {
                model: 'gpt-3.5-turbo',
                // max_tokens: 350,
                // temperature: 0.5,
                messages: [
                    this.data.system,
                    ...this.start_continuous(),
                    {
                        "role": role_types[1],
                        "content": value
                    }
                ]
            },
            success: (res) => {
                this.setData({
                    dialogue_list: [... this.data.dialogue_list.slice(0, -1),
                        {
                            role: role_types[0],
                            content: converter.makeHtml(res.data.choices[0].message.content)
                        }
                    ],
                    original_dialogue_list: [
                        ...this.data.original_dialogue_list,
                        res.data.choices[0].message.content
                    ],
                    disabled: false
                })
                this.setData({
                    currentItem: "bottom",
                })
            },
            fail: (err) => {
                console.log(err);
                if (!baseUrl) {
                    console.error('尚未配置有效的 baseUrl', baseUrl)
                }
                if (err.errMsg === 'request:fail abort') {
                    wx.showToast({
                        icon: 'none',
                        title: `取消请求`,
                    })
                } else {
                    wx.showToast({
                        icon: 'none',
                        title: `服务请求错误`,
                    })
                }
                this.setData({
                    dialogue_list: [...this.data.dialogue_list.slice(0, -1)],
                    disabled: false
                })
            }
        })
    },

    cancelRequestTask() {
        if (!requestTask) return
        requestTask.abort()
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        let {
            prompt = {}
        } = wx.getStorageSync('litle:prompt:state')
        this.setData({
            title: prompt.title,
            system: {
                role: 'system',
                content: prompt.content || ''
            },
            prompt
        })
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