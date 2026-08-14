import type { ProcessStep } from '~/types'

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Define',
    description: 'Clarify the problem, constraints, architecture, and success criteria.',
  },
  {
    index: '02',
    title: 'Build with AI',
    description: 'Accelerate research, scaffolding, implementation, and repetitive work.',
  },
  {
    index: '03',
    title: 'Review and test',
    description: 'Inspect outputs, test behavior, check edge cases, and protect maintainability.',
  },
  {
    index: '04',
    title: 'Ship and learn',
    description: 'Release deliberately, observe the result, and improve the next iteration.',
  },
]
