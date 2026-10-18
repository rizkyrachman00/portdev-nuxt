import type { ContactLink } from '~/types'

export const contactEmailAddress = 'rachman.ti2025@gmail.com'

export const contactEmail = `mailto:${contactEmailAddress}`

export const resumeUrl =
  'https://drive.google.com/file/d/1aKIRihv33mBJyUfoZeXAyCmMGNZMmm8R/view?usp=sharing'

export const footerCopy = '© 2026 Rizky. All rights reserved.'

export const socialLinks: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/rizkyrachman00', icon: 'ph:github-logo-fill' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rizkyrachman00', icon: 'ph:linkedin-logo-fill' },
  { label: 'Resume', href: resumeUrl, icon: 'ph:file-text-fill' },
]
