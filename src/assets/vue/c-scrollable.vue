<template>
  <div class="scroller-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: -1
    }
  }
}
</script>

<style>

</style>
