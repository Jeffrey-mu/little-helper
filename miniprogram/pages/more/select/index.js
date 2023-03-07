// pages/luckDraw/index.js
const app = getApp()
Page({
  data: {
    blocks: [{
      padding: '13px',
      background: '#E8D5C4'
    }],
    prizes: [{
        fonts: [{
          text: 'YES',
          fontColor: '#ffffff',
          top: '20%'
        }],
        range: 10,
        background: '#e9e8fe'
      },
      {
        fonts: [{
          text: 'NO',
          fontColor: '#ffffff',
          top: '50%'
        }],
        range: 10,
        background: '#b8c5f2'
      },
    ],
    buttons: [{
        radius: '41px',
        background: '#E8D5C4'
      },
      {
        radius: '40px',
        background: '#afc8ff'
      },
      {
        radius: '35px',
        background: '#7286D3',
        pointer: true,
        fonts: [{
          text: '开始',
          top: '-20px',
          fontColor: '#ffffff'
        }]
      },
    ],
    items: [],
    show: true,
    inputValue: '',
    colors: ["#E7AB9A", "#95BDFF", "#6E85B7"],
    value: ""
  },
  onLoad() {
    if (wx.getStorageSync('eatlist')) {
      this.setData({
        items: wx.getStorageSync('eatlist')
      })
      setTimeout(() => this.generate())
    }
  },
  onUnload: function () {
    wx.setStorageSync('eatlist', this.data.items)
  },
  randomColor() {
    var x = Array.from({
      length: 30
    }, (v, i) => i / 29);

    // 生成一个蓝色渐变数组
    var colors = x.map(function (value) {
      var r = Math.round(value * 255);
      var g = Math.round(value * 0);
      var b = Math.round(value * 255);
      return 'rgba(' + b + ',' + g + ',' + r + ', 1)';
    });

    var hexColors = colors.map((value) => {
      var rgb = value.substring(5, value.length - 2).split(',');
      var r = parseInt(rgb[0]);
      var g = parseInt(rgb[1]);
      var b = parseInt(rgb[2]);
      return '#' + this.toHex(r) + this.toHex(g) + this.toHex(b);
    });
    return hexColors
  },
  toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  },
  inputChange: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  generate() {
    let data = (this.data.items ? this.data.items : wx.getStorageSync('eatlist'))
    let len = data.length
    this.setData({
      prizes: data.map((item, index) => {
        return {
          fonts: [{
            text: item.label,
            fontColor: '#ffffff',
            top: '50%'
          }],
          range: 10,
          background: index === len - 1 ? this.data.colors[2] : this.data.colors[index % 2],
        }
      })
    });

  },
  addItem: function () {
    var items = this.data.items;
    var inputValue = this.data.inputValue;
    if (inputValue) {
      items.push({
        label: inputValue
      });
      this.setData({
        items: items,
        inputValue: ''
      });
    }
  },
  deleteItem: function (e) {
    var index = e.currentTarget.dataset.index;
    var items = this.data.items;
    items.splice(index, 1);
    this.setData({
      items: items
    });
  },
  showAdd() {
    console.log(this.randomColor())
    this.setData({
      show: !this.data.show
    })
    this.generate()
  },
  start() {
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
  end(event) {
    // 中奖奖品详情
    this.setData({
      value: event.detail.fonts[0].text
    })
  }
})