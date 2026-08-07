import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-20 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
          Say hello.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
          Questions, feedback, or just want to reach out? We&apos;d love to hear from you.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="mailto:contact@rzlabs.info"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-11 rounded-full px-7 text-base font-semibold")}
          >
            contact@rzlabs.info
          </Link>
        </div>
      </div>
    </section>
  )
}
