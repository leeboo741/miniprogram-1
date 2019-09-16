// pages/register/bindVip.js

const app = getApp();
const config = require("../../../utils/config.js");
const util = require("../../../utils/util.js");
const registerService = require("../../../service/registerService.js");

const intervalDuration = 60;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    height: null,
    intervalID: null, // 定时器Id
    getCodeTitle: "获取验证码", // 获取验证码标题
    ableGetCode: true, // 是否允许获得验证码
    intervalCount: intervalDuration, // 倒计时
    phone: null, // 手机号
    code: null, // 验证码
    tempCookie: null, // 临时cookie存储
    // card: null, // 会员卡
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
    clearInterval(this.data.intervalID);
    this.data.intervalID = null;
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
   * 电话输入
   */
  inputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  /**
   * 短信验证码输入
   */
  inputCode: function (e) {
    this.setData({
      code: e.detail.value
    })
  },

  /**
   * 会员卡输入
   */
  // inputCard: function (e) {
  //   this.setData({
  //     card: e.detail.value
  //   })
  // },

  /**
   * 获取验证码
   */
  getCode: function () {
    if (this.data.ableGetCode){
      if (util.isEmpty(this.data.phone) || !util.isPhoneAvailable(this.data.phone)) {
        wx.showToast({
          title: '请输入正确手机号码！',
          icon: 'none',
        })
        return;
      }
      console.log("开始倒计时");
      this.interval();
      let that = this;
      registerService.getSMSCode(this.data.phone, function successCallback(cookie){
        that.setData({
          tempCookie: cookie
        })
      })
    }
    console.log("正在倒计时");
  },

  /**
   * 倒计时
   */
  interval: function(e) {
    let that = this;
    clearInterval(this.data.intervalID);
    this.data.intervalID = setInterval(function () {
      let tempCount = that.data.intervalCount;
      tempCount--;
      if (tempCount > 0) {
        that.setData({
          getCodeTitle: tempCount + '秒后获取',
          intervalCount: tempCount,
          ableGetCode: false
        })
        console.log("倒计时===> " +tempCount);
        that.interval();
      } else {
        that.setData({
          getCodeTitle: "获取验证码",
          intervalCount: intervalDuration,
          ableGetCode: true
        })
        console.log("倒计时结束");
        clearInterval(that.data.intervalID);
        that.data.intervalID = null;
      }
    }, 1000);
  },

  /**
   * 点击绑定
   */
  tapBind: function () {
    let that = this;
    registerService.queryUserWithPhone(this.data.phone,this.data.code,this.data.tempCookie,
      function querySuccessCallback(data){
        console.log(JSON.stringify(data));
        wx.navigateTo({
          url: config.Page_Register_BindSelector + '?accounts=' + JSON.stringify(data) + '&cookie=' + that.data.tempCookie + '&code=' + that.data.code,
        })
      }
    )
  },

  /**
   * 点击协议
   */
  tapAgreement: function () {

  },
})