export interface Role {
  id: string
  company: string
  title: string
  period: string
  bullets: string[]
  tags: string[]
}

export const experience: Role[] = [
  {
    id: 'connect-social',
    company: 'Connect Social',
    title: 'Software Engineering Intern',
    period: 'May – Aug 2025',
    bullets: [
      'Built and deployed iOS applications using Swift and Firebase focused on social tracking and user engagement.',
      'Developed full-stack eCommerce sites for clients using React, Node.js, Express, and PostgreSQL with Stripe integration.',
      'Built AI-driven automation systems using Python and the OpenAI API to streamline client workflows.',
    ],
    tags: ['Swift', 'React', 'Node.js', 'Firebase', 'OpenAI API'],
  },
  {
    id: 'vivbi',
    company: 'VIVBI Inc.',
    title: 'Data Engineer',
    period: 'Sep 2024 – Apr 2025',
    bullets: [
      'Designed and maintained SQL data pipelines to process and transform real-time business data across client dashboards.',
      'Built interactive reporting tools in Metabase to help clients monitor performance and key metrics.',
    ],
    tags: ['SQL', 'Python', 'Metabase', 'VBA'],
  },
  {
    id: 'meticular',
    company: 'Meticular Co',
    title: 'Software Engineering Intern',
    period: 'Apr – Aug 2024',
    bullets: [
      'Developed and deployed full-stack web products for clients using React, Node.js, and Python.',
      'Ran full product cycles from Figma wireframes through frontend and backend delivery.',
    ],
    tags: ['React', 'Node.js', 'Python', 'Figma'],
  },
]
