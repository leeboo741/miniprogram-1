// pages/depositGoods/depositGoodsDetail/index.js

const app = getApp();
const config = require("../../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: null,
    typeList: [
      "当前寄存",
      "已取回"
    ],
    currentType: 0,
    depositGoodsList:[
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml 施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
      },
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
      },
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
      },
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
      },
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
      },
    ], // 当前寄存
    receivedGoodsList: [
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
        receiveDate: "2019-08-11",
        receiveTime: "11:22:30",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
        receiveDate: "2019-08-11",
        receiveTime: "11:22:30",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
        receiveDate: "2019-08-11",
        receiveTime: "11:22:30",
      },
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐",
        receiveDate: "2019-08-11",
        receiveTime: "11:22:30",
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "袋",
        receiveDate: "2019-08-11",
        receiveTime: "11:22:30",
      },
      {
        name: "施巴婴儿洗发沐浴露120ml 施巴婴儿洗发沐浴露120ml",
        count: 2,
        unit: "瓶",
        receiveDate: "2019-08-11",
        receiveTime: "11:22:30",
      },
    ], // 已取回
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: app.globalData.pageHeight
    })
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
   * 点击tab
   */
  handleTabChange: function (e) {
    this.setData({
      currentType: e.detail.key
    })
  },

  /**
   * 点击取回商品
   */
  tapReceiveGoods: function (e) {
    console.log("取回商品 index：" + e.currentTarget.dataset.index);
  },
})