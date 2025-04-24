const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Get the default Metro config
const config = getDefaultConfig(__dirname);

// Extend the default config with NativeWind
module.exports = withNativeWind(config, {
  input: './global.css', // Adjust this path if needed
});
