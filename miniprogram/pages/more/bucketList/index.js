// pages/more/bucketList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bucketList: ["送礼物", "被送礼物", "暗恋", "明恋", "失恋", "表白", "被表白", "留长发", "剪短发", "染发", "烫发", "爱而不得", "双向奔赴", "当海王", "拒绝他人表白", "表白被拒", "被渣打架", "喝酒", "抽烟", "断片", "失眠", "睡一天", "吵架", "绝交", "晚上一个人哭", "献血", "住院做手术", "做饭给家人", "有超过10年的好朋友", "买花被送花", "给自己买礼物", "深夜散心", "向阳生人吐露心声", "一个人看电影", "摄影", "-个人过生日", "一个人逛超市", "一个人看病", "一个人出门逛", "一个人在外难过", "出国", "一个人旅游", "跟朋友旅游", "拥有要好的异性朋友", "谈恋爱", "考试不及格", "考试第一名", "当班干部", "登台演出", "被老师点名表扬", "被老师点名批评", "学一种语言", "写书", "写诗", "写剧本", "写歌", "会一种乐器", "一个人在外面住过", "去密室鬼屋", "去游乐场", "看演唱会", "去音乐节", "看画展", "捐款", "道歉", "养宠物", "跳伞", "坐过山车", "蹦极", "骑马", "卡车攀岩", "滑雪", "滑冰", "滑板", "野餐", "自驾游", "给父母买衣服", "当伴娘/郎", "摆地摊", "办生日会", "健身", "开网店", "练字", "异地恋", "创业", "搬家", "被骗"]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if (wx.getStorageSync('more:bucketList:state')) {
            this.setData({
                bucketList: wx.getStorageSync('more:bucketList:state')
            })
        } else {
            this.setData({
                bucketList: this.data.bucketList.map(item => ({
                    name: item,
                    flag: 0
                }))
            })
        }
    },
    handleItem(e) {
        console.log(e);
        let value = e.currentTarget.dataset.index
        this.data.bucketList.forEach((item, index) => {
            if (index === value) {
                item.flag = item.flag ? 0 : 1
            }
        })
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
    onShow() {},
    saveData() {
        wx.setStorageSync('more:bucketList:state', this.data.bucketList)
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