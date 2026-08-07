import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="RZ Labs home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">
            RZ
          </span>
          <span className="text-lg font-bold tracking-tight">RZ Labs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Our app
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <Link href="#contact" className={cn(buttonVariants(), "rounded-full px-5 font-semibold")}>
          Get in touch
        </Link>
      </div>
    </header>
  )
}
