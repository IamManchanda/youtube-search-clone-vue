<template>
  <div class="page-Home">
    <AppSearchBar
      :textInput="textInput"
    />
  </div>
</template>

<script>
import AppSearchBar from '@/components/search-bar/AppSearchBar.vue';

export default {
  name: 'PageHome',
  components: {
    AppSearchBar,
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
