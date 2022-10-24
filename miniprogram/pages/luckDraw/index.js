// pages/luckDraw/index.js
const app = getApp()
Page({
  data: {
    blocks: [{ padding: '13px', background: '#617df2' }],
    prizes: [
      { fonts: [{ text: 'YES', fontColor: '#ffffff', top: '50%' }], range: 10, background: '#e9e8fe' },
      { fonts: [{ text: 'NO', fontColor: '#ffffff', top: '50%' }], range: 10, background: '#b8c5f2' },
    ],
    buttons: [
      { radius: '50px', background: '#617df2' },
      { radius: '45px', background: '#afc8ff' },
      {
        radius: '40px', background: '#869cfa',
        pointer: true,
        fonts: [{ text: 'START', top: '-20px', fontColor: '#ffffff' }]
      },
    ],
  },
  start () {
    // 获取抽奖组件实例
    const child = this.selectComponent('#myLucky')
    // 调用play方法开始旋转
    child.lucky.play()
    // 用定时器模拟请求接口
    setTimeout(() => {
      // 3s 后得到中奖索引 (假设抽到第0个奖品)
      // const index = 0
      // 调用stop方法然后缓慢停止
      child.lucky.stop()
    }, 3000)
  },
  end (event) {
    // 中奖奖品详情
    if(event.detail.fonts[0].text === 'YES') {
        wx.showToast({
          title: 'let go！',
        })
    } else {
        wx.showToast({
          title: '很遗憾!',
          icon: 'error'
        })
    }
    console.log(event.detail)
  }
})