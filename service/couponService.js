const config = require("../utils/config.js");
const requestService = require("../service/requestService.js");
const userService = require("../service/userService.js");
const util = require("../utils/util.js");

/**
 * 领用优惠券
 * @param memberNo 員工編號
 * @param couponTypeNo 優惠券編號
 * @param receiveCouponSuccessCallback 成功回調
 * @param receiveCouponCompleteCallback 完成回調
 */
function receiveCoupon(memberNo, couponTypeNo, receiveCouponSuccessCallback, receiveCouponCompleteCallback){
  wx.request({
    url: config.URL_Service + config.URL_Coupon_Recive,
    data: {
      memberNo: memberNo,
      couponTypeNo: couponTypeNo,
    },
    method: "POST",
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success(res) {
      console.log("领用优惠券")
      requestService.handlerSuccessResponse(res,
        function handlerSuccessCallback(responseData){
          if (util.isFunction(receiveCouponSuccessCallback)){
            receiveCouponSuccessCallback(responseData)
          }
        },
        function handlerErrorCallback(errorMsg, errorCode) {

        }
      )
    },
    fail(res) {
      console.log("领用优惠券")
      requestService.handlerFailResponse();
    },
    complete(res) {
      if (util.isFunction(receiveCouponCompleteCallback)){
        receiveCouponCompleteCallback();
      }
    }
  })
}

/**
 * 获取本人优惠券列表
 * @param memberNo 用户编号
 * @param type 类型
 * @param getCouponSuccessCallback 成功回调
 * @param getCouponCompleteCallbcak 完成回调
 */
function getMyCouponList(memberNo, type, getCouponSuccessCallback, getCouponCompleteCallbcak) {
  let data = {};
  if (util.checkIsEmpty(memberNo)) {
    console.log("couponService getMyCouponList memberNo 不能为空")
    return;
  }
  data.memberNo = memberNo;
  if (!util.checkIsEmpty(type)) {
    data.type = type;
  }

  wx.request({
    url: config.URL_Service + config.URL_Coupon_Customer,
    data: data,
    success(res) {
      console.log("获取本人优惠券列表")
      requestService.handlerSuccessResponse(res,
        function handlerSuccessCallback(successData) {
          if (util.isFunction(getCouponSuccessCallback)) {
            getCouponSuccessCallback(successData);
          }
        },
        function handlerErrorCallback(errorMsg, errorCode) {

        }
      )
    },
    fail(res) {
      console.log("获取本人优惠券列表")
      requestService.handlerFailResponse();
    },
    complete(res) {
      if (util.isFunction(getCouponCompleteCallbcak)) {
        getCouponCompleteCallbcak()
      }
    }
  })
}

/**
 * 获取所有优惠券列表
 * @param startIndex 开始下标
 * @param pageSize 页长
 * @param getCouponSuccessCallback 成功回调
 * @param getCouponCompleteCallback 完成回调
 */
function getAllCouponList(startIndex, pageSize, getCouponSuccessCallback, getCouponCompleteCallback) {
  wx.request({
    url: config.URL_Service + config.URL_Coupon_List,
    data: {
      start: startIndex,
      limit: pageSize
    },
    success(res) {
      console.log("获取所有优惠券列表")
      requestService.handlerSuccessResponse(res,
        function handlerSuccessCallback(responseData) {
          if (util.isFunction(getCouponSuccessCallback)) {
            getCouponSuccessCallback(responseData);
          }
        },
        function handlerErrorCallback(errorMsg, errorCode) {

        }
      );
    },
    fail(res) {
      console.log("获取所有优惠券列表")
      requestService.handlerFailResponse();
    },
    complete(res) {
      if (util.isFunction(getCouponCompleteCallback)) {
        getCouponCompleteCallback();
      }
    }
  })
}

module.exports = {
  receiveCoupon: receiveCoupon,
  getMyCouponList: getMyCouponList,
  getAllCouponList: getAllCouponList,
}