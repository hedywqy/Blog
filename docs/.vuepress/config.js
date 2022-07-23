// "vuepress": "^2.0.0-beta.43",
// "vuepress-theme-mix": "^1.3.2"

const {
    clipboardPlugin
} = require('vuepress-plugin-clipboard');
const {
    searchPlugin
} = require('@vuepress/plugin-search');
const {
    kanbanniang
} = require('@vuepress-reco/vuepress-plugin-kan-ban-niang');
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
    markdown: {
        lineNumber: true //
    },
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
                text: '主页',
                link: '/'
            },
            {
                text: '学习笔记',
                children: [{
                        text: '设计模式',
                        link: '/IT/设计模式.md',
                        children: [{
                            text: "创建型",
                            link: "/IT/创建型.md"
                        }]
                    }, // 可不写后缀 .md
                    {
                        text: '微服务',
                        link: 'https://www.baidu.com/'
                    } // 外部链接
                ]
            },
            {
                text: '导航',
                children: [{
                    text: '资源',
                    children: ['/resource/index.md']
                }, {
                    text: '站点',
                    children: ['/resource/index.md']
                }]
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
        clipboardPlugin({
            staticIcon: true,
            successText: "已复制!"
        }),
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
                '/en/': {
                    placeholder: 'Search',
                },
            },
        }),
    ],
})