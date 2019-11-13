module.exports = {
  chainWebpack: config => {
    /* Remove the default rule */
    const pdfRule = config.module.rule("pdf").test(/\.pdf$/);
    const docxRule = config.module.rule("docx").test(/\.docx$/);

    pdfRule.uses.clear();
    docxRule.uses.clear();

    /* Custom PDF loader */
    pdfRule
      .use("file-loader")

      .loader("file-loader")
      .tap(options => {
        const newOptions = {
          name: "files/[name].[ext]"
        };

        return { ...options, ...newOptions };
      })
      .end();

    /* Custom DOCX loader */
    docxRule
      .use("file-loader")

      .loader("file-loader")
      .tap(options => {
        const newOptions = {
          name: "files/[name].[ext]"
        };

        return { ...options, ...newOptions };
      })
      .end();
  }
};
