export const alipayLoader = (descriptions) => {
  if(descriptions.timingFunction){
    descriptions.timeFunction = descriptions.timingFunction;
    delete descriptions.timingFunction;
  }
  Object.keys(descriptions).forEach(key=>{
    if(descriptions[key] === undefined || descriptions[key] === null){
      delete descriptions[key];
    }
  })
  debugger;
  return descriptions;
};