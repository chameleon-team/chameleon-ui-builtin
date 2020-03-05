import instance from '../px2cpx/getWidth.interface';

export default function cpx2px(cpx) {
  if (typeof cpx !== 'number') {
    console.error('Parameter must be a number');
    return;
  }
  const viewportWidth = instance.getWidth();
  const px = +(viewportWidth / 750 * cpx).toFixed(3);
  return px;
}
