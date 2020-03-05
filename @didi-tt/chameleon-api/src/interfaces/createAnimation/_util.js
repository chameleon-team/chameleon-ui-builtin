import Index from './index.interface';

export const stylePipe = (styles, descriptions, quene, ...args) => {
  let current = styles;
  quene.forEach((fuc) => {
    current = fuc.apply(null, [current, descriptions, ...args]);
  });
  return current;
}

export const descriptionPipe = (descriptions, styles, quene, ...args) => {
  let current = descriptions;
  quene.forEach((fuc) => {
    current = fuc.apply(null, [current, styles, ...args]);
  });
  return current;
}

export const cpx2px = (v) => +(Index.getViewportWidth() / 750 * v).toFixed(3)

export default {};
