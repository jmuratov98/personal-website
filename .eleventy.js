const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "webp", "jpeg"],
    urlPath: './assets/imgs/',
    outputDir: "./public/assets/imgs"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  console.log(sizes);

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPassthroughCopy("./src/assets");
  
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
