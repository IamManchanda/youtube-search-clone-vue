<template>
  <div class="p-Home l-YoutubeGrid">
    <ComponentSearchBar
      @searchTermChanged="onSearchTermChanged"
    />
    <ComponentVideoList />
    {{ videos.length }}
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./_scoped.scss"></style>
