export default {
  name: 'ComponentSearchBar',
  methods: {
    onTextInput(event) {
      this.$emit('searchTerm', event.target.value);
    },
  },
};
