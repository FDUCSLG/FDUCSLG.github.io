import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FDUCSLG",
  description: "Homepage of FDUCSLG",
  head: [['link', { rel: 'icon', href: '/fducslg.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '团队', link: '/team' }
    ],
    logo: { src: '/fducslg.png', width: 40, height: 40 },

    sidebar: [
      {
        text: '活动',
        items: [
          { text: '活动公告', link: '/events/' },
          {
            text: '2022-2023',
            collapsed: true,
            items: [
              { text: '讲座01：Rust沙龙', link: '/events/2022-2023/talk01' },
              { text: '讲座02：Xmake和墨干编辑器', link: '/events/2022-2023/talk02' },
            ]
          },
          {
            text: '2023-2024',
            collapsed: true,
            items: [
              { text: '活动01：Hackergame 2023', link: '/events/2023-2024/activity01' },
              { text: '讲座03：数据库与开源精神', link: '/events/2023-2024/talk03' },
              { text: '活动02：Linux 发行版的过去、当下和未来', link: '/events/2023-2024/activity02' },
              { text: '活动03：CCF开源发展委员会“开源高校行” - 复旦大学站', link: '/events/2023-2024/activity03' },
              { text: '讲座04：MLSys 职业发展与机遇', link: '/events/2023-2024/talk04' },
              { text: '活动04：CS公开课组队活动', link: '/events/2023-2024/activity04' },
            ]
          },
          {
            text: '2024-2025',
            collapsed: true,
            items: [
              { text: '讲座05：探索高性能开源项目', link: '/events/2024-2025/talk05' },
              { text: '复旦镜像站内测丨社团招新', link: '/events/2024-2025/news01' },
              { text: 'LLMSys101 课程报名', link: '/events/2024-2025/news02' },
              { text: '活动05：GNU & Linux 安装与经验分享', link: '/events/2024-2025/activity05' },
              { text: '讲座06：迈向大厂开发岗——学校中的信息差与开发能力', link: '/events/2024-2025/talk06' },
              { text: 'FDUCSLG 招新', link: '/events/2024-2025/news03' },
              { text: '活动06：Install Party：Linux安装与经验分享', link: '/events/2024-2025/activity06' },
              { text: '讲座07：用 Slidev 制作幻灯片', link: '/events/2024-2025/talk07' },
              { text: '勇夺亚军季军！FDUCSLG 组队出征昇腾算子挑战赛总结', link: '/events/2024-2025/news04' },
              { text: 'FDUCSLG 走进 JetBrains 上海总部，探索技术与开源的共鸣之道！', link: '/events/2024-2025/news05' },
            ]
          }
        ],
      },
      {
        text: '团队',
        link: '/team',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FDUCSLG' }
    ]
  }
})
