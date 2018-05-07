<template>
  <div class="p-Home">
    <ComponentSearchBar
      @searchTerm="onSearchTermChanged"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ComponentSearchBar from '@/components/search-bar/index.vue';

const API_KEY = ''; // Add your API Key here!

export default {
  name: 'PageHome',
  components: {
    ComponentSearchBar,
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
