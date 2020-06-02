
<template>
  <div :class="`refresh-view${full ?  '-full' : ''}`" :style="refreshViewStyle" ref="refresh">
    <div :class="`refresh-content${full ?  '-full' : ''}`">
      <slot></slot>
    </div>
    <div :class="`pull-down${full ?  '-full' : ''}`" :style="pullDownStyle" v-show="pullingDown">
      <slot name="pullDown">
        <loading></loading>
      </slot>
    </div>
  </div>
</template>
<script>
import CScroll from 'chameleon-scroll';
import cml from 'chameleon-api';
import loading from '../../components/refresh-loading/refresh-loading';
let options = {
  scrollY: true
}
export default {
  props: {
    enablePullDown: {
      type: Boolean,
      default: true
    },
    enablePullUpLoad: {
      type: Boolean,
      default: false
    },
    pullUpLoadComplete: {
      type: Boolean,
      default: false
    },
    pullingUp: {
      type: Boolean,
      default: false
    },
    pullUpStop: {
      type: Number,
      default: 80
    },
    pullUpStart: {
      type: Number,
      default: 50
    },
    pullDownStart: {
      type: Number,
      default: 50
    },
    pullDownStop: {
      type: Number,
      default: 80
    },
    pullingDown: {
      type: Boolean,
      default: false
    },
    full:{
      type:Boolean,
      default: true
    },
    height:{
        type:Number,
          default:-1
      }
  },
  data() {
    return {
      scroll: null
    }
  },
  computed: {
    pullUpLoadStyle() {
      return `height: ${this.pullUpStop}px`;
    },
    pullDownStyle() {
      return `height: ${this.pullDownStop}px`;
    },
      refreshViewStyle(){
        return !this.full ? `height:${this.height}px;` : '';
      }
  },
  components: { loading },
  methods: {
    initOptions() {
      if (this.enablePullDown) {
        options.pullDownRefresh = {
          threshold: this.pullDownStart,
          stop: this.pullDownStop
        }
      } else {
        options.pullDownRefresh = false;
      }
      if (this.enablePullUpLoad) {
        options.pullUpLoad = {
          threshold: this.pullUpStart
        }
      }
    },
    initScroll() {
      if (!this.$refs.refresh) return;

      this.initOptions();
      this.scroll = new CScroll(this.$refs.refresh, options);
      this.initEvent();
    },
    initEvent() {
      if (!this.scroll) return;

      let events = ['pullingDown', 'pullingUp'];
      events.forEach(event => {
        this.scroll.on(event, this[event + 'Handle']);
      })

      this.scroll.on('beforeScrollStart', () => {
        this.scroll.refresh()
      })
    },
    pullingDownHandle() {
      if (this.pullingDown) return;
      this.$emit('pullingDown', {
        stopPullDownRefresh: () => {
          this.scroll.finishPullDown();
        }
      })
    },
    pullingUpHandle() {
      if (this.pullUpLoadComplete || this.pullingUp) return;
      this.$emit('pullingUp', {
        stopPullUpLoad: () => {
          this.scroll.finishPullUp();
        }
      })
    }
  },
  watch: {
    pullingDown(v) {
      if (!v) {
        this.scroll.finishPullDown();
        // 保证渲染完成
        this.$nextTick(() => {
          this.scroll.refresh();
        })
      }
    },
    pullingUp(v) {
      if (!v) {
        this.scroll.finishPullUp();
        this.$nextTick(() => {
          this.scroll.refresh();
        })
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 20)
  }
}
</script>

<style scoped>
.refresh-view {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.refresh-view-full {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.pull-down {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.pull-down-full {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
}
.pull-upload-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.refresh-content-full {
  min-height: 100%;
  padding-bottom: 1px;
  display: flex;
  flex-direction: column;
}

.refresh-content {
  min-height: 100%;
  padding-bottom: 1px;
}

</style>
