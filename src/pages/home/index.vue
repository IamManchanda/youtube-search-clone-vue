<template>
  <div class="p-Home l-YoutubeGrid grid-x grid-margin-x">
    <component-site-logo />
    <component-search-bar
      @searchTermChanged="onSearchTermChanged"
    />
    <div class="cell medium-7 large-9">
      {{ selectedVideo }}
    </div>
    <component-video-list
      :videos="videos"
      @videoSelected="onVideoSelected"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ComponentSiteLogo from '@/components/header-container/site-logo/index.vue'
import ComponentSearchBar from '@/components/header-container/search-bar/index.vue';
import ComponentVideoList from '@/components/video-container/video-list/index.vue';

const API_KEY = 'AIzaSyD9omTtDRMzJBjQYCviCaTmd3zlKNWwI3Q'; // Add your API Key here!

export default {
  name: 'PageHome',
  components: {
    ComponentSearchBar,
    ComponentVideoList,
    ComponentSiteLogo,
  },
  data() {
    return {
      videos: [],
      selectedVideo: {},
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
