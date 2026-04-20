import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render as a different element (e.g. "section", "main", "header") */
  as?: React.ElementType;
}

/**
 * Centred, max-width layout container.
 * Provides consistent horizontal padding at every breakpoint.
 *
 * @example
 *   <Container>
 *     <h1>Hello</h1>
 *   </Container>
 *
 *   <Container as="section" className="bg-slate-50">
 *     …
 *   </Container>
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: As = "div", className, children, ...props }, ref) => {
    return (
      <As
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          className,
        )}
        {...props}
      >
        {children}
      </As>
    );
  },
);

Container.displayName = "Container";

export { Container };
