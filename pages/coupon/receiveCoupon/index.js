// pages/coupon/receiveCoupon/index.js

const app = getApp();
const config = require("../../../utils/config.js");
const couponService = require("../../../service/couponService.js");
const util = require("../../../utils/util.js");
const userService = require("../../../service/userService.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: null,
    dataSource: [],
    pageStartIndex: 0, // 开始下标
    pageSize: 20, // 页长
    loadEnd: false, // 是否加载到最后
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: app.globalData.pageHeight
    })

    this.requestDataSource();
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
   * 上拉加载更多
   */
  loadmore: function () {
    this.requestDataSource();
  },

  /**
   * 點擊領券
   */
  tapReceive: function (e) {
    wx.showLoading({
      title: '請稍等...',
    })
    let tempCoupon = this.data.dataSource[e.currentTarget.dataset.couponindex];
    couponService.receiveCoupon(userService.getMemberNo(), tempCoupon.couponTypeCode, 
      function receiveSuccessCallback(responseData){
        wx.showToast({
          title: '領取成功',
        })
      },
      function receiveCompleteCallback(){
        wx.hideLoading();
      }
    )
  },

  /**
   * 获取数据
   */
  requestDataSource: function () {
    let that = this;
    wx.showLoading({
      title: '加载中...',
    })
    couponService.getAllCouponList(this.data.pageStartIndex, this.data.pageSize,
      function getCouponSuccessCallback(responseData) {
        if (util.checkIsEmpty(responseData)) {
          that.setData({
            loadEnd: true
          })
        } else {
          that.data.dataSource = that.data.dataSource.concat(responseData);
          that.setData({
            dataSource: that.data.dataSource,
            pageStartIndex: that.data.pageStartIndex + that.data.pageSize,
            loadEnd: responseData.length < that.data.pageSize
          })
        }
      },
      function getCouponCompleteCallback() {
        wx.hideLoading();
      }
    )
  }
})