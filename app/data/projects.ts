import type { Project } from '~/types'

export const projects: Project[] = [
  {
    id: 'lovary-commerce',
    index: '01',
    title: 'Lovary, evolved safely within an existing production system.',
    type: 'FULL-STACK · 2026',
    summary:
      'Extended a live jewelry platform across product and employee operations, Excel automation, payments, Biteship shipping, and referral tracking.',
    stack: 'CODEIGNITER 3 · DOCKER · N8N',
    image: '/images/lovary-jewelry-ecommerce.png',
    link: '#',
    featured: true,
  },
  {
    id: 'blackboxgym',
    index: '02',
    title: 'BlackBoxGym, a split-stack mobile system for gym operations.',
    type: 'MOBILE · THESIS · 2025',
    summary:
      'Membership and attendance workflows powered by Expo React Native, Hono, PostgreSQL, Drizzle ORM, and Supabase.',
    stack: 'EXPO · HONO · POSTGRES',
    image: '/images/blackboxgym-mobile-app.png',
    link: '#',
    featured: true,
  },
  {
    id: 'miniecom-api',
    index: '03',
    title: 'miniEcom API Prototype',
    type: 'BACKEND API',
    summary:
      'Backend API project focused on RESTful API development, SQL-first database access, and Go backend architecture.',
    stack: 'GO · CHI · SQLC · POSTGRES',
    link: '#',
  },
  {
    id: 'offline-attendance',
    index: '04',
    title: 'Offline Attendance System',
    type: 'MOBILE SYSTEM',
    summary:
      'Flutter-based attendance capture with offline-first data storage, GPS checks, camera integration, and server synchronization.',
    stack: 'FLUTTER · BLOC · LOCAL STORAGE',
    link: '#',
  },
  {
    id: 'minibookticket',
    index: '05',
    title: 'miniBookTicket Concurrent',
    type: 'CONCURRENCY',
    summary:
      'Learning project focused on exploring concurrency and backend engineering concepts using Go.',
    stack: 'GO · REDIS · DOCKER',
    link: '#',
  },
  {
    id: 'vps-migration',
    index: '06',
    title: 'Production VPS Migration',
    type: 'INFRASTRUCTURE',
    summary:
      'Migrated production applications between VPS environments, configuring Nginx, SSL, domains, databases, Redis, backups, and permissions.',
    stack: 'NGINX · SSL · VPS · DATABASE',
    link: '#',
  },
  {
    id: 'inkindo-lms',
    index: '07',
    title: 'Inkindo Academy LMS',
    type: 'FULL-STACK INTERNSHIP',
    summary:
      'Learning management system developed during a full-stack engineering internship, covering auth, courses, content management, and REST APIs.',
    stack: 'CODEIGNITER 4 · JWT · SCSS',
    link: '#',
  },
]
