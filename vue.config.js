module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    // add replacement loader(s)
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.transformAssetUrls = {
          img: "src",
          image: "xlink:href",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src"
        };

        return options;
      });

    // config.module
    //   .rule("pdf")
    //   .test(/\.pdf$/)
    //   .use("file-loader")
    //   .loader("file-loader");

    // config.module
    //   .rule("docx")
    //   .test(/\.docx$/)
    //   .use("file-loader")
    //   .loader("file-loader");
  }
};
