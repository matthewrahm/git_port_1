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
  /** Path to project image/logo */
  image?: string
}

export const projects: Project[] = [
  {
    id: 'solduel',
    name: 'SolDuel',
    description: 'PvP trading duels on Solana. Wager SOL on meme coin price movements in 30 and 60-second rounds. Over 1,000 SOL in volume wagered. Anchor smart contract handles escrow, settlement, and payouts entirely on-chain. Real-time matchmaking with Supabase, Telegram bot for notifications.',
    tags: ['Rust', 'Anchor', 'Solana', 'Next.js', 'TypeScript', 'Supabase'],
    github: 'https://github.com/matthewrahm/solduel',
    url: 'https://solduel.xyz',
    color: '#14F195',
    size: 'wide',
    image: '/projects/solduel.png',
  },
  {
    id: 'solscope',
    name: 'solscope',
    description: 'Terminal analytics dashboard for Solana wallets. Real-time portfolio with USD values, decoded transaction history, whale tracker with persistent config, and token lookup with live price ticker and security audits. Vim-style keyboard navigation, 30s auto-refresh sparklines.',
    tags: ['Rust', 'Tokio', 'Ratatui', 'Helius', 'DexScreener'],
    github: 'https://github.com/matthewrahm/solscope',
    color: '#4d9fff',
    image: '/projects/solscope.jpg',
  },
  {
    id: 'solana-forge',
    name: 'solana-forge',
    description: 'Real-time Solana blockchain indexer. Decodes DEX swaps from Raydium, Jupiter, and PumpFun using balance-diff analysis, stores in Postgres, and serves via REST API. Pipeline architecture with rate limiting and backpressure via tokio channels.',
    tags: ['Rust', 'Tokio', 'PostgreSQL', 'Axum', 'WebSocket'],
    github: 'https://github.com/matthewrahm/solana-forge',
    color: '#f97316',
    image: '/projects/solforge.png',
  },
  {
    id: 'lore',
    name: 'Lore',
    description: 'Solana meme coin intelligence platform. Scores dev wallets across launch history, flags rug patterns, and surfaces forming narratives before they peak.',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Solana'],
    github: 'https://github.com/matthewrahm/lore',
    color: '#9945FF',
    size: 'wide',
    image: '/projects/LORE.jpg',
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
]
