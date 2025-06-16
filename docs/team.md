---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers, VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Boreas618.png',
    name: 'Boreas618',
    links: [
      { icon: 'github', link: 'https://github.com/Boreas618' },
    ]
  },
  {
    avatar: 'https://www.github.com/Jingyijun.png',
    name: 'JingYiJun',
    links: [
      { icon: 'github', link: 'https://github.com/Jingyijun' },
    ]
  },
  {
    avatar: 'https://www.github.com/w568w.png',
    name: 'w568w',
    links: [
      { icon: 'github', link: 'https://github.com/w568w' },
    ]
  },{
    avatar: 'https://www.github.com/Zecyel.png',
    name: 'Zecyel',
    links: [
      { icon: 'github', link: 'https://github.com/Zecyel' },
    ]
  },
  {
    avatar: 'https://www.github.com/ShizuhaAki.png',
    name: 'ShizuhaAki',
    links: [
      { icon: 'github', link: 'https://github.com/ShizuhaAki' },
    ]
  },
  {
    avatar: 'https://www.github.com/Jerry-Wu-GitHub.png',
    name: 'Jerry-Wu-GitHub',
    links: [
      { icon: 'github', link: 'https://github.com/Jerry-Wu-GitHub' },
    ]
  },
  {
    avatar: 'https://www.github.com/koowz.png',
    name: 'koowz',
    links: [
      { icon: 'github', link: 'https://github.com/koowz' },
    ]
  },
  {
    avatar: 'https://www.github.com/fduTristin.png',
    name: 'fduTristin',
    links: [
      { icon: 'github', link: 'https://github.com/fduTristin' },
    ]
  },
]
</script>

<style>

@media (min-width: 768px) {
    .VPTeamPage[data-v-5f7da39d] {
        margin: 5vh 0;
    }
}

@media (min-width: 960px) {
    .VPTeamPageTitle[data-v-baf690b4] {
        padding: 0px 40px 48px;
    }
}

@media (min-width: 768px) {
    .lead[data-v-baf690b4] {
        max-width: 740px;
        letter-spacing: 0.1px;
        line-height: 28px;
        font-size: 20px;
    }
}

.title-line[data-v-38a4eb39] {
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--vp-c-divider);
}
</style>

<VPTeamPage>

<VPTeamPageSection>
    <template #title>核心成员</template>
    <template #members>
        <VPTeamMembers size="small" :members="members" />
    </template>
</VPTeamPageSection>

</VPTeamPage>
