import index from './index.interface';
import { getRefObj, getDom } from '../../lib/utils';

export default function scrollTo(opt, context) {
  // let scroller = getDom(opt.scroller, context)
  let duration = typeof opt.duration == 'number' ? opt.duration : 300
  index.scrollTo({
    scrollTop: opt.scrollTop, // 滚动目标
    duration, // (alipay不支持, 其他均支持)
    // scroller, // 用于web, 是滚动的外层容器(选填)
    ...getRefObj(opt.ref, context)
  })
}
