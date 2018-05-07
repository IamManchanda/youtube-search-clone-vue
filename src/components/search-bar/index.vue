<template>
  <div class="c-SearchBar l-YoutubeGrid-SearchCell">
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
      const searchTerm = event.target.value;
      this.$emit('searchTermChanged', searchTerm);
    },
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
