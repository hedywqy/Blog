const {
    defaultTheme
} = require('@vuepress/theme-default')

module.exports = {
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
    theme: defaultTheme({
        repo: 'https://github.com/hedywqy',
        logo: '/images/logo.png',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
    }),
}