import type { Project, ProjectCategory } from '../types'

export const projectCategories: ProjectCategory[] = [
  'production',
  'mobile',
  'backend',
  'personal',
  'learning',
]

export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategory | 'all',
): Project[] {
  if (category === 'all') return projects
  return projects.filter((project) => project.categories?.includes(category))
}

const desktopSpanPresets: Record<number, number[]> = {
  1: [12],
  2: [6, 6],
  3: [4, 4, 4],
  4: [6, 6, 6, 6],
  5: [7, 5, 4, 4, 4],
  6: [4, 4, 4, 4, 4, 4],
  7: [7, 5, 7, 5, 4, 4, 4],
  8: [7, 5, 5, 3, 4, 4, 3, 5],
}

const desktopSpanClasses: Record<number, string> = {
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  12: 'lg:col-span-12',
}

export interface ArchiveCardLayout {
  desktopSpan: number
  tabletSpan: number
  variant: 'featured' | 'compact'
  spanClass: string
}

export function archiveCardLayout(count: number, index: number): ArchiveCardLayout {
  const desktopSpan = desktopSpanPresets[count]?.[index] ?? 4
  const tabletSpan = count % 2 === 1 && index === count - 1 ? 2 : 1
  return {
    desktopSpan,
    tabletSpan,
    variant: desktopSpan >= 5 ? 'featured' : 'compact',
    spanClass: desktopSpanClasses[desktopSpan] ?? 'lg:col-span-4',
  }
}
