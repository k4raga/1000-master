module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src");
	return {
		dir: {
			output: "1000.k4raga.site",
		},
	};
};
