<template>
  <div class="page-Home hasBackground">
    <AppHello 
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
import AppHello from '@/components/hello/AppHello.vue';

export default {
  name: 'PageHome',
  components: {
    AppHello,
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
