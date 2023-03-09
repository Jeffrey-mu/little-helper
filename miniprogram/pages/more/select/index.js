// pages/luckDraw/index.js
const app = getApp()
Page({
  data: {
    blocks: [{
      padding: '13px',
      background: '#E8D5C4'
    }],
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
    typeList: {

      "中餐": [{
          "label": "烤鸭",
        },
        {
          "label": "麻辣烫",
        },
        {
          "label": "火锅",
        },
        {
          "label": "炒饭",
        },
        {
          "label": "炸鸡",
        },
        {
          "label": "糖醋排骨",
        },
        {
          "label": "宫保鸡丁",
        },
        {
          "label": "小笼包",
        },
        {
          "label": "烤串",
        },
        {
          "label": "炸鱼",
        }
      ],
      "西餐": [{
          "label": "牛排",
        },
        {
          "label": "烤鸡",
        },
        {
          "label": "意大利面",
        },
        {
          "label": "比萨",
        },
        {
          "label": "汉堡",
        },
        {
          "label": "三明治",
        },
        {
          "label": "沙拉",
        },
        {
          "label": "鸡尾酒",
        }
      ],
      "日韩料理": [{
          "label": "寿司",
        },
        {
          "label": "生鱼片",
        },
        {
          "label": "拉面",
        },
        {
          "label": "炸鸡",
        },
        {
          "label": "烤肉",
        },
        {
          "label": "石锅拌饭",
        },
        {
          "label": "烤鳗鱼",
        }
      ],
      "快餐": [{
          "label": "麦当劳",
        },
        {
          "label": "肯德基",
        },
        {
          "label": "汉堡王",
        },
        {
          "label": "必胜客",
        },
        {
          "label": "星巴克",
        }
      ],
      "小吃": [{
          "label": "煎饼",
        },
        {
          "label": "烧饼",
        },
        {
          "label": "油条",
        },
        {
          "label": "豆浆",
        },
        {
          "label": "包子",
        },
        {
          "label": "饺子",
        },
        {
          "label": "馄饨",
        },
        {
          "label": "羊肉串",
        },
        {
          "label": "烤麸",
        }
      ],
      "端游": [{
          "label": "绝地求生",
        },
        {
          "label": "英雄联盟",
        },
        {
          "label": "魔兽世界",
        },
        {
          "label": "守望先锋",
        },
        {
          "label": "怪物猎人世界",
        }
      ],
      "手游": [{
          "label": "王者荣耀",
        },
        {
          "label": "和平精英",
        },
        {
          "label": "明日方舟",
        },
        {
          "label": "阴阳师",
        },
        {
          "label": "剑网3",
        }
      ],
      "电影": [{
          "label": "阿甘正传"
        },
        {
          "label": "肖申克的救赎"
        },
        {
          "label": "泰坦尼克号"
        },
        {
          "label": "星际穿越"
        },
        {
          "label": "盗梦空间"
        },
        {
          "label": "美丽心灵"
        },
        {
          "label": "绿皮书"
        },
        {
          "label": "黑客帝国"
        },
        {
          "label": "蝙蝠侠：黑暗骑士"
        },
        {
          "label": "霸王别姬"
        }
      ]

    },
    tabs: [],
    prizes: [],
    active: 0,
    items: [],
    show: true,
    inputValue: '',
    colors: [
      ['#DEFCF9', '#85CDFD', '#3C84AB', '#362FD9'],
      ['#C1AEFC', '#D1FFF3', '#BEF0CB', '#F6F7C1'],
      ['#332C39', '#C92C6D', '#609EA2', '#F0EEED'],
      ['#205E61', '#3F979B', '#8BF5FA', '#F9F54B'],
      ['#EEE9DA', '#BDCDD6', '#93BFCF', '#6096B4'],
      ['#AA5656', '#F1DBBF', '#B99B6B', '#698269'],
      ['#C04A82', '#DC8449', '#FDD36A', '#BE6DB7'],
      ['#40513B', '#609966', '#9DC08B', '#EDF1D6'],
      ['#EEEEEE', '#E8D5C4', '#FFF1DC', '#3A98B9'],
      ['#95BDFF', '#B4E4FF', '#DFFFD8', '#F7C8E0'],
      ['#A459D1', '#F16767', '#FFB84C', '#F5EAEA'],
      ['#183A1D', '#F0A04B', '#E1EEDD', '#FEFBE9'],
      ['#18122B', '#393053', '#443C68', '#635985'],
      ['#FBFFB1', '#FFEBB4', '#FFBFA9', '#FFACAC'],
      ['#F1DEC9', '#C8B6A6', '#A4907C', '#8D7B68'],
      ['#617143', '#DF7857', '#E7AB9A', '#EDE9D5'],
      ['#CBE4DE', '#0E8388', '#2E4F4F', '#2C3333'],
      ['#F8F5E4', '#F7C04A', '#3F497F', '#539165'],
      ['#7A3E65', '#A84448', '#E9A178', '#F6E1C3'],
      ['#BFACE2', '#655DBB', '#3E54AC', '#ECF2FF'],
      ['#4C4B16', '#898121', '#E7B10A', '#F7F1E5'],
      ['#F5FFC9', '#B3E5BE', '#A86464', '#804674'],
    ],
    value: "",
    rander: true,
    state: 0
  },
  onLoad() {
    this.setData({
      active: wx.getStorageSync('select:active') || 0,
    })
    let object = new Array(this.data.colors.length - Object.keys(this.data.typeList).length).fill({
      "选项": [{
        label: '-_-'
      }, {
        label: '^_^'
      }, {
        label: 'q_q'
      }, {
        label: '$_$'
      }]
    }).reduce((item, pre, index) => {
      item["选项" + index] = pre["选项"]
      return item
    }, {})
    this.setData({
      typeList: {
        ...this.data.typeList,
        ...object
      },
    })
    this.setData({
      tabs: wx.getStorageSync('select:tabs') || Object.keys(this.data.typeList),
    })
    this.setData({
      items: wx.getStorageSync('eatlist') || [...Object.keys(this.data.typeList).map(item => {
        return this.data.typeList[item]
      })]
    })
    setTimeout(() => this.generate())

  },
  onUnload: function () {
    wx.setStorageSync('eatlist', this.data.items)
    wx.setStorageSync('select:active', this.data.active)
    wx.setStorageSync('select:tabs', this.data.tabs)
  },

  onChange(e) {
    this.setData({
      rander: false,
    })
    this.setData({
      active: e.detail.index,
      value: ''
    })
    this.setData({
      rander: true,
      blocks: [{
        padding: '13px',
        background: this.data.colors[this.data.active][3]
      }],
    })
    // this.generate()

  },
  toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  },
  inputChange: function (e) {
    this.setData({
      inputValue: e.detail
    })
  },
  inputTitleChange(e) {
    let tabs = this.data.tabs
    tabs.splice(this.data.active, 1, e.detail)
    this.setData({
      tabs
    })
  },
  generate() {
    let data = (this.data.items ? this.data.items : wx.getStorageSync('eatlist'))
    let array = data.map((item, data_index) => {
      return item.map(((inner, index) => {
        let len = item.length
        return {
          fonts: [{
            text: inner.label,
            fontColor: this.data.colors[data_index][3],
            top: '40%'
          }],
          range: 10,
          background: index === len - 1 ? this.data.colors[data_index][2] : this.data.colors[data_index][index % 2],
        }
      }))
    })
    this.setData({
      prizes: array,
    });

  },
  addItem: function () {
    var items = this.data.items[this.data.active];
    var inputValue = this.data.inputValue;
    if (inputValue) {
      items.push({
        label: inputValue
      });
      this.data.items.splice(this.data.active, 1, items)
      this.setData({
        items: this.data.items,
        inputValue: ''
      });
    }
  },
  deleteItem: function (e) {
    var index = e.currentTarget.dataset.index;
    var items = this.data.items;
    items[this.data.active].splice(index, 1);
    this.setData({
      items: items
    });
  },
  showAdd() {
    this.setData({
      show: !this.data.show
    })
    this.generate()
  },
  start() {
    this.setData({
      state: 1
    })
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
      setTimeout(() => {
        this.setData({
          state: 0
        })
      }, 2000)
    }, 3000)
  },
  end(event) {
    // 中奖奖品详情
    this.setData({
      value: event.detail.fonts[0].text
    })
  }
})