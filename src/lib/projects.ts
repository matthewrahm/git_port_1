export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  github: string
  color: string
  url?: string
  /** Bento grid span: 'wide' = 2 cols, 'normal' = 1 col */
  size?: 'wide' | 'normal'
  /** Featured project gets hero-level treatment */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'solduel',
    name: 'SolDuel',
    description: 'PvP trading duels on Solana. Wager SOL on meme coin price movements in 30 and 60-second rounds. Anchor smart contract handles escrow, settlement, and payouts entirely on-chain. Real-time matchmaking with Supabase, Telegram bot for notifications.',
    tags: ['Rust', 'Anchor', 'Solana', 'Next.js', 'TypeScript', 'Supabase'],
    github: 'https://github.com/matthewrahm/solduel',
    color: '#14F195',
    size: 'wide',
    featured: true,
  },
  {
    id: 'lore',
    name: 'Lore',
    description: 'Solana meme coin intelligence platform. Scores dev wallets across launch history, flags rug patterns, and surfaces forming narratives before they peak.',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Solana'],
    github: 'https://github.com/matthewrahm/lore',
    color: '#9945FF',
    size: 'wide',
  },
  {
    id: 'token-launch-monitor',
    name: 'Token Launch Monitor',
    description: 'Real-time Solana token launch scanner. Runs every new mint through a 5-gate security filter -- liquidity lock, mint authority, freeze authority, holder concentration, and dev history.',
    tags: ['TypeScript', 'Solana', 'WebSocket'],
    github: 'https://github.com/matthewrahm/token-launch-monitor',
    color: '#22C55E',
  },
  {
    id: 'solana-wallet-tracker',
    name: 'Solana Wallet Tracker',
    description: 'Telegram bot for real-time Solana wallet monitoring. Streams swaps and transfers via Helius webhooks, resolves USD values at execution price, and alerts on large moves.',
    tags: ['TypeScript', 'Solana', 'Telegram API'],
    github: 'https://github.com/matthewrahm/solana-wallet-tracker',
    color: '#8B5CF6',
  },
  {
    id: 'telegram-command-center',
    name: 'Telegram Command Center',
    description: 'Full server control over Telegram. Monitor CPU/memory, manage PM2 services, trigger deploys, and tail logs -- all from a chat interface without touching a terminal.',
    tags: ['TypeScript', 'Telegram API', 'PM2'],
    github: 'https://github.com/matthewrahm/telegram-command-center',
    color: '#F59E0B',
  },
  {
    id: 'ramen-crypto',
    name: 'Ramen Crypto',
    description: 'Crypto portfolio tracker with live price feeds, allocation breakdown, and PnL tracking across wallets.',
    tags: ['JavaScript', 'React'],
    github: 'https://github.com/matthewrahm/ramen_crypto',
    color: '#EF4444',
  },
]
