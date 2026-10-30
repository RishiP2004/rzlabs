import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Our app</p>
        <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Meet PopClean.
        </h2>
      </div>

      <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/pop-clean-logo.png"
                alt="PopClean app icon"
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl border border-border"
              />
              <div>
                <h3 className="text-xl font-bold">PopClean</h3>
                <p className="text-sm text-muted-foreground">Smart phone cleaner &amp; storage optimizer</p>
              </div>
            </div>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              On-device AI that finds duplicates, large files, and clutter — freeing up
              gigabytes of storage in seconds while keeping every photo private.
            </p>

            <ul className="mt-6 space-y-3">
              {["100% on-device processing", "One-tap cleanup", "Smart, learning suggestions"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://www.popcleanapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Visit popcleanapp.com
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-secondary p-10">
            <div className="flex h-56 w-44 flex-col items-center justify-center rounded-[2rem] border-4 border-background bg-background shadow-xl">
              <Image
                src="/images/pop-clean-logo.png"
                alt="PopClean app icon"
                width={64}
                height={64}
                className="h-16 w-16 rounded-2xl"
              />
              <p className="mt-4 text-sm font-bold">PopClean</p>
              <p className="mt-1 text-xs text-muted-foreground">5GB+ freed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
