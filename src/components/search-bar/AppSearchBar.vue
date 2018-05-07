<template>
  <div class="app-SearchBar">
    <label class="isLargeLabel">Youtube Search
      <input 
        type="text"
        placeholder="Search for Youtube Videos"
        @input="onTextInput"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppSearchBar',
  methods: {
    onTextInput(event) {
      this.$emit('searchTermChanged', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
