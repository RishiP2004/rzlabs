import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">
            RZ
          </span>
          <span className="text-base font-bold tracking-tight">RZ Labs</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          <Link
            href="https://www.popcleanapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pop Clean
          </Link>
          <Link href="mailto:contact@rzlabs.info" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            contact@rzlabs.info
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-muted-foreground">
          © 2026 RZ Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
