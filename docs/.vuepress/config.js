// const {
//     defaultTheme
// } = require('@vuepress/theme-default');

const {
    commentTheme
} = require('./theme');

const {
    commentPlugin
} = require("vuepress-plugin-comment2");
const {
    defineUserConfig
} = require("@vuepress/cli");


module.exports = defineUserConfig({
    lang: 'zh-CN',
    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/，则可以省略这一步，因为 base 默认即是 "/"
    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/<REPO>/（也就是说你的仓库在 https://gitlab.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"
    base: "/",
    // dest: './dist',
    host: 'localhost',
    port: 8080,
    title: "水星曙光",
    description: "个人笔记汇总",
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
        '/en/': {
            lang: 'en-US',
        },

    },
    theme: commentTheme({
        repo: 'https://github.com/hedywqy/blog',
        logo: '/images/logo.png',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
        navbar: [{ // 右上导航航条 docs/.vuepress/README.md
                text: '概述',
                link: '/'
            },
            {
                text: 'Vue 学习笔记',
                children: [{
                        text: '笔记',
                        link: '/about/index.md'
                    }, // 可不写后缀 .md
                    {
                        text: '其它链接',
                        link: 'https://www.baidu.com/'
                    } // 外部链接
                ]
            },
            {
                text: 'Typescript 学习笔记',
                children: [{
                        text: '笔记',
                        link: '/guide/ts/'
                    }, // 以 ‘/’结束，默认读取 README.md
                    {
                        text: '其它链接',
                        link: 'https://www.baidu.com/'
                    } // 外部链接
                ]
            }
        ],
    }),
    plugins: [
        commentPlugin({
            provider: "Giscus",
            repo: "hedywqy/blog",
            repoId: "R_kgDOHp6wEg",
            category: "Announcements",
            categoryId: "DIC_kwDOHp6wEs4CQNxm",
        }),
    ],
})