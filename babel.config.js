module.exports = function (api) {
<<<<<<< HEAD
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: ["nativewind/babel"],
	};
=======
  api.cache(true);

  return {
    presets:  [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
  };
>>>>>>> 6122a210144a24568887ebe85de0e61160bd445d
};
