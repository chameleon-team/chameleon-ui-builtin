import { cpx2px } from '../_util';
import { isNum } from '../../../lib/utils';
import { isNumTypeStyles } from './common.js';

export const getRotateZ = (a, b, c, d, e, f) => {
  var aa = Math.round(180 * Math.asin(a) / Math.PI);
  var bb = Math.round(180 * Math.acos(b) / Math.PI);
  var cc = Math.round(180 * Math.asin(c) / Math.PI);
  var dd = Math.round(180 * Math.acos(d) / Math.PI);
  var deg = 0;
  if (aa == bb || -aa == bb) {
    deg = dd;
  } else if (-aa + bb == 180) {
    deg = 180 + cc;
  } else if (aa + bb == 180) {
    deg = 360 - cc || 360 - dd;
  }
  return deg >= 360 ? 0 : deg;
  // return (aa+','+bb+','+cc+','+dd);
}

// 获取元素的transform信息
const getTransform = (ele) => {
  var st = window.getComputedStyle(ele, null);
  
  var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";
  if (tr === 'none') {return}
  var values = tr.split('(')[1].split(')')[0].split(',');
  const [a, b, c, d, e, f] = values
  // var scale = Math.sqrt(a * a + b * b);
  // arc sin, convert from radians to degrees, round
  // var sin = b / scale;
  const rotateZ = getRotateZ(a, b, c, d, e, f)
  var style = ele.style.getPropertyValue('transform')
  if (style == '') {return}
  var styleArray = style.split(' ')
  let obj ={
    scaleX:'1',
    scaleY:'1',
    rotateZ:'0deg',
    translateX:'0px',
    translateY:'0px'
  }
  styleArray.map((item)=>{
    let key = item.split('(')[0]
    let value = item.split('(')[1].split(')')[0]
    obj[key] = value
  })

  return {
    translateX: Number(obj.translateX.split('px')[0].trim()),
    translateY: Number(obj.translateY.split('px')[0].trim()),
    scaleX: Number(obj.scaleX.trim()),
    scaleY: Number(obj.scaleX.trim()),
    rotateZ:Number(obj.rotateZ.split('deg')[0].trim())
  }
  // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
  // var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
}

export const transformLoader = (styles, descriptions) => {
  const returnStyles = {};
  Object.keys(styles).forEach((key) => {
    let value = styles[key];
    // 目前不支持转换，所以loader来做
    if (isNumTypeStyles.includes(key)) {
      if (isNum(value)) {
        value = cpx2px(value);
      } else {
        console.error('Parameter must be a number');
      }
    }

    // if (rotateStyles.includes(key) && typeof value === 'number') {
    //   value = `${value}deg`;
    // }
    if (key === 'rotate') {
      returnStyles.rotateZ = value;
    } else {
      returnStyles[key] = value;
    }
  });
  return returnStyles;
};

// 解决动画链接不上问题http://velocityjs.org/#forcefeeding
export const completionLoader = (styles, descriptions, elm) => {
  const returnStyles = styles;
  const transformInfo = getTransform(elm);
  if (transformInfo) {
    returnStyles.translateX = [styles.translateX || transformInfo.translateX, transformInfo.translateX]
    returnStyles.translateY = [styles.translateY || transformInfo.translateY, transformInfo.translateY]
    returnStyles.scaleX = [styles.scaleX || transformInfo.scaleX, transformInfo.scaleX]
    returnStyles.scaleY = [styles.scaleY || transformInfo.scaleY, transformInfo.scaleY]
    returnStyles.rotateZ = [styles.rotateZ || transformInfo.rotateZ, transformInfo.rotateZ]
  }

  return returnStyles
}

export const originLoader = (styles, descriptions) => {
  let returnStyles = styles;
  const transformOrigin = descriptions.transformOrigin;
  delete descriptions.transformOrigin;

  if (transformOrigin) {
    const originArr = transformOrigin.split(' ');
    returnStyles.transformOriginX = originArr[0];
    returnStyles.transformOriginY = originArr[0];
  }

  return returnStyles;
};
