let weexSupportMethods = [
  'modal.alert',
  'cancelAnimationFrame',
  'canIUse',
  'modal.confirm',
  'getSystemInfo',
  'fetch',
  'clipboard.getString',
  'getComponentRect',
  'storage.getItem',
  'getSystemInfo',
  'weex.config.bundleUrl',
  'navigateBack',
  'navigateTo',
  'navigator.push',
  'fetch',
  'getSystemInfo',
  'router.replace',
  'storage.removeItem',
  'fetch',
  'requestAnimationFrame',
  'clipboard.setString',
  'storage.setItem',
  'modal.toast'
];

export function weexCanIUse(method) {
  return weexSupportMethods.includes(method);
}
