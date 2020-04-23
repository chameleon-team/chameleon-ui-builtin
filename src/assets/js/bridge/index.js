import * as chooseImage from './apis/chooseImage';
import * as clipboard from './apis/clipboard';
import * as close from './apis/close';
import * as location from './apis/location';
import * as open from './apis/open';
import * as reload from './apis/reload';
import * as request from './apis/request';
import * as rollbackWeb from './apis/rollbackWeb';
import * as socket from './apis/socket';
import * as storage from './apis/storage';
import * as systemInfo from './apis/systemInfo';
import * as canIUse from './apis/canIUse';
import * as getSDKInfo from './apis/getSDKInfo';
import * as title from './apis/title';
import * as query from './apis/getQueryObjSync/index.js';
import * as getLaunchUrl from './apis/getLaunchUrl';
import * as ui from './apis/ui';
import * as inSDK from './apis/inSDK';
import * as getComponentRect from './apis/getComponentRect/index.js';
import * as core from './core/index.js';
import * as audio from './apis/audio/index.js';
export default {
  ...chooseImage,
  ...clipboard,
  ...close,
  ...location,
  ...open,
  ...reload,
  ...request,
  ...rollbackWeb,
  ...socket,
  ...storage,
  ...systemInfo,
  ...canIUse,
  ...getSDKInfo,
  ...title,
  ...query,
  ...getLaunchUrl,
  ...getComponentRect,
  ...ui,
  ...inSDK,
  ...getComponentRect,
  ...core,
  ...audio
};
