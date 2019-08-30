// pages/balance/balanceRecharge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balanceValue: 120.2, // 账户余额
    rechargeValue: null, // 充值金额
    staticValues: [
      "50",
      "100",
      "200",
      "500",
      "1000",
      "2000"
    ], // 固定充值金额列表
    selectStaticValueIndex: -1, // 选中的固定值
    promotionList:[
      {
        name: "充100元送10元",
        description: "详细说明 详细说明 详细说明 详细说明"
      },
      {
        name: "充100元送10元",
        description: "详细说明 详细说明 详细说明 详细说明"
      }
    ], // 活动列表
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
   * 确认充值
   */
  tapConfirmRecharge: function () {
    console.log("确认充值 金额：" + this.data.rechargeValue);
  },

  /**
   * 绑定购物卡
   */
  tapBindCard: function () {
    console.log("绑定购物卡");
  },

  /**
   * 充值金额输入
   */
  inputRechargeAmount: function (e) {
    console.log("充值金额输入：" + e.detail.value);
    this.setData({
      selectStaticValueIndex: -1,
      rechargeValue: e.detail.value
    })
  },

  /**
   * 点击固定充值额
   */
  tapStaticValue: function (e) {
    console.log("点击固定充值额 ： " + e.currentTarget.dataset.index);
    if (e.currentTarget.dataset.index == this.data.selectStaticValueIndex) {
      this.changeSelectStaticValueIndex(-1);
    } else {
      this.changeSelectStaticValueIndex(e.currentTarget.dataset.index);
    }
  },

  /**
   * 更改选中的固定充值额Index
   */
  changeSelectStaticValueIndex: function(index){
    if (index >= 0) {
      this.setData({
        selectStaticValueIndex: index,
        rechargeValue: this.data.staticValues[index]
      })
    } else {
      this.setData({
        selectStaticValueIndex: -1,
        rechargeValue: null
      })
    }
  },
})