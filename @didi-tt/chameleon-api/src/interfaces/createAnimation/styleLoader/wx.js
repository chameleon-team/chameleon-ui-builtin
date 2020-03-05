import { cpx2px } from '../_util';
import { isStr, isNum } from '../../../lib/utils';
import { isNumTypeStyles, rotateStyles } from './common.js';

export const transformLoader = (styles, description) => {
  const returnStyles = {};

  Object.keys(styles).forEach((key) => {
    let value = styles[key];

    // 目前不支持自动转换，所以loader来做
    if (isNumTypeStyles.includes(key)) {
      if (isNum(value)) {
        // 转换单位
        value = cpx2px(value);

      } else {
        console.error('Parameter must be a number');
      }
    }

    // // 目前不支持转换，所以loader来做
    // if (isStr(value) && value.includes('px')) {
    //   value = value.replace('px', 'rpx');
    // }

    // 100deg -> 100
    if (rotateStyles.includes(key) && isStr(value)) {

      if (value.includes('deg')) {
        value = value.split('deg')[0];
      } else {
        console.error('Parameter format error');
      }
    }

    // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致
    returnStyles[key] = value;
  });

  return returnStyles;
};


