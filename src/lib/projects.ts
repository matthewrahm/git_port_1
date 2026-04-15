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
    id: 'solscope',
    name: 'solscope',
    description: 'Terminal analytics dashboard for Solana wallets. Real-time portfolio with USD values, decoded transaction history, whale tracker with persistent config, and token lookup with live price ticker and security audits. Vim-style keyboard navigation, 30s auto-refresh sparklines.',
    tags: ['Rust', 'Tokio', 'Ratatui', 'Helius', 'DexScreener'],
    github: 'https://github.com/matthewrahm/solscope',
    color: '#4d9fff',
    image: '/projects/solscope.jpg',
  },
  {
    id: 'hyper-track',
    name: 'hyper-track',
    description: 'Hyperliquid perpetual futures wallet discovery and tracking engine. Scans vault followers to find active traders, scores wallets on 10 risk-adjusted metrics (Sharpe, Sortino, drawdown, profit factor), classifies trading styles, and serves a live leaderboard. Async polling engine with priority queue, partitioned Postgres, and materialized views.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Hyperliquid'],
    github: 'https://github.com/matthewrahm/hyper-track',
    color: '#00C853',
    size: 'wide',
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
    id: 'hyper-fund',
    name: 'hyper-fund',
    description: 'Cross-exchange funding rate scanner for Hyperliquid perpetuals. Aggregates rates across 5 exchanges and 8 HIP-3 deployers (stocks, commodities, forex), surfaces delta-neutral arbitrage spreads, and tracks per-position funding costs for any wallet.',
    tags: ['Python', 'FastAPI', 'Next.js', 'Hyperliquid', 'ccxt'],
    github: 'https://github.com/matthewrahm/hyper-fund',
    color: '#3B82F6',
  },
]
