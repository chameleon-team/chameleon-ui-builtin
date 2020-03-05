import index from './index.interface';
import { getRefObj } from '../../lib/utils';

export default function getRect(ref, context) {
  return new Promise((resolve, reject) => {
    let refObj = getRefObj(ref, context);
    index.getRect(refObj, res => {
      resolve(res);
    });
  });
}
