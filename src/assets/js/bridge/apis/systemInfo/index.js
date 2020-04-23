import { callNative } from '../../core/index.js'

const moduleName = 'cml'
const methodName = 'getSystemInfo'

export function getSystemInfo(param, cb) {
  callNative(moduleName, methodName, param, function (res) {
    /**
     * res.data
     * {
      "scale": 3,
      "deviceWidth": 1080,
      "deviceHeight": 2340,
      "os": "android",
      "extraParams": {
        "model": "PAFM00",
        "imei": "356416465466244",
        "netType": "WIFI",
        "statusbarHeight": 80, // 状态栏高度
        "navigationHeight": 0, // 虚拟键高度 iphoneX会有值 android中有虚拟键盘的机型会有值
        "viewHeight":  2260 // 实际视图高度
      }
    }
     */
    // 兼容原始数据结构
    res.data.extraParams.os = res.data.os;
    try {
      res.data.extraParams.deviceModel = WXEnvironment && WXEnvironment.deviceModel || '';
    } catch (e) {
    }

    const { deviceWidth, deviceHeight, scale } = res.data;
    const { viewHeight } = res.data.extraParams;
    res.data.viewportWidth = deviceWidth / scale;
    res.data.viewportHeight = (viewHeight || deviceHeight) / scale;
    cb(res);
  })
}

getSystemInfo.prototype.moduleName = moduleName;
getSystemInfo.prototype.methodName = methodName;
