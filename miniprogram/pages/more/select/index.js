// pages/luckDraw/index.js
const app = getApp()
Page({
  data: {
    blocks: [{
      padding: "90rpx",
      // background: this.data.colors[this.data.active][3],
      imgs: [{
        src: "/images/background.png",
        height: '700rpx',
        width: '700rpx',
        top: '14rpx',
        left: '6rpx'
      }],
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
      '早餐': [{
          label: '面包'
        },
        {
          label: '鸡蛋'
        },
        {
          label: '牛奶'
        },
        {
          label: '豆浆'
        },
        {
          label: '粥'
        },
        {
          label: '油条'
        },
        {
          label: '包子'
        },
        {
          label: '馒头'
        },
        {
          label: '煎饼'
        },
        {
          label: '牛肉面'
        }
      ],
      '午餐': [{
          label: '汉堡'
        },
        {
          label: '披萨'
        },
        {
          label: '炸鸡'
        },
        {
          label: '烤肉'
        },
        {
          label: '火锅'
        },
        {
          label: '炒饭'
        },
        {
          label: '炸酱面'
        },
        {
          label: '麻辣烫'
        },
        {
          label: '寿司'
        },
        {
          label: '拉面'
        }
      ],
      '晚餐': [{
          label: '烤鱼'
        },
        {
          label: '烤肉'
        },
        {
          label: '串串香'
        },
        {
          label: '煲仔饭'
        },
        {
          label: '小龙虾'
        },
        {
          label: '炒菜'
        },
        {
          label: '酸菜鱼'
        },
        {
          label: '麻辣香锅'
        },
        {
          label: '烤串'
        },
        {
          label: '烤鸭'
        }
      ],
      '夜宵': [{
          label: '炸鸡'
        },
        {
          label: '烤串'
        },
        {
          label: '烧烤'
        },
        {
          label: '小龙虾'
        },
        {
          label: '烤肉'
        },
        {
          label: '麻辣烫'
        },
        {
          label: '米线'
        },
        {
          label: '牛肉粉'
        },
        {
          label: '鸡蛋灌饼'
        },
        {
          label: '煎饼果子'
        }
      ],
      '艺术': [{
          label: '绘画'
        },
        {
          label: '音乐'
        },
        {
          label: '舞蹈'
        },
        {
          label: '写作'
        },
        {
          label: '摄影'
        },
        {
          label: '剧场'
        },
        {
          label: '博物馆'
        },
        {
          label: '展览'
        },
        {
          label: '设计'
        },
        {
          label: '手工'
        }
      ],
      '旅游': [{
          label: '海滩'
        },
        {
          label: '山区'
        },
        {
          label: '城市'
        },
        {
          label: '乡村'
        },
        {
          label: '温泉'
        },
        {
          label: '度假村'
        },
        {
          label: '古镇'
        },
        {
          label: '公园'
        },
        {
          label: '动物园'
        },
        {
          label: '遗址'
        }
      ],
      '家庭': [{
          label: '陪伴家人'
        },
        {
          label: '做家务'
        },
        {
          label: '照顾孩子'
        },
        {
          label: '教育孩子'
        },
        {
          label: '看电视'
        },
        {
          label: '玩游戏'
        },
        {
          label: '野餐'
        },
        {
          label: '购物'
        },
        {
          label: '修理'
        },
        {
          label: '装饰'
        }
      ],
      '自我提升': [{
          label: '心理咨询'
        },
        {
          label: '自我探索'
        },
        {
          label: '职业规划'
        },
        {
          label: '学习新技能'
        },
        {
          label: '参加培训'
        },
        {
          label: '读书'
        },
        {
          label: '旅行'
        },
        {
          label: '写作'
        },
        {
          label: '公益活动'
        },
        {
          label: '交流'
        }
      ],
      '电子竞技': [{
          label: '英雄联盟'
        },
        {
          label: '王者荣耀'
        },
        {
          label: 'DOTA2'
        },
        {
          label: 'CSGO'
        },
        {
          label: '守望先锋'
        },
        {
          label: '炉石传说'
        },
        {
          label: '星际争霸2'
        },
        {
          label: '绝地求生'
        },
        {
          label: '和平精英'
        },
        {
          label: 'APEX英雄'
        }
      ],
      '健康': [{
          label: '运动'
        },
        {
          label: '瑜伽'
        },
        {
          label: '沙拉'
        },
        {
          label: '水果'
        },
        {
          label: '健身'
        },
        {
          label: '游泳'
        },
        {
          label: '骑行'
        },
        {
          label: '登山'
        },
        {
          label: '慢跑'
        },
        {
          label: '拳击'
        }
      ],
      '社交活动': [{
          label: '聚会'
        },
        {
          label: '电影院'
        },
        {
          label: '喝咖啡'
        },
        {
          label: '打保龄球'
        },
        {
          label: '唱K'
        },
        {
          label: '游戏厅'
        },
        {
          label: '酒吧'
        },
        {
          label: '逛街'
        },
        {
          label: '野餐'
        },
        {
          label: '健身房'
        }
      ],
      '学习': [{
          label: '阅读'
        },
        {
          label: '听讲座'
        },
        {
          label: '看纪录片'
        },
        {
          label: '做练习'
        },
        {
          label: '参加培训'
        },
        {
          label: '上网课'
        },
        {
          label: '写论文'
        },
        {
          label: '研究报告'
        },
        {
          label: '参加讨论'
        },
        {
          label: '实践'
        }
      ],
      '娱乐': [{
          label: '看电影'
        },
        {
          label: '玩游戏'
        },
        {
          label: '听音乐'
        },
        {
          label: '逛商场'
        },
        {
          label: '赛车'
        },
        {
          label: '游乐场'
        },
        {
          label: '演唱会'
        },
        {
          label: '展览会'
        },
        {
          label: '戏剧'
        },
        {
          label: '喜剧'
        }
      ],
      '兴趣爱好': [{
          label: '收藏'
        },
        {
          label: '钓鱼'
        },
        {
          label: '园艺'
        },
        {
          label: 'DIY'
        },
        {
          label: '摄影'
        },
        {
          label: '读书'
        },
        {
          label: '写作'
        },
        {
          label: '旅游'
        },
        {
          label: '音乐'
        },
        {
          label: '运动'
        }
      ],
      '运动比赛': [{
          label: '足球'
        },
        {
          label: '篮球'
        },
        {
          label: '网球'
        },
        {
          label: '高尔夫'
        },
        {
          label: '田径'
        },
        {
          label: '登山'
        },
        {
          label: '游泳'
        },
        {
          label: '拳击'
        },
        {
          label: '赛车'
        },
        {
          label: '击剑'
        }
      ],
      '宠物': [{
          label: '遛狗'
        },
        {
          label: '喂养宠物'
        },
        {
          label: '训练宠物'
        },
        {
          label: '美容美发'
        },
        {
          label: '宠物医疗'
        },
        {
          label: '宠物用品购物'
        },
        {
          label: '参加宠物展览'
        },
        {
          label: '宠物摄影'
        },
        {
          label: '宠物旅游'
        },
        {
          label: '宠物社交'
        }
      ],
      '冒险': [{
          label: '滑翔伞'
        },
        {
          label: '潜水'
        },
        {
          label: '跳伞'
        },
        {
          label: '攀岩'
        },
        {
          label: '冲浪'
        },
        {
          label: '漂流'
        },
        {
          label: '探险'
        },
        {
          label: '极限运动'
        },
        {
          label: '摩托旅行'
        },
        {
          label: '长途徒步'
        }
      ],
      '美容养生': [{
          label: '按摩'
        },
        {
          label: 'SPA'
        },
        {
          label: '美容护肤'
        },
        {
          label: '减肥瘦身'
        },
        {
          label: '瑜伽'
        },
        {
          label: '桑拿'
        },
        {
          label: '草药泡澡'
        },
        {
          label: '中医养生'
        },
        {
          label: '水疗'
        },
        {
          label: '足浴'
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
      ['#C1AEFC', '#D1FFF3', '#BEF0CB', '#F6F7C1'],
      ['#EEE9DA', '#BDCDD6', '#93BFCF', '#6096B4'],
      ['#EEEEEE', '#E8D5C4', '#FFF1DC', '#3A98B9'],
      ['#95BDFF', '#B4E4FF', '#DFFFD8', '#F7C8E0'],
      ['#FBFFB1', '#FFEBB4', '#FFBFA9', '#FFACAC'],
      ['#F1DEC9', '#C8B6A6', '#A4907C', '#8D7B68'],
      ['#BFACE2', '#655DBB', '#3E54AC', '#ECF2FF'],
      ['#F5FFC9', '#B3E5BE', '#A86464', '#804674'],
      ['#CBE4DE', '#0E8388', '#2E4F4F', '#2C3333'],
      ['#F8F5E4', '#F7C04A', '#3F497F', '#539165'],
      ['#DEFCF9', '#85CDFD', '#3C84AB', '#362FD9'],
      ['#AA5656', '#F1DBBF', '#B99B6B', '#698269'],
      ['#C04A82', '#DC8449', '#FDD36A', '#BE6DB7'],
      ['#A459D1', '#F16767', '#FFB84C', '#F5EAEA'],
      ['#7A3E65', '#A84448', '#E9A178', '#F6E1C3'],
      ['#617143', '#DF7857', '#E7AB9A', '#EDE9D5'],
      ['#40513B', '#609966', '#9DC08B', '#EDF1D6'],
      ['#4C4B16', '#898121', '#E7B10A', '#F7F1E5'],
      ['#205E61', '#3F979B', '#8BF5FA', '#F9F54B'],
      ['#183A1D', '#F0A04B', '#E1EEDD', '#FEFBE9'],
      ['#332C39', '#C92C6D', '#609EA2', '#F0EEED'],
      ['#18122B', '#393053', '#443C68', '#635985'],

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
    this.persistent_data()
  },
  persistent_data() {
    let {
      items,
      active,
      tabs
    } = this.data
    wx.setStorageSync('eatlist', items)
    wx.setStorageSync('select:active', active)
    wx.setStorageSync('select:tabs', tabs)
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
      // blocks: [{
      //   padding: '13px',
      //   padding: "50px",
      //   // background: this.data.colors[this.data.active][3],
      //   imgs: [{
      //     src: "/images/background.png",
      //     height: 430,
      //     width: 420,
      //     top: 0
      //   }],
      // }],
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
    this.persistent_data()
  },
  start() {
    this.setData({
      state: 1,
      value: ""
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

    }, 2500)
    setTimeout(() => {
      this.setData({
        state: 0
      })
    }, 5500)
  },
  end(event) {
    // 中奖奖品详情
    this.setData({
      value: event.detail.fonts[0].text
    })
  }
})
