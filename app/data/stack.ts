import type { AiTool, StackCategory } from '~/types'

export const stackCategories: StackCategory[] = [
  {
    index: '01',
    label: 'BACKEND',
    skills: ['Go', 'PHP', 'Laravel', 'Hono'],
    ghostLabel: 'BACKEND',
    marks: [
      {
        name: 'Go',
        src: '/images/stack/golang.svg',
        alt: 'Go programming language logo',
      },
    ],
  },
  {
    index: '02',
    label: 'FRONTEND',
    skills: ['TypeScript', 'React', 'Vue', 'Nuxt'],
    ghostLabel: 'FRONTEND',
    marks: [
      {
        name: 'TypeScript',
        src: '/images/stack/typescript.svg',
        alt: 'TypeScript logo',
      },
    ],
  },
  {
    index: '03',
    label: 'DATA',
    skills: ['PostgreSQL', 'Redis'],
    ghostLabel: 'DATA',
    marks: [
      {
        name: 'PostgreSQL',
        src: '/images/stack/postgresql.svg',
        alt: 'PostgreSQL logo',
      },
      {
        name: 'Redis',
        src: '/images/stack/redis.svg',
        alt: 'Redis logo',
      },
    ],
  },
  {
    index: '04',
    label: 'MOBILE',
    skills: ['Flutter', 'Expo'],
    ghostLabel: 'MOBILE',
    marks: [
      {
        name: 'Flutter',
        src: '/images/stack/flutter.svg',
        alt: 'Flutter logo',
      },
      {
        name: 'Expo',
        src: '/images/stack/expo.svg',
        alt: 'Expo logo',
      },
    ],
  },
  {
    index: '05',
    label: 'SYSTEMS',
    skills: ['Docker'],
    ghostLabel: 'SYSTEMS',
    marks: [
      {
        name: 'Docker',
        src: '/images/stack/docker.svg',
        alt: 'Docker logo',
      },
    ],
  },
]

export const aiTools: AiTool[] = [
  {
    name: 'MCP',
    description: 'Model Context Protocol',
    href: 'https://modelcontextprotocol.io',
    icon: '/images/stack/mcp.svg',
  },
  {
    name: 'Codex',
    description: 'AI coding agent by OpenAI',
    href: 'https://developers.openai.com/codex/',
    icon: '/images/stack/codex.svg',
  },
  {
    name: 'OpenCode',
    description: 'Open-source coding agent',
    href: 'https://opencode.ai',
    icon: '/images/stack/opencode.svg',
  },
]
