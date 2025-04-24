module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel', // Ensure you have this in the correct format
      'react-native-css-interop/babel', // Make sure this is also correct
    ],
  };
};
