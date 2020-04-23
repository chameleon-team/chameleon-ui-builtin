import { callNative } from '../../core/index.js'

const moduleName = 'cml';
const methodName = 'chooseImage';

export function chooseImage(param, cb) {
  /**
   * type: camera/album/choice
   * cut: true/false
   * quality: 默认100 [0-100]
   * width: 0
   * height: 0
   */
  callNative(moduleName, methodName, param, res => {
    if (res.errno == 0) {
      let base64 = 'data:image/' + res.data.type + ';base64,' + res.data.image;
      res.data.base64 = base64;
    }else {
      res.data = {
        type: '',
        image: '',
        base64: ''
      }
    }
    
    /**
    * errno: 0成功，1失败，2取消，3没权限
    * msg
    * data: {
    *   type,
    *   image,
    *   base64
    * }
    */
    cb(res);
  });
}

chooseImage.prototype.moduleName = moduleName;
chooseImage.prototype.methodName = methodName;