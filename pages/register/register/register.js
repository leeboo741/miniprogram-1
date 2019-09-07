// pages/register/register.js

const app = getApp();
const config = require("../../../utils/config.js");
const util = require("../../../utils/util.js");
const registerService = require("../../../service/registerService.js")

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
    brithDay: null, // 生日
    type: 0, // 类型
    startDate: null, // 开始日期
    endDate: null, // 结束日期、
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
      height: app.globalData.pageHeight,
      type: options.type
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
   * 获取验证码
   */
  getCode: function () {
    if (this.data.ableGetCode) {
      if (!util.isEmpty(this.data.phone) && util.isPhoneAvailable(this.data.phone)) {
        console.log("开始倒计时");
        this.interval();
        registerService.getVerfiyCode(this.data.phone);
      } else {
        wx.showToast({
          title: '请输入正确手机号码',
          icon: 'none'
        })
      }
    }
    console.log("正在倒计时");
  },

  interval: function (e) {
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
        console.log("倒计时===> " + tempCount);
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
   * 点击注册
   */
  tapRegister: function () {
    if (util.isEmpty(this.data.brithDay)){
      wx.showToast({
        title: '请选择日期',
        icon: 'none'
      })
      return;
    }
    if (util.isEmpty(this.data.phone)) {
      wx.showToast({
        title: '请填写正确手机号',
        icon: 'none'
      })
      return;
    }
    if (util.isEmpty(this.data.code)) {
      wx.showToast({
        title: '请输入短信验证码',
        icon: 'none'
      })
      return;
    }
    registerService.register({
      memberType: this.data.type==0?"已有宝宝":"孕期妈妈",
      babyBirthday: this.data.brithDay,
      phone: this.data.phone,
      verifyCode: this.data.code,
    })
  },

  /**
   * 点击协议
   */
  tapAgreement: function () {

  },

  /**
   * 选择时间
   */
  bindTimeChange: function(e) {
    let tempDate = e.detail.value;
    tempDate = new Date(tempDate);
    tempDate = util.dateLater(tempDate, 0);
    this.setData({
      brithDay: tempDate.time,
    })
  }
})