import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-accent/70 to-background" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          Independent app studio
        </div>

        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Good apps, boring niches.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          RZ Labs is a small independent studio. We build our own apps for the
          unglamorous problems worth solving well.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#products"
            className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-7 text-base font-semibold")}
          >
            See our app
            <ArrowRight className="ml-0.5 h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 rounded-full px-7 text-base font-semibold")}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
