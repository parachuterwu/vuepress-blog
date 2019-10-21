module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",

  theme: "@vuepress/blog",
  themeConfig: {
    // Please keep looking down to see the available options.
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Archive",
        link: "/archive/"
      },
      {
        text: "Tags",
        link: "/tag/"
      }
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/vuejs/vuepress"
        },
        {
          type: "twitter",
          link: "https://github.com/vuejs/vuepress"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: ""
        }
      ]
    }
  }
};
