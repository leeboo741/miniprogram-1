// pages/coupon/couponList/index.js

const app = getApp();
const config = require("../../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stateList:[
      "未使用",
      "已使用",
      "已过期"
    ],
    currentCouponState: 0,
    dataSource: null,
    unUseCouponList: [
      {
        name: "满200元减20元代金券", // 名称
        desicription: "仅限购买奶粉", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 20, // 代金额
        rate: 0, // 折扣率
        type: 0, // 类型 0 代金券 1 折扣券 2 领用券
      },
      {
        name: "儿童玩具8.5折", // 名称
        desicription: "购买两件以上玩具可以享受8.5折优惠", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 0, // 代金额
        rate: 8.5, // 折扣率
        type: 1, // 类型 0 代金券 1 折扣券 2 领用券
      },
      {
        name: "大王婴儿纸尿裤试用装", // 名称
        desicription: "到店任意消费免费领取大王婴儿纸尿裤试用装一片", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 0, // 代金额
        rate: 0, // 折扣率
        type: 2, // 类型 0 代金券 1 折扣券 2 领用券
      },
    ],
    usedCouponList: [
      {
        name: "大王婴儿纸尿裤试用装", // 名称
        desicription: "到店任意消费免费领取大王婴儿纸尿裤试用装一片", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 0, // 代金额
        rate: 0, // 折扣率
        type: 2, // 类型 0 代金券 1 折扣券 2 领用券
      },
      {
        name: "满200元减20元代金券", // 名称
        desicription: "仅限购买奶粉", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 20, // 代金额
        rate: 0, // 折扣率
        type: 0, // 类型 0 代金券 1 折扣券 2 领用券
      },
      {
        name: "儿童玩具8.5折", // 名称
        desicription: "购买两件以上玩具可以享受8.5折优惠", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 0, // 代金额
        rate: 8.5, // 折扣率
        type: 1, // 类型 0 代金券 1 折扣券 2 领用券
      },
    ],
    expireCouponList: [
      {
        name: "儿童玩具8.5折", // 名称
        desicription: "购买两件以上玩具可以享受8.5折优惠", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 0, // 代金额
        rate: 8.5, // 折扣率
        type: 1, // 类型 0 代金券 1 折扣券 2 领用券
      },
      {
        name: "满200元减20元代金券", // 名称
        desicription: "仅限购买奶粉", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 20, // 代金额
        rate: 0, // 折扣率
        type: 0, // 类型 0 代金券 1 折扣券 2 领用券
      },
      {
        name: "大王婴儿纸尿裤试用装", // 名称
        desicription: "到店任意消费免费领取大王婴儿纸尿裤试用装一片", // 说明
        startDate: "2019.05.18", // 有效期开始日期
        endDate: "2019.05.20", // 有效期结束日期
        amount: 0, // 代金额
        rate: 0, // 折扣率
        type: 2, // 类型 0 代金券 1 折扣券 2 领用券
      },
    ],
    height: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: app.globalData.pageHeight
    })
    this.setDataSource(this.data.unUseCouponList);
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
   * 设置数据源
   */
  setDataSource: function(datasource){
    this.setData({
      dataSource: datasource
    })
  },

  /**
   * 点击tab
   */
  handleTabChange: function(e) {
    this.setData({
      currentCouponState: e.detail.key
    })
    if (this.data.currentCouponState == 0) {
      this.setDataSource(this.data.unUseCouponList);
    } else if (this.data.currentCouponState == 1) {
      this.setDataSource(this.data.usedCouponList);
    } else {
      this.setDataSource(this.data.expireCouponList);
    }
  },
})