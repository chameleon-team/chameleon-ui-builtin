import MiniVmAdapter from '../../common/proto/MiniVmAdapter'
import wxMixins from '@didi/chameleon-mixins/wx-mixins.js'

class VmAdapter extends MiniVmAdapter {
  constructor(props) {
    super(props)

    this.platform = 'baidu'
    this.baseMixins = wxMixins.mixins
    this.init()
  }
}
  
  export default VmAdapter