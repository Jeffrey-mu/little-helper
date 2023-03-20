// pages/more/woodenFish/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        innerAudioContext: null,
        active: false,
        today: 0,
        count: 0,
        history: 0,
        list: [],
        auto_touch: false,
        timer_auto: false,
        show: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.initState()
    },
    onClickShow() {
        this.setData({ show: true });
      },
    
      onClickHide() {
        this.setData({ show: false });
      },
    onChange(e) {
        this.setData({
            auto_touch: e.detail
        })
        if (this.data.auto_touch) {
            let time_data = setInterval(() => {
                this.touch_muyu()
            }, 700);
            this.setData({
                timer_auto: time_data
            })
        } else {
            this.clearInterval()
        }
    },
    clearInterval() {
        clearInterval(this.data.timer_auto)
        this.setData({auto_touch: false})
    },
    touch_muyu() {
        this.initPlay()
        this.setData({
            active: true,
            list: [...this.data.list, 1],
            count: ++this.data.count,
            history: this.data.history + 1,
            today: this.data.today + 1
        })
        setTimeout(() => {
            this.setData({
                active: false
            })
        }, 100)
    },
    initPlay() {
        // 创建InnerAudioContext对象
        const innerAudioContext = wx.createInnerAudioContext()
        // 设置音频源文件路径
        innerAudioContext.src = '/public/woodenfish.mp3'
        // 播放音频
        innerAudioContext.play()
    },
    initState() {
        let {today=0, history=0, time_data} = wx.getStorageSync('litle:woodenFish:state')
        let histroy_time = new Date(time_data)
        let date = new Date()
        if (histroy_time.getMonth() !== date.getMonth() || histroy_time.getDay() !== date.getDay()){
            today = 0
        }
        this.setData({
            today,
            history
        })
    },
    setDataLocal() {
       
        wx.setStorageSync('litle:woodenFish:state', {
            today: this.data.today,
            history: this.data.history,
            time_data: new Date()
        })
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
        this.clearInterval()
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        this.setDataLocal()
        this.clearInterval()
        console.log(213);
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