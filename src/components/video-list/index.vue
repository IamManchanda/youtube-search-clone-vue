<template>
  <div class="c-VideoList l-YoutubeGrid-VideoListCell">
    <ul
      v-for="(video, index) in videos"
      :key="index">
      <li>{{ video.id.videoId }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentVideoList',
  props: [
    'videos',
  ],
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
