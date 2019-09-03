// pages/project/projectDetail/index.js

const app = getApp();
const config = require("../../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: null,
    typeList: [
      "全部",
      "支出",
      "收入"
    ],
    currentType: 0,
    balanceValue: 2000,
    expireDate: "2019-01-11",
    dateTags: [
      "当月",
      "3个月",
      "全部",
    ],
    currentDateTag: 0,
    dataSource: null,
    allList: [
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 2000, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 68, // 金额
        name: "宝宝游泳馆消费支出",
        date: "2019-08-12",
        time: "11:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 99, // 金额
        name: "早教中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 130, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 135, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 150, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      }, {
        type: 0, // 类型 1 支出 0 收入
        amount: 2000, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 68, // 金额
        name: "宝宝游泳馆消费支出",
        date: "2019-08-12",
        time: "11:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 99, // 金额
        name: "早教中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 130, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 135, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 150, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 2000, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 68, // 金额
        name: "宝宝游泳馆消费支出",
        date: "2019-08-12",
        time: "11:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 99, // 金额
        name: "早教中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 130, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 135, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 150, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
    ],
    outList: [
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 150, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 68, // 金额
        name: "宝宝游泳馆消费支出",
        date: "2019-08-12",
        time: "11:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 99, // 金额
        name: "早教中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 1, // 类型 1 支出 0 收入
        amount: 130, // 金额
        name: "产后中心消费支出",
        date: "2019-08-13",
        time: "08:11:13",
      },
    ],
    inList: [
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 135, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
      {
        type: 0, // 类型 1 支出 0 收入
        amount: 2000, // 金额
        name: "项目储值充值到账",
        date: "2019-08-13",
        time: "08:11:13",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: app.globalData.pageHeight
    })
    this.setDataSource(this.data.allList);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 设置数据源
   */
  setDataSource: function (datasource) {
    this.setData({
      dataSource: datasource
    })
  },

  /**
   * 点击tab
   */
  handleTabChange: function (e) {
    this.setData({
      currentType: e.detail.key
    })

    if (this.data.currentType == 0) {
      this.setDataSource(this.data.allList);
    } else if (this.data.currentType == 1) {
      this.setDataSource(this.data.outList);
    } else {
      this.setDataSource(this.data.inList);
    }
  },

  /**
   * 点击充值
   */
  tapRecharge: function () {
    wx.navigateTo({
      url: config.Page_Project_ProjectRecharge,
    })
  },

  /**
   * 点击时间
   */
  tapDateTag: function (e) {
    this.setData({
      currentDateTag: e.currentTarget.dataset.index
    })
  },

})