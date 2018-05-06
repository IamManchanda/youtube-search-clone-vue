const fs = require('fs');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/scss/abstracts/_settings.scss', 'utf-8'),
      },
    },
  },
};
