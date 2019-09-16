
const config = require("../utils/config.js")
const app = getApp();

/**
 * 处理成功请求返回数据
 * @param res 返回数据
 * @param handlerSuccessCallback 处理成功回调
 * @param handlerFailCallback 处理失败回调
 */
function handlerSuccessResponse (res, handlerSuccessCallback, handlerErrorCallback) {
  console.log("handlerSuccessResponse:\n" + JSON.stringify(res));
  // 请求成功
  if (res.data.code == config.Res_Code_Success) {
    
    if (handlerSuccessCallback) {
      handlerSuccessCallback(res.data.root);
    }
  } 
  // 未注册
  else if (res.data.code == config.Res_Code_UnRegister) {

    if (handlerErrorCallback) {
      handlerErrorCallback(res.data.errMsg, res.data.code);
    }
    app.globalData.openId = res.data.errMsg;
    wx.showModal({
      title: '尚未注册',
      content: '是否前往注册',
      confirmText: "注册",
      success(res){
        if (res.confirm) {
          wx.navigateTo({
            url: config.Page_Register_Index,
          })
        }
      }
    })
  } 
  // 其他（Error）
  else {

    if (handlerErrorCallback) {
      handlerErrorCallback(res.data.errMsg, res.data.code);
    }
    if (res.data.code == config.Res_Code_Unkown) {
      wx.showToast({
        title: '未知错误，请联系管理人员',
        icon: 'none'
      })
    } else if (res.data.code == config.Res_Code_DataException) {
      wx.showToast({
        title: '数据异常，请联系管理人员',
        icon: 'none'
      })
    } else if (res.data.code == config.Res_Code_UnBind) {
      wx.showToast({
        title: '该手机号已注册，请更换手机号注册或前往绑定！',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: res.data.errMsg,
        icon: 'none'
      })
    }
  }
}

/**
 * 处理失败请求返回数据
 * @param res 返回数据
 * @param msg 提示信息
 * @param handlerFailCallback 处理回调
 */
function handlerFailResponse (res, msg, handlerFailCallback) {
  console.log("handlerFailResponse:\n" + JSON.stringify(res))
  let tempMsg = '链接失败，请稍后再试';
  if (msg) {
    tempMsg = msg;
  }
  wx.showToast({
    title: tempMsg,
    icon: 'none'
  })
  if (handlerFailCallback) {
    handlerFailCallback(res);
  }
}

/**
 * 对外暴露
 */
module.exports = {
  handlerSuccessResponse: handlerSuccessResponse,
  handlerFailResponse: handlerFailResponse
}