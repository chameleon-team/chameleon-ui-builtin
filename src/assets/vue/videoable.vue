<template>
  <html:video
    id="cmlVideo"
    ref="cmlVideo"
    :style="computedStyle"
    :controls="controls"
    :autoplay="autoplay"
    :loop="loop"
    :src="src"
    @play="onstart"
    @pause="onpause"
    @ended="onfinish"
    @error="onfail"
  />
</template>
<script>

import {cmlStyleTransfer} from '../js/utils/utils';

export default {
  props: {
    cstyle: {
      type: String,
      default: ''
    },
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedStyle() {
      // vue 的动态style只接收 Object 或者 数组
      return cmlStyleTransfer(this.cstyle)
    }
  },
  methods: {
    onstart (e) {
      this.$cmlEmit('start')
    },
    onpause (e) {
      this.$cmlEmit('pause')
    },
    onfinish (e) {
      this.$cmlEmit('finish')
    },
    onfail (e) {
      this.$cmlEmit('fail')
    }
  }
}
</script>
<style scoped>
</style>