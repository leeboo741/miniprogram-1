// components/navigationBar/index.js

const app = getApp();

Component({
  options: {
    addGlobalClass: true, //等价于设置 styleIsolation: apply-shared ，但设置了 styleIsolation 选项后这个选项会失效。apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: {
      type: String,
      value: "格鲁比会员中心"
    },
    showNaviBtn: {
      type: Boolean,
      value: true
    },
    showHomeBtn: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: "#ffffff"
    },
    iconColor: {
      type: String,
      value: "#000000"
    },
    titleColor: {
      type: String,
      value: "#000000"
    }
  },

  /**
   * 外部样式扩展
   */
  externalClasses: ["i-class"],

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: 0,
  },

  /**
   * 生命周期
   */
  lifetimes: {
    attached: function () {
      let menuButtonObject = wx.getMenuButtonBoundingClientRect();
      let naviTop = menuButtonObject.top; //胶囊按钮与顶部的距离
      let menuHeight = menuButtonObject.height; // 胶囊高度
      let statusBarHeight = wx.getSystemInfoSync()['statusBarHeight']; 
      let naviHeight = statusBarHeight + menuHeight + (naviTop - statusBarHeight) * 2; //导航高度
      app.globalData.naviHeight = naviHeight;
      app.globalData.naviTop = naviTop;
      app.globalData.windowHeight = wx.getSystemInfoSync()['windowHeight'];
      this.setData({
        naviHeight: naviHeight,
        naviTop: naviTop,
        menuHeight: menuHeight
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapTitle: function () {
      console.log("tapNaviTitle")
    },
    //回退
    naviBack: function () {
      console.log("tapNaviTitle")
      wx.navigateBack({
        delta: 1
      })
    },
    //回主页
    toIndex: function () {
      wx.navigateTo({
        url: '/pages/home/index'
      })
    },
  }
})
