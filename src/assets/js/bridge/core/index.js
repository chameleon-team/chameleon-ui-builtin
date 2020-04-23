import index from './index.interface';

// 初始化通道
index.initChannel();

export function callNative(module, method, args, callback = () => {}) {
  index.callNative(module, method, args, callback);
}

export function listenNative(module, method, callback = () => {}) {
  index.listenNative(module, method, callback);
}
