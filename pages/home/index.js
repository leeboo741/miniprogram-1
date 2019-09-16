// pages/home/index.js

const app = getApp();
const config = require("../../utils/config.js");
const userService = require("../../service/userService.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null, // 用户
    couponList: [
      {
        name: "优惠券", // 名称
        descripetion: "无门槛使用", // 使用说明
        amount: 15, // 金额
      },
      {
        name: "优惠券", // 名称
        descripetion: "仅限奶粉使用", // 使用说明
        amount: 15, // 金额
      },
      {
        name: "折扣券", // 名称
        descripetion: "仅限玩具使用", // 使用说明
        amount: 15, // 金额
      },
      {
        name: "折扣券", // 名称
        descripetion: "仅限玩具使用", // 使用说明
        amount: 15, // 金额
      },
    ], // 优惠券列表
    pointGoodsList: [
      {
        brand: "BOBO", // 品牌
        type: "奶瓶", // 商品
        amount: 20, // 价格
        point: 180, // 积分
      },
      {
        brand: "AUBY", // 品牌
        type: "婴儿牙胶棒", // 商品
        amount: 30, // 价格
        point: 550, // 积分
      },
      {
        brand: "PIGEON", // 品牌
        type: "奶嘴", // 商品
        amount: 50, // 价格
        point: 220, // 积分
      }, 
    ],// 积分商品
    projectList: [
      {
        name: "宝宝游泳馆",
      },
      {
        name: "产后中心",
      },
      {
        name: "早教中心",
      },
    ], // 项目
    depositGoodsList: [
      {
        name: "雅培1段900g配方奶粉",
        count: 12,
        unit: "罐"
      },
      {
        name: "花王尿不湿M码",
        count: 4,
        unit: "箱"
      },
      {
        name: "施巴婴儿沐浴洗发露140ml",
        count: 2,
        unit: "瓶"
      },
      {
        name: "中式和尚服",
        count: 1,
        unit: "件"
      },
    ], // 寄存商品
  },

  /** ======================================= */
  /**               生命周期                   */
  /** ======================================= */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    userService.checkLogin(function alreadyLoginCallback(state){
      if (state) {
        that.setData({
          userInfo: userService.getUserInfo()
        })
      }
    },false) 
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

  /** ======================================= */
  /**               页面事件                  */
  /** ======================================= */

  /**
   * 点击客服按钮
   */
  tapCustomerService: function () {
    // 拨打客服电话
    wx.makePhoneCall({
      phoneNumber: config.Service_Phone,
    })
  },

  /**
   * 点击设置按钮
   */
  tapSetting: function () {
    console.log("点击设置按钮");
    // 跳转设置页面
    wx.navigateTo({
      url: config.Page_Personal_EditPersonal,
    })
  },

  /**
   * 点击注册|登陆
   */
  tapLoginOrRegister: function () {
    console.log("点击注册|登陆");
    let that = this;
    userService.login(function loginCallback(state, msg){
      // 登陆成功
      if (state == config.Res_Code_Success) {
        that.setData({
          userInfo: userService.getUserInfo()
        })
      }
    });
  },

  /**
   * 获取成长值
   */
  tapGetGrowthValue: function () {
    console.log("获取成长值");
    // 
  },

  /**
   * 余额充值
   */
  tapBalanceRecharge: function () {
    console.log("余额充值");
    wx.navigateTo({
      url: config.Page_Balance_BalanceRecharge,
    })
  },

  /**
   * 余额明细
   */
  tapBalanceDetail: function () {
    console.log("余额明细");
    wx.navigateTo({
      url: config.Page_Balance_BalanceDetail,
    })
  },

  /**
   * 点击我的二维码
   */
  tapQRCode: function () {
    console.log("点击我的二维码");
    // 跳转二维码页面 展示二维码
    wx.navigateTo({
      url: config.Page_Personal_QRCode,
    })
  },

  /**
   * 点击优惠券明细
   */
  tapCouponDetail: function () {
    console.log("点击优惠券明细");
    wx.navigateTo({
      url: config.Page_Coupon_CouponList,
    })
  },

  /**
   * 点击领券
   */
  tapReceiveCoupon: function () {
    console.log("点击领券");
    wx.navigateTo({
      url: config.Page_Coupon_ReceiveCoupon,
    })
  },

  /**
   * 点击优惠券
   */
  tapCoupon: function(e) {
    console.log("点击优惠券 couponIndex：" + e.currentTarget.dataset.couponindex);
  },

  /**
   * 点击积分明细
   */
  tapPointDetail: function () {
    console.log("点击积分明细");
    wx.navigateTo({
      url: config.Page_Point_PointDetail,
    })
  },

  /**
   * 点击积分兑换
   */
  tapExchange: function () {
    console.log("点击积分兑换");
    wx.navigateTo({
      url: config.Page_Point_PointExchange,
    })
  },

  /**
   * 点击兑换商品
   */
  tapPointGoods: function (e) {
    console.log("兑换商品 goodsIndex：" + e.currentTarget.dataset.goodsindex);
  },

  /**
   * 点击项目储值明细
   */
  tapProjectDetail: function () {
    console.log("点击项目储值明细");
    wx.navigateTo({
      url: config.Page_Project_ProjectIndex,
    })

  },

  /**
   * 点击项目储值充值
   */
  tapProjectRecharge: function () {
    console.log("点击项目储值充值");
    wx.navigateTo({
      url: config.Page_Project_ProjectRecharge,
    })
  },

  /**
   * 点击储值项目
   */
  tapProject: function (e) {
    console.log("储值项目 projectIndex：" + e.currentTarget.dataset.projectindex);
  },

  /**
   * 点击寄存商品明细
   */
  tapDepositDetail: function () {
    console.log("点击寄存商品明细");
    wx.navigateTo({
      url: config.Page_DepositGoods_DepositGoodsDetail,
    })
  },

  /**
   * 点击取商品
   */
  tapReceiveDeposit: function () {
    console.log("点击取商品");
    wx.navigateTo({
      url: config.Page_DepositGoods_DepositGoodsDetail,
    })
  },

  /**
   * 点击会员权益
   */
  tapVipRight: function () {
    console.log("点击会员权益");
    
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
})