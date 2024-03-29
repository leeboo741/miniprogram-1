const app = getApp();
const config = require("../utils/config.js");
const requestService = require("../service/requestService.js")

/**
 * 将 用户信息 存储进 本地
 */
function saveUserInfo(userInfo) {
  let userInfoStr = JSON.stringify(userInfo);
  try {
    wx.setStorageSync(config.Key_UserInfo, userInfoStr);
  } catch (e) {

  }
}

/**
 * 获取 本地存储 用户信息
 */
function getUserInfo() {
  try {
    let userInfo = JSON.parse(wx.getStorageSync(config.Key_UserInfo));
    return userInfo;
  } catch (e) {
    return null;
  }
}

/**
 * 获取用户编号
 */
function getMemberNo() {
  let userInfo = getUserInfo();
  if (userInfo == null || userInfo.openId == null || userInfo.openId.length <= 0) {
    return null;
  }
  return userInfo.memberNo;
}

/**
 * 获取openId
 */
function getOpenId() {
  let userInfo = getUserInfo();
  if (userInfo == null || userInfo.openId == null || userInfo.openId.length <= 0) {
    return null;
  }
  return userInfo.openId;
}

/**
 * 根据openid判断是否登陆
 */
function isLogin() {
  let openId = getOpenId();
  if (openId == null) {
    return false;
  }
  return true;
}

/**
 * 登陆
 */
function login(loginCallback) {
  wx.showLoading({
    title: '登陆中...',
  })
  console.log("微信登陆")
  // 登录
  wx.login({
    success: res => {
      console.log("微信login success => " + res.code);
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      let wxCode = res.code;
      // 查看是否授权
      wx.getSetting({
        success(res) {
          console.log("获取授权成功")
          if (res.authSetting['scope.userInfo']) {
            console.log("获取 scope.userInfo 授权成功")
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success(res) {
                console.log("微信登陆 => \n" + JSON.stringify(res));
                let userInfo = res.userInfo;
                // 向服务器请求登陆，返回 本微信 在服务器状态，注册|未注册，
                wx.request({
                  url: config.URL_Service + config.URL_Login, // 服务器地址
                  data: {
                    "code": wxCode
                  }, // 参数
                  success: res => {
                    
                    console.log("success => " + JSON.stringify(res));
                    requestService.handlerSuccessResponse(
                      res,
                      function successCallback(resData){
                        let tempUserInfo = resData;
                        saveUserInfo(tempUserInfo);
                        wx.showToast({
                          title: '登陆成功',
                        })
                        if (loginCallback) {
                          loginCallback(config.Res_Code_Success, "登陆成功");
                        }
                      },
                      function errorCallback(msg, state){
                        if (loginCallback) {
                          loginCallback(state, msg);
                        }
                      }
                    )
                  }, // 请求成功回调 登陆成功 保存 用户信息。登陆失败，跳转注册页面
                  fail: res => {
                    console.log("fail => " + JSON.stringify(res));
                    requestService.handlerFailResponse();
                  }, // 请求失败回调,弹窗，重新请求
                  complete: res => {
                    console.log("complite => " + JSON.stringify(res));
                    wx.hideLoading();
                  }, // 请求完成回调，隐藏loading
                })
              }
            })
          } else {
            wx.hideLoading();
            requestService.handlerFailResponse("需要授权以提供服务！");
          }
        },
        fail(res) {
          console.log("获取授权失败");
          wx.hideLoading();
          requestService.handlerFailResponse("获取授权失败！");
        },
        complete(res) {
          console.log("获取授权完成");
        },
      })
    },
    fail(res) {
      console.log("微信login fail => " + JSON.stringify(res));
      wx.hideLoading();
      requestService.handlerFailResponse("微信登陆失败");
    },
    complete(res) {
      console.log("微信login complete => " + JSON.stringify(res));
    },
  })
}

/**
 * 检查是否登陆
 */
function checkLogin(alreadyLoginCallback, showAlert) {
  if (isLogin()) {
    if (alreadyLoginCallback) {
      alreadyLoginCallback(true);
    }
  } else {
    if (alreadyLoginCallback) {
      alreadyLoginCallback(false);
    }
    if (showAlert) {
      popLoginAlert();
    }
  }
}

/**
 * 登陆弹窗
 */
function popLoginAlert(title, msg, loginConfirmCallback) {
  wx.showModal({
    title: title!=null?title:"尚未登陆",
    content: msg!=null?msg:"该功能需登陆后操作",
    confirmText: "前往登陆",
    cancelText: "暂不登陆",
    success(res){
      if (res.confirm) {
        if (loginConfirmCallback) {
          loginConfirmCallback()
        } else {
          wx.reLaunch({
            url: config.Page_Home,
          })
        }
      }
    }
  })
}

module.exports = {
  saveUserInfo: saveUserInfo,
  getUserInfo: getUserInfo,
  getMemberNo: getMemberNo,
  getOpenId: getOpenId,
  isLogin: isLogin,
  login: login,
  checkLogin: checkLogin,
  popLoginAlert: popLoginAlert
}