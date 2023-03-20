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
    onLoad() {
        const recorderManager = wx.getRecorderManager()
        const innerAudioContext = wx.createInnerAudioContext()
        const fs = wx.getFileSystemManager()
        const backgroundAudioManager = wx.getBackgroundAudioManager()
        const analysisManager = wx.getAnalysisManager()
        let audioData = {
            src: '',
            isPlaying: false
        }
        let frameBuffer = []
        recorderManager.onStart(() => {
            console.log('recorder start')
        })
        recorderManager.onStop((res) => {
            console.log('recorder stop', res)
            audioData.src = res.tempFilePath
            audioData.duration = res.duration
            audioData.isPlayed = false
            frameBuffer = []
            fs.readFile({
                filePath: res.tempFilePath,
                success: (res) => {
                    const buffer = res.data
                    for (let i = 0; i < buffer.byteLength; i += 2) {
                        const point = Math.floor((buffer[i + 1] * 256 + buffer[i]) / 32768 * 1000) / 1000;
                        frameBuffer.push(point)
                    }
                    if (frameBuffer.length === 0) {
                        wx.showToast({
                            title: '请先录制声音',
                            icon: 'none'
                        })
                        return
                    }
                    analysisManager.createAudioContext(backgroundAudioManager)
                    let freqDomain = new Float32Array(1024)
                    analysisManager.onFrameEnd((res) => {
                        freqDomain = res.data
                        let sum = 0
                        for (let i = 0; i < freqDomain.length; i++) {
                            sum += freqDomain[i] * freqDomain[i]
                        }
                        const rms = Math.sqrt(sum / freqDomain.length)
                        const db = 20 * Math.log10(rms / 0.00002)
                        console.log('decibel:', db)
                        wx.showToast({
                            title: '分贝值为：' + db.toFixed(2),
                            icon: 'none'
                        })
                    })
                    analysisManager.start({
                        frameSize: 1024,
                        bufferSize: 4096,
                        numberOfChannels: 1,
                        encodeBitRate: 48000,
                        format: 'pcm'
                    })
                    analysisManager.feed(frameBuffer, audioData.duration * 1000)
                }
            })
        })
        innerAudioContext.onEnded(() => {
            audioData.isPlaying = false
            this.setData({
                audioData: audioData
            })
        })
        recorderManager.star()
        setTimeout(() => {
            recorderManager.stop()
        }, 3000);

    },
    playAudio() {
        if (!audioData.src) {
            wx.showToast({
                title: '请先录制声音',
                icon: 'none'
            })
            return
        }
        innerAudioContext.src = audioData.src
        innerAudioContext.play()
        audioData.isPlaying = true
        this.setData({
            audioData: audioData
        })
    },
    detectDecibel() {

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