<template>
  <div class="c-VideoDetail l-YoutubeGrid-VideoDetailCell">
    <template v-if="video">
      <div class="c-VideoDetail-Video">
        <iframe
          :src="videoUrl" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen />
      </div>
      <div class="c-VideoDetail-Content">
        <h4>{{ videoTitle }}</h4>
        <p>{{  videoDescription }}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ComponentVideoDetail',
  props: {
    video: Object,
  },
  computed: {
    videoTitle() {
      return this.video.snippet.title;
    },
    videoChannel() {
      return this.video.snippet.channelTitle;
    },
    videoDescription() {
      return this.video.snippet.description;
    },
    videoUrl() {
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
