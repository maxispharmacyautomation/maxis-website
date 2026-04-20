import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a different element (e.g. "div", "article") — defaults to "section" */
  as?: React.ElementType;
}

/**
 * Vertical-rhythm wrapper for page sections.
 * Provides consistent top/bottom padding that scales on larger screens.
 *
 * @example
 *   <Section>
 *     <Container>…</Container>
 *   </Section>
 *
 *   <Section className="bg-slate-50" aria-labelledby="features-heading">
 *     <Container>…</Container>
 *   </Section>
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as: As = "section", className, children, ...props }, ref) => {
    return (
      <As
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        {children}
      </As>
    );
  },
);

Section.displayName = "Section";

export { Section };
