<template>
  <li 
    class="c-VideoList-Item" 
    @click="videoItemClicked">
    <div class="o-MediaObject">
      <div class="o-MediaObject-Section">
        <img :src="videoThumbnail" class="thumbnail o-Thumbnail">
      </div>
      <div class="o-MediaObject-Section">
        <h6>{{ videoTitle }}</h6>
        <h6><strong>Channel:</strong> {{ videoChannel }}</h6>
      </div>
    </div>
    <div class="o-MediaContent">
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
