const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['nativewind', 'react-native-css-interop'],
    },
  }, argv);

  // Find and modify the existing CSS rule instead of adding a new one
  const cssRule = config.module.rules.find(rule => 
    rule.test && rule.test.toString().includes('.css')
  );

  if (cssRule) {
    // Override the existing CSS rule
    cssRule.use = [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      },
    ];
  } else {
    // Add a new rule if there isn't one
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    });
  }

  return config;
};