<template>
  <div class="app-Hello hasBackground">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHello',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
