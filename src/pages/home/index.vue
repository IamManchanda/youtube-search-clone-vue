<template>
  <div class="p-Home l-YoutubeGrid">
    <component-site-logo />
    <component-search-bar
      @searchTermChanged="onSearchTermChanged"
    />
    <component-video-detail
      :video="selectedVideo"
    />
    <component-video-list
      :videos="videos"
      @videoSelected="onVideoSelected"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ComponentSearchBar from '@/components/header-container/search-bar/index.vue';
import ComponentSiteLogo from '@/components/header-container/site-logo/index.vue'
import ComponentVideoDetail from '@/components/video-container/video-detail/index.vue';
import ComponentVideoList from '@/components/video-container/video-list/index.vue';

const API_KEY = ''; // Add your API Key here!

export default {
  name: 'PageHome',
  components: {
    ComponentSearchBar,
    ComponentSiteLogo,
    ComponentVideoDetail,
    ComponentVideoList,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    onSearchTermChanged(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        })
        .then((response) => {
          this.videos = response.data.items;
        });
    },
    onVideoSelected(video) {
      this.selectedVideo = video;
    },
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->
