export const commonLoader = (descriptions) => descriptions;

const transformOriginMap = {};
export const cacheTransformOriginLoader = (descriptions, styles, id) => {
  let returnDescriptions = descriptions;

  const transformOrigin = descriptions.transformOrigin;
  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {}
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin
  return returnDescriptions;
}
