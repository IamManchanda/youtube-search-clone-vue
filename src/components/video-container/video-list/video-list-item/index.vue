<template>
  <li 
    class="c-VideoList-Item" 
    @click="videoItemClicked">
    <div class="media-object o-MediaObject">
      <div class="media-object-section o-MediaObject-Section">
        <img :src="videoThumbnail" class="thumbnail o-MediaObject-Thumbnail">
      </div>
      <div class="media-object-section o-MediaObject-Section">
        <h6>{{ videoTitle }}</h6>
      </div>
    </div>
    <div class="o-MediaContent hide-for-small-only">
      <h6><strong>Channel:</strong> {{ videoChannel }}</h6>
      <p>{{ videoDescription }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ComponentVideoListItem',
  props: {
    video: Object,
  },
  computed: {
    videoTitle() {
      let title = this.video.snippet.title;
      if(title.length > 71) title = `${title.substring(0, 70)}...`;
      return title;
    },
    videoThumbnail() {
      return this.video.snippet.thumbnails.default.url;
    },
    videoChannel() {
      return this.video.snippet.channelTitle;
    },
    videoDescription() {
      let description = this.video.snippet.description;
      if(description.length > 71) description = `${description.substring(0, 70)}...`;
      return description;
    },
  },
  methods: {
    videoItemClicked() {
       this.$emit('videoSelected', this.video);
    },
  },
}
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
