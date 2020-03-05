import index from './index.interface';
import { isEmpty, isNeedApiPrefix, tryJsonParse, buildQueryStringUrl } from '../../lib/utils.js';
export default function request({
  domain, 
  url,
  data = {},
  method = 'GET', 
  header = {},
  contentType = 'form',
  setting = {},
  resDataType = 'json'
}) {
  method = method.toUpperCase()
  let { apiPrefix = isNeedApiPrefix(url), jsonp = false, credentials = 'include' } = setting;
  let media = process.env.media;
  // 如果用户配置了domain
  if(domain) {
    if (media === 'dev') {
      // dev模式对domain做分割处理
      if(~domain.indexOf('__DEV_SPLIT__')) {
        let splitArray = domain.split('__DEV_SPLIT__');
        domain = splitArray[0];
        let domainKey = splitArray[1];
        url = buildQueryStringUrl({ domainKey }, url)
      }
    }
    url = domain + url;
  } else {
    // 如果没有配置domain
    if (apiPrefix) {
      // 有apiPrefix优先
      if (process.env.cmlApiPrefix) {
        url = process.env.cmlApiPrefix + url;
      }
    }
  }

  if (['GET', 'PUT', 'DELETE'].indexOf(method) > -1) {
    url = buildQueryStringUrl(data, url)
    if (method == 'GET') {
      data = ''
    }
  }
  switch (contentType) {
    case 'form':
      if (typeof data !== 'string') {
        data = buildQueryStringUrl(data);
      }
      header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...header
      };
      break;
    case 'json':
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      header = {
        'Content-Type': 'application/json',
        ...header
      };
      break;
  }
  if (typeof data !== 'string') {
    data = ''
  }

  return new Promise(function(resolve, reject) {
    index.request({
      url,
      body: data,
      setting: {
        apiPrefix,
        jsonp, 
        credentials
      },
      contentType,
      method,
      headers: header,
      cb: function(res) {
        let { status, headers, data } = res;
        if (status >= 200 && status < 300) {
          if (resDataType === 'json' && typeof data == 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ', e)
            }
          }
          resolve(data);
        } else {
          if (resDataType === 'json') {
            data = tryJsonParse(data);
          }
          headers = tryJsonParse(headers);
          reject({ data, headers, status });
        }
      }
    });
  });
}
