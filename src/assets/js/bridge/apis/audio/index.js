import { callNative ,listenNative} from '../../core/index.js'

const moduleName = 'audio';
//创建audio上下文
export function createWeexAudio(param, cb =() => {}) {
  /**
   * @params:
   * moduleName:audio
   * methodPlay:create
   * param:url : audio地址
    looping：是否循环播放 "1"-是， ”0“-否
    volume：该player的音量，默认为1.0f
   */
  debugger;
  callNative(moduleName, 'create', param, function (res) {
    /**
     * errno
     * msg
     * data:{id:1} id为唯一player表示,由native生成尾数
     */
    cb(res);
  });
}
//播放audio
export function playWeexAudio(param, cb = () => {}) {
  /**
   * @moduleName:audio
   * @method:play
   * @param:{id:1}
   */
  callNative(moduleName, 'play', param, function (res) {
    /**
     * errno
     * msg
     */
    cb(res);
  });
}


//暂停audio
export function pauseWeexAudio(param, cb = () => {}) {
  /**
   * @moduleName:audio
   * @method:pause
   * @param:{id:1}
   */
  callNative(moduleName, 'pause', param, function (res) {
    /**
     * errno
     * msg
     */
    cb(res);
  });
}
//设置player进度
export function seekToWeexAudio(param, cb = () => {}) {
  /**
   * @moduleName:audio
   * @method:seekTo
    @param:{id:1,msec:10} //单位ms
   * 
   */
  callNative(moduleName, 'seekTo', param, function (res) {
    /**
     * errno
     * msg
     */
    cb(res);
  });
}
//获取player进度
export function getWeexAudioCurrentPos(param, cb = () => {}) {
  /**
   * @moduleName:audio
   * @method:currentPos
   * @param:{id:1}
   */
  callNative(moduleName, 'currentPos', param, function (res) {
    /**
     * errno
     * msg
     * data:{msec:10}
     */
    cb(res);
  });
}
//释放player
export function destroyAudio(param, cb = () => {}) {
  /**
   * @moduleName:audio
   * @method:destroy
   * @param:{id:1}
   */
  callNative(moduleName, 'destroy', param, function (res) {
    /**
     * errno
     * msg
     */
    cb(res);
  });
}
//player缓存变化通知
export function audioBufferChange(cb = () => {}) {
  /**
   * @moduleName:audio
   * @methodPlay:play
   * @param:{id:1}
   */
  listenNative(moduleName, 'onBufferingChange', function (res) {
    /**
     * id:1, //标识某个audio的进度变化了
     * percent:10,
     */
    cb(res);
  });
}

//player状态变化通知
export function audioStatusChange(cb = () => {}) {
  /**
   * @moduleName:audio
   * @methodPlay:play
   * @param:{id:1}
   */
  listenNative(moduleName, 'onStatusChange', function (res) {
    /**
     * id:1, //标识某个audio的进度变化了
     * status:1,// 准备:1 ,播放：2，暂停：3，结束：4
     */
    cb(res);
  });
}