// pages/personal/editPersonal/index.js

const app = getApp();
const config = require("../../../utils/config.js");
const util = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avaterUrl: null, // 头像地址
    name: null, // 昵称
    address: null, // 居住地
    type: 0, // 客户类型
    typeList:["已有宝宝","孕期妈妈"],
    birthday: null, // 宝宝生日
    startDate: null, // 开始日期
    endDate: null, // 结束日期
    date: null, // 当前日期
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化 发货日期 数据
    let tempDateObj = util.dateLater(new Date(), 0);
    let startDateObj = util.dateLater(new Date(), -368);
    let endDateObj = util.dateLater(new Date(), 368);
    this.setData({
      date: tempDateObj.time,
      startDate: startDateObj.time,
      endDate: endDateObj.time,
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

  }
})