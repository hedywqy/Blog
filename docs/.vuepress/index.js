const { path } = require('@vuepress/utils');
const { defaultTheme } = require("@vuepress/theme-default");

module.exports.commentTheme = options => ({
  name: "comment-theme",

  // we are extending @vuepress/theme-default
  extends: defaultTheme(options),

  layouts: {
    // we override the default layout to provide comment service
    Layout: path.resolve(__dirname,"layout", "index.vue"),
  },
});
