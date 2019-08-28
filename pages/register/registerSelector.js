// pages/register/registerSelector.js

const app = getApp();
const config = require("../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectType: 0, // 选中类型 0 已有baby 1 待产孕妇
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
   * 选择类型
   */
  tapSelectType: function(e) {
    this.setData({
      selectType: e.currentTarget.dataset.type
    })
  },

  /**
   * 选择下一步
   */
  tapNextStep: function() {
    wx.navigateTo({
      url: '/pages/register/register?type='+this.data.selectType,
    })
  },
})