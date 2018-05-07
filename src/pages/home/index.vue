<template>
  <div class="p-Home l-YoutubeGrid">
    <ComponentSearchBar
      @searchTerm="onSearchTermChanged"
    />
    <ComponentVideoList />
  </div>
</template>

<script>
import axios from 'axios';
import ComponentSearchBar from '@/components/search-bar/index.vue';
import ComponentVideoList from '@/components/video-list/index.vue';

const API_KEY = 'AIzaSyD9omTtDRMzJBjQYCviCaTmd3zlKNWwI3Q'; // Add your API Key here!

export default {
  name: 'PageHome',
  components: {
    ComponentSearchBar,
    ComponentVideoList,
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
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped src="./_scoped.scss"></style>
