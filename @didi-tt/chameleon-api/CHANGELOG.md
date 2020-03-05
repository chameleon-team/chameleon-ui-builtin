### 0.5.4
更新chameleon-bridge依赖 支持tt/quickapp

### 0.5.3
缓存systemInfo insdk, 不再每次调用都重新获取

### 0.5.2
优化getRect方法

### 0.5.1
解决 px <==> cpx 方法调用时重复获取屏幕宽度的操作

### 0.5.0
增加audio能力, 兼容了qq依赖编译时报错的问题

### 0.4.8
增加request调用时的兼容处理

### 0.4.7
增加支付宝小程序端request方法对httpRequest的兼容处理

### 0.4.6
修改了request方法在method为'GET', 'PUT', 'DELETE'时, 对data的处理.

### 0.4.5
修复了支付宝小程序getStorage的参数取值问题

### 0.4.4
取消了request请求失败时错误抛出的处理. 使接口返回格式一致

### 0.3.3
修复单测问题,修复动画warning

### 0.3.2
修改weex单位转换逻辑px <=> cpx

### 0.3.1
修复apiPrefix默认值问题

### 0.2.7
locationInfo 更改errno类型使其符合interface的规范

### 0.2.6
navigate方法改为依赖运行时模块

### 0.2.5
request增加credentials参数

### 0.2.0
支持百度和支付宝小程序api调用

### 0.1.1
修复getRect问题
