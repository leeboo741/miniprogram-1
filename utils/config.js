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
const URL_Service = "http://192.168.3.111:5050"; // 路径

const URL_Register = "/api/customer/"; // 注册
const URL_Login = "/api/oAuth"; // 登陆
const URL_UpdateCustomer = "/api/customer/updateCustomer"; // 更新用户

/** =================================================== */
/** 
 *                      Enum
 */
/** =================================================== */

const Prompt_Success = "Success"; // 成功标识
const Prompt_Error = "Error"; // 错误标识
const Prompt_NotExist = "NotExist"; // 不存在标识

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

const Value_Login = "Logining"; // 登录标识
const Value_UnLogin = "UnLogining"; // 未登录标识

/** =================================================== */
/** 
 *                      pages
 */
/** =================================================== */

const Page_Home = "/pages/home/index"; // 首页

const Page_Register_Index = "/pages/register/index"; // 注册首页
const Page_Register_BindVip = "/pages/register/bindVip/bindVip"; // 绑定会员卡
const Page_Register_RegisterSelector = "/pages/register/register/registerSelector"; // 注册类型选择
const Page_Register_RegisterNew = "/pages/register/register/register"; // 注册新会员

const Page_Personal_Setting = "/pages/personal/setting/index"; // 设置
const Page_Personal_EditPersonal = "/pages/personal/editPersonal/index"; // 编辑个人信息
const Page_Personal_QRCode = "/pages/personal/qrCode/index"; // 二维码

const Page_Coupon_CouponList = "/pages/coupon/couponList/index"; // 优惠券列表
const Page_Coupon_ReceiveCoupon = "/pages/coupon/receiveCoupon/index"; // 领券中心

const Page_Balance_BalanceRecharge ="/pages/balance/balanceRecharge/index"; // 余额充值
const Page_Balance_Detail ="/pages/balance/balanceDetail/index"; // 余额明细
  
module.exports = {
  Service_Phone, // 客服电话
  Version_Name, // 版本名称
  Version_Code, // 版本编号

  URL_Service, // 请求路径

  URL_Register, // 注册
  URL_Login, // 登陆
  URL_UpdateCustomer, // 更新用户

  Prompt_Success, // 成功标识
  Prompt_Error, // 错误标识
  Prompt_NotExist, // 不存在标识

  Key_UserInfo, // 用户信息缓存
  Key_IsLogin, // 是否已经登录

  Value_Login, // 已登录标识
  Value_UnLogin, // 未登录标识

  Page_Home, // 首页

  Page_Register_Index, // 注册首页
  Page_Register_BindVip, // 绑定会员卡
  Page_Register_RegisterSelector, // 注册类型选择
  Page_Register_RegisterNew, // 注册新会员

  Page_Personal_Setting, // 设置
  Page_Personal_EditPersonal, // 编辑个人信息
  Page_Personal_QRCode, // 二维码

  Page_Coupon_CouponList, // 优惠券列表
  Page_Coupon_ReceiveCoupon, // 领券中心

  Page_Balance_BalanceRecharge, // 余额充值
}
