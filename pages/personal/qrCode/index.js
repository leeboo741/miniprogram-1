// pages/personal/qrCode/index.js

const app = getApp();
const config = require("../../../utils/config.js");
import drawQrcode from '../../../libs/weapp.qrcode.esm.js';

const W = wx.getSystemInfoSync().windowWidth;
const rate = 750.0 / W;
// 300rpx 在6s上为 150px
const qrcode_w = 440 / rate;
const qrcode_image_w = 80 / rate;
const qrcode_image_dx = 180 / rate;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    balanceValue: 122.2,
    height: null,
    qrcode_w: qrcode_w,
    code: "lijingbo201909051130pet",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: app.globalData.pageHeight
    })

    this.loadQRCode(this.data.code);
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
   * 加载二维码
   */
  loadQRCode: function (codeStr) {
    drawQrcode({
      width: qrcode_w,
      height: qrcode_w,
      canvasId: 'canvas',
      text: codeStr,
      image: {
        imageResource: '../../../resource/qrcodeImage.png',
        dx: qrcode_image_dx,
        dy: qrcode_image_dx,
        dWidth: qrcode_image_w,
        dHeight: qrcode_image_w
      }
    })
  },

  /**
   * 点击使用优惠券
   */
  tapUseCoupon: function () {
    wx.navigateTo({
      url: config.Page_Coupon_CouponList,
    })
  },

  /**
   * 点击充值
   */
  tapRecharge: function () {
    wx.navigateTo({
      url: config.Page_Balance_BalanceRecharge,
    })
  }
})