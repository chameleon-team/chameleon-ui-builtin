export const rotateStyles = ['rotate', 'rotateX', 'retateY'];

export const isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];

export const transformStyles = [
  'translate',
  'translateX',
  'translateY',
  'scale',
  'scaleX',
  'scaleY',
  'rotate',
  'rotateX',
  'rotateY'
];

export const compositeStyles = ['translate', 'scale'];

export const commonLoader = (styles) => {
  const returnStyles = {};

  Object.keys(styles).forEach((key) => {
    const value = styles[key];
    //
    if (value.length === 1 && key !== 'scale') {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        // scale的值只传递一个的情况
        if (key === 'scale' && value.length === 1) {
          returnStyles[`${key}X`] = value[0];
          returnStyles[`${key}Y`] = value[0];
        } else {
          returnStyles[`${key}X`] = value[0];
          returnStyles[`${key}Y`] = value[1];
        }

        // returnStyles[`${key}Z`] = value[2];
      } else {
        // redLog(`${key}属性不支持传多个参数`);
      }
    }
  });
  return returnStyles;
};

// 缓存transform属性
const transformStylesMap = {};
export const cacheTransformStylesLoader = (styles, descriptions, id) => {
  const returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  Object.keys(styles).forEach((key) => {
    let value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }
    returnStyles[key] = value;

  })

  if (JSON.stringify(transformStylesMap[id]) !== '{}') {
    Object.keys(transformStylesMap[id]).forEach((key) => {
      const value = transformStylesMap[id][key];

      returnStyles[key] = value;
    })
  }

  return returnStyles;

}
