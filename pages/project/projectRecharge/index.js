// pages/project/projectRecharge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectBalanceValue: 2000,
    expireDate: "2019-01-11",
    typeList:[
      "金额充值",
      "项目套餐购买",
    ],
    currentType: 0,
    rechargeValue: null, 
    staticValues: [
      "200",
      "1000",
      "3000"
    ], // 固定充值金额列表
    selectStaticValueIndex: -1, // 选中的固定值
    amoutRechargePromotionList:[
      {
        name: "充200元送90元代金券",
        description: "详细说明 详细说明 详细说明 详细说明"
      },
      {
        name: "充100元送30元代金券",
        description: "详细说明 详细说明 详细说明 详细说明"
      }
    ], // 活动列表
    projectStaticValues: [
      {
        amount: "200",
        expireDuration: 1,
      },
      {
        amount: "1000",
        expireDuration: 3,
      },
      {
        amount: "3000",
        expireDuration: 6,
      },
    ],
    selectProjectStaticValueIndex: -1,
    projectPromotionList: [
      {
        name: "200元项目套餐",
        detail: "洗澡2次；按摩2次；理发2次。",
        description: "详细说明 详细说明 详细说明 详细说明"
      },
      {
        name: "1000元项目套餐",
        detail: "洗澡8次；按摩8次；理发8次。",
        description: "详细说明 详细说明 详细说明 详细说明"
      },
      {
        name: "300元项目套餐",
        detail: "洗澡27次；按摩27次；理发27次。",
        description: "详细说明 详细说明 详细说明 详细说明"
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
   * 有效期说明
   */
  tapExpireDetail: function () {
    console.log("点击有效期说明")
  },

  /**
   * 选择充值类型
   */
  handleTabChange: function (e) {
    this.setData({
      currentType: e.detail.key
    })
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
  changeSelectStaticValueIndex: function (index) {
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

  /**
   * 确认充值
   */
  tapConfirmRecharge: function () {
    console.log("确认充值 金额：" + this.data.rechargeValue);
  },

  /**
   * 点击项目固定值
   */
  tapProjectStaticValue: function (e) {
    console.log("点击固定充值额 ： " + e.currentTarget.dataset.index);
    if (e.currentTarget.dataset.index == this.data.selectProjectStaticValueIndex) {
      this.changeSelectProjectStaticValueIndex(-1);
    } else {
      this.changeSelectProjectStaticValueIndex(e.currentTarget.dataset.index);
    }
  },

  /**
   * 更改选中的固定充值额Index
   */
  changeSelectProjectStaticValueIndex: function (index) {
    if (index >= 0) {
      this.setData({
        selectProjectStaticValueIndex: index,
      })
    } else {
      this.setData({
        selectProjectStaticValueIndex: -1,
      })
    }
  },

  /**
   * 点击确认项目充值
   */
  tapConfirmProjectRecharge: function () {
    console.log("确认购买 Index：" + this.data.selectProjectStaticValueIndex);
  },
})