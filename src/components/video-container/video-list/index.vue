<template>
  <ul 
    class="c-VideoList l-YoutubeGrid-VideoListCell cell medium-5 large-3"
    v-if="videos && videos.length > 0">
    <component-video-list-item 
      v-for="currentVideo in videos"
      :key="currentVideo.etag"
      :video="currentVideo"
      @videoSelected="videoSelected"
    />
  </ul>
</template>

<script>
import ComponentVideoListItem from '@/components/video-container/video-list/video-list-item/index.vue';

export default {
  name: 'ComponentVideoList',
  props: {
    videos: Array,
  },
  components: {
    ComponentVideoListItem,
  },
  methods: {
     videoSelected(video) {
      this.$emit('videoSelected', video);
    },
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
