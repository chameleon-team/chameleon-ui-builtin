import bridge from './cmlBridge';

let isInSDK = bridge.inSDK();

/**
 * 判断是在ChameleonSDK中
 * @returns {boolean}
 */
export function inSDK() {
  return isInSDK;
}
