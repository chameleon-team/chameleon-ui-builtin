import index from './index.interface';

export default function redirectTo(opt) {
  let query = opt.query || {};
  let path = opt.path || '';
  let url = opt.url || '';

  index.redirectTo({
    path,
    url,
    query
  });
}
