export function TechTag({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs text-text-muted bg-bg-elevated px-2 py-0.5 rounded">
      {label}
    </span>
  )
}
