// pages/register/index.js

const app = getApp();
const config = require("../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: null,
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
   * 点击注册
   */
  tapRegister: function () {
    wx.navigateTo({
      url: config.Page_Register_RegisterSelector,
    })
  },

  /**
   * 点击绑定
   */
  tapBind: function () {
    wx.navigateTo({
      url: config.Page_Register_BindVip,
    })
  },
})