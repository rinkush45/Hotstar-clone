const path = require('path');

module.exports = {
  // ... other webpack configuration
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
};
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin(['API_KEY', 'OTHER_ENV_VAR']),
  ],
};
