import instance from './getWidth.interface';

export default function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  const viewportWidth = instance.getWidth();
  const cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}
