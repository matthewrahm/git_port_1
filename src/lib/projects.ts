export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tags: string[]
  github?: string
  url?: string
  color: string
}

export const projects: Project[] = [
  {
    id: 'solduel',
    name: 'SolDuel',
    tagline: 'PvP trading platform on Solana',
    description:
      'End-to-end production trading platform. Anchor/Rust program handles deterministic escrow, settlement, and payout logic fully on-chain. Next.js + TypeScript frontend with realtime matchmaking over Postgres subscriptions, sub-second round resolution, and Telegram notifications. Live with 1,000+ SOL wagered across 30 and 60-second rounds.',
    tags: ['Rust', 'Anchor', 'Solana', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/matthewrahm/solduel',
    url: 'https://solduel.xyz',
    color: '#ef4444',
  },
  {
    id: 'hyper-track',
    name: 'hyper-track',
    tagline: 'Trader discovery and scoring engine',
    description:
      'Async Python ingest pipeline with a priority queue scans Hyperliquid vault followers and writes trades into partitioned Postgres tables. Scores wallets on 10 risk-adjusted metrics (Sharpe, Sortino, drawdown, profit factor) through materialized views, served via FastAPI and a Next.js leaderboard. Built for continuous discovery under exchange rate limits.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Hyperliquid'],
    github: 'https://github.com/matthewrahm/hyper-track',
    color: '#2563eb',
  },
  {
    id: 'zanmu',
    name: 'Zanmu',
    tagline: 'Always-on multi-agent AI orchestration',
    description:
      '24/7 production agentic AI system built on the Anthropic SDK. A root orchestrator coordinates specialized Claude subagents through structured task delegation: a planner/executor pair for tool-use workflows, a fully autonomous agent operating under hardcoded constraints, and a continuous scanner feeding a 4-gate decision pipeline. Persistent cross-session state, isolated tool scopes per agent, and a Telegram control plane for human-in-the-loop oversight.',
    tags: ['Anthropic SDK', 'Python', 'Multi-Agent', 'Tool Use', 'Telegram'],
    color: '#9945FF',
  },
  {
    id: 'clawnicle',
    name: 'clawnicle',
    tagline: 'Durable runtime for LLM agents',
    description:
      'Temporal-style durable execution, redesigned for LLM agents. Rust workflows compile to event-sourced journals over SQLite WAL: on crash, replay short-circuits completed tool calls from the log and resumes from the last successful step. Exponential-backoff retries, per-workflow token and wallclock budgets, cooperative cancellation, and Anthropic prompt caching keyed on SHA-256 of the request. Journal writes at ~21µs; cached replay short-circuit at ~3.7µs.',
    tags: ['Rust', 'Tokio', 'SQLite', 'Anthropic SDK', 'Event Sourcing'],
    github: 'https://github.com/matthewrahm/clawnicle',
    color: '#4d9fff',
  },
]
