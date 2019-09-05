// pages/point/pointExchange/index.js

const app = getApp();
const config = require("../../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: null,
    pointValue: 2000,
    expiredPoint: 49, // 本月即将失效积分
    dataSource: [
      {
        name: "BOBO奶瓶 180ml",
        imagePath: null,
        amount: 12,
        point: 180,
      },
      {
        name: "AUBY 婴儿磨牙棒",
        imagePath: '',
        amount: 30,
        point: 550,
      },
      {
        name: "PIGENON 奶嘴 S码",
        imagePath: '',
        amount: 50,
        point: 220,
      },
      {
        name: "BOBO奶瓶 180ml",
        imagePath: null,
        amount: 12,
        point: 180,
      },
      {
        name: "AUBY 婴儿磨牙棒",
        imagePath: '',
        amount: 30,
        point: 550,
      },
      {
        name: "PIGENON 奶嘴 S码",
        imagePath: '',
        amount: 50,
        point: 220,
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
   * 点击兑换
   */
  tapExchange: function(e) {
    console.log("点击兑换 index：" + e.currentTarget.dataset.tapindex);
  },
})