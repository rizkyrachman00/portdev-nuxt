import type { AiTool, StackCategory } from '~/types'

export const stackCategories: StackCategory[] = [
  {
    index: '01',
    label: 'BACKEND',
    skills: ['Go', 'PHP', 'Laravel', 'Hono'],
    marks: [
      {
        name: 'Go',
        src: '/images/stack/golang.svg',
      },
    ],
  },
  {
    index: '02',
    label: 'FRONTEND',
    skills: ['TypeScript', 'React', 'Vue', 'Nuxt'],
    marks: [
      {
        name: 'TypeScript',
        src: '/images/stack/typescript.svg',
      },
    ],
  },
  {
    index: '03',
    label: 'DATA',
    skills: ['PostgreSQL', 'Redis'],
    marks: [
      {
        name: 'PostgreSQL',
        src: '/images/stack/postgresql.svg',
      },
      {
        name: 'Redis',
        src: '/images/stack/redis.svg',
      },
    ],
  },
  {
    index: '04',
    label: 'MOBILE',
    skills: ['Flutter', 'Expo'],
    marks: [
      {
        name: 'Flutter',
        src: '/images/stack/flutter.svg',
      },
      {
        name: 'Expo',
        src: '/images/stack/expo.svg',
      },
    ],
  },
  {
    index: '05',
    label: 'SYSTEMS',
    skills: ['Docker'],
    marks: [
      {
        name: 'Docker',
        src: '/images/stack/docker.svg',
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
