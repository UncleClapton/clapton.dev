/* eslint-env node */





// Module imports
const path = require('path')


module.exports = {
  distDir: path.join('dist', 'next'),
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/oauthtest/index': { page: '/oauthtest' },
    }
  },
  webpack: (config, options) => {
    /* ESLint reporting */
    if (options.dev) {
      config.module.rules.unshift({
        test: /\.js$/u,
        exclude: /node_modules/u,
        enforce: 'pre',
        loader: require.resolve('eslint-loader'),
      })
    }

    return config
  },
}
