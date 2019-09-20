const config = require("../utils/config.js");
const requestService = require("../service/requestService.js");
const userService = require("../service/userService.js");

/**
 * 获取短信验证码
 * @param phone 目标电话
 * @param successCallback 成功回调（要用session 会在这里返回 cookie）
 */
function getSMSCode(phone, successCallback) {
  wx.request({
    url: config.URL_Service + config.URL_SendSMS,
    data: {
      phone: phone
    },
    success (res) {
      let tempCookie = res.header["Set-Cookie"];
      requestService.handlerSuccessResponse(res,
        function tempSuccessCallback(){
          if (successCallback && typeof successCallback == "function") {
            successCallback(tempCookie)
          }
        },
        function tempErrorCallback(){
          // 暂时默认失败不处理
        }
      )
    },
    fail(res) {
      requestService.handlerFailResponse(res);
    }
  })
}

/**
 * 绑定会员
 * @param memberNumber 成员编号
 * @param openId openId
 * @param code 短信验证码
 * @param cookie cookie
 */
function bindAccount(memberNumber, openId, code, cookie) {
  wx.showLoading({
    title: '绑定中...',
  })
  wx.request({
    url: config.URL_Service + config.URL_Binding,
    data: {
      memberNo: memberNumber,
      openId: openId,
      // verifyCode: code,
    },
    method: 'PUT',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      // 'cookie': cookie
    },
    success(res){
      requestService.handlerSuccessResponse(res,
        function tempSuccessCallback() {
          userService.login(function loginCallback(state) {
            if (state == config.Res_Code_Success) {
              wx.reLaunch({
                url: config.Page_Home,
              })
            }
            wx.hideLoading();
          });
        },
        function tempErrorCallback(msg, code) {
          wx.hideLoading();
        }
      )
    },
    fail(res) {
      requestService.handlerFailResponse(res);
      wx.hideLoading();
    },
    complete(res){
    }
  })
}

/**
 * 根据手机号查询用户
 * @param phoneNumber 用户手机号
 * @param verifyCode 短信验证码
 * @param cookie 
 * @param querySuccesCallback 查询成功回调
 */
function queryUserWithPhone(phoneNumber, verifyCode, cookie, querySuccesCallback) {
  wx.showLoading({
    title: '请稍等...',
  })
  let tempHeader = {};
  if (cookie) {
    tempHeader = {
      cookie: cookie
    }
  }
  wx.request({
    url: config.URL_Service + config.URL_Query_User,
    header: tempHeader,
    data: {
      phone: phoneNumber,
      verifyCode: verifyCode
    },
    success(res){
      requestService.handlerSuccessResponse(res, 
        function tempSuccessCallback(data){
          if (querySuccesCallback) {
            querySuccesCallback(data);
          }
          wx.hideLoading();
        }, 
        function tempErrorCallback(msg, code) {
          wx.hideLoading();
        }
      )
    },
    fail(res) {
      requestService.handlerFailResponse(res);
      wx.hideLoading();
    },
    complete(res){
    }
  })
}

/**
 * 注册用户
 * @param data 注册信息
 * @param cookie 
 */
function register(data, cookie){
  wx.showLoading({
    title: '请稍等...',
  })
  let tempHeader = { 'content-type': 'application/x-www-form-urlencoded'};
  if (cookie) {
    tempHeader.cookie = cookie
  }
  wx.request({
    url: config.URL_Service + config.URL_Register,
    data: data,
    header: tempHeader,
    method: "POST", // 请求方式
    success (res) {
      requestService.handlerSuccessResponse(res,
        function successCallback() {
          userService.login(function loginCallback(state){
            if (state == config.Res_Code_Success) {
              wx.reLaunch({
                url: config.Page_Home,
              })
            }
            wx.hideLoading();
          });
        },
        function errorCallback(errorMsg, errorCode) {
          wx.hideLoading();
        }
      )
    },
    fail (res) {
      requestService.handlerFailResponse(res);
      wx.hideLoading();
    },
    complete(res) {
    }
  })
}

module.exports = {
  getSMSCode: getSMSCode,
  register: register,
  bindAccount: bindAccount,
  queryUserWithPhone: queryUserWithPhone,
}