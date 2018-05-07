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

<script src="./script.js"></script>
<style lang="scss" scoped src="./_scoped.scss"></style>
