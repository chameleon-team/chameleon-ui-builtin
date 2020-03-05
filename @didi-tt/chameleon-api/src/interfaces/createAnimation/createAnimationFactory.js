import Index from './index.interface';

const {
  exportMiddleWare,
  checkNumber,
  checkString
} = Index;

let id = 0;

// 可用options
const STYLES = [
  {key: 'width', type: 'number'},
  {key: 'height', type: 'number'},
  {key: 'opacity', type: 'number'},
  {key: 'backgroundColor', type: 'string'}, // 16进制数值
  {key: 'translate', type: 'number'}, // web不支持
  {key: 'translateX', type: 'number'},
  {key: 'translateY', type: 'number'},
  {key: 'scale', type: 'number'}, // web不支持
  {key: 'scaleX', type: 'number'},
  {key: 'scaleY', type: 'number'},
  // {key:'skew', type: 'string'}, //weex不支持
  // {key:'skewX', type: 'string'},
  // {key:'skewY', type: 'string'},
  // 暂时不支持校验，因为cml底层不支持校验多种类型
  {key: 'rotate', type: ''}, // web不支持,
  {key: 'rotateX', type: ''},
  {key: 'rotateY', type: ''},
  {key: 'transform', type: 'string'}
];
// 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

const utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function (target, styles) {
    const transformProps = Array.isArray(styles) ? styles : Object.keys(styles);
    transformProps.forEach((item) => {
      target[item.key] = function (...style) {
        // 校验类型
        if (item.type === 'number') {
          checkNumber(style[0])
        } else if (item.type === 'string') {
          checkString(style[0])
        }
        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};


const createAnimationFactory = function (description = {}) {
  let updateQueue = [];
  // let stashQueue = [];

  this.id = id;
  id = id + 1;

  this.descriptions = description;

  this.styles = {};

  // 判断用户是否使用export
  this.useExport = '0';

  this.enqueue = function(param) {
    updateQueue.push(param);
  };

  this["export"] = function() {
    this.useExport = '1';

    const result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [...updateQueue]
    });
    // 清空
    updateQueue = [];
    this.useExport = '0';
    return result;

  };

  // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };

  // this.stashExport = function() {
  //   this.useExport = '1';

  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };

};

createAnimationFactory.prototype = {
  clear: function () {
    this.styles = {};
    this.descriptions = {};
    return this;
  },

  styles: function (styles) {
    this.styles = Object.assign({}, this.styles, styles);
    return this;
  },

  step: function (descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: Object.assign({cb: () => false, duration: 400}, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};

utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);

export default createAnimationFactory;
