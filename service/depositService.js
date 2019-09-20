const config = require("../utils/config.js");
const requestService = require("../service/requestService.js");
const userService = require("../service/userService.js");
const util = require("../utils/util.js");

/**
 * 获取寄存商品
 * @param memberNo 用户编号
 * @param type 类型
 * @param pageStartIndex 开始下标
 * @param pageSize 页长
 * @param getDepositSuccessCallback 成功回调
 * @param getDepositCompleteCallback 完成回调
 */
function getDepositGoods(memberNo, type, pageStartIndex, pageSize, getDepositSuccessCallback, getDepositCompleteCallback){
  wx.request({
    url: config.URL_Service + config.URL_Deposit_Get,
    data: {
      memberNo: memberNo,
      start: pageStartIndex,
      limit: pageSize,
      type: type
    },
    success(res){
      console.log("获取寄存商品")
      requestService.handlerSuccessResponse(res,
        function handlerSuccessCallback(responseData){
          if (util.isFunction(getDepositSuccessCallback)) {
            getDepositSuccessCallback();
          }
        },
        function handlerErrorCallback(errorMsg, errorCode){

        }
      )
    },
    fail(res) {
      console.log("获取寄存商品")
      requestService.handlerFailResponse();
    },
    complete(){
      if (util.isFunction(getDepositCompleteCallback)) {
        getDepositCompleteCallback();
      }
    }
  })
}

module.exports = {
  getDepositGoods: getDepositGoods
}