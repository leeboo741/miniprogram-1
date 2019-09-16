/** =================================================== */
/**
 *                      全局数据
 */
/** =================================================== */
const Service_Phone = "0793-322132153"; // 客服电话
const Version_Name = "Beta 1.1.25"; // 版本名称
const Version_Code = 1; // 版本编号

/** =================================================== */
/** 
 *                      网络请求
 */
/** =================================================== */
// const URL_Service = "http://192.168.3.111:5050"; // 路径
const URL_Service = "http://192.168.3.187:8080"; // 路径

const URL_Login = "/member/oauth"; // 登陆
const URL_Register = "/member/reg"; // 注册
const URL_SendSMS = "/member/SMS"; // 发送短信验证码
const URL_Query_User = "/member/bind"; // 查询用户
const URL_Binding = "/member/bind"; // 绑定用户

/** =================================================== */
/** 
 *                      Enum
 */
/** =================================================== */

const Res_Code_Success = 10000; // 成功

const Res_Code_LoginTimeOut = 20001; // 登陆超时
const Res_Code_LoginFailure = 20002; // 账号密码不正确
const Res_Code_UserNotExist = 20003; // 用户不存在
const Res_Code_UnRegister = 20004; // 未注册
const Res_Code_BindFailed = 20005; // 账户绑定失败
const Res_Code_UnBind = 20006; // 用户未绑定

const Res_Code_GetMemberError = 30001; // 获取用户信息失败

const Res_Code_OverridePreNum = 40001; // 券类型超过预发数量
const Res_Code_OverrideGetNumTotal = 40002; // 超过总领取数量
const Res_Code_OverrideGetNumDay = 40003; // 超过每日领取数量限制

const Res_Code_VerifyCodeError = 70001; // 短信验证码错误
const Res_Code_PhoneError = 70002; // 输入手机号错误
const Res_Code_SendMessageFailed = 70003; // 发送短信验证码失败
const Res_Code_SMSEmpty = 70004; // 短信验证码未空

const Res_Code_OverrideEffectiveDate = 80001; // 未在兑换积分商品时间内
const Res_Code_OverrideBeyondCount = 80002; // 积分商品库存数量不足
const Res_Code_OverrideNotEnoughScore = 80003; // 兑换积分不足
const Res_Code_OverrideExceptionState = 80004; // 商品停售
const Res_Code_OverrideBeyondLimiteExchange = 80005; // 超出可兑换数量限制
const Res_Code_OverrideBeyondLimiteExchangeDay = 80006; // 超出单日可兑换数量限制

const Res_Code_Unkown = 90001; // 未知异常
const Res_Code_DataException = 90002; // 数据异常

/** =================================================== */
/** 
 *                      Key
 */
/** =================================================== */

const Key_UserInfo = "UserInfo"; // 用户信息缓存
const Key_IsLogin = "IsLogin"; // 是否已经登录    

/** =================================================== */
/** 
 *                      value
 */
/** =================================================== */



/** =================================================== */
/** 
 *                      pages
 */
/** =================================================== */

const Page_Home = "/pages/home/index"; // 首页

const Page_Register_Index = "/pages/register/index"; // 注册首页
const Page_Register_BindVip = "/pages/register/bindVip/bindVip"; // 绑定会员卡
const Page_Register_BindSelector = "/pages/register/bindVip/bindSelector"; // 选择要绑定的会员
const Page_Register_RegisterSelector = "/pages/register/register/registerSelector"; // 注册类型选择
const Page_Register_RegisterNew = "/pages/register/register/register"; // 注册新会员

const Page_Personal_Setting = "/pages/personal/setting/index"; // 设置
const Page_Personal_EditPersonal = "/pages/personal/editPersonal/index"; // 编辑个人信息
const Page_Personal_QRCode = "/pages/personal/qrCode/index"; // 二维码

const Page_Coupon_CouponList = "/pages/coupon/couponList/index"; // 优惠券列表
const Page_Coupon_ReceiveCoupon = "/pages/coupon/receiveCoupon/index"; // 领券中心

const Page_Balance_BalanceRecharge = "/pages/balance/balanceRecharge/index"; // 余额充值
const Page_Balance_BalanceDetail = "/pages/balance/balanceDetail/index"; // 余额明细

const Page_Project_ProjectIndex = "/pages/project/index"; // 项目储值首页
const Page_Project_ProjectRecharge = "/pages/project/projectRecharge/index"; // 项目储值充值
const Page_Project_ProjectDetail = "/pages/project/projectDetail/index"; // 项目储值明细
const Page_Project_ProjectOrder = "/pages/project/projectOrder/index"; // 项目预约
  
const Page_DepositGoods_DepositGoodsDetail = "/pages/depositGoods/depositGoodsDetail/index"; // 寄存商品详情

const Page_Point_PointDetail = "/pages/point/pointDetail/index"; // 积分明细
const Page_Point_PointExchange = "/pages/point/pointExchange/index"; // 积分兑换

module.exports = {
  Service_Phone, // 客服电话
  Version_Name, // 版本名称
  Version_Code, // 版本编号

  URL_Service, // 请求路径

  URL_Register, // 注册
  URL_SendSMS, // 发送短信验证码
  URL_Login, // 登陆
  URL_Query_User, // 查询用户
  URL_Binding, // 绑定用户

  Res_Code_Success, // 成功

  Res_Code_LoginTimeOut, // 登陆超时
  Res_Code_LoginFailure, // 账号密码不正确
  Res_Code_UserNotExist, // 用户不存在
  Res_Code_UnRegister, // 未注册
  Res_Code_BindFailed, // 账户绑定失败
  Res_Code_UnBind, // 用户未绑定

  Res_Code_GetMemberError, // 获取用户信息失败

  Res_Code_OverridePreNum, // 券类型超过预发数量
  Res_Code_OverrideGetNumTotal, // 超过总领取数量
  Res_Code_OverrideGetNumDay, // 超过每日领取数量限制

  Res_Code_VerifyCodeError, // 短信验证码错误
  Res_Code_PhoneError, // 输入手机号错误
  Res_Code_SendMessageFailed, // 发送短信验证码失败
  Res_Code_SMSEmpty, // 短信验证码未空

  Res_Code_OverrideEffectiveDate, // 未在兑换积分商品时间内
  Res_Code_OverrideBeyondCount, // 积分商品库存数量不足
  Res_Code_OverrideNotEnoughScore, // 兑换积分不足
  Res_Code_OverrideExceptionState, // 商品停售
  Res_Code_OverrideBeyondLimiteExchange, // 超出可兑换数量限制
  Res_Code_OverrideBeyondLimiteExchangeDay, // 超出单日可兑换数量限制

  Res_Code_Unkown, // 未知异常
  Res_Code_DataException, // 数据异常

  Key_UserInfo, // 用户信息缓存
  Key_IsLogin, // 是否已经登录

  Page_Home, // 首页

  Page_Register_Index, // 注册首页
  Page_Register_BindVip, // 绑定会员卡
  Page_Register_BindSelector, // 选择绑定账号
  Page_Register_RegisterSelector, // 注册类型选择
  Page_Register_RegisterNew, // 注册新会员

  Page_Personal_Setting, // 设置
  Page_Personal_EditPersonal, // 编辑个人信息
  Page_Personal_QRCode, // 二维码

  Page_Coupon_CouponList, // 优惠券列表
  Page_Coupon_ReceiveCoupon, // 领券中心

  Page_Balance_BalanceRecharge, // 余额充值
  Page_Balance_BalanceDetail, // 余额明细

  Page_Project_ProjectIndex, // 项目储值首页
  Page_Project_ProjectRecharge, // 项目储值充值
  Page_Project_ProjectDetail, // 项目储值明细
  Page_Project_ProjectOrder, // 项目预约

  Page_DepositGoods_DepositGoodsDetail, // 寄存商品详情

  Page_Point_PointDetail, // 积分明细
  Page_Point_PointExchange, // 积分兑换
}
