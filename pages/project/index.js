// pages/project/index.js

const app = getApp();
const config = require("../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectBalanceValue:2000,
    expireDate: "2019-01-11",
    projectList: [
      {
        name: "宝宝游泳馆",
        description: "为0-12个月的婴幼儿提供游泳、洗澡、抚触等服务",
        expireStart: "2019.11.11",
        expireEnd: "2019.12.12",
        type: 0,
      },
      {
        name: "产后中心",
        description: "形体恢复、体貌恢复、产后身体内部健康调理等",
        expireStart: "2019.11.11",
        expireEnd: "2019.12.12",
        type: 1,
      },
      {
        name: "早教中心",
        description: "专注0-6岁教育",
        expireStart: "2019.11.11",
        expireEnd: "2019.12.12",
        type: 2,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 点击明细
   */
  tapDetail: function () {
    console.log("点击项目储值详细");
    wx.navigateTo({
      url: config.Page_Project_ProjectDetail,
    })
  },

  /**
   * 点击充值
   */
  tapRecharge: function () {
    console.log("点击项目储值充值");
    wx.navigateTo({
      url: config.Page_Project_ProjectRecharge,
    })
  },

  /**
   * 点击预约
   */
  tapOrder: function (e) {
    console.log("点击预约 index：" + e.currentTarget.dataset.projectindex);
  }
})