// pages/more/decibel/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        data: {
            value: 25,
            gradientColor: {
                '0%': '#ffd01e',
                '100%': '#ee0a24',
            },
            db: 0
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(e) {

        const recorderManager = wx.getRecorderManager()

        recorderManager.onStart(() => {
            console.log('recorder start')
        })
        recorderManager.onPause(() => {
            console.log('recorder pause')
        })
        recorderManager.onStop((res) => {
            console.log('recorder stop', res)
            const {
                tempFilePath
            } = res
            const backgroundAudioManager = wx.getBackgroundAudioManager()
            backgroundAudioManager.title = '此时此刻'
            // 设置了 src 之后会自动播放
            backgroundAudioManager.src = tempFilePath
            backgroundAudioManager.play()
        })
        recorderManager.onFrameRecorded((res) => {
            const {
                frameBuffer
            } = res
            console.log('frameBuffer.byteLength', frameBuffer)
        })

        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192000,
            format: 'aac',
            frameSize: 50
        }

        recorderManager.start(options)
        setTimeout(() => {
            recorderManager.stop()
            recorderManager.frameRecorded()
        }, 2000);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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