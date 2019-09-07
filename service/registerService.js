const config = require("../utils/config.js");
const requestService = require("../service/requestService.js");
const userService = require("../service/userService.js");

function getVerfiyCode(phone) {
  wx.request({
    url: config.URL_Service + config.URL_SendSMS,
    data: {
      phone: phone
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: "POST", // 请求方式
    success (res) {
      requestService.handlerSuccessResponse(res,
        function successCallback(){
        },
        function errorCallback(){
        }
      )
    },
    fail(res) {
      requestService.handlerFailResponse();
    }
  })
}

function register(data){
  wx.showLoading({
    title: '请稍等...',
  })
  wx.request({
    url: config.URL_Service + config.URL_Register,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
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
          });
        },
        function errorCallback() {
          
        }
      )
    },
    fail (res) {
      requestService.handlerFailResponse();
    },
    complete(res) {
      wx.hideLoading();
    }
  })
}

module.exports = {
  getVerfiyCode: getVerfiyCode,
  register: register
}