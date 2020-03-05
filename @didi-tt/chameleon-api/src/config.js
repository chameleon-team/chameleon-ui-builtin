const api = {
  alert: {
    baseOn: {
      sdk: 'alert',
      web: 'alert',
      wx: 'showModal',
      qq: 'showModal',
      baidu: 'showModal',
      alipay: 'alert',
      weex: 'modal.alert'
    }
  },
  cancelAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'cancelAnimationFrame',
      web: 'cancelAnimationFrame',
      wx: 'cancelAnimationFrame',
      qq: 'cancelAnimationFrame',
      baidu: 'cancelAnimationFrame',
      weex: 'cancelAnimationFrame',
      alipay: 'cancelAnimationFrame'
    }
  },
  canIUse: {
    allCanUse: true,
    baseOn: {
      sdk: 'canIUse',
      web: 'canIUse',
      wx: 'canIUse',
      qq: 'canIUse',
      baidu: 'canIUse',
      weex: 'canIUse',
      alipay: 'canIUse'
    }
  },
  inSDK: {
    allCanUse: true,
    baseOn: {
      sdk: 'inSDK',
      web: 'inSDK',
      wx: '',
      qq: '',
      baidu: '',
      weex: ''
    }
  },
  chooseImage: {
    baseOn: {
      sdk: 'chooseImage',
      web: 'chooseImage',
      wx: 'chooseImage',
      qq: 'chooseImage',
      baidu: 'chooseImage',
      weex: '',
      alipay: 'chooseImage'
    }
  },
  close: {
    baseOn: {
      sdk: 'close',
      web: 'close',
      wx: 'navigateBack',
      qq: 'navigateBack',
      baidu: 'navigateBack',
      weex: '',
      alipay: 'navigateBack'
    }
  },
  confirm: {
    baseOn: {
      sdk: 'confirm',
      web: 'confirm',
      wx: 'showModal',
      qq: 'showModal',
      baidu: 'showModal',
      weex: 'modal.confirm',
      alipay: 'confirm'
    }
  },
  cpx2px: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      qq: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfoSync'
    }
  },
  get: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  getClipBoardData: {
    baseOn: {
      sdk: 'getClipBoardData',
      web: 'getClipboardData',
      wx: 'getClipboardData',
      qq: 'getClipboardData',
      baidu: 'getClipboardData',
      weex: 'clipboard.getString',
      alipay: 'getClipboard'
    }
  },
  getLocationInfo: {
    baseOn: {
      sdk: 'getLocationInfo',
      web: 'getCurrentPosition',
      wx: 'getLocation',
      qq: 'getLocation',
      baidu: 'getLocation',
      weex: '',
      alipay: 'getLocation'
    }
  },
  getRect: {
    baseOn: {
      sdk: 'getComponentRect',
      web: 'getComputedStyle',
      wx: 'createSelectorQuery',
      qq: 'createSelectorQuery',
      baidu: 'createSelectorQuery',
      weex: 'getComponentRect',
      alipay: ''
    }
  },
  getStorage: {
    baseOn: {
      sdk: 'getStorage',
      web: 'localStorage.getItem',
      wx: 'getStorageSync',
      qq: 'getStorageSync',
      baidu: 'getStorageSync',
      weex: 'storage.getItem',
      alipay: 'getStorageSync'
    }
  },
  getSystemInfo: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfo',
      qq: 'getSystemInfo',
      baidu: 'getSystemInfo',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfo'
    }
  },
  initSocket: {
    baseOn: {
      sdk: 'initSocket',
      web: 'initSocket',
      wx: 'connectSocket',
      qq: 'connectSocket',
      baidu: 'connectSocket',
      weex: '',
      alipay: 'connectSocket'
    }
  },
  getLaunchOptionsSync: {
    baseOn: {
      sdk: 'getQueryObjSync',
      web: 'location.href',
      wx: 'getLaunchOptionsSync',
      qq: 'getLaunchOptionsSync',
      baidu: '',
      weex: 'weex.config.bundleUrl',
      alipay: ''
    }
  },
  navigateBack: {
    baseOn: {
      sdk: 'navigateBack',
      web: 'navigateBack',
      wx: 'navigateBack',
      qq: 'navigateBack',
      baidu: 'navigateBack',
      weex: 'navigateBack',
      alipay: 'navigateBack'
    }
  },
  navigateTo: {
    baseOn: {
      sdk: 'navigateTo',
      web: 'navigateTo',
      wx: 'navigateTo',
      qq: 'navigateTo',
      baidu: 'navigateTo',
      weex: 'navigateTo',
      alipay: 'navigateTo'
    }
  },
  open: {
    baseOn: {
      sdk: 'open',
      web: 'location.href',
      wx: 'navigateToMiniProgram',
      qq: 'navigateToMiniProgram',
      baidu: 'navigateToSmartProgram',
      weex: 'navigator.push',
      alipay: 'navigateToMiniProgram'
    }
  },
  post: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  px2cpx: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      qq: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: ''
    }
  },
  redirectTo: {
    baseOn: {
      sdk: 'redirectTo',
      web: 'router.replace',
      wx: 'redirectTo',
      qq: 'redirectTo',
      baidu: 'redirectTo',
      weex: 'router.replace',
      alipay: 'redirectTo'
    }
  },
  reload: {
    baseOn: {
      sdk: 'reload',
      web: 'location.reload',
      wx: '',
      qq: '',
      baidu: '',
      weex: '',
      alipay: ''
    }
  },
  removeStorage: {
    baseOn: {
      sdk: 'removeStorage',
      web: 'localStorage.removeItem',
      wx: 'removeStorageSync',
      qq: 'removeStorageSync',
      baidu: 'removeStorageSync',
      weex: 'storage.removeItem',
      alipay: 'removeStorageSync'
    }
  },
  request: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  requestAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'setTimeout',
      web: 'requestAnimationFrame',
      wx: 'setTimeout',
      qq: 'setTimeout',
      baidu: 'setTimeout',
      weex: 'requestAnimationFrame',
      alipay: 'requestAnimationFrame'
    }
  },
  setClipBoardData: {
    baseOn: {
      sdk: 'setClipBoardData',
      web: 'setClipBoardData',
      wx: 'setClipBoardData',
      qq: 'setClipBoardData',
      baidu: 'setClipBoardData',
      weex: 'clipboard.setString',
      alipay: 'setClipboard'
    }
  },
  setStorage: {
    baseOn: {
      sdk: 'setStorage',
      web: 'localStorage.setItem',
      wx: 'setStorageSync',
      qq: 'setStorageSync',
      baidu: 'setStorageSync',
      weex: 'storage.setItem',
      alipay: 'setStorageSync'
    }
  },
  setTitle: {
    baseOn: {
      sdk: 'setTitle',
      web: 'document.title',
      wx: 'setNavigationBarTitle',
      qq: 'setNavigationBarTitle',
      baidu: 'setNavigationBarTitle',
      weex: '',
      alipay: 'setNavigationBar'
    }
  },
  showToast: {
    baseOn: {
      sdk: 'showToast',
      web: 'showToast',
      wx: 'showToast',
      qq: 'showToast',
      baidu: 'showToast',
      weex: 'modal.toast',
      alipay: 'showToast'
    }
  }
};

export {
  api
};
