import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Container } from "./container"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  fullWidth?: boolean
}

export function Section({
  children,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 sm:py-24",
        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  )
}
