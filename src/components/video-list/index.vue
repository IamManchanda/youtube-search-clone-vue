<template>
  <ul class="c-VideoList l-YoutubeGrid-VideoListCell">
    <ComponentVideoListItem 
      v-for="(video, index) in videos"
      :key="index"
      :video="video"
    />
  </ul>
</template>

<script>
import ComponentVideoListItem from '@/components/video-list-item/index.vue';

export default {
  name: 'ComponentVideoList',
  props: {
    videos: Array,
  },
  components: {
    ComponentVideoListItem,
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
