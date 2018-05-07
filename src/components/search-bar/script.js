export default {
  name: 'ComponentSearchBar',
  methods: {
    onTextInput(event) {
      const searchTerm = event.target.value;
      this.$emit('searchTermChanged', searchTerm);
    },
  },
};
