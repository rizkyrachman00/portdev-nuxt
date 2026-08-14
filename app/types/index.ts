export interface Project {
  id: string
  title: string
  type: string
  year?: string
  summary: string
  stack: string
  image?: string
  link?: string
  featured?: boolean
  index: string
}

export interface ExperienceItem {
  id: string
  dateRange: string
  role: string
  company: string
  description: string
  isCurrent?: boolean
}

export interface SkillGroup {
  index: string
  label: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}
