module.exports = {
    base: '/vue-press/',
    title: '一扣前端成长指南',
    description: '一扣前端成长指南',
    // theme: 'rec', // 更换主题
    // vuepress-theme-reco将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧，如果要全局开启，可开启
    // themeConfig: {
    //     subSidebar: 'auto'
    // },
    themeConfig: {
        // 添加导航栏：页面首页的右上角
        nav: [
            { text: '首页', link: '/' },
            { text: '前端', link: '/web-frame/' },
            { text: 'Node', link: '/node/nest/nest' },
            { text: '面试问题', link: '/interview/' },
            { text: 'Git', link: '/git/' },
            { text: 'Linux', link: '/linux/' },
            { text: 'Mysql', link: '/mysql/' },
            { text: 'Docker', link: '/docker/' },
            { 
                text: '一扣的前端博客', 
                items: [ // items 下拉列表
                    { text: 'Github', link: 'https://github.com/qiaochunmei' },
                    { text: '掘金', link: 'https://juejin.cn/user/43636195606333/posts' }
                ]
            }
        ],
        // sidebar: [
        //     {
        //         title: '基础知识',
        //         path: '/',
        //         collapsable: false, // 不折叠
        //         children: [
        //             { title: "必会", path: "/" }
        //         ]
        //     }
        // ]
    }
}