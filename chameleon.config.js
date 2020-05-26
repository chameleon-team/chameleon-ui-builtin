
//设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/chameleon-ui-builtin/dist';
//设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const path = require('path');

cml.config.merge({
  cmlNpm: [
  ],
  devPort: 5556,
  isBuildInProject: true,
  templateType: 'html',
  cmlComponents: [
  ],
  platforms: ["web","weex","baidu","wx","alipay","tt"],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: '',
    webPath: 'https://api.chameleon.com/h5/commentinfo'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      hash: false
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  },
  optimize: {
    watchNodeModules: true // 默认不对 node_modules中的文件进行 watch,提升编译性能
  }
})

