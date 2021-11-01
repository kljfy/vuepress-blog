const html = '/guide/html_css/notes/html/'
const css = '/guide/html_css/notes/css/'


module.exports = [
    {
        title: 'HTML',
        collapsable: true,
        children: [
            {
                title: '互联网基本原理',
                path: html + '01-互联网基本原理'
            },
            {
                title: '基本标签',
                path: html + '02-基本标签'
            }
        ]
    },
    {
        title: 'CSS',
        collapsable: true,
        children: [
            {
                title: 'css基础',
                path: css + '01-css基础'
            },
            {
                title: 'css进阶',
                path: css + '01-css进阶'
            }
        ]
    }
]