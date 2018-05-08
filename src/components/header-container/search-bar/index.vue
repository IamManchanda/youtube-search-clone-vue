<template>
  <div class="c-SearchBar l-YoutubeGrid-SearchCell cell medium-10 large-11">
    <input 
      type="text"
      placeholder="Search for Youtube Videos"
      @input="onTextInput"
    />
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
