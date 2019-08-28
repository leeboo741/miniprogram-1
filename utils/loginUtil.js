const config = require("../utils/config.js")

function isLogin() {
  try {
    var value = wx.getStorageSync(config.Key_IsLogin)
    if (value == config.Value_Login) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

function setIsLogin() {
  try {
    wx.setStorageSync(config.Key_IsLogin, config.Value_Login)
  } catch (e) {

  }
}

function clearLogin() {
  try {
    wx.setStorageSync(config.Key_IsLogin, config.Value_UnLogin)
  } catch (e) {

  }
}

module.exports = {
  isLogin: isLogin,
  setIsLogin: setIsLogin,
  clearLogin: clearLogin
}