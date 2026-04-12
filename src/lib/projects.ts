export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  github: string
  color: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'lore',
    name: 'Lore',
    description: 'Solana meme coin intelligence platform. Dev reputation scoring, token safety analysis, and narrative detection.',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Solana'],
    github: 'https://github.com/matthewrahm/lore',
    color: '#3B82F6',
  },
  {
    id: 'token-launch-monitor',
    name: 'Token Launch Monitor',
    description: 'Real-time Solana token launch scanner with 5-gate security filter.',
    tags: ['TypeScript', 'Solana', 'WebSocket'],
    github: 'https://github.com/matthewrahm/token-launch-monitor',
    color: '#22C55E',
  },
  {
    id: 'solana-wallet-tracker',
    name: 'Solana Wallet Tracker',
    description: 'Telegram bot for real-time Solana wallet monitoring. Swaps, transfers, USD values.',
    tags: ['TypeScript', 'Solana', 'Telegram API'],
    github: 'https://github.com/matthewrahm/solana-wallet-tracker',
    color: '#8B5CF6',
  },
  {
    id: 'telegram-command-center',
    name: 'Telegram Command Center',
    description: 'Remote server management via Telegram. System monitoring, PM2 service control, deploy pipeline.',
    tags: ['TypeScript', 'Telegram API', 'PM2'],
    github: 'https://github.com/matthewrahm/telegram-command-center',
    color: '#F59E0B',
  },
  {
    id: 'ramen-crypto',
    name: 'Ramen Crypto',
    description: 'Crypto portfolio tracker and dashboard.',
    tags: ['JavaScript', 'React'],
    github: 'https://github.com/matthewrahm/ramen_crypto',
    color: '#EF4444',
  },
]
