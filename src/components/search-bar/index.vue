<template>
  <div class="c-SearchBar">
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
  name: 'ComponentSearchBar',
  methods: {
    onTextInput(event) {
      this.$emit('searchTerm', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
