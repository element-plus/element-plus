import type { Component } from 'vue'

import GitHubIcon from '~icons/ri/github-fill'

export const useSocialLinks = () => {
  return [
    {
      link: 'https://github.com/element-plus/element-plus',
      icon: GitHubIcon as Component,
      text: 'GitHub',
    },
  ]
}
