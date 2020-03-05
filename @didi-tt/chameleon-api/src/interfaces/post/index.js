import request from '../request/index.js';

export default function post(options) {
  options.method = "POST";
  return request(options)
}
