export function TechTag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[11px] text-text-muted bg-[var(--color-card-bg)] border border-[var(--color-card-border)] px-2 py-0.5 rounded-[var(--radius-sm)]">
      {label}
    </span>
  )
}
