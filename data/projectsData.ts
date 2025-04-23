interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Translator',
    description: `Dịch một số tiểu thuyết của Higashino Keigo (Chưa phát hành)`,
    imgSrc: '/static/images/IPM.png',
    href: 'https://ipm.vn/',
  },
  {
    title: 'Annotator',
    description: `Gán nhãn data training AI`,
    imgSrc: '/static/images/FPT.png',
    href: 'https://fpt.com/',
  },
]

export default projectsData
