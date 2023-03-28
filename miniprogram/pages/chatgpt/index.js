// pages/chatgpt/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        outPut: '',
        value: '',
        dialogue_list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    changeInput(e) {
        this.setData({
            value: e.detail.value
        })
    },
    request(value) {
        let tath = this
        let base_path = 'https://jiafengfmc.cn'
        let OPENAI_API_KEY = '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'
        wx.request({
            url: `${base_path}/v1/chat/completions`,
            method: 'POST',
            header: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
            },
            data: {
                model: 'gpt-3.5-turbo',
                max_tokens: 350,
                temperature: 0.5,
                messages: [{
                    "role": "user",
                    "content": value
                }]
            },
            success(res) {
                tath.setData({
                    outPut: res.data.choices[0].message.content
                })
                console.log(res)
            },
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