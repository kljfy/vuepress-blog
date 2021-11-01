module.exports = {
    title: '见川',
    description: 'Jasper\'s blog',
    base: 'vuepress-blog',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    }
}
