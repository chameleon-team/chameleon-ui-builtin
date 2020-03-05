import { isNum } from '../../../lib/utils';
import { rotateStyles, isNumTypeStyles, transformStyles } from './common.js';

export const transformLoader = (styles) => {
  const returnStyles = {};
  const transformMap = {};

  let transformStr = '';
  let haveMixinStyle = false;
  let mixinStyleMap = {
    translateX: '0px',
    translateY: '0px'
  };

  Object.keys(styles).forEach((key) => {
    let value = styles[key];

    if (isNumTypeStyles.includes(key)) {
      if (!isNum(value)) {
        console.error('Parameter must be a number');
      } else {
        value = `${value}px`;
      }
    }

    if (rotateStyles.includes(key) && isNum(value)) {
      value = `${value}deg`;
    }


    // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致
    // id是为每一个元素都保存一套状态
    if (transformStyles.includes(key)) {
      transformMap[key] = value;
    } else {
      returnStyles[key] = value;
    }
  });
  if (JSON.stringify(transformMap) !== '{}') {
    Object.keys(transformMap).forEach((key) => {
      const value = transformMap[key];
      if (mixinStyleMap[key]) {

        haveMixinStyle = true;
        mixinStyleMap[key] = value;
      } else {
        if (key === 'transform') {
          transformStr += `${value} `;
        } else {
          transformStr += `${key}(${value}) `;
        }
      }
    });

    // bug  weexsdk不支持 transform: 'translateX() translateY()'
    if (haveMixinStyle) {
      transformStr += `translate(${mixinStyleMap.translateX}, ${mixinStyleMap.translateY})`
    }

    returnStyles.transform = transformStr;
  }

  return returnStyles;
};

// 将descriptions上的transformOrigin转移到styles上
export const originLoader = (styles, descriptions) => {
  let returnStyles = styles;

  returnStyles.transformOrigin = descriptions.transformOrigin;
  delete descriptions.transformOrigin;

  return returnStyles;
};
