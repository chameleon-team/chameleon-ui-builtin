import { callNative } from '../../core/index.js';

const moduleName = 'stream';
const methodName = 'fetch';

export function request(params) {
  let {
    url, headers, body, method, cb
  } = params;

  let args = {
    url,
    method,
    headers,
    type: 'text'
  }

  // get不传body，for ios sdk
  if (method.toLocaleLowerCase() != 'get') {
    args.body = body;
  }

  callNative(moduleName, methodName, args, (res) => {
    /**
     * errno
     * data:
     *  status
     *  statusText
     *  data
     *  headers
     */
    const { errno, data = '' } = res;
    if (errno == 0) {
      cb(data);
    }
  });
}

request.prototype.moduleName = moduleName;
request.prototype.methodName = methodName;

