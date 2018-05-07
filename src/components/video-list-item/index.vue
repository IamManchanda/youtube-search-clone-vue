<template>
  <li class="c-VideoList-Item">
    {{ video.snippet.title }}
  </li>
</template>

<script>
export default {
  name: 'ComponentVideoListItem',
  props: {
    video: Object,
  },
}
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
