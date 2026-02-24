export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span>© 2026 Knot</span>
        <a
          href="https://x.com/useknotwallet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
        >
          Follow us on: X (formerly Twitter)
        </a>
      </div>
    </footer>
  )
}
