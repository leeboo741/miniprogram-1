// pages/project/projectOrder/index.js

const app = getApp();
const config = require("../../../utils/config.js");
const util = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    project:{
      name: "宝宝游泳馆",
      amount: 100,
      unit: "次",
      detail: "为0~12个月的婴幼儿提供游泳、洗澡、抚触",
      time: 20,
    },
    storeList:[
      "南昌叠山店",
      "南昌象山店",
      "南昌象南店",
      "南昌万科店",
      "南昌高新吾悦店",
      "南昌万达店",
      "上饶一店",
      "上饶二店",
    ],
    selectStoreIndex: -1,
    startDate: null,
    endDate: null,
    selectDate: null, 
    selectTime: null,
    babyName: null,
    phone: null,
    explainList: [
      "权益说明第一条，说明说明说明",
      "权益说明第二条，说明说明说明说明说明说明",
      "权益说明第三条，说明说明说明",
      "权益说明第四条，说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let startDate = util.dateLater(new Date, 0);
    let endDate = util.dateLater(new Date, 365);
    this.setData({
      startDate: startDate.time,
      endDate: endDate.time
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
   * 选择门店
   */
  selectorStore: function (e) {
    this.setData({
      selectStoreIndex: parseInt(e.detail.value)
    })
  },

  /**
   * 选择日期
   */
  selectorDate: function (e) {
    this.setData({
      selectDate: e.detail.value
    })
  },

  /**
   * 选择时间
   */
  selectorTime: function (e) {
    this.setData({
      selectTime: e.detail.value
    })
  },

  /**
   * 输入宝宝姓名
   */
  inputBabyName: function (e) {
    this.setData({
      babyName: e.detail.value
    })
  },

  /**
   * 输入预约人电话
   */
  inputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  /**
   * 点击预约
   */
  tapOrder: function (e) {
    console.log("点击项目预约")
  },
})