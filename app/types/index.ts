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

export interface ContactLink {
  label: string
  href: string
}

export interface StackMark {
  name: string
  src: string
}

export interface StackCategory {
  index: string
  label: string
  skills: string[]
  marks: StackMark[]
}

export interface AiTool {
  name: string
  description: string
  href: string
  icon: string
}
