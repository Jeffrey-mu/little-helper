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
          "food": "Roast duck"
        },
        {
          "label": "麻辣烫",
          "food": "Spicy hot pot"
        },
        {
          "label": "火锅",
          "food": "Hot pot"
        },
        {
          "label": "炒饭",
          "food": "Fried rice"
        },
        {
          "label": "炸鸡",
          "food": "Fried chicken"
        },
        {
          "label": "糖醋排骨",
          "food": "Sweet and sour spare ribs"
        },
        {
          "label": "宫保鸡丁",
          "food": "Kung Pao chicken"
        },
        {
          "label": "小笼包",
          "food": "Soup dumplings"
        },
        {
          "label": "烤串",
          "food": "Grilled skewers"
        },
        {
          "label": "炸鱼",
          "food": "Fried fish"
        }
      ],
      "西餐": [{
          "label": "牛排",
          "food": "Steak"
        },
        {
          "label": "烤鸡",
          "food": "Roast chicken"
        },
        {
          "label": "意大利面",
          "food": "Spaghetti"
        },
        {
          "label": "比萨",
          "food": "Pizza"
        },
        {
          "label": "汉堡",
          "food": "Hamburger"
        },
        {
          "label": "三明治",
          "food": "Sandwich"
        },
        {
          "label": "沙拉",
          "food": "Salad"
        },
        {
          "label": "鸡尾酒",
          "food": "Cocktail"
        }
      ],
      "日韩料理": [{
          "label": "寿司",
          "food": "Sushi"
        },
        {
          "label": "生鱼片",
          "food": "Sashimi"
        },
        {
          "label": "拉面",
          "food": "Ramen"
        },
        {
          "label": "炸鸡",
          "food": "Fried chicken"
        },
        {
          "label": "烤肉",
          "food": "Grilled meat"
        },
        {
          "label": "石锅拌饭",
          "food": "Bibimbap"
        },
        {
          "label": "烤鳗鱼",
          "food": "Grilled eel"
        }
      ],
      "快餐": [{
          "label": "麦当劳",
          "food": "McDonald's"
        },
        {
          "label": "肯德基",
          "food": "KFC"
        },
        {
          "label": "汉堡王",
          "food": "Burger King"
        },
        {
          "label": "必胜客",
          "food": "Pizza Hut"
        },
        {
          "label": "星巴克",
          "food": "Starbucks"
        }
      ],
      "小吃": [{
          "label": "煎饼",
          "food": "Jianbing"
        },
        {
          "label": "烧饼",
          "food": "Shaobing"
        },
        {
          "label": "油条",
          "food": "Youtiao"
        },
        {
          "label": "豆浆",
          "food": "Soy milk"
        },
        {
          "label": "包子",
          "food": "Steamed bun"
        },
        {
          "label": "饺子",
          "food": "Dumplings"
        },
        {
          "label": "馄饨",
          "food": "Wonton"
        },
        {
          "label": "羊肉串",
          "food": "Lamb skewers"
        },
        {
          "label": "烤麸",
          "food": "Roasted gluten"
        }
      ],
      "端游": [{
          "label": "绝地求生",
          "description": "A popular battle royale game where players need to survive on an island and fight against other players."
        },
        {
          "label": "英雄联盟",
          "description": "A popular MOBA game where players can choose different heroes to battle."
        },
        {
          "label": "魔兽世界",
          "description": "A popular MMORPG game where players can create their own character and explore a vast fantasy world."
        },
        {
          "label": "守望先锋",
          "description": "A popular team-based first-person shooter game where players need to work together to achieve objectives."
        },
        {
          "label": "怪物猎人世界",
          "description": "A popular action RPG where players need to hunt down and defeat various monsters in a fantasy world."
        }
      ],
      "手游": [{
          "label": "王者荣耀",
          "description": "A popular MOBA game where players can choose different heroes to battle."
        },
        {
          "label": "和平精英",
          "description": "A popular first-person shooter game where players need to survive in a battle royale arena."
        },
        {
          "label": "明日方舟",
          "description": "A strategy tower defense game where players need to assemble their own team of operators to fight."
        },
        {
          "label": "阴阳师",
          "description": "A Japanese-style RPG with a focus on exorcising demons and collecting spirits."
        },
        {
          "label": "剑网3",
          "description": "A popular MMORPG with a martial arts theme."
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
    colors: ["#E7AB9A", "#95BDFF", "#6E85B7"],
    value: "",
    rander: true,
    state: 0
  },
  onLoad() {
    this.setData({
      tabs: Object.keys(this.data.typeList)
    })
    if (wx.getStorageSync('eatlist')) {
      this.setData({
        items: wx.getStorageSync('eatlist')
      })
    } else {
      this.setData({
        items: [...Object.keys(this.data.typeList).map(item => {
            return this.data.typeList[item]
          }), [],
          [],
          [],
          [],
          []
        ]
      })
    }
    setTimeout(() => this.generate())

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
  onChange(e) {
    this.setData({
      rander: false
    })
    this.setData({
      active: e.detail.index,
      value: ''
    })
    this.setData({
      rander: true
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
  generate() {
    let data = (this.data.items ? this.data.items : wx.getStorageSync('eatlist'))
    let array = data.map(item => {
      return item.map(((inner, index) => {
        let len = item.length
        return {
          fonts: [{
            text: inner.label,
            fontColor: '#ffffff',
            top: '40%'
          }],
          range: 10,
          background: index === len - 1 ? this.data.colors[2] : this.data.colors[index % 2],
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
    items.splice(index, 1);
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