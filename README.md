# chameleon-ui-builtin
本仓库为 `cml` 框架的内置组件库，提供跨端基础内置组件

详细见[cml内置组件文档](https://cmljs.org/doc/component/base/base.html)

## 简介
`cml` 提供了大量内置组件，包括但不限于以下类型：
- 基础内容
- 布局容器
- 表单组件
- 媒体组件

同时，`cml`提供给开发者[扩展多态组件](https://cmljs.org/doc/framework/polymorphism/component.html)的能力

例如:
```html
<template>
  <view class="flex-item"></view>
  <button type="blue" text="确定"/>
</template>
```

### 如何开发
```javascript
npm install
cml dev  //开始开发
```

### 多端预览效果
 
| web   |      微信小程序      |  native-weex |
|:----------:|:-------------:|:------:|
| <img src="./preview/web.jpg" width="200px"/> |  <img src="./preview/wx.png" width="200px"/>| <img src="./preview/weex.jpg" width="200px"/> |


