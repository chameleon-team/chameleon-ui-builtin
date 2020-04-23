import { dispatchProtocol, registerListen } from '../common';
var globalEvent = weex.requireModule('globalEvent');

/**
 * 注册监听通道
 */
export function init() {
  if (weex.config.addedListener) return;
  // 确保只有一个在监听的通道, 防止通道并行重复触发 暂时注释, 会影响安卓部分功能
  weex.config.addedListener = true;

  globalEvent.addEventListener('cmlBridgeChannel', function (ptc) {
    let ptcStr = ptc.protocol;
    dispatchProtocol(ptcStr);
  })
}

/**
 * 注册主动监听
 * @param {String} module 
 * @param {String} method 
 * @param {Function} callback 
 */
export function listen(module, method, callback) {
  registerListen(...arguments);
}
