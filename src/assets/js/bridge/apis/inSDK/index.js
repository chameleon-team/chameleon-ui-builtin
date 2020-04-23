export function inSDK() {
  const query = this.getQueryObjSync();
  const inSDK = !!query.cml_sdk;
  return inSDK;
}