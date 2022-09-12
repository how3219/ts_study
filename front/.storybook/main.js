const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/stories/*.stories.@(jsx|tsx)'],
  addons: ['@storybook/addon-actions/register', 'storybook-addon-jsx/register', '@storybook/preset-scss'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.plugins = config.resolve.plugins || [];

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    );

    return config;
  },
};
